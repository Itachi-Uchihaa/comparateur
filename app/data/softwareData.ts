export interface Software {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  rating: number;
  badge?: string;
  websiteUrl?: string;
  price: string;
  priceNumeric: number;
  ease: number;
  support: number;
  features: number;
  image: string;
  pros: string[];
  cons: string[];
  description: string;
  detailedDescription: string;
  pricing: {
    plan: string;
    price: string;
    features: string[];
  }[];
  reviews: {
    author: string;
    rating: number;
    text: string;
    date: string;
  }[];
  categories: string[];
  type: "Généraliste" | "Spécialiste";
  clientType: string;
  multisite?: string;

  // Optional feature content to enrich the software detail page.
  newFeatures?: string[];
  services?: string[];
  topFeatures?: string[];
  capabilitiesByCategory?: string[];
  establishmentTypes?: string[];
}

export const softwareList: Software[] = [
  {
    id: "16",
    slug: "mcaisse",
    name: "MCaisse",
    tagline: "Le logiciel de caisse pensé pour simplifier les services",
    rating: 4.7,
    badge: "Logiciel recommandé",
    websiteUrl: "https://mcaisse.com/",
    price: "À partir de 49€",
    priceNumeric: 49,
    ease: 4,
    support: 5,
    features: 5,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    pros: [
      "Création et modification du plan de table",
      "Menus et options faciles à mettre à jour",
      "Support client dédié",
      "Adapté à la restauration et aux activités de soin",
    ],
    cons: ["Nécessite une mise en place initiale selon l'équipement", "Tarifs variables selon l'offre choisie"],
    description:
      "MCaisse est une solution de caisse conçue pour simplifier l’encaissement et l’organisation au quotidien.",
    detailedDescription:
      "MCaisse est une solution développée pour aider les professionnels à simplifier leurs services. Elle propose une expérience simple pour la prise en main, avec des outils essentiels comme la gestion des menus, des options et du plan de table, et un accompagnement via le support client.",
    pricing: [
      {
        plan: "Essential",
        price: "59€/mois",
        features: [
          "Logiciel de caisse",
          "Plan de table modifiable",
          "Menus et options",
          "Support client",
        ],
      },
      {
        plan: "Basic",
        price: "79€/mois",
        features: [
          "Logiciel de caisse",
          "Plan de table modifiable",
          "Installation sur place (setup)",
          "Réservation et Click & Collect",
        ],
      },
      {
        plan: "Premium",
        price: "129€/mois",
        features: [
          "Logiciel de caisse",
          "Plan de table modifiable",
          "Application web commandes à table",
          "Accès à 2 applications serveurs",
        ],
      },
    ],
    reviews: [
      {
        author: "Emma R.",
        rating: 5,
        text: "Très simple à prendre en main et pratique au quotidien. Le plan de table est vraiment un plus.",
        date: "20 mars 2026",
      },
    ],
    categories: ["restaurant", "beaute", "soin"],
    type: "Spécialiste",
    clientType: "Restaurant et beauté & soin",
  },
  {
    id: "1",
    slug: "lightspeed",
    name: "Lightspeed",
    tagline: "Système de caisse et de gestion pour restaurants, bars et hôtels",
    rating: 4.6,
    badge: "⭐ Recommandé",
    price: "À partir de 69€",
    priceNumeric: 69,
    ease: 4,
    support: 5,
    features: 5,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    pros: ["Encaissement client simple & rapide", "Support illimité et gratuit", "Gestion de la livraison et vente à emporter", "Solution complète et performante"],
    cons: ["Prix élevé pour petites structures", "Courbe d'apprentissage"],
    description: "Lightspeed est un logiciel de caisse enregistreuse et système de gestion destiné aux restaurants, bars et hôtels.",
    detailedDescription: "Lightspeed est un logiciel de caisse enregistreuse et système de gestion destiné aux restaurants, bars et hôtels. Grâce à ses nombreuses fonctionnalités, c'est une solution complète qui plaira aux professionnels à la recherche d'un outil avancé et performant.",
    pricing: [
      {
        plan: "Essentiel",
        price: "69€/mois",
        features: ["1 caisse", "Gestion des stocks", "Rapports de base", "Support client"]
      },
      {
        plan: "Avancé",
        price: "119€/mois",
        features: ["Tout Essentiel", "Multi-caisses", "Rapports avancés", "Programme de fidélité"]
      }
    ],
    reviews: [
      {
        author: "Pierre M.",
        rating: 5,
        text: "Excellente solution pour notre restaurant. Le support est vraiment réactif.",
        date: "15 mars 2026"
      }
    ],
    categories: ["restaurant", "bar", "hotel"],
    type: "Spécialiste",
    clientType: "Restaurants toute taille"
  },
  {
    id: "2",
    slug: "toporder-mypos",
    name: "Toporder by myPOS",
    tagline: "Caisse enregistreuse sur iPad et logiciel de gestion en ligne",
    rating: 4.4,
    price: "À partir de 39€",
    priceNumeric: 39,
    ease: 5,
    support: 4,
    features: 4,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    pros: ["Solution d'encaissement et de gestion complète", "Fonctionnalités et matériels métier", "Accompagnement personnalisé", "TPE offert"],
    cons: ["Engagement contractuel", "Frais de transaction"],
    description: "Toporder by myPOS est une caisse enregistreuse sur iPad et un logiciel de gestion en ligne complet et modulable.",
    detailedDescription: "Toporder by myPOS est une caisse enregistreuse sur iPad et un logiciel de gestion en ligne complet et modulable. Il s'adresse aux commerçants et artisans qui veulent centraliser leur activité et gagner du temps.",
    pricing: [
      {
        plan: "Standard",
        price: "39€/mois",
        features: ["Caisse iPad", "TPE offert", "Support client", "Gestion de base"]
      }
    ],
    reviews: [
      {
        author: "Sophie D.",
        rating: 4,
        text: "Très bon rapport qualité-prix. L'accompagnement est un vrai plus.",
        date: "12 mars 2026"
      }
    ],
    categories: ["commerce", "artisan"],
    type: "Généraliste",
    clientType: "Tous commerces"
  },
  {
    id: "3",
    slug: "tactill",
    name: "Tactill",
    tagline: "Solution de caisse simple pour petits commerces",
    rating: 4.3,
    price: "À partir de 29€",
    priceNumeric: 29,
    ease: 5,
    support: 4,
    features: 3,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    pros: ["Très facile à utiliser", "Prix attractif", "Parfait pour débuter", "Interface intuitive"],
    cons: ["Fonctionnalités limitées", "Peu adapté aux grandes structures"],
    description: "Tactill est une solution de caisse simple et efficace pour les petits commerces.",
    detailedDescription: "Tactill est une solution de caisse enregistreuse pensée pour les petits commerces qui recherchent simplicité et efficacité. Son interface intuitive permet une prise en main rapide.",
    pricing: [
      {
        plan: "Basique",
        price: "29€/mois",
        features: ["1 caisse", "Gestion simple", "Support email", "Conforme NF525"]
      }
    ],
    reviews: [
      {
        author: "Marc L.",
        rating: 4,
        text: "Parfait pour ma petite boutique. Mise en place rapide.",
        date: "10 mars 2026"
      }
    ],
    categories: ["commerce"],
    type: "Généraliste",
    clientType: "Petits commerces"
  },
  {
    id: "4",
    slug: "laddition",
    name: "L'Addition",
    tagline: "Suite logicielle complète pour professionnels CHR",
    rating: 4.5,
    price: "À partir de 49€",
    priceNumeric: 49,
    ease: 4,
    support: 5,
    features: 5,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
    pros: ["Fonctionne sans Internet", "Plus de 300 fonctionnalités", "Très personnalisable", "Complet pour la restauration"],
    cons: ["Prix élevé", "Interface peut sembler complexe au début"],
    description: "L'Addition est la suite logicielle complète destinée à accompagner les professionnels du domaine CHR.",
    detailedDescription:
      "Dites bonjour au futur de la restauration. Avec L'Addition, profitez d'une suite logicielle complète, personnalisable et intuitive (100% CHR, 100% digitale), pensée de la prise de commande à l'encaissement. Paiement à table, Pay+, Menu Digital, Réservation en ligne et Click & Collect : l'ensemble de vos canaux est centralisé. Puis, pilotez votre établissement grâce au Reporting, y compris en fonctionnement sans Internet.",
    pricing: [
      {
        plan: "Pro",
        price: "49€/mois",
        features: ["Toutes fonctionnalités", "Fonctionne hors-ligne", "Support prioritaire", "Formation incluse"]
      }
    ],
    newFeatures: ["Paiement à table", "L'Addition Pay+", "Le Menu Digital"],
    services: [
      "La caisse enregistreuse",
      "L'Addition Pay+",
      "L'Addition Réservation",
      "L'Addition Click & Collect",
      "L'Addition Reporting",
      "L'Addition Achats",
      "L'Addition PMS"
    ],
    topFeatures: [
      "TPE",
      "L'Addition Pay+",
      "Internet",
      "Fonctionnement sans internet",
      "Paramétrage multi-établissement",
      "Hotline Technique",
      "Réservation",
      "Gestion et comptabilité"
    ],
    capabilitiesByCategory: [
      "Prise de commande / Encaissement",
      "Réservations",
      "Relation avec vos clients",
      "Communication salle-cuisine",
      "Comptabilité / Tableaux de bord / Analyses"
    ],
    establishmentTypes: [
      "Restaurant brasserie",
      "Restaurant",
      "Bar",
      "Fast-Food",
      "Salon de thé / Coffee shop",
      "Pizzeria",
      "Glacier",
      "Camping",
      "Boulangerie pâtisserie",
      "Food Truck",
      "Crêperie"
    ],
    reviews: [
      {
        author: "Antoine R.",
        rating: 5,
        text: "Très complet, idéal pour notre restaurant. Les 300+ fonctionnalités sont vraiment utiles.",
        date: "8 mars 2026"
      }
    ],
    categories: ["restaurant", "bar", "hotel"],
    type: "Spécialiste",
    clientType: "Restaurants toute taille"
  },
  {
    id: "5",
    slug: "sumup-caisse",
    name: "SumUp Caisse",
    tagline: "Caisse enregistreuse complète pour restauration et commerce",
    rating: 4.4,
    badge: "💰 Bon rapport qualité-prix",
    price: "À partir de 39€",
    priceNumeric: 39,
    ease: 5,
    support: 4,
    features: 4,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    pros: ["Interface facile à prendre en main", "Très personnalisable", "Support technique réactif", "Système intégré aux logiciels comptables"],
    cons: ["Certaines fonctionnalités en option", "Frais supplémentaires possibles"],
    description: "SumUp Caisse est une caisse enregistreuse complète qui s'adresse aux professionnels de la restauration et commerces.",
    detailedDescription: "SumUp Caisse (ex Tiller) est une caisse enregistreuse complète qui s'adresse aux professionnels de la restauration (bar, fast-food, restaurants, food-trucks, pizzeria) et autres commerces. Convient aux indépendants qu'aux réseaux de franchise et aux grands comptes.",
    pricing: [
      {
        plan: "Standard",
        price: "39€/mois",
        features: ["Multi-commerce", "Jusqu'à 20 établissements", "Intégration comptable", "Support client"]
      }
    ],
    reviews: [
      {
        author: "Julie T.",
        rating: 4,
        text: "Très satisfaite, facile à utiliser et le support répond vite.",
        date: "6 mars 2026"
      }
    ],
    categories: ["restaurant", "commerce"],
    type: "Généraliste",
    clientType: "Tous",
    multisite: "Jusqu'à 20 établissements"
  },
  {
    id: "6",
    slug: "shortcuts",
    name: "Shortcuts",
    tagline: "Solution spécialisée pour salons de beauté et instituts",
    rating: 4.5,
    price: "À partir de 49€",
    priceNumeric: 49,
    ease: 4,
    support: 5,
    features: 4,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop",
    pros: ["Spécialisé beauté & soin", "Gestion des rendez-vous", "Carnet client intégré", "Adaptée au secteur"],
    cons: ["Uniquement pour le secteur beauté", "Prix moyen"],
    description: "Shortcuts est une solution de caisse spécialement conçue pour les professionnels de la beauté et du soin.",
    detailedDescription: "Shortcuts est une solution de caisse enregistreuse et de gestion spécialement conçue pour les salons de coiffure, instituts de beauté, spas et centres de bien-être. Intègre la prise de rendez-vous et le suivi client.",
    pricing: [
      {
        plan: "Beauté",
        price: "49€/mois",
        features: ["Agenda en ligne", "Gestion clients", "Stock produits beauté", "SMS automatiques"]
      }
    ],
    reviews: [
      {
        author: "Émilie B.",
        rating: 5,
        text: "Parfait pour mon salon. La gestion des RDV est top !",
        date: "5 mars 2026"
      }
    ],
    categories: ["beaute", "soin"],
    type: "Spécialiste",
    clientType: "Beauté & soin"
  },
  {
    id: "7",
    slug: "mybe",
    name: "mybe",
    tagline: "Solution de caisse modulable pour tous commerces",
    rating: 4.2,
    price: "À partir de 35€",
    priceNumeric: 35,
    ease: 4,
    support: 4,
    features: 4,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
    pros: ["Modulable", "Prix accessible", "Polyvalent", "Bon support"],
    cons: ["Moins de fonctionnalités que certains concurrents", "Interface perfectible"],
    description: "mybe est une solution de caisse modulable qui s'adapte à tous types de commerces.",
    detailedDescription: "mybe est une solution de caisse enregistreuse modulable qui s'adapte à tous types de commerces. Elle offre les fonctionnalités essentielles à un prix accessible.",
    pricing: [
      {
        plan: "Standard",
        price: "35€/mois",
        features: ["Caisse tactile", "Gestion stocks", "Rapports", "Support"]
      }
    ],
    reviews: [
      {
        author: "Thomas V.",
        rating: 4,
        text: "Bon produit, fait le job pour ma boutique.",
        date: "3 mars 2026"
      }
    ],
    categories: ["commerce"],
    type: "Généraliste",
    clientType: "Tous commerces"
  },
  {
    id: "8",
    slug: "square",
    name: "Square",
    tagline: "Solution de caisse et de gestion pour commerces et restaurants",
    rating: 4.4,
    price: "À partir de 0€",
    priceNumeric: 0,
    ease: 5,
    support: 4,
    features: 4,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    pros: ["Fonctionnalités complètes et modulables", "Tarification claire et transparente", "Support client gratuit et illimité", "Gratuit pour débuter"],
    cons: ["Frais par transaction", "Certaines fonctions payantes"],
    description: "Square est un logiciel de caisse et une solution de gestion pour les commerçants et les restaurateurs.",
    detailedDescription: "Square est un logiciel de caisse et une solution de gestion pour les commerçants et les restaurateurs. Grâce à de nombreux modules et fonctionnalités, il est conçu pour s'adapter aux besoins de votre activité : vente en boutique, en ligne, par téléphone, gestion commerciale, management des équipes, gestion des stocks.",
    pricing: [
      {
        plan: "Gratuit",
        price: "0€/mois",
        features: ["Application gratuite", "1,75% + 0,25€ par transaction", "Support gratuit", "Fonctions de base"]
      }
    ],
    reviews: [
      {
        author: "Claire M.",
        rating: 4,
        text: "Parfait pour démarrer sans investissement initial. Je recommande.",
        date: "2 mars 2026"
      }
    ],
    categories: ["commerce", "restaurant"],
    type: "Spécialiste",
    clientType: "Commerces & restaurants"
  },
  {
    id: "9",
    slug: "hangers",
    name: "Hangers",
    tagline: "Solution d'encaissement pour tous commerces et artisans",
    rating: 4.3,
    price: "À partir de 29€",
    priceNumeric: 29,
    ease: 4,
    support: 5,
    features: 4,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
    pros: ["Fonctions évolutives", "Centralise la gestion", "Support illimité et gratuit", "Adapté aux pressing"],
    cons: ["Interface datée", "Moins connu"],
    description: "Hangers est une solution d'encaissement et de gestion qui transforme votre iPad en caisse enregistreuse.",
    detailedDescription: "Hangers est une solution d'encaissement et de gestion qui transforme votre iPad en caisse enregistreuse. Généraliste, il s'adresse à tous les commerces et artisans, et convient particulièrement aux pressings ou cordonneries.",
    pricing: [
      {
        plan: "Standard",
        price: "29€/mois",
        features: ["iPad caisse", "Support gratuit", "Fonctions évolutives", "Multi-commerce"]
      }
    ],
    reviews: [
      {
        author: "David L.",
        rating: 4,
        text: "Pratique pour mon pressing. Le support est vraiment bien.",
        date: "1 mars 2026"
      }
    ],
    categories: ["commerce", "artisan"],
    type: "Généraliste",
    clientType: "Tous"
  },
  {
    id: "10",
    slug: "zettle",
    name: "Zettle by PayPal",
    tagline: "Caisse mobile simple pour petits commerces",
    rating: 4.2,
    price: "À partir de 0€",
    priceNumeric: 0,
    ease: 5,
    support: 3,
    features: 3,
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&h=300&fit=crop",
    pros: ["Gratuit pour débuter", "Très simple", "Mobile", "Backup PayPal"],
    cons: ["Fonctionnalités limitées", "Frais transaction élevés"],
    description: "Zettle by PayPal est une solution de caisse mobile pour les petits commerces.",
    detailedDescription: "Zettle by PayPal (anciennement Zettle Go) est une solution de caisse mobile particulièrement adaptée aux petits commerces et aux commerces itinérants. Simple d'utilisation avec le backup de PayPal.",
    pricing: [
      {
        plan: "Gratuit",
        price: "0€/mois",
        features: ["App gratuite", "1,75% par transaction", "Lecteur de carte dès 29€", "Compte PayPal"]
      }
    ],
    reviews: [
      {
        author: "Sarah K.",
        rating: 4,
        text: "Idéal pour mon food truck. Installation ultra rapide.",
        date: "28 févr. 2026"
      }
    ],
    categories: ["commerce", "mobile"],
    type: "Généraliste",
    clientType: "Petits commerces"
  },
  {
    id: "11",
    slug: "popina",
    name: "Popina",
    tagline: "Logiciel de caisse iPad pour petits commerces",
    rating: 4.3,
    price: "À partir de 35€",
    priceNumeric: 35,
    ease: 4,
    support: 5,
    features: 4,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    pros: ["Intégration d'applications complémentaires", "Support illimité et gratuit", "Essai gratuit", "Bonne prise en main"],
    cons: ["Nécessite un iPad", "Options payantes"],
    description: "Popina est un logiciel de caisse pour transformer votre iPad en véritable caisse enregistreuse tactile.",
    detailedDescription: "Popina est un logiciel de caisse pour transformer votre iPad en véritable caisse enregistreuse tactile. Pensée pour les petits commerces, elle saura vous accompagner lors de l'encaissement mais aussi dans la gestion de votre entreprise.",
    pricing: [
      {
        plan: "Standard",
        price: "35€/mois",
        features: ["Caisse iPad", "Support gratuit", "Essai 30 jours", "Intégrations"]
      }
    ],
    reviews: [
      {
        author: "Julien P.",
        rating: 4,
        text: "Très satisfait, l'essai gratuit m'a convaincu.",
        date: "26 févr. 2026"
      }
    ],
    categories: ["commerce"],
    type: "Généraliste",
    clientType: "Tous"
  },
  {
    id: "12",
    slug: "innovorder",
    name: "Innovorder",
    tagline: "Système de caisse complet pour la restauration",
    rating: 4.6,
    badge: "🚀 Innovation",
    price: "À partir de 79€",
    priceNumeric: 79,
    ease: 4,
    support: 5,
    features: 5,
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop",
    pros: ["Adapté à la restauration collective", "Gestion multi établissements", "Solution innovante", "Bornes de commande"],
    cons: ["Prix élevé", "Uniquement restauration"],
    description: "Innovorder est un logiciel de caisse destiné aux professionnels de la restauration.",
    detailedDescription: "Innovorder est un logiciel de caisse destiné aux professionnels de la restauration. Il comprend une caisse enregistreuse et toute une série d'équipements et d'outils qui en font une solution complète et innovante. Adapté à la restauration collective.",
    pricing: [
      {
        plan: "Pro",
        price: "79€/mois",
        features: ["Caisse restaurant", "Bornes commande", "Multi-sites", "Analytics"]
      }
    ],
    reviews: [
      {
        author: "François D.",
        rating: 5,
        text: "Excellent pour notre chaîne de restaurants. Très complet.",
        date: "24 févr. 2026"
      }
    ],
    categories: ["restaurant", "restauration-collective"],
    type: "Spécialiste",
    clientType: "Restauration (y compris collective)"
  },
  {
    id: "13",
    slug: "hiboutik",
    name: "Hiboutik",
    tagline: "Logiciel de caisse en ligne pour petits commerces",
    rating: 4.1,
    badge: "💸 Tarif mini",
    price: "À partir de 9,90€",
    priceNumeric: 9.9,
    ease: 4,
    support: 3,
    features: 3,
    image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=400&h=300&fit=crop",
    pros: ["Version gratuite disponible", "Seulement 9,90€/mois en premium", "Multi-plateforme", "Fonctionnalités métier"],
    cons: ["Version gratuite limitée", "Interface basique"],
    description: "Hiboutik est un logiciel de caisse en ligne pour les petits commerces indépendants.",
    detailedDescription: "Hiboutik est un logiciel de caisse en ligne pour les petits commerces indépendants. Facile à prendre en main, il saura couvrir vos besoins en suivi de vente, de stocks et de clients et est accessible sur PC, Mac, tablette et smartphone.",
    pricing: [
      {
        plan: "Gratuit",
        price: "0€/mois",
        features: ["Fonctions de base", "1 caisse", "Support limité"]
      },
      {
        plan: "Premium",
        price: "9,90€/mois",
        features: ["Toutes fonctions", "Multi-caisses", "Support complet", "Pas de pub"]
      }
    ],
    reviews: [
      {
        author: "Marie C.",
        rating: 4,
        text: "Imbattable niveau prix. Parfait pour ma petite boutique.",
        date: "22 févr. 2026"
      }
    ],
    categories: ["commerce"],
    type: "Généraliste",
    clientType: "Petits commerces"
  },
  {
    id: "14",
    slug: "zelty",
    name: "Zelty",
    tagline: "Caisse tactile dédiée aux restaurants et multi-sites",
    rating: 4.6,
    badge: "🇫🇷 Made in France",
    price: "À partir de 59€",
    priceNumeric: 59,
    ease: 4,
    support: 5,
    features: 5,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
    pros: ["Spécialiste des restaurants", "Adapté au multisite", "Outil moderne et facile à utiliser", "Fonctionnement hors-ligne"],
    cons: ["Prix moyen-élevé", "Uniquement restauration"],
    description: "Zelty est un logiciel de caisse tactile dédié aux professionnels de la restauration.",
    detailedDescription: "Zelty est un logiciel de caisse tactile dédié aux professionnels de la restauration et notamment aux établissements multi-sites. Nombreux modules (plan de salle, fidélité, vente à emporter...) et intégrations avec des logiciels tiers.",
    pricing: [
      {
        plan: "Starter",
        price: "59€/mois",
        features: ["1 caisse", "Gestion tables", "Hors-ligne", "Support FR"]
      },
      {
        plan: "Business",
        price: "99€/mois",
        features: ["Multi-sites", "Analytics avancés", "Intégrations", "Formation"]
      }
    ],
    reviews: [
      {
        author: "Laurent B.",
        rating: 5,
        text: "Parfait pour nos 3 restaurants. Le support français est top.",
        date: "20 févr. 2026"
      }
    ],
    categories: ["restaurant"],
    type: "Spécialiste",
    clientType: "Restaurants toute taille"
  },
  {
    id: "15",
    slug: "rovercash",
    name: "Rovercash",
    tagline: "Solution de caisse simple pour indépendants",
    rating: 4.0,
    price: "À partir de 25€",
    priceNumeric: 25,
    ease: 5,
    support: 3,
    features: 3,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
    pros: ["Très simple", "Prix bas", "Rapide à installer", "Idéal pour débuter"],
    cons: ["Fonctionnalités basiques", "Support limité"],
    description: "Rovercash est une solution de caisse simple pour les petits commerces et indépendants.",
    detailedDescription: "Rovercash est une solution de caisse enregistreuse simple et abordable, parfaite pour les petits commerces et les indépendants qui recherchent une solution sans fioritures à petit prix.",
    pricing: [
      {
        plan: "Basique",
        price: "25€/mois",
        features: ["Caisse simple", "Conforme NF525", "Support email", "1 utilisateur"]
      }
    ],
    reviews: [
      {
        author: "Nadia F.",
        rating: 4,
        text: "Simple et efficace pour ma micro-entreprise.",
        date: "18 févr. 2026"
      }
    ],
    categories: ["commerce"],
    type: "Généraliste",
    clientType: "Petits commerces"
  }
];
