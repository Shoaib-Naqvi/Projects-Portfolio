import globaliLogo from "../assets/globali-logo.png";
import cazzaLogo from "../assets/Cazza-logo.png";
import cloneVoiceLogo from "../assets/cloneVoice-logo.png";
import wingedLogo from "../assets/Winged-logo .png";
import telemedLogo from "../assets/Alexander-telemedicine-logo.png";
import fitCheckLogo from "../assets/Fit-Check-logo.webp";
import quantumLogo from "../assets/Quantum-logo.svg";
import inventoryLogo from "../assets/Inventory-app-logo.webp";
import crmLogo from "../assets/CRM-logo.png";
import picmeLogo from "../assets/PickMe-logo.png";
import pangolinLogo from "../assets/Pangolin-script-logo.png";
import saluteLogo from "../assets/Salute-logo.webp";
import qrcardsLogo from "../assets/Michele-qrcode-logo.png";
import ristorandoLogo from "../assets/Ristorando-logo.png";
import photocleanerLogo from "../assets/Photocleaner-logo.webp";
import futuregramLogo from "../assets/FutrueGram-logo.png";
import vibeActuallyLogo from "../assets/Vibe-Actually-logo.png";
import oncemoreLogo from "../assets/OnceMore-logo.png";
import automotiveLogo from "../assets/Automotive-logo.webp";
import aiImmigrationImg from "../assets/AI Immigration.png";
import cloneVoiceImg from "../assets/Clone Voice-project.png";
import wingedAppImg from "../assets/Winged App-project.png";
import CaZZaImg from "../assets/CaZZa.png";
import TelemedicineImg from "../assets/Alexander-telemedicine-project.png";
import TelemedicineImg2 from "../assets/Alexander-telemedicine-project2.png";
import FitcheckImg1 from "../assets/FitCheck-1.webp";
import FitcheckImg2 from "../assets/FitCheck-2.webp";
import FitcheckImg3 from "../assets/FitCheck-3.webp";
import quantumEdgeImg from "../assets/Quantum Edge-project.png";
import inventoryAppImg from "../assets/Inventory App-project.png";
import crmSystemImg from "../assets/CRM System-project.png";
import picMeImg from "../assets/PicMe-project.png";
import picMeImg1 from "../assets/PicMe-project1.png";
import pangolinScriptImg from "../assets/Pangolin Script-project.png";
import saluteImg from "../assets/Salute-project.png";
import qrcardsImg from "../assets/Michele-qrcode-project.png";
import ristorandoImg from "../assets/Ristorando-project.png";
import photocleanerImg from "../assets/Photocleaner-project.png";
import futuregramImg from "../assets/Futuregram-project.png";
import vibeActuallyImg from "../assets/VibeActually-project.png";
import oncemoreImg from "../assets/Oncemore-project.png";
import automotivePodcastImg from "../assets/Automotive Repair-project.png";

