// Date d'aujourd'hui
const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

export const userData: {
  id: number;
  username: string;
  password: string;
  points: number;
  friends: string;
}[] = [
  {
    id: 1,
    username: "user",
    password: "$2b$10$oeZtwe0ILbxW7v.PBKBLIeHHQROMEo1dZpTpZGeu2GEnqmcQuZ7tu",
    points: 150,
    friends: "2,3,5,7",
  },
  {
    id: 2,
    username: "admin",
    password: "$2b$10$PJtLnkDwa9k4IaR9s379gepxVLNIgmbQhZHZNsd0VyCqi6UQ3.Hpi",
    points: 1000,
    friends: "1,3,4,6,8",
  },
  {
    id: 3,
    username: "EcoWarrior",
    password: "$2b$10$oeZtwe0ILbxW7v.PBKBLIeHHQROMEo1dZpTpZGeu2GEnqmcQuZ7tu",
    points: 1900,
    friends: "1,2,4,5,9",
  },
  {
    id: 4,
    username: "GreenThumb",
    password: "$2b$10$oeZtwe0ILbxW7v.PBKBLIeHHQROMEo1dZpTpZGeu2GEnqmcQuZ7tu",
    points: 3000,
    friends: "2,3,6,7,10",
  },
  {
    id: 5,
    username: "NatureLover",
    password: "$2b$10$oeZtwe0ILbxW7v.PBKBLIeHHQROMEo1dZpTpZGeu2GEnqmcQuZ7tu",
    points: 1850,
    friends: "1,3,8,9,11",
  },
  {
    id: 6,
    username: "PlanetProtector",
    password: "$2b$10$oeZtwe0ILbxW7v.PBKBLIeHHQROMEo1dZpTpZGeu2GEnqmcQuZ7tu",
    points: 1600,
    friends: "2,4,7,10,12",
  },
  {
    id: 7,
    username: "EarthSaver",
    password: "$2b$10$oeZtwe0ILbxW7v.PBKBLIeHHQROMEo1dZpTpZGeu2GEnqmcQuZ7tu",
    points: 2000,
    friends: "1,4,6,8,13",
  },
  {
    id: 8,
    username: "TreeHugger",
    password: "$2b$10$oeZtwe0ILbxW7v.PBKBLIeHHQROMEo1dZpTpZGeu2GEnqmcQuZ7tu",
    points: 2500,
    friends: "2,5,7,9,14",
  },
  {
    id: 9,
    username: "OceanDefender",
    password: "$2b$10$oeZtwe0ILbxW7v.PBKBLIeHHQROMEo1dZpTpZGeu2GEnqmcQuZ7tu",
    points: 1300,
    friends: "3,5,8,10,15",
  },
  {
    id: 10,
    username: "SolarChampion",
    password: "$2b$10$oeZtwe0ILbxW7v.PBKBLIeHHQROMEo1dZpTpZGeu2GEnqmcQuZ7tu",
    points: 1150,
    friends: "4,6,9,11,16",
  },
  {
    id: 11,
    username: "RecycleGuru",
    password: "$2b$10$oeZtwe0ILbxW7v.PBKBLIeHHQROMEo1dZpTpZGeu2GEnqmcQuZ7tu",
    points: 1750,
    friends: "5,10,12,13,17",
  },
  {
    id: 12,
    username: "CleanAirAdvocate",
    password: "$2b$10$oeZtwe0ILbxW7v.PBKBLIeHHQROMEo1dZpTpZGeu2GEnqmcQuZ7tu",
    points: 850,
    friends: "6,11,14,15,18",
  },
  {
    id: 13,
    username: "SustainableSam",
    password: "$2b$10$oeZtwe0ILbxW7v.PBKBLIeHHQROMEo1dZpTpZGeu2GEnqmcQuZ7tu",
    points: 2100,
    friends: "7,11,14,16,19",
  },
  {
    id: 14,
    username: "BiodiversityBuff",
    password: "$2b$10$oeZtwe0ILbxW7v.PBKBLIeHHQROMEo1dZpTpZGeu2GEnqmcQuZ7tu",
    points: 550,
    friends: "8,12,13,15,20",
  },
  {
    id: 15,
    username: "ZeroWaste",
    password: "$2b$10$oeZtwe0ILbxW7v.PBKBLIeHHQROMEo1dZpTpZGeu2GEnqmcQuZ7tu",
    points: 1400,
    friends: "9,12,14,16,17",
  },
  {
    id: 16,
    username: "RenewableRanger",
    password: "$2b$10$oeZtwe0ILbxW7v.PBKBLIeHHQROMEo1dZpTpZGeu2GEnqmcQuZ7tu",
    points: 1250,
    friends: "10,13,15,18,19",
  },
  {
    id: 17,
    username: "OrganicFarmer",
    password: "$2b$10$oeZtwe0ILbxW7v.PBKBLIeHHQROMEo1dZpTpZGeu2GEnqmcQuZ7tu",
    points: 1200,
    friends: "11,15,18,19,20",
  },
  {
    id: 18,
    username: "EcoFriendlyFred",
    password: "$2b$10$oeZtwe0ILbxW7v.PBKBLIeHHQROMEo1dZpTpZGeu2GEnqmcQuZ7tu",
    points: 500,
    friends: "12,16,17,19,20",
  },
  {
    id: 19,
    username: "WildlifeWatcher",
    password: "$2b$10$oeZtwe0ILbxW7v.PBKBLIeHHQROMEo1dZpTpZGeu2GEnqmcQuZ7tu",
    points: 650,
    friends: "13,16,17,18,20",
  },
  {
    id: 20,
    username: "GreenPeace",
    password: "$2b$10$oeZtwe0ILbxW7v.PBKBLIeHHQROMEo1dZpTpZGeu2GEnqmcQuZ7tu",
    points: 1700,
    friends: "14,17,18,19",
  },
];

