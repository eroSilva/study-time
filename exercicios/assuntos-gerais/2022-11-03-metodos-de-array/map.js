/**
 * Retornar um novo array onde cada item deve estar com o valor dobrado
 **/
const numbers = [1, 2, 3, 4, 5];
const newNumbers = array.map((number) => {
  return number * 2;
});
console.log(newNumbers);

/**
 * Retornar um novo array onde cada item deve ser um objeto com as chaves **id** e **name**,
 * sendo o **id** o índice  do item e o **name** o valor do item do array original
 **/
const names = ["Maria", "Joana", "Luiz", "Fernanda", "Bruno"];

const objectNames = names.map((name, index) => {
  return {
    name,
    id: index,
  };
});

console.log(objectNames);

/**
 * Retornar um novo array apenas com o valor da chave name
 **/
const person = [
  {
    id: 0,
    name: "Maria",
  },
  {
    id: 1,
    name: "Jonas",
  },
  {
    id: 2,
    name: "Gabi",
  },
  {
    id: 3,
    name: "Flávio",
  },
  {
    id: 4,
    name: "Júlia",
  },
];

const personNames = array.map((item) => {
  return item.name;
});

console.log(personNames);

/**
 * Retornar um novo array acrescentando a propriedade fullName em cada item, onde o valor dessa propriedade será a junção do name e do lastName
 **/
const person2 = [
  {
    name: "Maria",
    lastName: "Santos",
  },
  {
    name: "Jonas",
    lastName: "Souza",
  },
  {
    name: "Gabi",
    lastName: "Oliveira",
  },
  {
    name: "Flávio",
    lastName: "Silva",
  },
  {
    name: "Júlia",
    lastName: "Braga",
  },
];

const personFull = person2.map(({ name, lastName }) => {
  return {
    name,
    lastName,
    fullName: `${name} ${lastName}`,
  };
});

console.log(personFull);
