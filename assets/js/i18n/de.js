// German language strings
const de = {
  // Navigation
  nav: {
    services: "Leistungen",
    cases: "Fallstudien",
    stack: "Tech-Stack",
    pricing: "Preise",
    contact: "Kontakt"
  },
  
  // Hero section
  hero: {
    title: "Unternehmensergebnisse mit SAP, KI, Software und Sicherheit",
    subtitle: "Seres IT Solutions konzipiert, implementiert und sichert digitale Plattformen – und beschleunigt die Transformation in Wochen statt Monaten.",
    cta_start: "Projekt starten",
    cta_explore: "Leistungen erkunden",
    certifications: "ISO 27001 Praktiken • Cloud-native • On-prem & hybrid • EU DSGVO-konform"
  },
  
  // Services section
  services: {
    title: "Leistungen",
    subtitle: "Gezielte Praktiken, die messbaren Geschäftswert liefern.",
    sap: {
      title: "SAP-Beratung",
      description: "S/4HANA, EWM, Integrationen, ABAP/OO, Fiori und Prozessoptimierung mit standardkonformer Umsetzung.",
      features: [
        "EWM eingebettet/dezentral",
        "Integrationsmodelle & IDocs",
        "Fiori-Apps & Erweiterungen"
      ]
    },
    ai: {
      title: "KI-Engineering",
      description: "LLM-Apps, RAG, Vektorsuche, MLOps und Datenpipelines zur Produktionalisierung intelligenter Funktionen.",
      features: [
        "Modellintegration & Evaluierung",
        "RAG mit Governance",
        "Echtzeit-Inferenz"
      ]
    },
    software: {
      title: "Softwareentwicklung",
      description: "Cloud-native, APIs, Microservices und moderne Frontends mit integrierter CI/CD und Observability.",
      features: [
        "Java/Spring Boot & Node",
        "React/Next & Mobile",
        "Kafka, MongoDB, SQL"
      ]
    },
    security: {
      title: "Sicherheit & Compliance",
      description: "Bedrohungsmodellierung, Härtung, IAM, Code-Scanning und Incident Response gemäß ISO 27001.",
      features: [
        "Secure SDLC & DevSecOps",
        "Pen-Test-Behebung",
        "Zero-Trust-Muster"
      ]
    }
  },
  
  // Case Studies section
  cases: {
    title: "Fallstudien",
    subtitle: "Ausgewählte Ergebnisse aus aktuellen Projekten.",
    case1: {
      title: "SAP EWM-Modernisierung",
      description: "Eingebettete EWM-Einführung mit RF-Oberflächen und Lastausgleich. 28% schnellere Lagerumschläge."
    },
    case2: {
      title: "KI-Wissensassistent",
      description: "RAG über interne Dokumente reduzierte MTTR um 41% und verbesserte die Qualität der ersten Antwort."
    },
    cta: "Detaillierte Referenzen anfordern"
  },
  
  // Tech Stack section
  stack: {
    title: "Tech-Stack",
    subtitle: "Bewährte Tools, die aufgrund ihrer Zuverlässigkeit, Geschwindigkeit und Sicherheit ausgewählt wurden."
  },
  
  // Testimonials section
  testimonials: {
    title: "Referenzen",
    subtitle: "Was Partner über die Zusammenarbeit sagen.",
    testimonial1: {
      quote: "Ihre EWM-Expertise und Integrationsgeschwindigkeit waren herausragend. Wir haben die Implementierung 30% schneller als erwartet abgeschlossen und sofortige betriebliche Verbesserungen festgestellt.",
      name: "Thomas Weber",
      role: "Leiter Betrieb, Einzelhandel"
    },
    testimonial2: {
      quote: "Der KI-Assistent hat unsere Support-Erfahrung und KPIs transformiert. Die Reaktionszeiten sanken um 41% und die Kundenzufriedenheit stieg auf 94%.",
      name: "Sarah Chen",
      role: "VP Engineering, SaaS"
    }
  },
  
  // Pricing section
  pricing: {
    title: "Preise",
    subtitle: "Transparente Engagement-Modelle mit klaren Lieferergebnissen und flexiblen Optionen.",
    tabs: {
      all: "Alle Leistungen",
      sap: "SAP",
      ai: "KI",
      software: "Software"
    },
    discovery: {
      title: "Discovery",
      timeframe: "2–3 Wochen",
      price: "Ab 15.000 €",
      description: "Eine gezielte Bewertung Ihrer Anforderungen und Umgebung zur Erstellung eines detaillierten Plans.",
      features: [
        "Anforderungs-Workshops",
        "Bewertung des Ist-Zustands",
        "Architektur & Lösungsentwurf",
        "PoC für komplexe Szenarien",
        "Implementierungs-Roadmap",
        "Detaillierte Kosten-/Zeitschätzungen"
      ],
      note: "Discovery-Gebühr wird für Projekte, die innerhalb von 60 Tagen unterzeichnet werden, auf die Implementierung angerechnet",
      cta: "Angebot erhalten"
    },
    build: {
      title: "Build",
      timeframe: "4–12 Wochen",
      price: "Individuelle Preisgestaltung",
      description: "Implementierung in agilen Sprints mit transparenter Nachverfolgung und regelmäßigen Demos.",
      features: [
        "Dediziertes agiles Team",
        "Wöchentliche Sprints & Demos",
        "Kontinuierliche Sicherheitsüberprüfungen",
        "Dokumentation & Wissenstransfer",
        "Benutzerakzeptanztests",
        "Unterstützung bei der Produktionseinführung"
      ],
      pricing_model: {
        fixed: "Festpreis",
        tm: "Zeit & Material",
        note: "Beide Preisoptionen verfügbar"
      },
      cta: "Projekt planen"
    },
    run: {
      title: "Run",
      timeframe: "Monatlich",
      price: "Gestaffelte Unterstützung",
      description: "Laufende Wartung, Überwachung und kontinuierliche Verbesserung.",
      tiers: {
        standard: {
          name: "Standard",
          response: "8 Std",
          hours: "9-17 MEZ"
        },
        business: {
          name: "Business",
          response: "4 Std",
          hours: "8-20 MEZ"
        },
        premium: {
          name: "Premium",
          response: "1 Std",
          hours: "24/7"
        }
      },
      features: [
        "SLA-basierter Support",
        "Überwachung & Alarmierung",
        "Sicherheitspatches",
        "Vierteljährliche Gesundheitschecks",
        "Funktionsverbesserungen"
      ],
      cta: "Plan wählen"
    },
    consultation: {
      question: "Nicht sicher, welches Modell zu Ihren Bedürfnissen passt?",
      text: "Unsere Experten können Ihnen helfen, das richtige Engagement-Modell zu wählen und eine detaillierte Schätzung für Ihre spezifischen Anforderungen zu erstellen.",
      cta: "Beratungstermin vereinbaren"
    }
  },
  
  // Contact section
  contact: {
    title: "Kontakt",
    subtitle: "Erzählen Sie uns von Ihrer Herausforderung, und wir schlagen den schnellsten Weg zum Erfolg vor.",
    form: {
      name: "Name",
      email: "E-Mail",
      topic: "Thema",
      topic_placeholder: "Auswählen…",
      topics: ["SAP", "KI", "Softwareentwicklung", "Sicherheit"],
      message: "Nachricht",
      submit: "Senden",
      success: "Vielen Dank für Ihre Nachricht! Wir werden uns so schnell wie möglich bei Ihnen melden."
    },
    gdpr_notice: "Mit dem Absenden stimmen Sie unserer Verarbeitung Ihrer Daten zum Zweck der Beantwortung Ihrer Anfrage zu."
  },
  
  // Footer
  footer: {
    copyright: "Alle Rechte vorbehalten.",
    links: {
      privacy: "Datenschutz",
      cookies: "Cookies",
      terms: "AGB",
      imprint: "Impressum",
      security: "Sicherheit"
    }
  },
  
  // Modals
  modals: {
    privacy: {
      title: "Datenschutzerklärung"
    },
    cookies: {
      title: "Cookie-Richtlinie",
      manage: "Cookies verwalten"
    },
    terms: {
      title: "Allgemeine Geschäftsbedingungen"
    },
    imprint: {
      title: "Impressum"
    }
  },
  
  // Cookie consent
  cookies: {
    header: "Datenschutzhinweis",
    message: "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und unseren Website-Verkehr zu analysieren. Sie können Ihre Präferenzen anpassen.",
    necessary: "Notwendig (Erforderlich)",
    analytics: "Analyse",
    marketing: "Marketing",
    accept_all: "Alle akzeptieren",
    save_preferences: "Einstellungen speichern"
  },
  
  // GDPR notice
  gdpr: {
    header: "DSGVO-Hinweis",
    message: "Diese Website verarbeitet personenbezogene Daten gemäß der EU-DSGVO. Wir respektieren Ihr Recht auf Datenzugang, -berichtigung und -löschung.",
    accept: "Ich verstehe",
    learn_more: "Mehr erfahren"
  }
};

export default de;