import bibulle3Moyen from "./assets/images/Gallery/Tirage_50/bibulle3.jpg";
import bibulle5Moyen from "./assets/images/Gallery/Tirage_50/bibulle5.jpg";
import futurama2Moyen from "./assets/images/Gallery/Tirage_50/futurama2.jpg";
import futurama3Moyen from "./assets/images/Gallery/Tirage_50/futurama3.jpg";
import bibulle3Moyen_1 from "./assets/images/Gallery/bibulle3/b3.2.jpg";
import bibulle3Moyen_2 from "./assets/images/Gallery/bibulle3/b3.3.jpg";
import bibulle3Moyen_3 from "./assets/images/Gallery/bibulle3/b3.4.jpg";

const TirageData = () => {
  const tirageData = [
    {
      category: "tirages",

      id: 0,
      title: "Bibulle 3",
      subtitle:
        "Chaque tirage en édition limitée est numéroté, signé par l'artiste, et accompagné d'un certificat d'authenticité.",
      piece: "1° pièce",
      serie: "Bibulle",
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

      img: bibulle3Moyen,
      img1: bibulle3Moyen_1,
      img2: bibulle3Moyen_2,
      img3: bibulle3Moyen_3,
    },
    {
      category: "tirages",

      id: 1,
      title: "Bibulle 5",
      subtitle:
        "Chaque tirage en édition limitée est numéroté, signé par l'artiste, et accompagné d'un certificat d'authenticité.",
      piece: "4° pièce",
      serie: "Futurama",
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

      img: bibulle5Moyen,
      // img1: futurama3_2,
      // img2: futurama3_3,
      // img3: futurama3_4,
    },
    {
      category: "tirages",

      id: 2,
      title: "Futurama 2",
      subtitle:
        "Chaque tirage en édition limitée est numéroté, signé par l'artiste, et accompagné d'un certificat d'authenticité.",
      piece: "5° pièce",
      serie: "Bibulle",
      date: "2020",
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

      img: futurama2Moyen,
      // img1: futurama4_2,
      // img2: futurama4_3,
      // img3: futurama4_4,
    },
    {
      category: "tirages",

      id: 3,
      title: "Futurama 3",
      subtitle:
        "Chaque tirage en édition limitée est numéroté, signé par l'artiste, et accompagné d'un certificat d'authenticité.",
      piece: "5° pièce",
      serie: "Bibulle",
      date: "2020",
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

      img: futurama3Moyen,
      // img1: futurama4_2,
      // img2: futurama4_3,
      // img3: futurama4_4,
    },
  ];

  return tirageData;
};

export default TirageData;
