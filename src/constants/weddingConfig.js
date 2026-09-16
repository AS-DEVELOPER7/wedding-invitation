/**
 * Centralized Wedding Configuration & Content
 * Contains all text, ceremonial announcements, dates, and family honors.
 */

export const WEDDING_CONFIG = {
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
  countdownTarget: "2026-10-21T10:00:00",
  celebrationDates: "21st – 25th October 2026",
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
    nikahDeclaration:
      "Nikah solemnised on Dast-e-mubarak of Syedna Aali Qadar Mufaddal Saifuddin (T.U.S) on 24th January 2025 (25 Rajab-ul-Asab 1447 H) in Surat.",
    invitationPreamble: "Thereafter we",
    invitationHosts: "Ajab & Kaied Johar Dhulebwala",
    invitationRequest:
      "cordially request your presence to grace the Wedding Ceremony of our beloved daughter",
    groomParentage: "(S/O Nisrin ben & Ali Asgar bhai Naharwala)",
  },

  // Family Honors & Blessings
  familyHonors: {
    withBlessingsOf: [
      "RUQAIYA BEN & LATE SHABBIR HUSSAIN DHULEBWALA (DADI-DADA)",
      "KHADIJA BEN & LATE MOIZ HUSSAIN KARIMJIWALA (NANI-NANA)",
    ],
    specialRequest: ["ZAHRA & HUSSAIN DHULEBWALA (BHABI-BHAI)"],
    withBestComplimentsFrom: [
      "Faiji-fuaji, Kaka-kaki, Masi-masaji, Mama-mami,",
      "All cousins, All Dhulebwala and Karimjiwala family.",
    ],
  },

  // Program Itinerary Invitation Note
  programInvitation: {
    preamble: "With joy in our hearts,",
    hosts: "Dhuleb Family invites you to the Wedding.",
  },

  // Event Program Timeline (5 Wedding Ceremonies)
  program: [
    {
      id: "manakthumb",
      titleScript: "ManakThumb",
      titleEnglish: "ManakThumb",
      date: "21st October",
      day: "Wednesday",
      year: "2026",
      venue: "AT Hall",
      city: "Dungarpur, Rajasthan",
      description: "Auspicious ceremonial pillar erection & sacred commencement blessings.",
      attire: "Traditional Festive Attire",
    },
    {
      id: "mehendi",
      titleScript: "Mehendi",
      titleEnglish: "Mehendi",
      date: "22nd October",
      day: "Thursday",
      year: "2026",
      venue: "At Hall",
      city: "Dungarpur, Rajasthan",
      description: "Ceremonial intricate henna celebration filled with joyous melodies.",
      attire: "Vibrant Traditional Wear",
    },
    {
      id: "mama-musala-majalis",
      titleScript: "Mama Musala & Majalis",
      titleEnglish: "Mama Musala & Majalis",
      date: "23rd October",
      day: "Friday",
      year: "2026",
      venue: "At Badri Mohallah",
      city: "Dungarpur, Rajasthan",
      description: "Sacred gathering of prayers, family honors, and heartfelt Duas.",
      attire: "Traditional Bohra Attire",
    },
    {
      id: "procession",
      titleScript: "Procession",
      titleEnglish: "Procession",
      date: "24th October",
      day: "Saturday",
      year: "2026",
      venue: "At Badri Mohallah",
      city: "Dungarpur, Rajasthan",
      description: "Royal celebratory bridal procession and grand wedding festivities.",
      attire: "Royal Formal Attire",
    },
    {
      id: "reception",
      titleScript: "Reception",
      titleEnglish: "Reception",
      date: "25th October",
      day: "Sunday",
      year: "2026",
      venue: "At Badri Mohallah",
      city: "Dungarpur, Rajasthan",
      description: "Celebratory banquet and joyous reception with respected family & guests.",
      attire: "Elegant Evening Attire",
    },
  ],

  // Family Residence
  residence: {
    title: "Our Residence",
    address: "Shastri Colony Dungarpur, Rajasthan",
    mapsUrl: "https://maps.google.com/?q=Shastri+Colony+Dungarpur+Rajasthan",
  },

  // Venue & Travel Directions
  venue: {
    name: "Burhani Hall",
    subHall: "Grand Royal Ballroom & Courtyard",
    address: "Ring Road, Dungarpur, Rajasthan, India",
    city: "Dungarpur",
    country: "India",
    googleMapsUrl: "https://maps.google.com/?q=Dungarpur+Rajasthan+India",
    valetNote: "Complimentary valet parking available at the Main Entrance.",
  },

  // Calendar Event Details for Google Calendar / iCal
  calendar: {
    title: "Wedding Celebrations: Amatullah & Abbas Ali",
    description:
      "Wedding ceremonies & celebrations of Amatullah (Dhulebwala) with Abbas Ali (Naharwala) from 21st to 25th October 2026 in Dungarpur, Rajasthan.",
    location: "Dungarpur, Rajasthan",
    startDate: "20261021T100000",
    endDate: "20261025T230000",
  },

  // Traditional Closing Prayer (Dua)
  closingDua: {
    arabic:
      "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    english:
      "May Allah bless you both, shower His blessings upon you, and unite you both in goodness.",
    gratitude:
      "With heartfelt gratitude from the Dhulebwala & Naharwala families.",
  },
};