export const dailyChallengeData: {
  id: number;
  name: string;
  description: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  points: number;
}[] = [
  // Difficulté 1
  {
    id: 1,
    name: "Éteindre les Appareils en Veille",
    description:
      "Débranchez tous les appareils électroniques en veille pour économiser de l'énergie.",
    difficulty: 1,
    points: 50,
  },
  {
    id: 2,
    name: "Utiliser une Gourde Réutilisable",
    description:
      "Évitez les bouteilles en plastique en utilisant une gourde réutilisable toute la journée.",
    difficulty: 1,
    points: 50,
  },
  {
    id: 3,
    name: "Réduction de Papier",
    description:
      "Évitez d'imprimer des documents et préférez les formats numériques.",
    difficulty: 1,
    points: 50,
  },
  {
    id: 4,
    name: "Tri Sélectif",
    description:
      "Effectuez un tri sélectif rigoureux de vos déchets ménagers aujourd'hui.",
    difficulty: 1,
    points: 50,
  },
  // Difficulté 2
  {
    id: 5,
    name: "Acheter Local",
    description:
      "Achetez des produits locaux pour votre repas du jour afin de réduire l'empreinte carbone liée au transport.",
    difficulty: 2,
    points: 100,
  },
  {
    id: 6,
    name: "Manger Végétarien",
    description:
      "Préparez et consommez uniquement des repas végétariens aujourd'hui.",
    difficulty: 2,
    points: 100,
  },
  {
    id: 7,
    name: "Marche ou Vélo",
    description:
      "Effectuez vos déplacements courts à pied ou à vélo plutôt qu'en voiture.",
    difficulty: 2,
    points: 100,
  },
  {
    id: 8,
    name: "Limiter le Chauffage ou la Climatisation",
    description:
      "Ajustez votre thermostat pour économiser de l'énergie en réduisant le chauffage ou la climatisation de 1°C.",
    difficulty: 2,
    points: 100,
  },
  // Difficulté 3
  {
    id: 9,
    name: "Ramasser des Déchets",
    description:
      "Consacrez 30 minutes à ramasser les déchets dans votre quartier ou un parc local.",
    difficulty: 3,
    points: 150,
  },
  {
    id: 10,
    name: "Planter une Plante",
    description:
      "Plantez une fleur, une plante aromatique ou un arbre dans votre jardin ou sur votre balcon.",
    difficulty: 3,
    points: 150,
  },
  {
    id: 11,
    name: "Cuisiner sans Déchet",
    description:
      "Préparez un repas en utilisant des ingrédients sans emballage plastique.",
    difficulty: 3,
    points: 150,
  },
  {
    id: 12,
    name: "Utiliser des Produits Naturels",
    description:
      "Nettoyez votre maison en utilisant uniquement des produits ménagers naturels comme le vinaigre blanc ou le bicarbonate de soude.",
    difficulty: 3,
    points: 150,
  },
  // Difficulté 4
  {
    id: 13,
    name: "Sans Véhicule Motorisé",
    description:
      "N'utilisez aucun véhicule motorisé pendant toute la journée, déplacez-vous uniquement à pied ou à vélo.",
    difficulty: 4,
    points: 200,
  },
  {
    id: 14,
    name: "Participer à une Action Écologique",
    description:
      "Participez à une action écologique locale, comme un nettoyage de plage ou de forêt.",
    difficulty: 4,
    points: 200,
  },
  {
    id: 15,
    name: "Journée Sans Plastique",
    description:
      "Évitez tous les produits en plastique à usage unique pendant la journée.",
    difficulty: 4,
    points: 200,
  },
  {
    id: 16,
    name: "Réduire la Consommation d'Eau",
    description: "Réduisez votre consommation d'eau de 50% pour la journée.",
    difficulty: 4,
    points: 200,
  },
  // Difficulté 5
  {
    id: 17,
    name: "Journée Zéro Déchet",
    description: "Ne produisez aucun déchet pendant toute la journée.",
    difficulty: 5,
    points: 250,
  },
  {
    id: 18,
    name: "Alimentation Locale et de Saison",
    description:
      "Consommez uniquement des aliments locaux et de saison tout au long de la journée.",
    difficulty: 5,
    points: 250,
  },
  {
    id: 19,
    name: "Organiser une Campagne de Sensibilisation",
    description:
      "Organisez une campagne de sensibilisation écologique en ligne ou en personne.",
    difficulty: 5,
    points: 250,
  },
  {
    id: 20,
    name: "Journée Sans Électricité",
    description: "Passez une journée entière sans utiliser d'électricité.",
    difficulty: 5,
    points: 250,
  },
];

