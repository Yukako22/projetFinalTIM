import ProduitFullBody from "../assets/FullBody.jpg";
import ProduitPPL from "../assets/PPLHomme.jpg";
import ProduitSplit from "../assets/splitHomme.jpg";
import ProduitCardio from "../assets/cardio.jpg";
import ProduitAbs from "../assets/AbsHomme.jpg";
import ProduitFullBodyF from "../assets/fullBodyFemme.jpg";
import ProduitPPLF from "../assets/PPLFemme.jpg";
import ProduitSplitF from "../assets/splitFemme.jpg";
import ProduitCardioF from "../assets/cardio.jpg";
import ProduitAbsF from "../assets/AbsFemme.jpg";
import ProduitFessier from "../assets/femme.jpg";
import ProduitMasse from "../assets/hommeviking.jpg";
import ProduitCut from "../assets/HommeCut.jpg";
import ProduitAccomplie from "../assets/HommeAccomplie.jpg";
import FemmeImg from "../assets/noemie5.jpg";
import FemmeImg2 from "../assets/noemie2.jpg";
import FemmeImg3 from "../assets/noemie3.jpg";

//Différents tableaux (hommes/femmes) pour la pages des plans d'entrainement pré-fait


//Liste des entrainement pour hommes
export const ListProgHomme = [
  {
    name: "FullBody",
    image: ProduitFullBody,
    desc: "Un programme fullbody est un programme d'entraînement qui cible tous les groupes musculaires du corps au cours d'une seule séance d'entraînement. Il est généralement utilisé par les débutants en musculation ou ceux qui ont un emploi du temps chargé, car il permet d'obtenir un entraînement complet en un minimum de temps.",
    price: 55.99,
  },
  {
    name: "PPL (Push pull leg)",
    image: ProduitPPL,
    desc: "Un programme PPL (Push-Pull-Legs) est un programme d'entraînement qui divise les exercices en trois catégories principales : les exercices de poussée (push), les exercices de traction (pull) et les exercices pour les jambes (legs). Chaque catégorie est ensuite travaillée lors d'une séance d'entraînement spécifique, en alternance avec les autres catégories, pour une fréquence d'entraînement élevée. Ce type de programme est souvent utilisé par les bodybuilders et les athlètes expérimentés en musculation.",
    price: 75.99,
  },
  {
    name: "Split",
    image: ProduitSplit,
    desc: "Un programme Split est un programme d'entraînement qui divise les groupes musculaires en plusieurs séances d'entraînement distinctes, généralement sur une base hebdomadaire. Les différents groupes musculaires sont travaillés lors de séances d'entraînement séparées pour permettre une récupération suffisante entre les entraînements.",
    price: 119.53,
  },
  {
    name: "Cardio",
    image: ProduitCardio,
    desc: "Un programme Cardio est un programme d'entraînement qui vise à améliorer la santé cardiovasculaire et l'endurance en utilisant principalement des exercices aérobiques. Les exercices cardiovasculaires impliquent généralement des activités à faible impact telles que la course, le vélo, la natation ou la marche rapide. Ce type de programme est souvent utilisé par ceux qui cherchent à perdre du poids, à améliorer leur condition physique générale ou à réduire leur risque de maladies cardiovasculaires.",
    price: 29.99,
  },
  {
    name: "Abdominaux",
    image: ProduitAbs,
    price: 39.99,
    desc: "Un programme Abdo est un programme d'entraînement qui vise à renforcer et à tonifier les muscles abdominaux. Les exercices de base tels que les crunchs, les sit-ups et les planches sont souvent inclus dans ces programmes, ainsi que des exercices ciblant les muscles obliques et les muscles profonds de la sangle abdominale. Ce type de programme est souvent utilisé par ceux qui cherchent à obtenir des abdominaux visibles et définis."
  },
  
  
];
//Liste des entrainements pour femmes
export const ListProgFemme = [
  {
    name: "Fessier",
    image: ProduitFessier,
    desc: "Un programme Fessier est un programme d'entraînement qui vise à renforcer et à tonifier les muscles fessiers. Les exercices de base tels que les squats, les fentes et les extensions de hanche sont souvent inclus dans ces programmes, ainsi que des exercices ciblant les muscles plus profonds des fessiers. Ce type de programme est souvent utilisé par ceux qui cherchent à améliorer la forme et la fermeté de leurs fesses.",
    price: 79.99,
  },
  {
    name: "FullBody",
    image: ProduitFullBodyF,
    desc: "Un programme fullbody est un programme d'entraînement qui cible tous les groupes musculaires du corps au cours d'une seule séance d'entraînement. Il est généralement utilisé par les débutants en musculation ou ceux qui ont un emploi du temps chargé, car il permet d'obtenir un entraînement complet en un minimum de temps.",
    price: 39.99,
  },
  {
    name: "PPL (Push pull leg)",
    image: ProduitPPLF,
    desc: "Un programme PPL (Push-Pull-Legs) est un programme d'entraînement qui divise les exercices en trois catégories principales : les exercices de poussée (push), les exercices de traction (pull) et les exercices pour les jambes (legs). Chaque catégorie est ensuite travaillée lors d'une séance d'entraînement spécifique, en alternance avec les autres catégories, pour une fréquence d'entraînement élevée. Ce type de programme est souvent utilisé par les bodybuilders et les athlètes expérimentés en musculation.",
    price: 69.99,
  },
  {
    name: "Split",
    image: ProduitSplitF,
    desc: "Un programme Split est un programme d'entraînement qui divise les groupes musculaires en plusieurs séances d'entraînement distinctes, généralement sur une base hebdomadaire. Les différents groupes musculaires sont travaillés lors de séances d'entraînement séparées pour permettre une récupération suffisante entre les entraînements.",
    price: 99.99,
  },
  {
    name: "Cardio",
    image: ProduitCardioF,
    desc: "Un programme Cardio est un programme d'entraînement qui vise à améliorer la santé cardiovasculaire et l'endurance en utilisant principalement des exercices aérobiques. Les exercices cardiovasculaires impliquent généralement des activités à faible impact telles que la course, le vélo, la natation ou la marche rapide. Ce type de programme est souvent utilisé par ceux qui cherchent à perdre du poids, à améliorer leur condition physique générale ou à réduire leur risque de maladies cardiovasculaires.",
    price: 17.99,
  },
  {
    name: "Abdominaux",
    image: ProduitAbsF,
    price: 29.99,
    desc: "Un programme Abdo est un programme d'entraînement qui vise à renforcer et à tonifier les muscles abdominaux. Les exercices de base tels que les crunchs, les sit-ups et les planches sont souvent inclus dans ces programmes, ainsi que des exercices ciblant les muscles obliques et les muscles profonds de la sangle abdominale. Ce type de programme est souvent utilisé par ceux qui cherchent à obtenir des abdominaux visibles et définis."
  },
];
export const progPersoH = [
  {
    name: "Masse",
    image: ProduitMasse,
    price: 199.99,
  },
  {
    name: "Sèche",
    image: ProduitCut,
    price: 199.99,
  },
  {
    name: "Accomplie",
    image: ProduitAccomplie,
    price: 199.99,
  },
];
export const progPersoF = [
  {
    name: "Masse",
    image: FemmeImg,
    price: 199.99,
  },
  {
    name: "Sèche",
    image: FemmeImg2,
    price: 199.99,
  },
  {
    name: "Accomplie",
    image: FemmeImg3,
    price: 199.99,
  },
];
