// Main content data for all sections
export const contentData = {
  // Navigation
  navigation: {
    links: [
      { sectionId: "problem", label: "The Problem" },
      { sectionId: "solution", label: "Solution" },
      { sectionId: "market", label: "Market" },
      { sectionId: "product", label: "Product" },
      { sectionId: "business", label: "Business Model" },
      { sectionId: "supported-by", label: "Supported By" },
      { sectionId: "team", label: "Team" },
    ],
    ctaLink: { sectionId: "ask", label: "The Ask" },
  },

  // Hero section
  hero: {
    title: {
      main: "AI-Driven Network",
      highlight: "Management",
    },
    description:
      "AirGuard delivers a self-healing networking solution that guarantees unparalleled uptime and performance for MENA ISPs.",
    socialLinks: {
      twitter: "@airguard_mena",
      website: "airguard.tech",
    },
    ctaText: "Discover The Solution",
  },

  // Problem section
  problem: {
    title: {
      main: "The Network is Breaking Under",
      highlight: "Complexity",
    },
    description:
      "Across the MENA region, government-led 5G and IoT expansions are creating unprecedented network densification. For ISPs, this means escalating frequency interference, costly manual interventions, and reduced profitability.",
    quote: {
      text: "Up to 40% of all service outages are caused by RF noise and spectrum interference.",
      attribution: "Industry Analysis Report",
    },
  },

  // Supported By section
  supportedBy: {
    title: "Supported By",
    logos: [
      {
        name: "Lebanese American University - Spark",
        src: "/lau.png",
        alt: "LAU Logo",
      },
      {
        name: "Clyntech",
        src: "/clyntech.svg",
        alt: "Clyntech Logo",
      },
      {
        name: "ACIE",
        src: "/acie.svg",
        alt: "ACIE Logo",
      },
    ],
  },

  // Solution section
  solution: {
    title: {
      main: "Intelligent,",
      highlight: "Autonomous",
      suffix: "Network Resilience.",
    },
    description:
      "AirGuard is a hardware-enabled SaaS platform that bolts onto existing infrastructure, turning network complexity from a liability into an advantage.",
    features: [
      {
        icon: "lightning",
        title: "360° Real-Time Spectrum Scanning",
        description:
          "Proactively identify, locate, and classify frequency interference from any direction in real-time with our 8-antenna array.",
      },
      {
        icon: "processor",
        title: "On-Device AI for Predictive Optimization",
        description:
          "On-board AI analyzes the environment and predicts issues before they impact customers, powered by NVIDIA Jetson.",
      },
      {
        icon: "settings",
        title: "Autonomous, Sub-Second Channel Tuning",
        description:
          "Dynamically adjusts channel configurations across the network to guarantee optimal performance and uptime.",
      },
    ],
    deviceImage: "/AirguardOnTower.webp",
  },

  // Market section
  market: {
    title: {
      main: "A High-Growth,",
      highlight: "Underserved",
      suffix: "Market.",
    },
    description:
      "The MENA network automation market is expanding rapidly, driven by 5G adoption and the critical need for operational efficiency.",
    metrics: [
      {
        label: "TAM",
        value: "$31B",
        description: "Global Network Automation (2025)",
      },
      {
        label: "SAM",
        value: "$2.1B",
        description: "MENA Region (2025)",
      },
      {
        label: "SOM",
        value: "$85M",
        description: "Initial Target (GCC ISPs)",
      },
    ],
  },

  // Product section
  product: {
    title: "Purpose-Built for the Edge",
    description:
      "Our technology stack is meticulously designed to deliver high-performance, autonomous operation right where it's needed most.",
    hardware: {
      title: "Hardware",
      description:
        "NVIDIA Jetson Orin Nano for edge AI, a custom 8-antenna array, and a resilient LoRaWAN backup channel ensure robust performance and reliability.",
      features: [
        "NVIDIA Jetson Orin Nano",
        "8-Antenna Array",
        "LoRaWAN Backup Channel",
      ],
      video: "/airguardshowcase.mp4",
    },
    software: {
      title: "Software",
      description:
        "A proprietary on-device AI model provides real-time analysis, while a secure cloud dashboard offers fleet management and network-wide analytics.",
      features: [
        "Real-time AI Analysis",
        "Cloud Dashboard",
        "Fleet Management",
      ],
      image: "/dashboard.webp",
    },
  },

  // Business model section
  business: {
    title: {
      main: "Scalable,",
      highlight: "Recurring",
      suffix: "Revenue.",
    },
    description:
      "Our hardware-enabled SaaS model provides a clear, scalable path to high-margin recurring revenue, aligning our success with ongoing customer value.",
    pricingTiers: [
      {
        name: "Core Subscription",
        price: "$125",
        period: "/mo",
        description: "Your main subscription for core features.",
        featured: false,
      },
      {
        name: "Predicted AI",
        price: "+$40",
        period: "/mo",
        description:
          "Advanced AI module to improve prediction accuracy and network optimization.",
        featured: false,
      },
      {
        name: "Advanced Analytics",
        price: "+30$",
        period: "/mo",
        description:
          "Advanced analytics for deep insights into network performance and interference patterns.",
        featured: false,
      },
    ],
  },

  // Traction section
  traction: {
    title: {
      main: "Proven Performance,",
      highlight: "Validated",
      suffix: "Need.",
    },
    testimonial: {
      quote:
        "Managing frequency interference in our dense urban 5G network was a constant battle. AirGuard's prototype gave us proactive visibility for the first time, allowing us to fix issues before customers were impacted.",
      author: "Mr. Steve Romano",
      company: "Major Regional ISP, Byblos",
    },
  },

  // Team section
  team: {
    title: {
      main: "The Right Team to",
      highlight: "Execute",
    },
    members: [
      {
        name: "Ryan Kyrillos",
        role: "Founder & CEO",
        description:
          "Visionary leader with deep expertise in scaling technology companies and building strategic partnerships.",
      },
      {
        name: "Chris Kareh",
        role: "Co-Founder & CTO",
        description:
          "Technical expert in embedded systems and AI with extensive experience in edge computing and network infrastructure.",
      },
      {
        name: "Elias Cheikh",
        role: "Network & Security Specialist",
        description:
          "Cybersecurity expert specializing in network infrastructure security and threat mitigation strategies.",
      },
      {
        name: "Ramona Baysari",
        role: "Product Designer",
        description:
          "Creative designer focused on user experience and interface design for complex technical products.",
      },
      {
        name: "Anthony Saliba",
        role: "Senior FrontEnd Developer",
        description:
          "Experienced developer specializing in modern web technologies and creating intuitive user interfaces.",
      },
    ],
  },

  // Competition section
  competition: {
    title: {
      main: "A Unique and",
      highlight: "Defensible",
      suffix: "Position.",
    },
    comparisonTable: {
      headers: [
        "Feature",
        "AirGuard (Open Platform)",
        "Integrated Networks (e.g., Starlink)",
        "Manual Management",
      ],
      rows: [
        {
          feature: "Automation",
          airguard: "Full (Autonomous)",
          integrated: "Full (Proprietary)",
          manual: "None (Reactive)",
        },
        {
          feature: "Data Source",
          airguard: "Real-World RF Data",
          integrated: "Internal Network Data",
          manual: "Limited Logs",
        },
        {
          feature: "Platform",
          airguard: "Open & Interoperable",
          integrated: "Closed Ecosystem",
          manual: "Vendor-Agnostic",
        },
      ],
    },
  },

  // Vision section
  vision: {
    title: {
      main: "Our Vision &",
      highlight: "Roadmap",
    },
    description:
      "A clear path from market entry to becoming the standard for intelligent network infrastructure in the MENA region.",
    timeline: [
      {
        year: "Year 1: Market Validation & Pilot Partnerships",
        description:
          "Secure 3-5 paid pilot programs with leading MENA operators (e.g., stc, Etisalat, Zain) to build data-backed case studies and industry validation. Finalize production hardware and gather robust case study data.",
      },
      {
        year: "Year 2: Commercial Scaling & Expansion",
        description:
          "Build an in-house sales team to convert the pilot pipeline and establish a channel partner program with telecom system integrators. Launch direct sales operations in KSA and UAE and onboard first channel partners.",
      },
      {
        year: "Year 3: Regional Expansion",
        description:
          "Expand into new MENA markets (e.g., Egypt, Qatar). Launch Enterprise tier and introduce advanced features like 6GHz band support.",
      },
    ],
  },

  // Ask section
  ask: {
    title: "Join Us in Redefining Network Management",
    askAmount: "$450K",
    equity:
      "10% equity to accelerate our growth and capture the rapidly growing MENA market.",
    description:
      "We are seeking $450K for 10% equity to accelerate our growth and capture the rapidly growing MENA market.",
    subDescription:
      "This seed round ask is aligned with the regional average for deep-tech startups and will fund our growth plan.",
    useOfFunds: {
      title: "Use of Funds",
      breakdown: [
        {
          percentage: "40%",
          category: "R&D & Next-Gen Hardware",
          amount: "$180K",
        },
        {
          percentage: "25%",
          category: "Manufacturing & Pilot Production",
          amount: "$112.5K",
        },
        {
          percentage: "15%",
          category: "IP, Patents & Legal",
          amount: "$67.5K",
        },
        {
          percentage: "10%",
          category: "Pilot Deployments & Field Ops",
          amount: "$45K",
        },
        {
          percentage: "10%",
          category: "Sales & Marketing",
          amount: "$45K",
        },
      ],
    },
    strategicPartners: {
      title: "Strategic Partners Needed",
      partners: [
        "Manufacturing & Supply Chain",
        "Legal & Regulatory Compliance",
        "IP Strategy & Patenting",
      ],
    },
  },

  // Impact section
  impact: {
    title: {
      main: "The AirGuard",
      highlight: "Impact",
    },
    description:
      "Our technology delivers a powerful combination of operational, financial, and environmental returns for a sustainable future.",
    metrics: [
      {
        value: "35%",
        description: "Reduction in Network Downtime",
      },
      {
        value: "30%",
        description: "Reduction in Operational Costs",
      },
      {
        value: "20%",
        description: "Reduction in Network Power Use",
      },
      {
        value: "240",
        description: "Tons of CO2 Emissions Saved / Year",
      },
      {
        value: "210",
        description: "Megawatt Hours Saved / Year",
      },
      {
        value: "320",
        description: "Kgs of E-Waste Saved / Year",
      },
    ],
  },

  // Footer section
  footer: {
    copyright: "© 2025 AirGuard. All rights reserved.",
    tagline: "Revolutionizing network management for a connected future.",
  },
};