export const aiProjects = [
  {
    _id: "ai_1",
    displayNumber: "01",
    title: "What is AI Immigration Agent?",
    shortDescription:
      "AI Immigration Agent streamlines DS-160 visa applications by extracting data from documents, autofilling and validating forms, and automating CEAC submission—offering applicants, lawyers, and admins a fast, secure, end-to-end workflow.",
    problem:
      "AI Immigration Agent streamlines DS-160 visa applications by extracting data from documents, autofilling and validating forms, and automating CEAC submission—offering applicants, lawyers, and admins a fast, secure, end-to-end workflow.",
    solution:
      "AI Immigration Agent makes DS-160 visa applications effortless by extracting document data, autofilling and validating forms, and automating CEAC submission—guiding applicants and lawyers smoothly from start to finish.",
    technologies: [
      "Case-based field merge and conflict resolution",
      "AI document extraction with templates",
      "DS-160 autofill from case",
      "CEAC browser automation (Playwright)",
      "Form validation and pre-submission checks",
      "CEAC job and artifact lifecycle",
    ],
    tools: [
      "React",
      "Tailwind",
      "TypeScript",
      "Radix",
      "Redux",
      "PostgreSQL",
      "Rls",
      "NestJS",
      "Chat gpt",
    ],
    projectLink: "https://www.globali.ai/",
    logoUrl: globaliLogo,
    imageUrl: aiImmigrationImg,
    orderIndex: 1,
  },
  {
    _id: "ai_2",
    displayNumber: "02",
    title: "What is Cazza?",
    shortDescription:
      "Cazza is an AI-powered SaaS hub that brings e-commerce data into one place, delivering clear performance dashboards and an intelligent chatbot for instant business insights—backed by a client portal and a super admin control panel.",
    problem:
      "Managing Shopify, Amazon, and other channels in silos hides the full business picture. Cazza unifies all data into one dashboard and pairs it with an AI chatbot that delivers instant insights and support, simplifying operations and billing.",
    solution:
      "Managing Shopify, Amazon, and other channels in silos hides the full business picture. Cazza unifies all data into one dashboard and pairs it with an AI chatbot that delivers instant insights and support, simplifying operations and billing.",
    technologies: [
      "Ask Cazza AI Chatbot",
      "Multi-Platform Integration",
      "Team Management & Billing",
      "Support Ticket System",
    ],
    tools: ["Shopify", "Amazon", "Tiktok", "Xero"],
    projectLink: "https://www.cazza.ai/",
    logoUrl: cazzaLogo,
    imageUrl: CaZZaImg,
    orderIndex: 2,
  },
  {
    _id: "ai_3",
    displayNumber: "03",
    title: "What is Clone Voice Agents?",
    shortDescription:
      "RAG Chatbot Service lets customers build AI chatbots with custom prompts, knowledge bases, and tool integrations, delivering smart, context-aware replies via an embeddable widget while logging all interactions for seamless management and insights.",
    problem:
      "Businesses need accurate, 24/7 chat without building AI from scratch. RAG Chatbot Service solves this by letting customers create chatbots with document-based knowledge, tool integrations, and an embeddable widget—delivering context-aware answers, tracking interactions, and supporting post-chat analysis via webhooks.",
    solution:
      "Businesses need accurate, 24/7 chat without building AI from scratch. RAG Chatbot Service solves this by letting customers create chatbots with document-based knowledge, tool integrations, and an embeddable widget—delivering context-aware answers, tracking interactions, and supporting post-chat analysis via webhooks.",
    technologies: [
      "More third-party appointment providers.",
      "Richer dashboard: filters, export, analytics",
      "Deeper Retell integration: webhooks for call events",
      "Tool versioning and A/B attachment per agent or client.",
      "Multi-tenant dashboard: per-client login and scoped call/appointment views.",
    ],
    tools: ["React", "PostgreSQL", "Calendly", "Acuity", "EHRs"],
    projectLink: "https://clonevoice.ai/",
    logoUrl: cloneVoiceLogo,
    imageUrl: cloneVoiceImg,
    orderIndex: 3,
  },
  {
    _id: "ai_4",
    displayNumber: "04",
    title: "What is Winged App?",
    shortDescription:
      'Winged App is an AI-powered dating platform that matches users through personality insights from voice introductions. Using its unique "wings" system and interactive tools, the app makes dating smarter, personalized, and fun—offering a secure, guided, and engaging path to meaningful connections.',
    problem:
      'Traditional dating apps rely on photos and profiles that miss true personality, often leading to poor matches; Winged App solves this with AI voice analysis for personality-driven matches and a gamified "wings" system that encourages meaningful, engaged connections.',
    solution:
      'Traditional dating apps rely on photos and profiles that miss true personality, often leading to poor matches; Winged App solves this with AI voice analysis for personality-driven matches and a gamified "wings" system that encourages meaningful, engaged connections.',
    technologies: [
      "AI-powered personality analysis from user voice",
      "Voice-based introductions instead of just text or photos",
      "Smart match suggestions based on personality compatibility",
      "Wings system: virtual credits required to unlock matches",
      "Gamified and interactive dating experience",
      "Secure and guided environment for meaningful connections",
    ],
    tools: [
      "TensorFlow",
      "PyTorch",
      "Node JS",
      "React",
      "Firebase",
      "Nlp",
      "PostgreSQL",
      "ExpressJs",
      "Aws",
    ],
    projectLink:
      "https://apps.apple.com/pk/app/your-life-organized/id6752123949",
    logoUrl: wingedLogo,
    imageUrl: wingedAppImg,
    orderIndex: 4,
  },
  {
    _id: "ai_5",
    displayNumber: "05",
    title: "What is Alexander-telemedicine?",
    shortDescription:
      "A secure, HIPAA-compliant telemedicine platform that brings virtual care into one seamless experience—appointments, video consults, EHRs, e-prescriptions, and payments. An AI triage assistant guides patients upfront, while role-based portals and audit trails keep the system compliant, scalable, and white-label ready.",
    problem:
      "Healthcare is slowed by in-person visits, fragmented records, and poor triage.",
    solution:
      "This telemedicine platform unifies AI triage, virtual consults, EHRs, e-prescriptions, and payments into one secure, HIPAA-compliant system.",
    technologies: [
      "Integrated video consultations using WebRTC",
      "AI FAQ assistant with confidence-based escalation",
      "HIPAA/HITECH-compliant data encryption and access control",
      "AI-powered symptom checker with urgency classification and human handoff",
      "Role-based portals for patients and doctors",
      "Real-time health monitoring and notifications",
      "EHR and medical history integration",
    ],
    tools: [
      "React",
      "Node JS",
      "Redix (Cache)",
      "Stripe",
      "S3-compatible storage",
      "PostgreSQL",
      "NestJS",
      "Rest Api",
    ],
    projectLink: "https://www.realhub.it/login",
    logoUrl: telemedLogo,
    imageUrl: [TelemedicineImg, TelemedicineImg2],
    orderIndex: 5,
  },
  {
    _id: "ai_6",
    displayNumber: "06",
    title: "What is FitCheck AI?",
    shortDescription:
      "FitCheck AI is a pocket-sized style coach that instantly rates outfits, tracks progress, and offers personalized fashion insights—helping users discover, refine, and elevate their style with confidence.",
    problem:
      "Many struggle to evaluate their style or get personalized guidance.",
    solution:
      "FitCheck AI solves this with instant AI outfit ratings, tailored recommendations, and progress tracking to help users refine and elevate their fashion sense.",
    technologies: [
      "Instant AI outfit ratings and feedback",
      "Tailored style recommendations based on AI analysis",
      "Personalized fashion insights and progress tracking",
      "Smart styling quiz for tailor-made fashion advice",
      "Computer Vision for real-time outfit analysis",
    ],
    tools: [
      "React",
      "NestJS",
      "MongoDB",
      "Computer Vision",
      "PyTorch",
      "TensorFlow",
      "Aws",
      "ExpressJs",
    ],
    projectLink:
      "https://apps.apple.com/pk/app/fit-check-ai-stylist/id6747051307",
    logoUrl: fitCheckLogo,
    imageUrl: [FitcheckImg1, FitcheckImg2, FitcheckImg3],
    orderIndex: 6,
  },
];

