/* ============================================================
   TEMPLATE CONTENT CONFIG
   ------------------------------------------------------------
   This is the ONE place to edit all text/content for the
   Prosper-Ontario-style conference & case-competition template.

   Swap the placeholder values below for your own event.
   Colors, fonts and the logo are configured separately in
   src/styles/template.css (see the "EDIT THESE" block at the top).
   ============================================================ */

export const site = {
  /* --- Brand / event identity --- */
  brand: "Nova",                           // short name shown in the nav / footer
  eventName: "Nova Case Competition",      // full event name
  tagline: "Where Tomorrow's Business Leaders Have Their Breakout Moment",
  // One or two lines that sit under the hero title.
  heroBlurb:
    "Nova is the defining stage where the region's next generation of business leaders have their breakout moment — through hands-on workshops, industry mentors, and a live case competition.",

  /* --- Key event facts (shown in the hero + footer) --- */
  date: "Spring 2026",
  location: "London, Ontario",
  audience: "Open to all high school students",

  /* --- Primary call-to-action --- */
  ctaLabel: "Register Now",
  ctaHref: "#register",

  /* --- Navigation (anchors match the section ids below) --- */
  nav: [
    { label: "About", href: "#about" },
    { label: "What's Included", href: "#included" },
    { label: "Schedule", href: "#schedule" },
    { label: "Speakers", href: "#speakers" },
    { label: "The Case", href: "#competition" },
    { label: "FAQ", href: "#faq" },
  ],

  /* --- About section --- */
  about: {
    eyebrow: "About Nova",
    title: "Where the next generation of leaders begins",
    body: [
      "Nova immerses high school students in the multidisciplinary world of business through interactive workshops, panels with industry professionals, and a signature case competition.",
      "Whether you are certain business is your calling or simply curious, Nova gives you a real taste of strategy, marketing, finance and entrepreneurship — alongside like-minded students from across the region.",
    ],
    // Small stat highlights
    stats: [
      { value: "250+", label: "Student delegates" },
      { value: "12", label: "Industry mentors" },
      { value: "1", label: "Unforgettable day" },
    ],
  },

  /* --- What's Included --- */
  included: {
    eyebrow: "Registration Includes",
    title: "Everything you need for the day",
    lead: "One ticket covers your full Nova experience, start to finish.",
    items: [
      { icon: "prep", title: "Pre-conference prep", body: "Guided prep sessions so every delegate arrives ready to compete." },
      { icon: "workshop", title: "Two live workshops", body: "Interactive sessions led by professionals across business disciplines." },
      { icon: "case", title: "Case competition", body: "An intensive, judged case challenge with real-world stakes." },
      { icon: "network", title: "Networking", body: "Connect with students and mentors from multiple fields." },
      { icon: "food", title: "Lunch & refreshments", body: "Meals and refreshments provided throughout the day." },
      { icon: "swag", title: "Certificate & swag", body: "A certificate of participation and Nova delegate kit." },
    ],
  },

  /* --- Schedule / agenda --- */
  schedule: {
    eyebrow: "Agenda",
    title: "A day designed to move you forward",
    lead: "A sample run of show — final times will be confirmed before the event.",
    items: [
      { time: "8:30 AM", title: "Check-in & breakfast", body: "Registration, delegate kits, and morning refreshments." },
      { time: "9:15 AM", title: "Opening keynote", body: "Kicking off the day with an industry leader." },
      { time: "10:00 AM", title: "Workshop block I", body: "Hands-on sessions across business disciplines." },
      { time: "11:30 AM", title: "Case release", body: "Teams receive the case and begin working." },
      { time: "12:30 PM", title: "Lunch & networking", body: "Recharge and connect with mentors." },
      { time: "1:30 PM", title: "Case competition", body: "Teams present to a panel of judges." },
      { time: "3:30 PM", title: "Awards & closing", body: "Recognizing standout delegates and teams." },
    ],
  },

  /* --- Speakers / mentors --- */
  speakers: {
    eyebrow: "Speakers & Mentors",
    title: "Learn from people who do this every day",
    lead: "Professionals and educators guiding delegates through the day.",
    people: [
      { name: "Speaker Name", role: "Title, Company" },
      { name: "Speaker Name", role: "Title, Company" },
      { name: "Speaker Name", role: "Title, Company" },
      { name: "Speaker Name", role: "Title, Company" },
    ],
  },

  /* --- The case competition --- */
  competition: {
    eyebrow: "The Case Competition",
    title: "Real business problems, one afternoon to solve them",
    body: [
      "At the heart of Nova is a live case competition. Teams receive a real-world business challenge, develop a strategy, and present their recommendation to a panel of judges.",
      "No prior experience required — prep sessions and mentors set every team up to succeed.",
    ],
    highlights: [
      "Teams of 3–4 delegates",
      "Judged by industry professionals",
      "Cash & scholarship prizes for top teams",
    ],
  },

  /* --- Registration / pricing --- */
  register: {
    eyebrow: "Register",
    title: "Secure your spot",
    lead: "Spaces are limited and offered first-come, first-served.",
    price: "$XX",
    priceNote: "per delegate — includes everything above",
    ctaLabel: "Register Now",
    ctaHref: "#",       // replace with your registration form URL
    finePrint: "Group and early-bird rates available on request.",
  },

  /* --- Sponsors / partners --- */
  sponsors: {
    eyebrow: "Our Partners",
    title: "Made possible by",
    lead: "Interested in sponsoring? We'd love to hear from you.",
    // Add {name, logo?} entries; logos live in /public.
    logos: ["Partner", "Partner", "Partner", "Partner", "Partner", "Partner"],
  },

  /* --- FAQ --- */
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      { q: "Who can attend?", a: "Any high school student in Ontario is welcome — no prior business experience required." },
      { q: "Do I need a team?", a: "You can register solo and we'll place you on a team, or sign up with friends." },
      { q: "What should I bring?", a: "Just yourself and a laptop if you have one. Everything else is provided." },
      { q: "How much does it cost?", a: "See the Register section above. Group and early-bird rates are available." },
      { q: "Where is it held?", a: "At the venue listed in the hero. Detailed directions are sent after registration." },
    ],
  },

  /* --- Footer / contact --- */
  footer: {
    blurb: "Nova Case Competition — immersing the next generation of student leaders in the world of business.",
    domain: "novacasecomp.com",
    email: "info@novacasecomp.com",
    socials: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Email", href: "mailto:info@novacasecomp.com" },
    ],
  },
};

export type Site = typeof site;