export const weeklyChallengeData: {
  id: number;
  name: string;
  description: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  points: number;
}[] = [
  // Difficulté 1
  {
    id: 1,
    name: "Lecture Écologique",
    description:
      "Lisez un article ou regardez un documentaire sur l'écologie pendant la semaine.",
    difficulty: 1,
    points: 150,
  },
  {
    id: 2,
    name: "Nettoyage Numérique",
    description:
      "Faites le tri dans vos emails et désabonnez-vous des newsletters inutiles pour réduire votre empreinte numérique.",
    difficulty: 1,
    points: 150,
  },
  {
    id: 3,
    name: "Sac Réutilisable",
    description:
      "Utilisez un sac réutilisable pour toutes vos courses de la semaine.",
    difficulty: 1,
    points: 150,
  },
  {
    id: 4,
    name: "Éteindre les Lumières",
    description:
      "Assurez-vous d'éteindre les lumières inutilisées tout au long de la semaine.",
    difficulty: 1,
    points: 150,
  },
  // Difficulté 2
  {
    id: 5,
    name: "Deux Jours Végétariens",
    description:
      "Consommez des repas végétariens pendant au moins deux jours cette semaine.",
    difficulty: 2,
    points: 300,
  },
  {
    id: 6,
    name: "Transports en Commun",
    description:
      "Utilisez les transports en commun au lieu de la voiture pour vous rendre au travail toute la semaine.",
    difficulty: 2,
    points: 300,
  },
  {
    id: 7,
    name: "Recyclage Rigoureux",
    description:
      "Recyclez correctement tous vos déchets recyclables pendant la semaine.",
    difficulty: 2,
    points: 300,
  },
  {
    id: 8,
    name: "Ampoules Basse Consommation",
    description:
      "Remplacez vos ampoules par des ampoules basse consommation dans toute la maison.",
    difficulty: 2,
    points: 300,
  },
  // Difficulté 3
  {
    id: 9,
    name: "Réduction d'Eau",
    description:
      "Réduisez votre consommation d'eau de 20% par rapport à la semaine précédente.",
    difficulty: 3,
    points: 450,
  },
  {
    id: 10,
    name: "Sans Emballage Plastique",
    description:
      "N'achetez aucun produit avec emballage plastique pendant toute la semaine.",
    difficulty: 3,
    points: 450,
  },
  {
    id: 11,
    name: "Compostage",
    description:
      "Commencez à composter vos déchets organiques et faites-le toute la semaine.",
    difficulty: 3,
    points: 450,
  },
  {
    id: 12,
    name: "Produits Ménagers Écologiques",
    description:
      "Remplacez tous vos produits ménagers par des alternatives écologiques.",
    difficulty: 3,
    points: 450,
  },
  // Difficulté 4
  {
    id: 13,
    name: "Transport Écologique",
    description:
      "Utilisez uniquement des modes de transport écologiques (vélo, marche) pendant une semaine.",
    difficulty: 4,
    points: 600,
  },
  {
    id: 14,
    name: "Semaine Végétarienne",
    description:
      "Adoptez une alimentation végétarienne pendant toute la semaine.",
    difficulty: 4,
    points: 600,
  },
  {
    id: 15,
    name: "Réduction Énergétique",
    description:
      "Réduisez votre consommation d'énergie électrique de 30% par rapport à la semaine précédente.",
    difficulty: 4,
    points: 600,
  },
  {
    id: 16,
    name: "Organiser un Nettoyage Collectif",
    description:
      "Organisez une collecte de déchets dans votre quartier ou un espace naturel.",
    difficulty: 4,
    points: 600,
  },
  // Difficulté 5
  {
    id: 17,
    name: "Semaine Zéro Déchet",
    description: "Ne produisez aucun déchet pendant toute la semaine.",
    difficulty: 5,
    points: 750,
  },
  {
    id: 18,
    name: "Amélioration Énergétique du Logement",
    description:
      "Entreprenez des travaux pour améliorer l'efficacité énergétique de votre logement.",
    difficulty: 5,
    points: 750,
  },
  {
    id: 19,
    name: "Animer un Atelier Écologique",
    description:
      "Organisez et animez un atelier ou une conférence sur un sujet écologique.",
    difficulty: 5,
    points: 750,
  },
  {
    id: 20,
    name: "Installation d'Équipements Durables",
    description:
      "Installez des panneaux solaires ou un système de récupération d'eau de pluie chez vous.",
    difficulty: 5,
    points: 750,
  },
];

