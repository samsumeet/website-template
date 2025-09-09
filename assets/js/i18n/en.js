// English language strings
const en = {
  // Navigation
  nav: {
    services: "Services",
    cases: "Case Studies",
    stack: "Tech Stack",
    pricing: "Pricing",
    contact: "Contact"
  },
  
  // Hero section
  hero: {
    title: "Enterprise Outcomes with SAP, AI, Software, and Security",
    subtitle: "Seres IT Solutions designs, implements, and secures digital platforms—accelerating transformation in weeks, not months.",
    cta_start: "Start a Project",
    cta_explore: "Explore Services",
    certifications: "ISO 27001 practices • Cloud-native • On-prem & hybrid • EU GDPR compliant"
  },
  
  // Services section
  services: {
    title: "Services",
    subtitle: "Focused practices that deliver measurable business value.",
    sap: {
      title: "SAP Consulting",
      description: "S/4HANA, EWM, integrations, ABAP/OO, Fiori, and process optimization with fit-to-standard delivery.",
      features: [
        "EWM embedded/decentralized",
        "Integration models & IDocs",
        "Fiori apps & extensions"
      ]
    },
    ai: {
      title: "AI Engineering",
      description: "LLM apps, RAG, vector search, MLOps, and data pipelines to productionize intelligent features.",
      features: [
        "Model integration & evals",
        "RAG with governance",
        "Realtime inference"
      ]
    },
    software: {
      title: "Software Development",
      description: "Cloud-native, APIs, microservices, and modern frontends with CI/CD and observability built-in.",
      features: [
        "Java/Spring Boot & Node",
        "React/Next & mobile",
        "Kafka, MongoDB, SQL"
      ]
    },
    security: {
      title: "Security & Compliance",
      description: "Threat modeling, hardening, IAM, code scanning, and incident response aligned to ISO 27001.",
      features: [
        "Secure SDLC & DevSecOps",
        "Pen-test remediation",
        "Zero Trust patterns"
      ]
    }
  },
  
  // Case Studies section
  cases: {
    title: "Case Studies",
    subtitle: "Selected outcomes from recent engagements.",
    case1: {
      title: "SAP EWM Modernization",
      description: "Embedded EWM rollout with RF screens and workload balancing. 28% faster warehouse turns."
    },
    case2: {
      title: "AI Knowledge Assistant",
      description: "RAG over internal docs reduced MTTR by 41% and improved first-response quality."
    },
    cta: "Request detailed references"
  },
  
  // Tech Stack section
  stack: {
    title: "Tech Stack",
    subtitle: "Battle‑tested tools chosen for reliability, speed, and security."
  },
  
  // Testimonials section
  testimonials: {
    title: "Testimonials",
    subtitle: "What partners say about the collaboration.",
    testimonial1: {
      quote: "Their EWM expertise and integration speed were outstanding. We completed the implementation 30% faster than expected and saw immediate operational improvements.",
      name: "Thomas Weber",
      role: "Head of Operations, Retail"
    },
    testimonial2: {
      quote: "The AI assistant transformed our support experience and KPIs. Response times dropped by 41% and customer satisfaction increased to 94%.",
      name: "Sarah Chen",
      role: "VP Engineering, SaaS"
    }
  },
  
  // Pricing section
  pricing: {
    title: "Pricing",
    subtitle: "Transparent engagement models with clear deliverables and flexible options.",
    tabs: {
      all: "All Services",
      sap: "SAP",
      ai: "AI",
      software: "Software"
    },
    discovery: {
      title: "Discovery",
      timeframe: "2–3 weeks",
      price: "From €15,000",
      description: "A focused assessment of your needs and environment to create a detailed plan.",
      features: [
        "Requirements workshops",
        "Current state assessment",
        "Architecture & solution blueprint",
        "PoC for complex scenarios",
        "Implementation roadmap",
        "Detailed cost/time estimates"
      ],
      note: "Discovery fee credited to implementation for projects signed within 60 days",
      cta: "Get Proposal"
    },
    build: {
      title: "Build",
      timeframe: "4–12 weeks",
      price: "Custom Pricing",
      description: "Implementation in agile sprints with transparent tracking and regular demos.",
      features: [
        "Dedicated agile team",
        "Weekly sprints & demos",
        "Continuous security reviews",
        "Documentation & knowledge transfer",
        "User acceptance testing",
        "Production deployment support"
      ],
      pricing_model: {
        fixed: "Fixed-price",
        tm: "Time & materials",
        note: "Both pricing options available"
      },
      cta: "Scope Project"
    },
    run: {
      title: "Run",
      timeframe: "Monthly",
      price: "Tiered Support",
      description: "Ongoing maintenance, monitoring, and continuous improvement.",
      tiers: {
        standard: {
          name: "Standard",
          response: "8 hrs",
          hours: "9-5 CET"
        },
        business: {
          name: "Business",
          response: "4 hrs",
          hours: "8-8 CET"
        },
        premium: {
          name: "Premium",
          response: "1 hr",
          hours: "24/7"
        }
      },
      features: [
        "SLA-based support",
        "Monitoring & alerting",
        "Security patches",
        "Quarterly health checks",
        "Feature enhancements"
      ],
      cta: "Choose Plan"
    },
    consultation: {
      question: "Not sure which model fits your needs?",
      text: "Our experts can help you choose the right engagement model and provide a detailed estimate for your specific requirements.",
      cta: "Schedule a Consultation"
    }
  },
  
  // Contact section
  contact: {
    title: "Contact",
    subtitle: "Tell us about the challenge, and we'll propose the fastest path to value.",
    form: {
      name: "Name",
      email: "Email",
      topic: "Topic",
      topic_placeholder: "Choose…",
      topics: ["SAP", "AI", "Software Development", "Security"],
      message: "Message",
      submit: "Send",
      success: "Thank you for your message! We'll get back to you as soon as possible."
    },
    gdpr_notice: "By submitting, you agree to our processing of your data for the purpose of responding to your inquiry."
  },
  
  // Footer
  footer: {
    copyright: "All rights reserved.",
    links: {
      privacy: "Privacy",
      cookies: "Cookies",
      terms: "Terms",
      imprint: "Imprint",
      security: "Security"
    }
  },
  
  // Modals
  modals: {
    privacy: {
      title: "Privacy Policy"
    },
    cookies: {
      title: "Cookie Policy",
      manage: "Manage Cookies"
    },
    terms: {
      title: "Terms of Service"
    },
    imprint: {
      title: "Imprint"
    }
  },
  
  // Cookie consent
  cookies: {
    header: "Privacy Notice",
    message: "We use cookies to enhance your experience and analyze our website traffic. You can customize your preferences.",
    necessary: "Necessary (Required)",
    analytics: "Analytics",
    marketing: "Marketing",
    accept_all: "Accept All",
    save_preferences: "Save Preferences"
  },
  
  // GDPR notice
  gdpr: {
    header: "GDPR Notice",
    message: "This site processes personal data in accordance with the EU GDPR. We respect your right to data access, rectification, and erasure.",
    accept: "I Understand",
    learn_more: "Learn More"
  }
};

export default en;