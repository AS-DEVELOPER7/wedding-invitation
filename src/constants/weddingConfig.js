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
  countdownTarget: "2026-10-24T18:00:00",
  receptionDate: "14th October 2026",

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

  // Event Program Timeline
  program: [
    {
      id: "majlis",
      titleArabic: "مجلس الفرح والدعاء المبارك",
      titleEnglish: "Khushi Ni Majlis & Dua",
      date: "Friday, 24th January 2025",
      time: "5:30 PM Onwards",
      venue: "Grand Community Hall",
      city: "Surat, Gujarat",
      description:
        "Thanksgiving, prayers, and heartfelt Duas for the newly wedded couple.",
      attire: "Traditional Modest Attire",
    },
    {
      id: "reception",
      titleArabic: "حفل الزفاف والوليمة",
      titleEnglish: "Wedding Reception & Dinner",
      date: "Friday, 24th January 2025",
      time: "7:30 PM Onwards",
      venue: "Al-Ezz Imperial Banquet Hall",
      city: "Surat, Gujarat",
      description:
        "Celebratory banquet and reception with family, elders, and respected guests.",
      attire: "Formal Evening Attire",
    },
  ],

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
    title: "Wedding Ceremony: Amatullah & Abbas Ali",
    description:
      "Wedding ceremony of Amatullah (D/O Ajab & Kaied Johar Dhulebwala) with Abbas Ali (S/O Nisrin ben & Ali Asgar bhai Naharwala). Nikah on Dast-e-mubarak of Syedna Aali Qadar Mufaddal Saifuddin (T.U.S).",
    location: "Burhani Hall, Dungarpur, Rajasthan",
    startDate: "20261022T173000",
    endDate: "20261022T230000",
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
