import {
  mecaniqueDesRevesOriginal,
  originalBibulle,
  originalFuturama,
  tirageBibulle3,
  tirageBibulle5,
  tirageFuturama2,
  tirageFuturama3,
} from "./dataImages";

//Oeuvres orignal sans tirage 'la perosnne achete l'oeuvre original'
export const originauxData = [
  {
    id: 0,
    category: "originaux",
    title: "Bibulle 1",
    serie: "Bibulle",
    piece: "1re",
    date: "2019 - 2020",
    format: "120 x 80 cm",
    tirage: "10 exemplaires numérotés / signés par l'artiste",
    papier: "Lavis Vinci - 300 g",
    subtitle:
      "Tous les originaux sont disponibles en version tirage. Si une œuvre originale n'est actuellement pas proposée en tirage, nous pouvons la reproduire grâce à nos partenaires spécialisés dans les impressions de haute qualité,  'les courts tirages'.  N'hésitez pas à me contacter pour plus d'informations.",
    livraison: {
      france: "5 à 10 jours",
      EU: "2 à 3 semaines",
      international: "3 à 4 semaines",
    },
    formatOriginaux: "grand format",
    imgWebp: originalBibulle.webp.bibulle1,
    imgJpg: originalBibulle.jpg.bibulle1,
  },

  {
    id: 1,
    category: "originaux",
    title: "Bibulle 2",
    serie: "Bibulle",
    piece: "2ᵉ ",
    date: "2023 - 2024",
    format: "120 x 80 cm",
    tirage: "10 exemplaires numérotés / signés par l'artiste",
    papier: "Lavis Vinci - 300 g",
    subtitle:
      "Tous les originaux sont disponibles en version tirage. Si une œuvre originale n'est actuellement pas proposée en tirage, nous pouvons la reproduire grâce à nos partenaires spécialisés dans les impressions de haute qualité,  'les courts tirages'.  N'hésitez pas à me contacter pour plus d'informations.",
    livraison: {
      france: "5 à 10 jours",
      EU: "2 à 3 semaines",
      international: "3 à 4 semaines",
    },
    note: "Cadre non inclus Me contacter avant achat",
    formatOriginaux: "grand format",

    imgWebp: originalBibulle.webp.bibulle2,
    imgJpg: originalBibulle.jpg.bibulle2,
  },
  {
    id: 2,
    category: "originaux",
    title: "Bibulle 3",
    subtitle:
      "Chaque tirage en édition limitée est numéroté, signé par l'artiste, et accompagné d'un certificat d'authenticité.",
    serie: "Bibulle",
    piece: "3ᵉ",
    date: "2023",
    format: "50 x 70 cm",
    tirage: "100 exemplaires numérotés et signés par l'artiste",
    papier: "Fine art cotton smooth bright - 300 g",
    livraison: {
      france: "5 à 10 jours",
      EU: "2 à 3 semaines",
      international: "3 à 4 semaines",
    },
    note: "Cadre non inclus Me contacter avant achat",
    formatOriginaux: "grand format",

    imgWebp: originalBibulle.webp.bibulle3,
    imgJpg: originalBibulle.jpg.bibulle3,
    img1: tirageBibulle3.bibulle3_1,
    img2: tirageBibulle3.bibulle3_2,
    img3: tirageBibulle3.bibulle3_3,
    img4: tirageBibulle3.bibulle3_4,
  },
  {
    id: 3,
    category: "originaux",
    title: "Bibulle 5",
    subtitle:
      "Chaque tirage en édition limitée est numéroté, signé par l'artiste, et accompagné d'un certificat d'authenticité.",
    serie: "Bibulle",
    piece: "4ᵉ",
    date: "2024",
    format: "50 x 70 cm",
    tirage: "100 exemplaires numérotés et signés par l'artiste",
    papier: "Fine art cotton smooth bright - 300 g",
    livraison: {
      france: "5 à 10 jours",
      EU: "2 à 3 semaines",
      international: "3 à 4 semaines",
    },
    note: "Cadre non inclus Me contacter avant achat",
    formatOriginaux: "grand format",

    imgWebp: originalBibulle.webp.bibulle5,
    imgJpg: originalBibulle.jpg.bibulle5,
    img1: tirageBibulle5.bibulle5_1,
    img2: tirageBibulle5.bibulle5_2,
    img3: tirageBibulle5.bibulle5_3,
    img4: tirageBibulle5.bibulle5_4,
  },

  {
    id: 4,
    category: "originaux",
    title: "Bibulle !",
    serie: "Bibulle",
    piece: "5ᵉ",
    date: "2020",
    format: "120 x 80 cm",
    tirage: "10 exemplaires numérotés / signés par l'artiste",
    papier: "Lavis Vinci - 300 g",
    subtitle:
      "Tous les originaux sont disponibles en version tirage. Si une œuvre originale n'est actuellement pas proposée en tirage, nous pouvons la reproduire grâce à nos partenaires spécialisés dans les impressions de haute qualité,  'les courts tirages'.  N'hésitez pas à me contacter pour plus d'informations.",
    livraison: {
      france: "5 à 10 jours",
      EU: "2 à 3 semaines",
      international: "3 à 4 semaines",
    },
    note: "Cadre non inclus Me contacter avant achat",
    formatOriginaux: "grand format",

    imgWebp: originalBibulle.webp.bibulleExclamation,
    imgJpg: originalBibulle.jpg.bibulleExclamation,
  },
  {
    id: 5,
    category: "originaux",
    title: "Maxi-Bibulle",
    serie: "Bibulle",
    piece: "Original",
    date: "2019",
    format: "2,60 x 3,8 m",
    tirage: "10 exemplaires numérotés / signés par l'artiste",
    papier: "Papier ClaireFontaine",
    subtitle:
      "Tous les originaux sont disponibles en version tirage. Si une œuvre originale n'est actuellement pas proposée en tirage, nous pouvons la reproduire grâce à nos partenaires spécialisés dans les impressions de haute qualité,  'les courts tirages'.  N'hésitez pas à me contacter pour plus d'informations.",
    livraison: {
      france: "5 à 10 jours",
      EU: "2 à 3 semaines",
      international: "3 à 4 semaines",
    },
    note: "Cadre non inclus Me contacter avant achat",
    formatOriginaux: "grand format",
    imgWebp: originalBibulle.webp.maxiBibulle,
    imgJpg: originalBibulle.jpg.maxiBibulle,
  },
  {
    id: 6,
    category: "originaux",
    title: "Futurama 1",
    serie: "Futurama",
    piece: "1re",
    date: "2019 - 2020",
    format: "120 x 80 cm",
    tirage: "10 exemplaires numérotés / signés par l'artiste",
    papier: "Lavis Vinci - 300 g",
    feutre: "Feutre, alcool",
    subtitle:
      "Tous les originaux sont disponibles en version tirage. Si une œuvre originale n'est actuellement pas proposée en tirage, nous pouvons la reproduire grâce à nos partenaires spécialisés dans les impressions de haute qualité,  'les courts tirages'.  N'hésitez pas à me contacter pour plus d'informations.",
    livraison: {
      france: "5 à 10 jours",
      EU: "2 à 3 semaines",
      international: "3 à 4 semaines",
    },
    note: "Cadre non inclus Me contacter avant achat",
    formatOriginaux: "grand format",

    imgWebp: originalFuturama.webp.futurama1,
    imgJpg: originalFuturama.jpg.futurama1,
  },
  {
    id: 7,
    category: "originaux",
    title: "Futurama 2",
    subtitle:
      "Chaque tirage en édition limitée est numéroté, signé par l'artiste, et accompagné d'un certificat d'authenticité.",
    serie: "Futurama",
    piece: "2ᵉ",
    date: "2023",
    format: "50 x 70 cm",
    tirage: "10 exemplaires numérotés / signés par l'artiste",
    papier: "Fine art cotton smooth bright - 300 g",
    livraison: {
      france: "5 à 10 jours",
      EU: "2 à 3 semaines",
      international: "3 à 4 semaines",
    },
    note: "Cadre non inclus Me contacter avant achat",
    formatOriginaux: "medium",
    imgWebp: originalFuturama.webp.futurama2,
    imgJpg: originalFuturama.jpg.futurama2,
    img1: tirageFuturama2.futurama2_1,
    img2: tirageFuturama2.futurama2_2,
    img3: tirageFuturama2.futurama2_3,
    img4: tirageFuturama2.futurama2_4,
  },
  {
    id: 8,
    category: "originaux",
    title: "Futurama 3",
    subtitle:
      "Chaque tirage en édition limitée est numéroté, signé par l'artiste, et accompagné d'un certificat d'authenticité.",
    serie: "Futurama",
    piece: "3ᵉ",
    date: "2023",
    format: "50 x 70 cm",
    tirage: "10 exemplaires numérotés / signés par l'artiste",
    papier: "Fine art cotton smooth bright - 300 g",
    livraison: {
      france: "5 à 10 jours",
      EU: "2 à 3 semaines",
      international: "3 à 4 semaines",
    },
    note: "Cadre non inclus Me contacter avant achat",
    formatOriginaux: "medium",
    imgWebp: originalFuturama.webp.futurama3,
    imgJpg: originalFuturama.jpg.futurama3,
    img1: tirageFuturama3.futurama3_1,
    img2: tirageFuturama3.futurama3_2,
    img3: tirageFuturama3.futurama3_3,
    img4: tirageFuturama3.futurama3_4,
  },
  {
    id: 9,
    category: "originaux",
    title: "Mécanique des Rêves",
    subtitle:
      "Chaque tirage en édition limitée est numéroté, signé par l'artiste, et accompagné d'un certificat d'authenticité.",
    serie: "Mécanique des Rêve",
    piece: "1ᵉ",
    date: "2016",
    format: "2,60 x 1,57 m",
    tirage: "10 exemplaires numérotés / signés par l'artiste",
    papier: "Fine art cotton smooth bright - 300 g",
    livraison: {
      france: "5 à 10 jours",
      EU: "2 à 3 semaines",
      international: "3 à 4 semaines",
    },
    note: "Cadre non inclus Me contacter avant achat",
    formatOriginaux: "grand format",
    imgWebp: mecaniqueDesRevesOriginal.webp.mecaniqueDesReves,
    imgJpg: mecaniqueDesRevesOriginal.jpg.mecaniqueDesReves,
  },
];

