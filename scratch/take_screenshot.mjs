import fs from "fs";

async function capture(filename, scrollSelector, scrollOffsetY = 0) {
  const listRes = await fetch("http://localhost:9222/json/list");
  const pages = await listRes.json();
  const page = pages.find((p) => p.url.includes("localhost:3000") && p.type === "page");
  if (!page || !page.webSocketDebuggerUrl) {
    throw new Error("Target page on localhost:3000 not found!");
  }

  const ws = new globalThis.WebSocket(page.webSocketDebuggerUrl);
  let id = 1;
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const msgId = id++;
      const handler = (event) => {
        const res = JSON.parse(event.data);
        if (res.id === msgId) {
          ws.removeEventListener("message", handler);
          if (res.error) reject(res.error);
          else resolve(res.result);
        }
      };
      ws.addEventListener("message", handler);
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });

  await new Promise((resolve) => ws.addEventListener("open", resolve, { once: true }));

  await send("Page.enable");
  await send("Runtime.enable");

  // Reload or wait for updates
  await send("Page.reload");
  await new Promise((r) => setTimeout(r, 2000));

  if (scrollSelector) {
    await send("Runtime.evaluate", {
      expression: `(() => {
        const headings = Array.from(document.querySelectorAll('h2, h3, h4'));
        const target = headings.find(h => h.textContent.includes('${scrollSelector}'));
        if (target) {
          target.scrollIntoView({ behavior: 'instant', block: 'start' });
          if (${scrollOffsetY} !== 0) {
            window.scrollBy(0, ${scrollOffsetY});
          }
        }
      })()`,
    });
  }

  await new Promise((r) => setTimeout(r, 1200));

  const shot = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync(filename, Buffer.from(shot.data, "base64"));
  console.log(`Saved screenshot to ${filename}`);

  ws.close();
}

const args = process.argv.slice(2);
const filename = args[0] || "/Users/jabernada/.gemini/antigravity-ide/brain/21bf5f64-fb7a-4642-abf1-29129837622c/scratch/test_shot.png";
const target = args[1] || "Ceremonies";
const offset = parseInt(args[2] || "0", 10);

capture(filename, target, offset).catch(console.error);
