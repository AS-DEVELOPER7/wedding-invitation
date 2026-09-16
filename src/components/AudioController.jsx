"use client";

import React, { useState, useRef, useEffect } from "react";
import { ASSETS } from "@/constants/assets";

export default function AudioController({ autoPlayTrigger }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioAvailable, setAudioAvailable] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current && audioAvailable) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, [autoPlayTrigger, audioAvailable]);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setIsPlaying(false);
          setAudioAvailable(false);
        });
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={ASSETS.audio.weddingTrack}
        loop
        preload="none"
        onError={() => setAudioAvailable(false)}
      />

      {/* Container aligned with mobile device frame */}
      <div className="fixed bottom-6 inset-x-0 mx-auto w-full sm:max-w-[420px] pointer-events-none px-5 flex justify-end z-40">
        <button
          onClick={toggleAudio}
          className={`pointer-events-auto w-11 h-11 rounded-full bg-textColor-secondary/85 text-backgroundColor-primary backdrop-blur-md border-2 border-backgroundColor-primary/90 shadow-lg shadow-black/20 flex items-center justify-center transition-all hover:scale-105 active:scale-95 focus:outline-none ${
            isPlaying ? "ring-2 ring-borderColor-primary/60" : "opacity-85"
          }`}
          title={isPlaying ? "Pause Wedding Music" : "Play Wedding Music"}
          aria-label="Toggle Background Music"
        >
          {isPlaying ? (
            <span className="flex items-center gap-[3px]">
              <span className="w-[2.5px] h-3.5 bg-white rounded-full" />
              <span className="w-[2.5px] h-3.5 bg-white rounded-full" />
            </span>
          ) : (
            <svg className="w-4 h-4 ml-0.5 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