export const webProjects = [
  {
    _id: "web_1",
    displayNumber: "01",
    title: "What is Quantum Edge?",
    shortDescription:
      "Quantum Edge is a smart, SaaS-based platform that gives real estate stakeholders complete control over property finances. It brings budgeting, cost estimation, income tracking, and profit forecasting into one intuitive system built specifically for the Australian market.",
    problem:
      "Real estate budgeting is still stuck in spreadsheets—slow, messy, and easy to get wrong. Quantum Edge changes that with a single AI-powered platform for property financial planning, scenario analysis, secure multi-tenant access, and built-in payments—built to scale with confidence.",
    solution:
      "Real estate budgeting is still stuck in spreadsheets—slow, messy, and easy to get wrong. Quantum Edge changes that with a single AI-powered platform for property financial planning, scenario analysis, secure multi-tenant access, and built-in payments—built to scale with confidence.",
    technologies: [
      "Location-based photographer discovery via maps",
      "In-app real-time chat between customers and photographers",
      "Integrated, secure in-app payments",
      "Separate experiences for customers and photographers",
    ],
    tools: [
      "React",
      "Tailwind",
      "PostgreSQL",
      "Fast Api",
      "Python",
      "Firebase",
      "Chat gpt",
      "AWS EC2",
      "Stripe",
      "Shadcn",
    ],
    projectLink: "https://dev.thequantumedge.com.au/login",
    logoUrl: quantumLogo,
    imageUrl: quantumEdgeImg,
    orderIndex: 1,
  },
  {
    _id: "web_2",
    displayNumber: "02",
    title: "What is Inventory App?",
    shortDescription:
      "The Inventory App is a secure, photo-based mobile app that helps users aged 50+ easily catalog, organize, sell, or donate their belongings, with a strong focus on simplicity, trust, and asset awareness.",
    problem:
      "Older adults struggle to track belongings with manual, error-prone records; the Inventory App solves this with a secure, photo-based, AI-assisted inventory that makes asset management simple and organized.",
    solution:
      "Older adults struggle to track belongings with manual, error-prone records; the Inventory App solves this with a secure, photo-based, AI-assisted inventory that makes asset management simple and organized.",
    technologies: [
      "Photo-based inventory with AI-generated descriptions",
      "Smart organization & categorization",
      "Marketplace integration for selling items",
      "Donation & charity tracking",
      "Accessibility-focused UI (large text, simple flows, guided help)",
    ],
    tools: ["React", "NestJS", "MongoDB", "Aws"],
    projectLink:
      "https://apps.apple.com/pk/app/your-life-organized/id6752123949",
    logoUrl: inventoryLogo,
    imageUrl: inventoryAppImg,
    orderIndex: 2,
  },
  {
    _id: "web_3",
    displayNumber: "03",
    title: "What is Winged App?",
    shortDescription:
      'Winged App is an AI-powered dating platform that matches users through personality insights from voice introductions. Using its unique "wings" system and interactive tools, the app makes dating smarter, personalized, and fun—offering a secure, guided, and engaging path to meaningful connections.',
    problem:
      'Traditional dating apps rely on photos and profiles that miss true personality, often leading to poor matches; Winged App solves this with AI voice analysis for personality-driven matches and a gamified "wings" system that encourages meaningful, engaged connections.',
    solution:
      'Traditional dating apps rely on photos and profiles that miss true personality, often leading to poor matches; Winged App solves this with AI voice analysis for personality-driven matches and a gamified "wings" system that encourages meaningful, engaged connections.',
    technologies: [
      "AI-powered personality analysis from user voice",
      "Voice-based introductions instead of just text or photos",
      "Smart match suggestions based on personality compatibility",
      "Wings system: virtual credits required to unlock matches",
      "Gamified and interactive dating experience",
      "Secure and guided environment for meaningful connections",
    ],
    tools: [
      "TensorFlow",
      "PyTorch",
      "Node JS",
      "React",
      "Firebase",
      "Nlp",
      "PostgreSQL",
      "ExpressJs",
      "Aws",
    ],
    projectLink:
      "https://apps.apple.com/pk/app/your-life-organized/id6752123949",
    logoUrl: wingedLogo,
    imageUrl: wingedAppImg,
    orderIndex: 3,
  },
  {
    _id: "web_4",
    displayNumber: "04",
    title: "What is CRM System?",
    shortDescription:
      "This SaaS CRM helps real estate companies run their entire operation in one place. It centralizes users, clients, leads, workflows, and project management—covering properties, units, and capitalization—through role-based dashboards, flexible pipelines, and clear performance tracking built for growth.",
    problem:
      "Real estate teams struggle with scattered tools and manual workflows that slow decisions and blur performance. This all-in-one CRM unifies projects, units, capitalization, leads, commissions, and analytics into a single platform—bringing clarity, control, and real scalability to daily operations.",
    solution:
      "Real estate teams struggle with scattered tools and manual workflows that slow decisions and blur performance. This all-in-one CRM unifies projects, units, capitalization, leads, commissions, and analytics into a single platform—bringing clarity, control, and real scalability to daily operations.",
    technologies: [
      "Project, Unit & Capitalization Management",
      "Lead & Opportunity Management",
      "Custom Sales Pipelines",
      "Role & Permission Management",
      "Analytics & Reporting",
      "Commission Management",
      "Agency Dashboard",
    ],
    tools: [
      "React",
      "Tailwind",
      "PostgreSQL",
      "Rest Api",
      "NestJS",
      "AWS EC2",
      "Shadcn",
      "Loveable",
    ],
    projectLink: "https://www.realhub.it/login",
    logoUrl: crmLogo,
    imageUrl: crmSystemImg,
    orderIndex: 4,
  },
  {
    _id: "web_5",
    displayNumber: "08",
    title: "What is PicMe?",
    shortDescription:
      "PicMe is a mobile platform that connects customers with professional freelance photographers, enabling seamless discovery, booking, payments, and communication in one place.",
    problem:
      "Finding and booking reliable freelance photographers was scattered across social media and chats, with no clear booking or payment flow. PicMe fixes this with an all-in-one mobile app to discover nearby photographers, book instantly, pay securely, and chat in real time all in one place.",
    solution:
      "Finding and booking reliable freelance photographers was scattered across social media and chats, with no clear booking or payment flow. PicMe fixes this with an all-in-one mobile app to discover nearby photographers, book instantly, pay securely, and chat in real time all in one place.",
    technologies: [
      "Location-based photographer discovery via maps",
      "In-app real-time chat between customers and photographers",
      "Integrated, secure in-app payments",
      "Separate experiences for customers and photographers",
    ],
    tools: [
      "React",
      "Tailwind",
      "Redux",
      "Rest Api",
      "Stripe",
      "Socket.IO",
      "Google Maps",
    ],
    projectLink:
      "https://apps.apple.com/pk/app/fit-check-ai-stylist/id6747051307",
    logoUrl: picmeLogo,
    imageUrl: [picMeImg, picMeImg1],
    orderIndex: 8,
  },
  {
    _id: "web_6",
    displayNumber: "09",
    title: "What is Pangolin Script?",
    shortDescription:
      "Pangolin Script turns YouTube channel data into clear insights—tracking views, subscribers, and uploads while benchmarking competitors. It then uses AI to generate topic ideas and multiple script structures, letting creators pick one and instantly produce a YouTube-ready script.",
    problem:
      "YouTubers often struggle to create content quickly without losing their unique voice, but Pangolin Script solves this by analyzing a creator's existing videos and style, then using AI to generate new, topic-focused content that stays authentic, consistent, and fast to produce.",
    solution:
      "YouTubers often struggle to create content quickly without losing their unique voice, but Pangolin Script solves this by analyzing a creator's existing videos and style, then using AI to generate new, topic-focused content that stays authentic, consistent, and fast to produce.",
    technologies: [
      "Visual analytics of user and competitor YouTube channels",
      "AI-assisted topic generation and script structuring",
      "Customizable script creation aligned with the creator’s style",
      "Option to use reference videos for inspiration",
    ],
    tools: [
      "React",
      "ExpressJs",
      "MongoDB",
      "n8n",
      "Render.com",
      "Youtube Api",
      "Apify",
    ],
    projectLink: "https://www.pangolinscript.co.za/",
    logoUrl: pangolinLogo,
    imageUrl: pangolinScriptImg,
    orderIndex: 9,
  },
  {
    _id: "web_7",
    displayNumber: "10",
    title: "What is Salute?",
    shortDescription:
      "Salute is an all-in-one app for the military community, connecting service members, veterans, and families with career tools, mental health support, education, discounts, and social networking—providing a secure, engaging platform to stay informed, connected, and supported.",
    problem:
      "Military personnel and veterans often lack a single trusted platform for networking, resources, and support; Salute solves this by uniting career tools, education, mental wellness, VA locators, and exclusive perks into one seamless app.",
    solution:
      "Military personnel and veterans often lack a single trusted platform for networking, resources, and support; Salute solves this by uniting career tools, education, mental wellness, VA locators, and exclusive perks into one seamless app.",
    technologies: [
      "Military Directory to reconnect with units and peers",
      "Career tools and veteran-specific job boards",
      "Mental wellness resources and crisis support",
      "VA Locator for hospitals, clinics, and essential services",
      "Education benefits guidance and military-friendly school access",
      "Curated discounts on travel, gear, food, and more",
    ],
    tools: ["React", "Aws", "Firebase", "Sdk"],
    projectLink:
      "https://play.google.com/store/apps/details?id=com.nullanon.Salute",
    logoUrl: saluteLogo,
    imageUrl: saluteImg,
    orderIndex: 10,
  },
  {
    _id: "web_8",
    displayNumber: "11",
    title: "What is Michele-qrcode-mobile-app?",
    shortDescription:
      "QRCARDS replaces paper business cards with smart, QR and NFC-enabled digital profiles. Users can customize profiles, share instantly, save contacts, manage connections, and access public profile pages—no app or login required.",
    problem:
      "Paper business cards are outdated and forgettable. QRCARDS turns them into smart digital profiles shared via QR or NFC instantly updated, easy to save, and backed by engagement analytics and follow-up reminders.",
    solution:
      "Paper business cards are outdated and forgettable. QRCARDS turns them into smart digital profiles shared via QR or NFC instantly updated, easy to save, and backed by engagement analytics and follow-up reminders.",
    technologies: [
      "QR and NFC-based instant profile sharing",
      "Public profile view without authentication",
      "vCard export for one-tap contact saving",
      "Saved contacts directory with notes and reminders",
    ],
    tools: ["React", "NestJS", "Rest Api"],
    projectLink: "#",
    logoUrl: qrcardsLogo,
    imageUrl: qrcardsImg,
    orderIndex: 11,
  },
  {
    _id: "web_9",
    displayNumber: "12",
    title: "What is Ristorando?",
    shortDescription:
      "Ristorando is a meal service management platform for contract catering companies, streamlining menu customization, meal ordering, and delivery tracking for corporate clients and employees—now being rebuilt into a scalable, stable solution with flexible business logic.",
    problem:
      "The Bubble.io prototype hits limits in stability, performance, and complex flows like printing and notifications.",
    solution:
      "A full React rewrite replaces it with a fast, modular, component-based app that preserves core logic while fixing critical issues and supporting real growth.",
    technologies: [
      "Role-Based Access",
      "Advanced Menu Logic",
      "Dynamic Monitoring",
      "Mobile-First Design",
    ],
    tools: ["React", "Tailwind", "ExpressJs"],
    projectLink: "https://www.stageristorando.net/",
    logoUrl: ristorandoLogo,
    imageUrl: ristorandoImg,
    orderIndex: 12,
  },
  {
    _id: "web_10",
    displayNumber: "13",
    title: "What is Photocleaner?",
    shortDescription:
      "TidyPix is the easiest way to declutter your photo library with a simple swipe. No complicated tools—just swipe left to delete or right to keep your favorite memories. Quickly browse photos grouped by month and free up storage space in seconds.",
    problem:
      "Photo libraries become cluttered with thousands of unneeded images, making it difficult to find memories and wasting storage space.",
    solution:
      'TidyPix provides a fast, intuitive "swipe-to-clean" interface that turns photo decluttering into a quick and easy task, helping users reclaim storage instantly.',
    technologies: [
      "Quickly decide which photos to keep or delete",
      "Navigate your memories with ease",
      "Review and manage all marked photos before deleting",
      "Delete selected photos instantly to free up space",
      "15 free swipes per day for 14 days",
      "No account or subscription required to start",
    ],
    tools: ["React", "Aws", "Firebase"],
    projectLink:
      "https://apps.apple.com/pk/app/tidypix-photo-cleaner/id6744943307",
    logoUrl: photocleanerLogo,
    imageUrl: photocleanerImg,
    orderIndex: 13,
  },
  {
    _id: "web_11",
    displayNumber: "14",
    title: "What is Futuregram?",
    shortDescription:
      "Futuregram is a location-based social app that turns memories into interactive stories, letting users share moments, live locations, and photos, track past experiences, and connect meaningfully with friends and followers.",
    problem:
      "Traditional social media lacks location context and meaningful memory sharing.",
    solution:
      "Futuregram solves this with location-tagged posts, time-based memories, and private groups for interactive, personalized storytelling.",
    technologies: [
      "Live location tagging for posts",
      "Post From the Past – schedule older memories",
      "Private groups for curated sharing",
      "Exploration of public posts and other users’ stories",
      "Creator tipping and advanced memory tools",
    ],
    tools: ["React", "Aws", "Firebase"],
    projectLink: "#",
    logoUrl: futuregramLogo,
    imageUrl: futuregramImg,
    orderIndex: 14,
  },
  {
    _id: "web_12",
    displayNumber: "15",
    title: "What is VibeActually?",
    shortDescription:
      'VibeActually is an AI rom-com texting simulator where users chat with scripted characters, get instant "vibe reports" with tips, and improve flirting and conversation skills—blending fun, practice, and self-improvement.',
    problem:
      "Many struggle to practice social and dating skills in a safe, constructive environment.",
    solution:
      "Scenario-based chats with fully in-character replies and rom-com-style vibe reports offering strengths, tips, and clear feedback for repeatable, structured practice.",
    technologies: [
      "Scenario-based AI chat",
      "Character knowledge from PDFs",
      "Neo4j-backed retrieval in chat",
      "Vibe report generation pipeline",
      "User groups and community features",
      "Custom scenario instructions",
    ],
    tools: [
      "Tailwind",
      "TypeScript",
      "Framer",
      "Gsap",
      "PostgreSQL",
      "NestJS",
      "Radix",
      "Neo4j",
      "Rls",
    ],
    projectLink: "https://vibeactually.vercel.app",
    logoUrl: vibeActuallyLogo,
    imageUrl: vibeActuallyImg,
    orderIndex: 15,
  },
  {
    _id: "web_13",
    displayNumber: "16",
    title: "What is Oncemore?",
    shortDescription:
      "Once More is a location-based social app that helps people quickly report and recover lost items. Users post lost or found items with exact map locations, chat in real time, receive instant match notifications, and grow the community through referrals—making item recovery faster, smarter, and more human.",
    problem: "Traditional lost-and-found methods are slow and disconnected.",
    solution:
      "Once More solves this by centralizing reports with map-based discovery and real-time chat, making item recovery faster, easier, and more effective.",
    technologies: [
      "Location-based lost & found listings using Google Maps",
      "Real-time chat between finders and owners",
      "Smart push notifications for item updates",
      "Referral system for user-driven growth",
    ],
    tools: [
      "Firebase",
      "Socket.IO",
      "Google Maps",
      "React",
      "Node JS",
      "ExpressJs",
    ],
    projectLink: "#",
    logoUrl: oncemoreLogo,
    imageUrl: oncemoreImg,
    orderIndex: 16,
  },
  {
    _id: "web_14",
    displayNumber: "05",
    title: "What is Automotive Repair Podcast?",
    shortDescription:
      "The Automotive Repair Podcast Network App unifies automotive audio and video podcasts with smart progress tracking, auto-resume, background playback, and a floating player—delivering a smooth, immersive experience for enthusiasts and professionals alike.",
    problem:
      "Automotive enthusiasts and professionals face fragmented experiences using multiple platforms for audio and video content.",
    solution:
      "This app solves that by unifying podcasts in one place with progress tracking, background playback, and a floating player for a smooth, uninterrupted experience.",
    technologies: [
      "Unified audio & video podcast platform",
      "Resume playback exactly where left off",
      "Background audio playback for multitasking",
      "Floating on-screen player for continuous access",
      "Full media controls (play, pause, skip, rewind)",
    ],
    tools: ["React", "NestJS", "MongoDB", "ExpressJs", "Podcast", "Aws"],
    projectLink:
      "https://play.google.com/store/apps/details?id=com.arp.podcast&pli=1",
    logoUrl: automotiveLogo,
    imageUrl: automotivePodcastImg,
    orderIndex: 5,
  },
  {
    _id: "web_15",
    displayNumber: "06",
    title: "What is Alexander-telemedicine?",
    shortDescription:
      "A secure, HIPAA-compliant telemedicine platform that brings virtual care into one seamless experience—appointments, video consults, EHRs, e-prescriptions, and payments. An AI triage assistant guides patients upfront, while role-based portals and audit trails keep the system compliant, scalable, and white-label ready.",
    problem:
      "Healthcare is slowed by in-person visits, fragmented records, and poor triage.",
    solution:
      "This telemedicine platform unifies AI triage, virtual consults, EHRs, e-prescriptions, and payments into one secure, HIPAA-compliant system.",
    technologies: [
      "Integrated video consultations using WebRTC",
      "AI FAQ assistant with confidence-based escalation",
      "HIPAA/HITECH-compliant data encryption and access control",
      "AI-powered symptom checker with urgency classification and human handoff",
      "Role-based portals for patients and doctors",
      "Real-time health monitoring and notifications",
      "EHR and medical history integration",
    ],
    tools: [
      "React",
      "Node JS",
      "Redix (Cache)",
      "Stripe",
      "S3-compatible storage",
      "PostgreSQL",
      "NestJS",
      "Rest Api",
    ],
    projectLink: "https://www.realhub.it/login",
    logoUrl: telemedLogo,
    imageUrl: [TelemedicineImg, TelemedicineImg2],
    orderIndex: 6,
  },
  {
    _id: "web_16",
    displayNumber: "07",
    title: "What is FitCheck AI?",
    shortDescription:
      "FitCheck AI is a pocket-sized style coach that instantly rates outfits, tracks progress, and offers personalized fashion insights—helping users discover, refine, and elevate their style with confidence.",
    problem:
      "Many struggle to evaluate their style or get personalized guidance.",
    solution:
      "FitCheck AI solves this with instant AI outfit ratings, tailored recommendations, and progress tracking to help users refine and elevate their fashion sense.",
    technologies: [
      "Instant AI outfit ratings and feedback",
      "Tailored style recommendations based on AI analysis",
      "Personalized fashion insights and progress tracking",
      "Smart styling quiz for tailor-made fashion advice",
      "Computer Vision for real-time outfit analysis",
    ],
    tools: [
      "React",
      "NestJS",
      "MongoDB",
      "Computer Vision",
      "PyTorch",
      "TensorFlow",
      "Aws",
      "ExpressJs",
    ],
    projectLink:
      "https://apps.apple.com/pk/app/fit-check-ai-stylist/id6747051307",
    logoUrl: fitCheckLogo,
    imageUrl: [FitcheckImg1, FitcheckImg2, FitcheckImg3],
    orderIndex: 7,
  },
];