//Ceux disponible actuellement en tirages 'la personne achete le tirage de l'oeuvre original'
export const tirageData = [
  {
    id: 0,
    subCategory: "tirages",
    title: "Bibulle 3",
    subtitle:
      "Chaque tirage en édition limitée est numéroté, signé par l'artiste, et accompagné d'un certificat d'authenticité.",
    serie: "Bibulle",
    piece: "3ᵉ",
    date: "2023",
    format: "50 x 70 cm",
    tirage: "100 exemplaires numérotés et signés par l'artiste",
    papier: "Fine art cotton smooth bright - 300 g",
    livraison: {
      france: "5 à 10 jours",
      EU: "2 à 3 semaines",
      international: "3 à 4 semaines",
    },
    note: "Cadre non inclus Me contacter avant achat",
    categorieFormat: "medium",
    notAvailable: "Indisponible à la vente",
    available: "Disponible à la vente",
    imgWebp: originalBibulle.webp.bibulle3,
    imgJpg: originalBibulle.jpg.bibulle3,
    img1: tirageBibulle3.bibulle3_1,
    img2: tirageBibulle3.bibulle3_2,
    img3: tirageBibulle3.bibulle3_3,
    img4: tirageBibulle3.bibulle3_4,
  },
  {
    id: 1,
    subCategory: "tirages",
    title: "Bibulle 5",
    subtitle:
      "Chaque tirage en édition limitée est numéroté, signé par l'artiste, et accompagné d'un certificat d'authenticité.",
    serie: "Bibulle",
    piece: "5ᵉ",
    date: "2024",
    format: "50 x 70 cm",
    tirage: "100 exemplaires numérotés et signés par l'artiste",
    papier: "Fine art cotton smooth bright - 300 g",
    livraison: {
      france: "5 à 10 jours",
      EU: "2 à 3 semaines",
      international: "3 à 4 semaines",
    },
    note: "Cadre non inclus Me contacter avant achat",
    categorieFormat: "medium",
    notAvailable: "Indisponible à la vente",
    available: "Disponible à la vente",
    imgWebp: originalBibulle.webp.bibulle5,
    imgJpg: originalBibulle.jpg.bibulle5,
    img1: tirageBibulle5.bibulle5_1,
    img2: tirageBibulle5.bibulle5_2,
    img3: tirageBibulle5.bibulle5_3,
    img4: tirageBibulle5.bibulle5_4,
  },
  {
    id: 2,
    subCategory: "tirages",
    title: "Futurama 2",
    subtitle:
      "Chaque tirage en édition limitée est numéroté, signé par l'artiste, et accompagné d'un certificat d'authenticité.",
    serie: "Futurama",
    piece: "2ᵉ",
    date: "2023",
    format: "50 x 70 cm",
    tirage: "10 exemplaires numérotés / signés par l'artiste",
    papier: "Fine art cotton smooth bright - 300 g",
    livraison: {
      france: "5 à 10 jours",
      EU: "2 à 3 semaines",
      international: "3 à 4 semaines",
    },
    note: "Cadre non inclus Me contacter avant achat",
    categorieFormat: "medium",
    notAvailable: "Indisponible à la vente",
    available: "Disponible à la vente",
    imgWebp: originalFuturama.webp.futurama2,
    imgJpg: originalFuturama.jpg.futurama2,
    img1: tirageFuturama2.futurama2_1,
    img2: tirageFuturama2.futurama2_2,
    img3: tirageFuturama2.futurama2_3,
    img4: tirageFuturama2.futurama2_4,
  },
  {
    id: 3,
    subCategory: "tirages",
    title: "Futurama 3",
    subtitle:
      "Chaque tirage en édition limitée est numéroté, signé par l'artiste, et accompagné d'un certificat d'authenticité.",
    serie: "Futurama",
    piece: "3ᵉ",
    date: "2023",
    format: "50 x 70 cm",
    tirage: "10 exemplaires numérotés / signés par l'artiste",
    livraison: {
      france: "5 à 10 jours",
      EU: "2 à 3 semaines",
      international: "3 à 4 semaines",
    },
    note: "Cadre non inclus Me contacter avant achat",
    categorieFormat: "medium",
    notAvailable: "Indisponible à la vente",
    available: "Disponible à la vente",
    imgWebp: originalFuturama.webp.futurama3,
    imgJpg: originalFuturama.jpg.futurama3,
    img1: tirageFuturama3.futurama3_1,
    img2: tirageFuturama3.futurama3_2,
    img3: tirageFuturama3.futurama3_3,
    img4: tirageFuturama3.futurama3_4,
  },
];

