/**
 * Retornar um novo array apenas com os nomes que tem a letra H.
 */
const namesWithH = [
  "Maria",
  "Charles",
  "Joana",
  "Luiz",
  "Fernanda",
  "Thiago",
  "Bruno",
];

/**
 * Retornar um novo array com os profissionais que tem o cargo de Software Engineer
 */
const workers = [
  {
    job: "Software Engineer",
    name: "Maria",
  },
  {
    job: "Software Engineer",
    name: "Jonas",
  },
  {
    job: "Product Manager",
    name: "Gabi",
  },
  {
    job: "Team Lead",
    name: "Flávio",
  },
  {
    job: "Specialist",
    name: "Júlia",
  },
];

/**
 * Retornar um novo array com os profissionais que não falam ou que não sabemos se falam Inglês
 */
const workersWithoutEnglish = [
  {
    job: "Software Engineer",
    name: "Maria",
    speakEnglish: true,
  },
  {
    job: "Software Engineer",
    name: "Jonas",
    speakEnglish: false,
  },
  {
    job: "Product Manager",
    name: "Gabi",
  },
  {
    job: "Team Lead",
    name: "Flávio",
    speakEnglish: false,
  },
  {
    job: "Specialist",
    name: "Júlia",
    speakEnglish: true,
  },
];

/**
 * Retornar um novo array com as pessoas que tem ao menos dois produtos
 */
const peopleWithProducts = [
  {
    name: "Maria",
    products: ["a", "b", "c", "d"],
  },
  {
    name: "Jonas",
    products: [],
  },
  {
    job: "Product Manager",
    name: "Gabi",
    products: null,
  },
  {
    name: "Flávio",
    products: ["c", "d"],
  },
  {
    name: "Júlia",
    products: [1, 2, 3],
  },
];
