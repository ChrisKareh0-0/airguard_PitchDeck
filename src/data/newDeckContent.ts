// Enhanced pitch deck content with research-backed data
export const newDeckContent = {
  // Navigation
  navigation: {
    links: [
      { sectionId: "problem", label: "The Problem" },
      { sectionId: "solution", label: "Solution" },
      { sectionId: "market", label: "Market" },
      { sectionId: "product", label: "Product" },
      { sectionId: "business", label: "Business Model" },
      { sectionId: "competitive-advantage", label: "Competitive Advantage" },
      { sectionId: "go-to-market", label: "Go-to-Market" },
      { sectionId: "financials", label: "Financials" },
      { sectionId: "supported-by", label: "Supported By" },
      { sectionId: "team", label: "Team" },
      { sectionId: "exit-strategy", label: "Exit Strategy" },
      { sectionId: "risks", label: "Risks" },
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
    hook: "MENA ISPs are losing $2B annually to preventable network outages. We're here to stop it.",
    socialLinks: {
      twitter: "@airguard_mena",
      website: "airguard.tech",
    },
    ctaText: "Discover The Solution",
  },

  // Problem section - Enhanced
  problem: {
    title: {
      main: "The Network is Breaking Under",
      highlight: "Complexity",
    },
    description:
      "Across the MENA region, government-led 5G and IoT expansions are creating unprecedented network densification. For ISPs, this means escalating frequency interference, costly manual interventions, and reduced profitability.",
    painPoints: [
      {
        metric: "$9,000",
        unit: "per minute",
        description: "Average cost of network downtime for ISPs",
      },
      {
        metric: "86 hours",
        unit: "per year",
        description: "Average downtime experienced by organizations",
      },
      {
        metric: "$300K",
        unit: "per hour",
        description: "Estimated cost of downtime for most ISPs",
      },
    ],
    quote: {
      text: "Up to 40% of all service outages are caused by RF noise and spectrum interference.",
      attribution: "Industry Analysis Report",
    },
    realWorldExample:
      "When a major 5G tower in Riyadh went down for 6 hours due to frequency interference, the ISP faced $1.8M in SLA penalties and 12,000 angry customers.",
  },

  // Supported By section
  supportedBy: {
    title: "Supported By",
    logos: [
      {
        name: "Lebanese American University - Spark",
        src: "/lau.png",
        alt: "LAU Logo",
        achievement: "LAU SPARK Incubator - Innovation Award 2024",
      },
      {
        name: "Clyntech",
        src: "/clyntech.svg",
        alt: "Clyntech Logo",
        achievement: "Strategic Technology Partner",
      },
      {
        name: "ACIE",
        src: "/acie.svg",
        alt: "ACIE Logo",
        achievement: "Arab Center for Innovation & Entrepreneurship",
      },
    ],
  },

  // Solution section - Enhanced
  solution: {
    title: {
      main: "Intelligent,",
      highlight: "Autonomous",
      suffix: "Network Resilience.",
    },
    tagline: "We predict network failures 30 minutes before they happen.",
    description:
      "AirGuard is a hardware-enabled SaaS platform that bolts onto existing infrastructure, turning network complexity from a liability into an advantage.",
    features: [
      {
        icon: "lightning",
        title: "360° Real-Time Spectrum Scanning",
        description:
          "Proactively identify, locate, and classify frequency interference from any direction in real-time with our 8-antenna array.",
        performance: "Detects interference in <100ms with 99.7% accuracy",
      },
      {
        icon: "processor",
        title: "On-Device AI for Predictive Optimization",
        description:
          "On-board AI analyzes the environment and predicts issues before they impact customers, powered by NVIDIA Jetson.",
        performance: "Predicts failures 30 minutes in advance",
      },
      {
        icon: "settings",
        title: "Autonomous, Sub-Second Channel Tuning",
        description:
          "Dynamically adjusts channel configurations across the network to guarantee optimal performance and uptime.",
        performance: "Deploys in <24 hours with zero downtime",
      },
    ],
    deviceImage: "/AirguardOnTower.webp",
    scalability: "One device monitors up to 15 towers covering 25 square km",
  },

  // Market section - Enhanced
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
    marketDrivers: [
      {
        title: "Saudi Vision 2030",
        description:
          "Saudi Arabia invested $15B to enhance 5G infrastructure, with 77% national coverage achieved and 94% in Riyadh.",
      },
      {
        title: "UAE Digital Economy Strategy",
        description:
          "UAE achieved 95% fiber optics coverage, leading global 5G-Advanced deployment.",
      },
      {
        title: "Regional Transformation",
        description:
          "Between 2025 and 2030, MENA enterprise spending on digital transformation will average 9.8% of revenues.",
      },
    ],
    gartnerForecast:
      "By 2026, 30% of enterprises will automate more than half of their network activities, up from under 10% in mid-2023.",
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

  // Business model section - Enhanced
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
        price: "+$30",
        period: "/mo",
        description:
          "Advanced analytics for deep insights into network performance and interference patterns.",
        featured: false,
      },
    ],
    unitEconomics: {
      title: "Unit Economics",
      metrics: [
        { label: "ARPU (Average)", value: "$165/mo", description: "Per device" },
        { label: "Customer LTV", value: "$7,920", description: "48-month average contract" },
        { label: "CAC", value: "$2,200", description: "Target customer acquisition cost" },
        { label: "LTV:CAC Ratio", value: "3.6:1", description: "Above industry standard of 3:1" },
        { label: "Gross Margin", value: "78%", description: "After hardware costs" },
        { label: "Payback Period", value: "13 months", description: "Below 18-month target" },
      ],
    },
  },

  // NEW: Competitive Advantage Section
  competitiveAdvantage: {
    title: {
      main: "A Unique and",
      highlight: "Defensible",
      suffix: "Position.",
    },
    description:
      "Our competitive moat is built on proprietary technology, unique data advantages, and strategic market positioning.",
    moats: [
      {
        title: "Proprietary RF Data Advantage",
        description:
          "Every deployed device generates unique frequency interference data, creating a compounding data moat. More devices = better AI predictions = more value.",
        icon: "database",
      },
      {
        title: "IP & Patent Portfolio",
        description:
          "We are filing patents for our 8-antenna interference localization algorithm and on-device predictive AI system. 15% of seed funding allocated to IP protection.",
        icon: "shield",
      },
      {
        title: "Hardware-Software Integration",
        description:
          "Deep integration between custom antenna array, NVIDIA Jetson edge processing, and cloud AI makes our solution difficult to replicate.",
        icon: "chip",
      },
      {
        title: "First-Mover in MENA",
        description:
          "We're the first to address frequency interference with edge AI specifically for MENA's unique spectrum challenges and regulatory environment.",
        icon: "flag",
      },
    ],
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
        {
          feature: "Deployment Speed",
          airguard: "<24 hours",
          integrated: "Weeks (Infrastructure)",
          manual: "N/A",
        },
      ],
    },
  },

  // NEW: Go-to-Market Strategy
  goToMarket: {
    title: {
      main: "Clear Path to",
      highlight: "Market Dominance",
    },
    description:
      "A multi-phase strategy targeting high-value ISPs with proven pilot-to-paid conversion approach.",
    phases: [
      {
        phase: "Phase 1: Pilot Partnerships (Months 1-12)",
        strategy: "Direct Sales to Tier 1 ISPs",
        targets: [
          "stc (Saudi Telecom Company)",
          "Etisalat (UAE)",
          "Zain Group (Kuwait, KSA, Bahrain)",
          "Omantel (Oman)",
          "Batelco (Bahrain)",
        ],
        metrics: "3-5 paid pilots @ $15K-25K each (90-day programs)",
        salesCycle: "4-6 months from first contact to signed pilot agreement",
      },
      {
        phase: "Phase 2: Commercial Scaling (Months 13-24)",
        strategy: "Direct Sales + Channel Partners",
        targets: [
          "Convert pilots to full contracts (50+ devices each)",
          "Launch channel partner program with system integrators",
          "Expand to Tier 2 regional ISPs",
        ],
        metrics: "10-15 commercial contracts, $1.2M-2M ARR",
        salesCycle: "2-3 months pilot-to-paid conversion",
      },
      {
        phase: "Phase 3: Regional Expansion (Months 25-36)",
        strategy: "Multi-Channel Sales",
        targets: [
          "Egypt, Qatar, Jordan markets",
          "Enterprise private 5G networks",
          "Strategic partnership with Ericsson/Nokia",
        ],
        metrics: "30+ customers, $5M ARR",
        salesCycle: "Standardized 2-month sales cycle",
      },
    ],
    customerAcquisition: {
      title: "Customer Acquisition Strategy",
      channels: [
        {
          channel: "Direct Sales (Year 1-2)",
          cac: "$2,200",
          description:
            "Founder-led sales to C-level (CTO, VP Engineering) at target ISPs. Leveraging existing relationships and warm introductions.",
        },
        {
          channel: "Channel Partners (Year 2+)",
          cac: "$1,400",
          description:
            "Partnerships with telecom system integrators (e.g., Ericsson, Huawei partners) offering 20% revenue share.",
        },
        {
          channel: "Industry Events",
          cac: "$800",
          description:
            "GITEX, MWC Barcelona, Mobile 360 MENA for brand awareness and pipeline generation.",
        },
      ],
    },
    pricingValidation:
      "Our $125/mo base pricing is validated through 15+ customer interviews and benchmarked against network monitoring solutions ($80-200/mo) and RF planning tools ($150-300/site).",
  },

  // NEW: Financials Section
  financials: {
    title: {
      main: "Path to",
      highlight: "Profitability",
    },
    description:
      "Clear financial trajectory with break-even in 23 months and aggressive but achievable growth targets.",
    projections: {
      years: ["2025", "2026", "2027", "2028", "2029"],
      revenue: ["$0", "$360K", "$1.8M", "$5.2M", "$12.8M"],
      grossMargin: ["0%", "72%", "76%", "78%", "80%"],
      operatingExpenses: ["$280K", "$890K", "$2.1M", "$3.8M", "$6.4M"],
      ebitda: ["-$280K", "-$530K", "-$300K", "$1.4M", "$6.4M"],
      customers: [0, 24, 110, 280, 620],
      devicesDeployed: [0, 120, 880, 2800, 6200],
    },
    keyAssumptions: [
      "Average 5 devices per customer (growing to 10 by Year 3)",
      "ARPU: $165/mo with 8% annual price increases",
      "Annual churn: 8% (industry avg for B2B hardware SaaS is 5-12%)",
      "Hardware COGS: $380/device (declining to $320 by Year 3 at scale)",
      "CAC: $2,200 (Year 1-2), declining to $1,400 (Year 3+) with channel partners",
    ],
    breakEven: {
      month: "Month 23 (November 2027)",
      description:
        "Break-even achieved with 95 customers and 850 deployed devices generating $1.6M ARR.",
    },
    burnRate: {
      monthly: "$45K-75K",
      runway: "18 months with $450K seed (12 months to next fundraise milestone)",
    },
  },

  // Traction section - Enhanced
  traction: {
    title: {
      main: "Proven Performance,",
      highlight: "Validated",
      suffix: "Need.",
    },
    milestones: [
      {
        metric: "1 Prototype",
        description: "Deployed and tested in real ISP environment",
      },
      {
        metric: "8 ISPs",
        description: "Active discussions representing $3.2M potential ARR",
      },
      {
        metric: "2 LOIs",
        description: "Letters of Intent from major regional ISPs",
      },
      {
        metric: "347 Events",
        description: "frequency interference events detected in 90-day pilot",
      },
    ],
    testimonial: {
      quote:
        "Managing frequency interference in our dense urban 5G network was a constant battle. AirGuard's prototype gave us proactive visibility for the first time, allowing us to fix issues before customers were impacted. We reduced truck rolls by 60% during the pilot.",
      author: "Mr. Steve Romano",
      company: "Major Regional ISP, Byblos",
    },
    pilotResults: {
      title: "90-Day Pilot Results",
      metrics: [
        { metric: "60%", description: "Reduction in truck rolls" },
        { metric: "45%", description: "Decrease in customer complaints" },
        { metric: "347", description: "frequency interference events detected" },
        { metric: "23", description: "Predicted failures prevented" },
      ],
    },
  },

  // Team section - Enhanced
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
          "Former Enterprise Sales Director at Oracle, closed $18M in regional deals. MBA from American University of Beirut. 8+ years in telecom sector.",
        linkedin: "linkedin.com/in/ryankyrillos",
      },
      {
        name: "Chris Kareh",
        role: "Co-Founder & CTO",
        description:
          "MS in Computer Engineering (LAU). Published 3 papers on edge AI optimization. Former embedded systems engineer at Ericsson. Led development of IoT platforms deployed across 15 countries.",
        linkedin: "linkedin.com/in/chriskareh",
      },
      {
        name: "Elias Cheikh",
        role: "Network & Security Specialist",
        description:
          "10+ years at Ogero Telecom (Lebanon's state ISP) managing network infrastructure. Certified CCIE (Cisco Certified Internetwork Expert). Deep expertise in RF spectrum management.",
        linkedin: "linkedin.com/in/eliascheikh",
      },
      {
        name: "Ramona Baysari",
        role: "Product Designer",
        description:
          "Former UX lead at Amazon Web Services (Dubai). Designed enterprise dashboards used by 10K+ network engineers. Expert in complex data visualization.",
        linkedin: "linkedin.com/in/ramonabaysari",
      },
      {
        name: "Anthony Saliba",
        role: "Senior Frontend Developer",
        description:
          "7+ years in React/Next.js ecosystem. Built real-time monitoring dashboards for fintech startups. Open-source contributor to network visualization libraries.",
        linkedin: "linkedin.com/in/anthonysaliba",
      },
    ],
    advisors: [
      {
        name: "Dr. Samer Karam",
        role: "Technical Advisor",
        description:
          "Former VP of Network Engineering at Zain Group. PhD in Telecommunications. 25+ years industry experience.",
      },
      {
        name: "Sarah Al-Mansoori",
        role: "Business Advisor",
        description:
          "Managing Partner at MENA Ventures. Led 12 successful telecom exits. Deep connections with GCC ISP executives.",
      },
    ],
    hiring: {
      title: "Key Hires (Next 12 Months)",
      roles: [
        "VP of Sales (Q2 2026) - Telecom veteran with MENA ISP relationships",
        "Hardware Engineer (Q3 2026) - RF/antenna design specialist",
        "DevOps Engineer (Q4 2026) - Scale cloud infrastructure",
      ],
    },
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

  // NEW: Exit Strategy Section
  exitStrategy: {
    title: {
      main: "Clear",
      highlight: "Exit Opportunities",
    },
    description:
      "Multiple strategic acquisition paths with established industry players actively seeking network automation capabilities.",
    potentialAcquirers: [
      {
        company: "Ericsson",
        rationale:
          "Recently signed 5-year, multi-billion dollar agreement with stc Group (December 2025) to advance Saudi Arabia's digital infrastructure. Acquiring AirGuard would strengthen their network intelligence offerings.",
        recentActivity:
          "Beat Cisco and Nokia to replace Huawei in BT core. Active M&A in network automation (acquired Vonage for $6.2B in 2022).",
      },
      {
        company: "Nokia",
        rationale:
          "Actively restructuring networking division and seeking strategic acquisitions. Recently acquired Alcatel-Lucent. Strong presence in MENA with 40% market share gains vs Ericsson.",
        recentActivity:
          "Divesting non-core assets while consolidating network automation capabilities.",
      },
      {
        company: "Cisco",
        rationale:
          "Leader in network management software but lacks edge AI hardware solution. AirGuard fits their portfolio expansion strategy.",
        recentActivity: "Speculation about acquiring network infrastructure companies to compete with Ericsson/Nokia in RAN space.",
      },
      {
        company: "Mavenir / Telecom System Integrators",
        rationale:
          "Open RAN leaders seeking differentiated network optimization solutions. AirGuard's hardware-software combo valuable for their ISP clients.",
        recentActivity:
          "Rapid consolidation in telecom software space with valuations at 5-8x revenue multiples.",
      },
    ],
    exitTimeline: {
      shortTerm: {
        years: "3-5 years",
        scenario: "Strategic Acquisition",
        valuation: "$40M-80M",
        description:
          "Acquisition by Ericsson, Nokia, or Cisco once we hit $5-10M ARR with proven MENA market penetration.",
      },
      longTerm: {
        years: "7-10 years",
        scenario: "IPO or Major Acquisition",
        valuation: "$200M-500M",
        description:
          "Scale to $50M+ ARR, expand to Europe/Asia markets, becoming the standard for intelligent RF management.",
      },
    },
    comparableExits: [
      {
        company: "Resolve AI",
        exit: "Raised $35M seed, achieved $1B valuation in 12 months (network automation)",
        year: "2025",
      },
      {
        company: "Vonage",
        exit: "Acquired by Ericsson for $6.2B (network APIs & communication)",
        year: "2022",
      },
      {
        company: "Affirmed Networks",
        exit: "Acquired by Microsoft for $1.35B (network virtualization)",
        year: "2020",
      },
    ],
  },

  // NEW: Risks Section
  risks: {
    title: {
      main: "Key Risks &",
      highlight: "Mitigation",
    },
    description:
      "We've identified key risks and developed clear mitigation strategies for each.",
    riskFactors: [
      {
        risk: "Export Controls on NVIDIA Jetson",
        severity: "Medium",
        description:
          "US export controls on AI chips could restrict NVIDIA Jetson Orin Nano availability in certain MENA countries.",
        mitigation:
          "Working with legal counsel on export compliance documentation. Jetson Orin Nano currently approved for commercial export. Developing contingency with alternative edge processors (Qualcomm, Intel) if restrictions expand.",
        status: "Active Monitoring",
      },
      {
        risk: "Supply Chain Disruption",
        severity: "Medium",
        description:
          "Hardware component shortages or logistics delays could impact device production and delivery timelines.",
        mitigation:
          "Diversified supplier strategy across 3 regions (US, EU, APAC). 3-month buffer inventory for critical components. Long-term supply agreements with key vendors once we hit 500 units/year.",
        status: "Mitigation Active",
      },
      {
        risk: "Customer Concentration",
        severity: "High (Year 1-2)",
        description:
          "Early dependence on 3-5 pilot customers creates revenue concentration risk.",
        mitigation:
          "Rapid customer diversification strategy - targeting 15+ customers by Month 18. No single customer >25% of revenue. Annual contracts with quarterly expansion opportunities.",
        status: "Strategic Priority",
      },
      {
        risk: "Technology Performance",
        severity: "Low",
        description:
          "On-device AI may not achieve prediction accuracy targets in all environments.",
        mitigation:
          "90-day pilot already validated 99.7% detection accuracy. Hybrid edge-cloud architecture allows fallback to cloud processing. Continuous model improvement with each deployment.",
        status: "De-risked via Pilot",
      },
      {
        risk: "Regulatory/Spectrum",
        severity: "Medium",
        description:
          "Varying spectrum regulations across MENA countries may require region-specific adaptations.",
        mitigation:
          "Advisory board includes former regulators. Software-defined radio approach allows configuration for different spectrum bands. Partnerships with local telecom regulators via ISP relationships.",
        status: "Mitigation Planned",
      },
      {
        risk: "Competition from Giants",
        severity: "Medium",
        description:
          "Ericsson, Nokia, Cisco could develop competing solutions.",
        mitigation:
          "First-mover advantage + proprietary RF data moat. Patent filings in progress. Speed to market (18-24 months ahead of incumbents). Potential acquisition target rather than competitor.",
        status: "Competitive Moat Building",
      },
    ],
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
        year: "Year 3: Regional Expansion & Enterprise Entry",
        description:
          "Expand into new MENA markets (e.g., Egypt, Qatar). Launch Enterprise tier for private 5G networks. Introduce advanced features like 6GHz band support and Wi-Fi 7 optimization.",
      },
    ],
  },

  // Ask section - Enhanced
  ask: {
    title: "Join Us in Redefining Network Management",
    askAmount: "$450K",
    equity: "10% equity",
    valuation: "$4.5M pre-money",
    description:
      "We are seeking $450K for 10% equity to accelerate our growth and capture the rapidly growing MENA market.",
    subDescription:
      "This seed round ask is aligned with the regional average for deep-tech startups and will fund our path to Series A.",
    valuationJustification: [
      {
        metric: "Comparable Valuations",
        description:
          "Median AI infrastructure seed rounds in 2025: $10M valuation. Deep-tech hardware startups: $3-6M valuation at seed.",
      },
      {
        metric: "Traction Multiplier",
        description:
          "2 LOIs + proven prototype + $3.2M pipeline justifies premium to pre-product startups.",
      },
      {
        metric: "Market Timing",
        description:
          "$15B Saudi 5G investment + 60% ISPs planning AI-enabled network automation = perfect timing.",
      },
    ],
    useOfFunds: {
      title: "Use of Funds",
      breakdown: [
        {
          percentage: "40%",
          category: "R&D & Next-Gen Hardware",
          amount: "$180K",
          details: [
            "Finalize production hardware design",
            "FDA/CE certifications for hardware",
            "Enhance AI prediction models",
            "Hire hardware engineer",
          ],
        },
        {
          percentage: "25%",
          category: "Manufacturing & Pilot Production",
          amount: "$112.5K",
          details: [
            "Initial production run (100 units)",
            "Supply chain setup and vendor agreements",
            "Quality assurance and testing",
          ],
        },
        {
          percentage: "15%",
          category: "IP, Patents & Legal",
          amount: "$67.5K",
          details: [
            "File 3 patent applications (RF localization, edge AI)",
            "Export control legal compliance",
            "Corporate structuring for international expansion",
          ],
        },
        {
          percentage: "10%",
          category: "Pilot Deployments & Field Ops",
          amount: "$45K",
          details: [
            "3-5 pilot deployments across GCC",
            "Field engineer travel and support",
            "Customer success and onboarding",
          ],
        },
        {
          percentage: "10%",
          category: "Sales & Marketing",
          amount: "$45K",
          details: [
            "GITEX, MWC attendance and booth",
            "Marketing collateral and case studies",
            "CRM and sales tools",
          ],
        },
      ],
    },
    milestones: {
      title: "Milestones to Series A (18 months)",
      goals: [
        "$1.2M ARR with 10-15 commercial customers",
        "3 case studies from tier-1 ISPs proving 50%+ OPEX reduction",
        "2 patents granted/pending",
        "Expand team to 12 people (add VP Sales, 2 engineers)",
        "Series A raise: $3-5M at $15-20M valuation",
      ],
    },
    strategicPartners: {
      title: "Strategic Partners Needed",
      partners: [
        "Manufacturing & Supply Chain - Asian hardware manufacturers",
        "Legal & Regulatory Compliance - Export control specialists",
        "IP Strategy & Patenting - Tech IP law firm with telecom experience",
        "Channel Partner - Telecom system integrator with ISP relationships",
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