export const galleriesData = [originauxData, tirageData];

export const expositionData = [
  {
    date: "2024",
    title: "Exposition « Collective MIFAC » - Espace franquin",
    location: "Angoulême",
  },
  {
    date: "2024",
    title: "Exposition « Instinctual » - Distillerie NAUD",
    location: "Pons",
  },
  {
    date: "2023",
    title: "Exposition au festival « Au Fil de l’Art »",
    location: "Jarnac",
  },
  {
    date: "2023",
    title: "Exposition «Margritt » - Chez Demois,",
    location: "Bellevigne",
  },
  {
    date: "2023",
    title: "Exposition personnelle - Les dix ans de la Chabram2 - Chabram2,",
    location: "Touzac",
  },
  {
    date: "2020",
    title: "Exposition personnelle – « Instinctual » - la Ruche,",
    location: "Nantes",
  },
  {
    date: "2016",
    title: "Exposition Personnelle – « Les Prémices » - EESAB,",
    location: "Brest",
  },
  {
    date: "2015",
    title:
      "Participation au projet « tapis d’éveil géant » sous la tutelle de la designer Elise Auffray",
    location: "Brest",
  },
  {
    date: "2014",
    title:
      "Exposition collective – « Les affiches » Atelier Sérigraphie - EESAB",
    location: "Brest",
  },
  {
    date: "2013",
    title:
      "Présentation de travaux personnels dans l’exposition « Thinking, through, making » Essab",
    location: "Brest",
  },
];

