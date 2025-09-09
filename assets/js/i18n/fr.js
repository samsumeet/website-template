// French language strings
const fr = {
  // Navigation
  nav: {
    services: "Services",
    cases: "Études de cas",
    stack: "Technologies",
    pricing: "Tarification",
    contact: "Contact"
  },
  
  // Hero section
  hero: {
    title: "Solutions d'entreprise en SAP, IA, Logiciel et Sécurité",
    subtitle: "Seres IT Solutions conçoit, implémente et sécurise des plateformes numériques—accélérant la transformation en semaines, pas en mois.",
    cta_start: "Démarrer un projet",
    cta_explore: "Explorer les services",
    certifications: "Pratiques ISO 27001 • Cloud-native • On-prem & hybride • Conforme RGPD UE"
  },
  
  // Services section
  services: {
    title: "Services",
    subtitle: "Pratiques ciblées qui apportent une valeur commerciale mesurable.",
    sap: {
      title: "Conseil SAP",
      description: "S/4HANA, EWM, intégrations, ABAP/OO, Fiori et optimisation des processus avec livraison standardisée.",
      features: [
        "EWM intégré/décentralisé",
        "Modèles d'intégration & IDocs",
        "Applications & extensions Fiori"
      ]
    },
    ai: {
      title: "Ingénierie IA",
      description: "Applications LLM, RAG, recherche vectorielle, MLOps et pipelines de données pour productioniser des fonctionnalités intelligentes.",
      features: [
        "Intégration & évals de modèles",
        "RAG avec gouvernance",
        "Inférence en temps réel"
      ]
    },
    software: {
      title: "Développement Logiciel",
      description: "Cloud-native, APIs, microservices et frontends modernes avec CI/CD et observabilité intégrés.",
      features: [
        "Java/Spring Boot & Node",
        "React/Next & mobile",
        "Kafka, MongoDB, SQL"
      ]
    },
    security: {
      title: "Sécurité & Conformité",
      description: "Modélisation des menaces, renforcement, IAM, analyse de code et réponse aux incidents alignés sur ISO 27001.",
      features: [
        "SDLC sécurisé & DevSecOps",
        "Remédiation des tests de pénétration",
        "Modèles Zero Trust"
      ]
    }
  },
  
  // Case Studies section
  cases: {
    title: "Études de cas",
    subtitle: "Résultats sélectionnés d'engagements récents.",
    case1: {
      title: "Modernisation SAP EWM",
      description: "Déploiement EWM intégré avec écrans RF et équilibrage de charge. Rotations d'entrepôt 28% plus rapides."
    },
    case2: {
      title: "Assistant de connaissance IA",
      description: "RAG sur docs internes a réduit le MTTR de 41% et amélioré la qualité de première réponse."
    },
    cta: "Demander des références détaillées"
  },
  
  // Tech Stack section
  stack: {
    title: "Technologies",
    subtitle: "Outils éprouvés choisis pour leur fiabilité, rapidité et sécurité."
  },
  
  // Testimonials section
  testimonials: {
    title: "Témoignages",
    subtitle: "Ce que disent nos partenaires sur la collaboration.",
    testimonial1: {
      quote: "Leur expertise EWM et leur vitesse d'intégration étaient exceptionnelles. Nous avons terminé l'implémentation 30% plus rapidement que prévu et avons constaté des améliorations opérationnelles immédiates.",
      name: "Thomas Weber",
      role: "Directeur des opérations, Retail"
    },
    testimonial2: {
      quote: "L'assistant IA a transformé notre expérience de support et nos KPIs. Les temps de réponse ont diminué de 41% et la satisfaction client a augmenté à 94%.",
      name: "Sarah Chen",
      role: "VP Ingénierie, SaaS"
    }
  },
  
  // Pricing section
  pricing: {
    title: "Tarification",
    subtitle: "Modèles d'engagement transparents avec livrables clairs et options flexibles.",
    tabs: {
      all: "Tous les services",
      sap: "SAP",
      ai: "IA",
      software: "Logiciel"
    },
    discovery: {
      title: "Découverte",
      timeframe: "2–3 semaines",
      price: "À partir de 15 000 €",
      description: "Une évaluation ciblée de vos besoins et de votre environnement pour créer un plan détaillé.",
      features: [
        "Ateliers d'exigences",
        "Évaluation de l'état actuel",
        "Architecture & blueprint de solution",
        "PoC pour scénarios complexes",
        "Feuille de route d'implémentation",
        "Estimations détaillées coût/temps"
      ],
      note: "Frais de découverte crédités à l'implémentation pour les projets signés dans les 60 jours",
      cta: "Obtenir une proposition"
    },
    build: {
      title: "Construction",
      timeframe: "4–12 semaines",
      price: "Prix personnalisé",
      description: "Implémentation en sprints agiles avec suivi transparent et démos régulières.",
      features: [
        "Équipe agile dédiée",
        "Sprints & démos hebdomadaires",
        "Revues de sécurité continues",
        "Documentation & transfert de connaissances",
        "Tests d'acceptation utilisateur",
        "Support de déploiement en production"
      ],
      pricing_model: {
        fixed: "Prix fixe",
        tm: "Temps & matériaux",
        note: "Les deux options de tarification disponibles"
      },
      cta: "Définir le projet"
    },
    run: {
      title: "Exploitation",
      timeframe: "Mensuel",
      price: "Support par niveaux",
      description: "Maintenance continue, surveillance et amélioration continue.",
      tiers: {
        standard: {
          name: "Standard",
          response: "8 h",
          hours: "9-17 CET"
        },
        business: {
          name: "Business",
          response: "4 h",
          hours: "8-20 CET"
        },
        premium: {
          name: "Premium",
          response: "1 h",
          hours: "24/7"
        }
      },
      features: [
        "Support basé sur SLA",
        "Surveillance & alertes",
        "Correctifs de sécurité",
        "Contrôles de santé trimestriels",
        "Améliorations des fonctionnalités"
      ],
      cta: "Choisir un plan"
    },
    consultation: {
      question: "Pas sûr quel modèle convient à vos besoins?",
      text: "Nos experts peuvent vous aider à choisir le bon modèle d'engagement et fournir une estimation détaillée pour vos besoins spécifiques.",
      cta: "Planifier une consultation"
    }
  },
  
  // Contact section
  contact: {
    title: "Contact",
    subtitle: "Parlez-nous du défi, et nous proposerons le chemin le plus rapide vers la valeur.",
    form: {
      name: "Nom",
      email: "Email",
      topic: "Sujet",
      topic_placeholder: "Choisir…",
      topics: ["SAP", "IA", "Développement logiciel", "Sécurité"],
      message: "Message",
      submit: "Envoyer",
      success: "Merci pour votre message! Nous vous répondrons dès que possible."
    },
    gdpr_notice: "En soumettant, vous acceptez notre traitement de vos données dans le but de répondre à votre demande."
  },
  
  // Footer
  footer: {
    copyright: "Tous droits réservés.",
    links: {
      privacy: "Confidentialité",
      cookies: "Cookies",
      terms: "Conditions",
      imprint: "Mentions légales",
      security: "Sécurité"
    }
  },
  
  // Modals
  modals: {
    privacy: {
      title: "Politique de confidentialité"
    },
    cookies: {
      title: "Politique de cookies",
      manage: "Gérer les cookies"
    },
    terms: {
      title: "Conditions d'utilisation"
    },
    imprint: {
      title: "Mentions légales"
    }
  },
  
  // Cookie consent
  cookies: {
    header: "Avis de confidentialité",
    message: "Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic de notre site Web. Vous pouvez personnaliser vos préférences.",
    necessary: "Nécessaire (Obligatoire)",
    analytics: "Analytique",
    marketing: "Marketing",
    accept_all: "Tout accepter",
    save_preferences: "Enregistrer les préférences"
  },
  
  // GDPR notice
  gdpr: {
    header: "Avis RGPD",
    message: "Ce site traite les données personnelles conformément au RGPD de l'UE. Nous respectons votre droit d'accès, de rectification et d'effacement des données.",
    accept: "Je comprends",
    learn_more: "En savoir plus"
  }
};

export default fr;