/**
 * Centralized Wedding Configuration & Content
 * Contains all text, ceremonial announcements, dates, and family honors.
 */

export const WEDDING_CONFIG = {
  // App & Desktop Experience Text
  app: {
    desktopBadge: "Exclusive Mobile Invitation",
  },

  // Audio Music Controller
  audio: {
    playTitle: "Play Wedding Music",
    pauseTitle: "Pause Wedding Music",
    ariaLabel: "Toggle Background Music",
  },

  // Envelope Gate & Wax Seal
  envelope: {
    tapPrompt: "Tap the seal to open",
    sealAlt: "Gold Wax Seal Bismillah",
  },

  // Hero Section Sunlit Palatial Entrance
  hero: {
    preamble: "The Wedding Celebration of",
    scrollPrompt: "Scroll to View Invitation",
  },

  // Couple Information
  couple: {
    bride: {
      firstName: "Amatullah",
      fullName: "Amatullah Dhulebwala",
      arabic: "أمة الله",
      relation: "Beloved Daughter",
    },
    groom: {
      firstName: "Abbas Ali",
      fullName: "Abbas Ali Naharwala",
      arabic: "عباس علي",
      relation: "Beloved Son",
    },
    monogram: "A & A",
  },

  // Parents Information
  parents: {
    brideParents: "Ajab & Kaied Johar Dhulebwala",
    groomParents: "Nisrin ben & Ali Asgar bhai Naharwala",
  },

  // Nikah Solemnization Details
  nikah: {
    authority: "Syedna Aali Qadar Mufaddal Saifuddin (T.U.S)",
    authorityFull:
      "Dast-e-mubarak of Syedna Aali Qadar Mufaddal Saifuddin (T.U.S)",
    dateGregorian: "24th January 2025",
    dateHijri: "25 Rajab-ul-Asab 1447 H",
    city: "Surat, Gujarat, India",
  },

  // Countdown Celebration Target Date (ISO format)
  countdownTarget: "2026-10-21T00:00:00",
  receptionDate: "25th October 2026",

  // Sacred Invocation Lines
  sacredText: {
    bismillahArabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
    vasilaLine1: "By the grace of Allah Subhanahu,",
    vasilaLine2:
      "Vasila-e-Panjetan Pak (S.W), Ahle Bait (S.W), Imam-uz-Zaman (S.W)",
    vasilaLine3:
      "& dua Mubarak of Al-Hayul-Muqaddas Syedna Mohammed Burhanuddin (R.A.)",
    vasilaLine4:
      "& Blessings of Dai uz Zaman his Holiness Syedna Aali Qadar Mufaddal Saifuddin Maula (T.U.S)",
    nikahHeading: "Nikah Solemnised on Dast-e-Mubarak",
    nikahDeclaration:
      "Nikah solemnised on Dast-e-mubarak of Syedna Aali Qadar Mufaddal Saifuddin (T.U.S) on 24th January 2025 (25 Rajab-ul-Asab 1447 H) in Surat.",
    invitationPreamble: "Thereafter we",
    invitationHosts: "Ajab & Kaied Johar Dhulebwala",
    invitationRequest:
      "cordially request your presence to grace the Wedding Ceremony of our beloved daughter",
    conjunction: "with",
    groomParentage: "(S/O Nisrin ben & Ali Asgar bhai Naharwala)",
  },

  // Family Honors & Blessings
  familyHonors: {
    title: "Family Honors & Blessings",
    withBlessingsOfLabel: "With Blessings Of:",
    withBlessingsOf: [
      "RUQAIYA BEN & LATE SHABBIR HUSSAIN DHULEBWALA (DADI-DADA)",
      "KHADIJA BEN & LATE MOIZ HUSSAIN KARIMJIWALA (NANI-NANA)",
    ],
    specialRequestLabel: "Special Request:",
    specialRequest: ["ZAHRA & HUSSAIN DHULEBWALA (BHABI-BHAI)"],
    withBestComplimentsFromLabel: "With Best Compliments From:",
    withBestComplimentsFrom: [
      "Faiji-fuaji, Kaka-kaki, Masi-masaji, Mama-mami,",
      "All cousins, All Dhulebwala and Karimjiwala family.",
    ],
  },

  // Event Program Timeline
  program: {
    subtitle: "Wedding Itinerary",
    title: "Ceremonies & Functions",
    intro: {
      lead: "With joy in our hearts,",
      invitation: "Dhuleb Family invites you to the Wedding.",
    },
    residence: {
      title: "Our Residence",
      address: "Shastri Colony Dungarpur, Rajasthan",
    },
    events: [
      {
        id: "manak-thamb",
        title: "Manak Thamb",
        titleArabic: "مانك تهامب",
        date: "21st October",
        dayOfWeek: "Wednesday",
        fullDate: "Wednesday, 21st October 2026",
        venue: "At Hall",
        venueDetails: "Burhani Hall, Dungarpur",
        description:
          "Auspicious ceremonial pillar installation marking the joyous commencement of wedding celebrations.",
      },
      {
        id: "mehendi",
        title: "Mehendi",
        titleArabic: "حفل الحناء (المهندي)",
        date: "22nd October",
        dayOfWeek: "Thursday",
        fullDate: "Thursday, 22nd October 2026",
        venue: "At Hall",
        venueDetails: "Burhani Hall, Dungarpur",
        description:
          "Festive henna celebrations filled with joyous family traditions, blessings, and melodies.",
      },
      {
        id: "mama-musala",
        title: "Mama Musala & Majalis",
        titleArabic: "مجلس الفرح وماما مصلى",
        date: "23rd October",
        dayOfWeek: "Friday",
        fullDate: "Friday, 23rd October 2026",
        venue: "At Badri Mohallah",
        venueDetails: "Badri Mohallah, Dungarpur",
        description:
          "Maternal blessings ceremony followed by celebratory Khushi Ni Majlis and heartfelt Duas.",
      },
      {
        id: "procession",
        title: "Procession",
        titleArabic: "موكب الفرح المبارك",
        date: "24th October",
        dayOfWeek: "Saturday",
        fullDate: "Saturday, 24th October 2026",
        venue: "At Badri Mohallah",
        venueDetails: "Badri Mohallah, Dungarpur",
        description:
          "Grand celebratory wedding procession with family, elders, and cherished ceremonial traditions.",
      },
      {
        id: "reception",
        title: "Reception",
        titleArabic: "حفل الاستقبال والوليمة",
        date: "25th October",
        dayOfWeek: "Sunday",
        fullDate: "Sunday, 25th October 2026",
        venue: "At Badri Mohallah",
        venueDetails: "Badri Mohallah, Dungarpur",
        description:
          "Celebratory royal banquet and wedding reception to welcome, honour, and bless the newly married couple.",
      },
    ],
  },

  // Live Countdown Section
  countdown: {
    subtitle: "Counting Down the Moments",
    title: "To The Blessed Celebrations",
    dateLocation: "21st – 25th October 2026 • Dungarpur, Rajasthan",
    units: {
      days: "Days",
      hours: "Hours",
      minutes: "Mins",
      seconds: "Secs",
    },
    buttons: {
      googleCalendar: "Google Calendar",
      appleCalendar: "Apple Calendar",
    },
  },

  // Venue & Travel Directions
  venue: {
    subtitle: "Location & Directions",
    title: "Wedding Venues",
    name: "Burhani Hall",
    subHall: "Grand Royal Ballroom & Ceremonial Courtyard",
    address: "Ring Road, Dungarpur, Rajasthan, India",
    addressTitle: "Address & Directions",
    city: "Dungarpur",
    country: "India",
    googleMapsUrl: "https://maps.google.com/?q=Burhani+Hall+Dungarpur+Rajasthan",
    valetNote: "Complimentary guest parking available at the venue entrance.",
    buttons: {
      openInMaps: "Open in Maps",
      copyAddress: "Copy Address",
      addressCopied: "Address Copied!",
    },
    locations: [
      {
        id: "burhani-hall",
        name: "Burhani Hall",
        role: "ManakThamb & Mehendi",
        dates: "21st & 22nd October",
        address: "Ring Road, Dungarpur, Rajasthan 314001",
        mapEmbedQuery: "Burhani+Hall,+Dungarpur,+Rajasthan",
        googleMapsUrl: "https://maps.google.com/?q=Burhani+Hall+Dungarpur+Rajasthan",
        type: "Royal Banquet Hall",
        highlights: "Main ceremonial hall for pillar consecration & celebratory henna evening.",
      },
      {
        id: "badri-mohallah",
        name: "Badri Mohallah",
        role: "Mama Musala, Procession & Reception",
        dates: "23rd, 24th & 25th October",
        address: "Badri Mohallah, Dungarpur, Rajasthan 314001",
        mapEmbedQuery: "Badri+Mohallah,+Dungarpur,+Rajasthan",
        googleMapsUrl: "https://maps.google.com/?q=Badri+Mohallah+Dungarpur+Rajasthan",
        type: "Historic Community Enclave",
        highlights: "Sacred majalis prayers, grand baraat procession & royal wedding banquet.",
      },
      {
        id: "residence",
        name: "Dhulebwala Residence",
        role: "Family Residence",
        dates: "Throughout Festivities",
        address: "Shastri Colony, Dungarpur, Rajasthan 314001",
        mapEmbedQuery: "Shastri+Colony,+Dungarpur,+Rajasthan",
        googleMapsUrl: "https://maps.google.com/?q=Shastri+Colony+Dungarpur+Rajasthan",
        type: "Private Family Residence",
        highlights: "Warm hospitality and family welcomes throughout the wedding celebrations.",
      },
    ],
  },

  // Calendar Event Details for Google Calendar / iCal
  calendar: {
    title: "Wedding Ceremony: Amatullah & Abbas Ali",
    description:
      "Wedding ceremony of Amatullah (D/O Ajab & Kaied Johar Dhulebwala) with Abbas Ali (S/O Nisrin ben & Ali Asgar bhai Naharwala). Nikah on Dast-e-mubarak of Syedna Aali Qadar Mufaddal Saifuddin (T.U.S).",
    location: "Burhani Hall, Dungarpur, Rajasthan",
    startDate: "20261021T173000",
    endDate: "20261025T230000",
  },

  // Traditional Closing Prayer (Dua) & Gratitude Signoff
  closingDua: {
    arabic:
      "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    english:
      "May Allah bless you both, shower His blessings upon you, and unite you both in goodness.",
    gratitude:
      "With heartfelt gratitude from the Dhulebwala & Naharwala families.",
    gratitudeLead: "With heartfelt gratitude,",
    familySignoff: "Dhulebwala & Naharwala Families",
  },
};