export const activityData = [
  {
    date: "2024",
    title:
      "Série Portrait - Sélection de 7 artistes dans le monde - BIC CREATOR",
    location: "Malaville",
  },

  {
    date: "2023",
    title:
      "Intervention à la Croix Rouge - Atelier avec les apprenantes en puériculture",
    location: "Angoulême",
  },
  {
    date: "2023",
    title: "Collaboration avec la marque « BIC »",
    location: "Paris",
  },
  {
    date: "2023",
    title:
      "Participation – Portrait d’Artiste- mémoire de fin d’année pour une étudiante en Art-thérapie",
    location: "Bellevigne",
  },
  {
    date: "2023",
    title:
      "Artiste intervenante – créations d’ateliers pour les écoles du grand Cognac",
    location: "Cognac",
  },
  {
    date: "2020",
    title: "Exposition personnelle – « Instinctual » - la Ruche,",
    location: "Nantes",
  },
  {
    date: "2022",
    title:
      "Participation artistique- proposition d’un visuel sur gobelet – la Friche des ponts",
    location: "Limoges",
  },
  {
    date: "2021",
    title:
      "Participation artistique – « Bibulle dans le milieu urbain » - la Friche des ponts",
    location: "Limoges",
  },
  {
    date: "2017",
    title:
      "Participation Workshops - rencontres régionales - Artistes de Christchurch",
    location: "Nouvelle Zélande",
  },
  {
    date: "2017",
    title:
      "Artiste intervenante auprès des personnes âgées atteintes de la maladie d’Alzheimer- Accueil de jour Kerélys",
    location: "Rennes",
  },
  {
    date: "2015",
    title: "Assistante stagiaire de galerie – Galerie Colette Clavreul",
    location: "Paris 3e",
  },
  {
    date: "2014",
    title: "Préparation et participation à une Exposition collective",
    location: "Brest",
  },
];

export const priceReviewsData = [
  {
    date: "2023",
    title:
      "Article du 8 décembre - Charente libre - « Jarnac : un parcours et une médiation au Fil de l’Art »",
    location: "Jarnac",
  },
  {
    date: "2023",
    title:
      "Article du 19 Août- Charente libre - « À Bellevigne, une expo dans un cadre intimiste »",
    location: "Bellevigne",
  },
  {
    date: "2023",
    title:
      "Article du 10 Juin – Living in cognac land - « Les dix ans de la Chabram2»",
    location: "Bellevigne",
  },
  {
    date: "2023",
    title:
      "Article du 10 Juin – Charente Libre - « Dix ans d’art en milieu rural»",
    location: "Jarnac",
  },
  {
    date: "2023",
    title:
      "Article du 19 avril - Charente Libre par Gilles Biolley - Grand Cognac Ouest Charente -« L’invasion graphique de Margritt Martinet se prépare à Malaville »",
    location: "Jarnac",
  },
  {
    date: "2020",
    title:
      "Certificat de mérite artistique participation au concours du Luxembourg Art Prize",
    location: "Luxembourg",
  },
];