export const dailyUserData: {
  status: boolean;
  date: Date;
  userId: number;
  dailyChallengeId: number;
}[] = [
  // Association de chaque utilisateur avec un défi quotidien
  {
    status: false,
    date: today,
    userId: 1,
    dailyChallengeId: 1,
  },
  {
    status: true,
    date: today,
    userId: 2,
    dailyChallengeId: 2,
  },
  {
    status: false,
    date: today,
    userId: 3,
    dailyChallengeId: 3,
  },
  {
    status: true,
    date: today,
    userId: 4,
    dailyChallengeId: 4,
  },
  {
    status: false,
    date: today,
    userId: 5,
    dailyChallengeId: 5,
  },
  {
    status: true,
    date: today,
    userId: 6,
    dailyChallengeId: 6,
  },
  {
    status: false,
    date: today,
    userId: 7,
    dailyChallengeId: 7,
  },
  {
    status: true,
    date: today,
    userId: 8,
    dailyChallengeId: 8,
  },
  {
    status: false,
    date: today,
    userId: 9,
    dailyChallengeId: 9,
  },
  {
    status: true,
    date: today,
    userId: 10,
    dailyChallengeId: 10,
  },
  {
    status: true,
    date: today,
    userId: 11,
    dailyChallengeId: 11,
  },
  {
    status: false,
    date: today,
    userId: 12,
    dailyChallengeId: 12,
  },
  {
    status: false,
    date: today,
    userId: 13,
    dailyChallengeId: 13,
  },
  {
    status: true,
    date: today,
    userId: 14,
    dailyChallengeId: 14,
  },
  {
    status: false,
    date: today,
    userId: 1,
    dailyChallengeId: 15,
  },
  {
    status: true,
    date: today,
    userId: 1,
    dailyChallengeId: 16,
  },
  {
    status: true,
    date: today,
    userId: 1,
    dailyChallengeId: 17,
  },
  {
    status: false,
    date: today,
    userId: 1,
    dailyChallengeId: 18,
  },
  {
    status: true,
    date: today,
    userId: 1,
    dailyChallengeId: 19,
  },
  {
    status: false,
    date: today,
    userId: 1,
    dailyChallengeId: 20,
  },
];

export const weeklyUserData: {
  status: boolean;
  date: Date;
  userId: number;
  weeklyChallengeId: number;
}[] = [
  // Association de chaque utilisateur avec un défi hebdomadaire
  {
    status: true,
    date: today,
    userId: 1,
    weeklyChallengeId: 1,
  },
  {
    status: false,
    date: today,
    userId: 2,
    weeklyChallengeId: 2,
  },
  {
    status: false,
    date: today,
    userId: 3,
    weeklyChallengeId: 3,
  },
  {
    status: true,
    date: today,
    userId: 4,
    weeklyChallengeId: 4,
  },
  {
    status: false,
    date: today,
    userId: 5,
    weeklyChallengeId: 5,
  },
  {
    status: true,
    date: today,
    userId: 6,
    weeklyChallengeId: 6,
  },
  {
    status: false,
    date: today,
    userId: 7,
    weeklyChallengeId: 7,
  },
  {
    status: false,
    date: today,
    userId: 8,
    weeklyChallengeId: 8,
  },
  {
    status: true,
    date: today,
    userId: 9,
    weeklyChallengeId: 9,
  },
  {
    status: false,
    date: today,
    userId: 10,
    weeklyChallengeId: 10,
  },
  {
    status: false,
    date: today,
    userId: 11,
    weeklyChallengeId: 11,
  },
  {
    status: true,
    date: today,
    userId: 12,
    weeklyChallengeId: 12,
  },
  {
    status: false,
    date: today,
    userId: 13,
    weeklyChallengeId: 13,
  },
  {
    status: false,
    date: today,
    userId: 14,
    weeklyChallengeId: 14,
  },
  {
    status: true,
    date: today,
    userId: 1,
    weeklyChallengeId: 15,
  },
  {
    status: false,
    date: today,
    userId: 1,
    weeklyChallengeId: 16,
  },
  {
    status: true,
    date: today,
    userId: 1,
    weeklyChallengeId: 17,
  },
  {
    status: false,
    date: today,
    userId: 1,
    weeklyChallengeId: 18,
  },
  {
    status: false,
    date: today,
    userId: 1,
    weeklyChallengeId: 19,
  },
  {
    status: true,
    date: today,
    userId: 1,
    weeklyChallengeId: 20,
  },
];

