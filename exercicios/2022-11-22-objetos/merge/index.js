/**
 * Crie um novo objeto unindo os dois objetos abaixo
 */

const person = {
  id: "personID123123",
  name: "Bruno",
  age: 27,
};

const job = {
  id: "jobID12412",
  title: "Engineer",
  skills: ["HTML", "CSS", "JS"],
};

const human = { ...job, ...person };

// console.log(human);

/**
 * Crie um novo objeto unindo os dois objetos abaixo usando um
 * método do Object
 */

const mergeObject = Object.assign(job, person);

console.log(mergeObject);