export const articleData: {
  title: string;
  image: string | null;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}[] = [
  {
    title: "La Transition Énergétique en France",
    image: "/articles/la-transition-energetique-en-france.webp",
    text: "La transition énergétique est un enjeu majeur pour la France. Elle vise à réduire la dépendance aux énergies fossiles en favorisant les énergies renouvelables comme l'éolien, le solaire et l'hydroélectricité. Les objectifs fixés par le gouvernement comprennent une réduction significative des émissions de gaz à effet de serre et une augmentation de la part des énergies vertes dans le mix énergétique. Des initiatives locales, comme l'installation de panneaux solaires sur les bâtiments publics, contribuent à atteindre ces objectifs. Cependant, des défis subsistent, notamment en matière de financement et d'acceptation sociale des nouveaux projets énergétiques.",
    createdAt: new Date("2024-08-15"),
    updatedAt: new Date("2024-08-15"),
  },
  {
    title: "Les Effets du Changement Climatique sur la Biodiversité",
    image:
      "/articles/les-effets-du-changement-climatique-sur-la-biodiversite.webp",
    text: "Le changement climatique a des impacts profonds sur la biodiversité mondiale. L'augmentation des températures provoque la migration de nombreuses espèces vers des latitudes plus élevées ou des altitudes plus élevées. Les écosystèmes fragiles, comme les récifs coralliens, subissent un blanchissement massif en raison du réchauffement des océans. De plus, les phénomènes météorologiques extrêmes, tels que les sécheresses et les inondations, perturbent les habitats naturels. La perte de biodiversité affecte non seulement la nature mais aussi les services écosystémiques dont dépendent les humains, comme la pollinisation des cultures et la purification de l'eau.",
    createdAt: new Date("2024-09-05"),
    updatedAt: new Date("2024-09-05"),
  },
  {
    title: "L'Importance du Recyclage pour l'Environnement",
    image: "/articles/l-importance-du-recyclage-pour-l-environnement.webp",
    text: "Le recyclage joue un rôle crucial dans la préservation de l'environnement. En réutilisant les matériaux comme le papier, le plastique et le métal, nous réduisons la quantité de déchets envoyés aux décharges et incinérateurs. Cela diminue également la nécessité d'extraire de nouvelles ressources naturelles, préservant ainsi les écosystèmes et réduisant la consommation d'énergie. Les programmes de recyclage municipaux encouragent les citoyens à trier leurs déchets, mais il reste du travail pour améliorer les taux de recyclage. L'éducation et la sensibilisation sont essentielles pour inciter davantage de personnes à adopter des pratiques de recyclage au quotidien.",
    createdAt: new Date("2024-07-25"),
    updatedAt: new Date("2024-07-25"),
  },
  {
    title: "Les Avantages de l'Agriculture Biologique",
    image: "/articles/les-avantages-de-l-agriculture-biologique.webp",
    text: "L'agriculture biologique est une méthode de production agricole qui exclut l'utilisation de produits chimiques de synthèse. Elle favorise la biodiversité, améliore la qualité des sols et préserve la santé des consommateurs. Les pratiques biologiques incluent la rotation des cultures, l'utilisation de compost naturel et la lutte biologique contre les parasites. Bien que les rendements puissent être inférieurs à ceux de l'agriculture conventionnelle, les bénéfices environnementaux et sanitaires sont significatifs. De plus, la demande croissante pour les produits biologiques stimule l'économie locale et encourage les agriculteurs à adopter des méthodes plus durables.",
    createdAt: new Date("2024-09-12"),
    updatedAt: new Date("2024-09-12"),
  },
  {
    title: "La Pollution Plastique des Océans",
    image: "/articles/la-pollution-plastique-des-oceans.webp",
    text: "La pollution plastique est l'un des problèmes environnementaux les plus pressants de notre époque. Chaque année, des millions de tonnes de plastique finissent dans les océans, menaçant la vie marine et les écosystèmes aquatiques. Les animaux marins ingèrent des microplastiques, ce qui peut entraîner des blessures internes, la famine et la mort. Les efforts pour réduire la pollution plastique incluent la promotion des matériaux biodégradables, l'interdiction des plastiques à usage unique et la mise en place de systèmes efficaces de gestion des déchets. La sensibilisation du public est essentielle pour changer les comportements et adopter des modes de vie plus durables.",
    createdAt: new Date("2024-08-28"),
    updatedAt: new Date("2024-08-28"),
  },
  {
    title: "Les Forêts, Poumons de la Terre",
    image: "/articles/les-forets-poumons-de-la-terre.webp",
    text: "Les forêts jouent un rôle vital dans la régulation du climat mondial en absorbant le dioxyde de carbone de l'atmosphère. Elles abritent également une grande partie de la biodiversité terrestre. La déforestation, causée par l'agriculture intensive, l'exploitation forestière et l'urbanisation, menace ces écosystèmes précieux. La perte de forêts contribue au changement climatique et à la perte d'habitat pour de nombreuses espèces. Des initiatives de reforestation et de gestion durable des forêts sont mises en place pour inverser cette tendance. La participation des communautés locales est essentielle pour assurer le succès de ces projets.",
    createdAt: new Date("2024-07-30"),
    updatedAt: new Date("2024-07-30"),
  },
  {
    title: "Les Énergies Renouvelables : Une Nécessité",
    image: "/articles/les-energies-renouvelables-une-necessite.webp",
    text: "Les énergies renouvelables, telles que l'énergie solaire, éolienne et hydraulique, sont essentielles pour réduire notre dépendance aux combustibles fossiles. Elles offrent une source d'énergie propre et inépuisable, contribuant à la réduction des émissions de gaz à effet de serre. Les avancées technologiques ont rendu ces énergies plus accessibles et compétitives sur le marché. Les gouvernements encouragent leur adoption par le biais de subventions et de réglementations favorables. La transition vers les énergies renouvelables est non seulement bénéfique pour l'environnement, mais elle crée également de nouvelles opportunités économiques et d'emploi.",
    createdAt: new Date("2024-08-10"),
    updatedAt: new Date("2024-08-10"),
  },
  {
    title: "La Mobilité Durable en Milieu Urbain",
    image: "/articles/la-mobilite-durable-en-milieu-urbain.webp",
    text: "La mobilité durable vise à réduire l'impact environnemental des transports en favorisant les modes de déplacement écologiques. Dans les villes, cela se traduit par le développement des transports en commun, des pistes cyclables et des zones piétonnes. L'adoption de véhicules électriques et hybrides est également encouragée pour diminuer les émissions de CO2. Les initiatives telles que le covoiturage et les services de partage de vélos ou de scooters électriques contribuent à réduire la congestion et la pollution atmosphérique. Une planification urbaine intelligente est nécessaire pour intégrer ces solutions de manière efficace.",
    createdAt: new Date("2024-09-20"),
    updatedAt: new Date("2024-09-20"),
  },
  {
    title: "La Protection de la Faune Sauvage",
    image: "/articles/la-protection-de-la-faune-sauvage.webp",
    text: "La faune sauvage est menacée par la destruction des habitats, le braconnage et le commerce illégal d'animaux. La protection des espèces en danger est cruciale pour maintenir l'équilibre des écosystèmes. Les réserves naturelles et les parcs nationaux jouent un rôle important en offrant des refuges sécurisés. Les programmes de reproduction en captivité et de réintroduction dans la nature aident à restaurer les populations animales. La coopération internationale est essentielle pour lutter contre le trafic d'espèces sauvages et pour mettre en place des réglementations efficaces.",
    createdAt: new Date("2024-08-05"),
    updatedAt: new Date("2024-08-05"),
  },
  {
    title: "Les Conséquences de la Surpêche",
    image: "/articles/les-consequences-de-la-surpeche.webp",
    text: "La surpêche a conduit à un déclin alarmant des populations de poissons dans les océans du monde. L'exploitation excessive des ressources halieutiques menace la sécurité alimentaire et la santé des écosystèmes marins. Les techniques de pêche destructrices, comme le chalutage de fond, endommagent les habitats sous-marins. Pour remédier à cette situation, des quotas de pêche et des zones protégées sont mis en place. La promotion de pratiques de pêche durable et la consommation responsable de produits de la mer sont également essentielles pour préserver les ressources pour les générations futures.",
    createdAt: new Date("2024-07-18"),
    updatedAt: new Date("2024-07-18"),
  },
  {
    title: "L'Impact de l'Agriculture Intensive",
    image: "/articles/l-impact-de-l-agriculture-intensive.webp",
    text: "L'agriculture intensive vise à maximiser la production alimentaire, mais elle a des conséquences néfastes sur l'environnement. L'utilisation excessive de pesticides et d'engrais chimiques pollue les sols et les nappes phréatiques. La monoculture appauvrit la biodiversité et rend les cultures plus vulnérables aux maladies. Des alternatives comme l'agroécologie et l'agriculture biologique proposent des méthodes plus durables, respectueuses de l'environnement et de la santé humaine. La transition vers ces pratiques nécessite un soutien politique et économique pour les agriculteurs.",
    createdAt: new Date("2024-09-25"),
    updatedAt: new Date("2024-09-25"),
  },
  {
    title: "Le Rôle des Villes dans la Lutte Contre le Changement Climatique",
    image:
      "/articles/le-role-des-villes-dans-la-lutte-contre-le-changement-climatique.webp",
    text: "Les villes sont responsables d'une grande partie des émissions de gaz à effet de serre en raison de la concentration des activités humaines. Elles jouent donc un rôle clé dans la lutte contre le changement climatique. Des initiatives urbaines incluent la promotion des bâtiments écologiques, le développement des espaces verts et l'amélioration de l'efficacité énergétique. Les villes intelligentes utilisent la technologie pour optimiser l'utilisation des ressources et réduire l'empreinte carbone. La collaboration entre les gouvernements locaux, les entreprises et les citoyens est essentielle pour mettre en œuvre des solutions durables.",
    createdAt: new Date("2024-08-22"),
    updatedAt: new Date("2024-08-22"),
  },
  {
    title: "L'Éducation Environnementale pour les Jeunes",
    image: "/articles/l-education-environnementale-pour-les-jeunes.webp",
    text: "L'éducation environnementale est fondamentale pour sensibiliser les jeunes aux défis écologiques actuels. En intégrant des programmes éducatifs sur l'environnement dans les écoles, on encourage les enfants à adopter des comportements respectueux de la nature. Les activités pratiques, comme le jardinage scolaire et les sorties en plein air, renforcent l'apprentissage. Former une génération consciente des enjeux écologiques est crucial pour assurer un avenir durable. Les enseignants, les parents et les organisations non gouvernementales ont tous un rôle à jouer dans cette mission éducative.",
    createdAt: new Date("2024-09-15"),
    updatedAt: new Date("2024-09-15"),
  },
  {
    title: "La Gestion Durable de l'Eau",
    image: "/articles/la-gestion-durable-de-l-eau.webp",
    text: "L'eau est une ressource précieuse et limitée, dont la gestion durable est essentielle pour répondre aux besoins actuels et futurs. Les problèmes tels que la pollution, le gaspillage et le changement climatique mettent en péril les réserves d'eau douce. Des mesures comme la récupération des eaux de pluie, le traitement des eaux usées et la réduction de la consommation sont nécessaires. La sensibilisation du public à l'importance de l'économie d'eau peut contribuer à préserver cette ressource vitale. Les politiques gouvernementales doivent également soutenir les infrastructures et les technologies permettant une utilisation plus efficace de l'eau.",
    createdAt: new Date("2024-07-22"),
    updatedAt: new Date("2024-07-22"),
  },
  {
    title: "Les Innovations Technologiques Vertes",
    image: "/articles/les-innovations-technologiques-vertes.webp",
    text: "Les technologies vertes représentent un secteur en pleine expansion, offrant des solutions innovantes aux problèmes environnementaux. Des avancées comme les matériaux écologiques, les énergies propres et les systèmes de stockage d'énergie contribuent à réduire notre impact sur la planète. Les entreprises investissent de plus en plus dans la recherche et le développement de technologies durables. Ces innovations permettent non seulement de protéger l'environnement, mais aussi de stimuler la croissance économique et de créer des emplois. Le soutien des gouvernements par le biais de subventions et de politiques favorables est crucial pour encourager cette tendance.",
    createdAt: new Date("2024-08-18"),
    updatedAt: new Date("2024-08-18"),
  },
  {
    title: "La Mode Éthique et Durable",
    image: "/articles/la-mode-ethique-et-durable.webp",
    text: "L'industrie de la mode est souvent critiquée pour son impact environnemental négatif, notamment en raison de la fast fashion. La mode éthique et durable propose une alternative en mettant l'accent sur des pratiques responsables. Cela inclut l'utilisation de matériaux écologiques, la production locale et le respect des conditions de travail équitables. Les consommateurs sont de plus en plus conscients de l'importance de choisir des vêtements durables. Les marques adoptent donc des stratégies pour réduire leur empreinte écologique et répondre à cette demande croissante pour une mode plus responsable.",
    createdAt: new Date("2024-09-08"),
    updatedAt: new Date("2024-09-08"),
  },
  {
    title: "Le Rôle des Océans dans la Régulation Climatique",
    image: "/articles/le-role-des-oceans-dans-la-regulation-climatique.webp",
    text: "Les océans jouent un rôle essentiel dans la régulation du climat en absorbant une grande partie du dioxyde de carbone émis dans l'atmosphère. Ils influencent les conditions météorologiques et climatiques à travers le monde. Cependant, l'absorption excessive de CO2 conduit à l'acidification des océans, affectant la vie marine. La protection des écosystèmes marins est donc cruciale pour maintenir cet équilibre. Les efforts pour réduire les émissions de gaz à effet de serre ont un impact direct sur la santé des océans et, par extension, sur le climat global.",
    createdAt: new Date("2024-07-28"),
    updatedAt: new Date("2024-07-28"),
  },
  {
    title: "Les Défis du Développement Durable",
    image: "/articles/les-defis-du-developpement-durable.webp",
    text: "Le développement durable vise à répondre aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs. Il englobe des dimensions économiques, sociales et environnementales. Les défis incluent la réduction de la pauvreté, la promotion de l'égalité et la préservation des ressources naturelles. La mise en œuvre du développement durable nécessite une approche intégrée, impliquant les gouvernements, les entreprises et la société civile. Les Objectifs de Développement Durable des Nations Unies fournissent un cadre pour guider ces efforts à l'échelle mondiale.",
    createdAt: new Date("2024-09-18"),
    updatedAt: new Date("2024-09-18"),
  },
  {
    title: "La Réduction de l'Empreinte Carbone Individuelle",
    image: "/articles/la-reduction-de-l-empreinte-carbone-individuelle.webp",
    text: "Chacun peut contribuer à la lutte contre le changement climatique en réduisant son empreinte carbone personnelle. Cela peut passer par des actions simples comme limiter sa consommation d'énergie, adopter une alimentation plus végétale ou privilégier les transports en commun. Les choix de consommation, tels que l'achat de produits locaux et durables, ont également un impact. La compensation carbone est une autre option pour neutraliser les émissions inévitables. La sensibilisation et l'éducation sont essentielles pour encourager les individus à adopter des modes de vie plus respectueux de l'environnement.",
    createdAt: new Date("2024-08-02"),
    updatedAt: new Date("2024-08-02"),
  },
  {
    title: "Les Écosystèmes Urbains et la Biodiversité",
    image: "/articles/les-ecosystemes-urbains-et-la-biodiversite.webp",
    text: "Les écosystèmes urbains offrent des habitats pour une variété d'espèces et contribuent à la biodiversité. Les espaces verts, tels que les parcs, les jardins et les toits végétalisés, améliorent la qualité de l'air et le bien-être des habitants. La planification urbaine intégrant la nature favorise la résilience face au changement climatique. Des initiatives comme la création de corridors écologiques permettent aux espèces de se déplacer et de s'adapter aux environnements urbains. Impliquer les citoyens dans la gestion des espaces verts renforce le lien entre la communauté et la nature.",
    createdAt: new Date("2024-09-02"),
    updatedAt: new Date("2024-09-02"),
  },
  {
    title: "L'Économie Circulaire : Vers un Modèle Durable",
    image: "/articles/l-economie-circulaire-vers-un-modele-durable.webp",
    text: "L'économie circulaire propose un modèle économique alternatif au système linéaire traditionnel. Elle vise à réduire le gaspillage en réutilisant, réparant, recyclant et partageant les ressources existantes. Ce modèle favorise l'efficacité des ressources, réduit la pression sur l'environnement et peut stimuler l'innovation. Les entreprises adoptent de plus en plus des pratiques circulaires, comme la conception de produits durables et la mise en place de systèmes de récupération. Les politiques publiques soutiennent cette transition par le biais de réglementations et d'incitations économiques.",
    createdAt: new Date("2024-07-20"),
    updatedAt: new Date("2024-07-20"),
  },
];

export const fruitData: {
  name: string;
  description: string;
}[] = [
  {
    name: "Ananas",
    description: "Ananas description",
  },
  {
    name: "Kiwi",
    description: "Kiwi description",
  },
  {
    name: "Mangue",
    description: "Mangue description",
  },
];
