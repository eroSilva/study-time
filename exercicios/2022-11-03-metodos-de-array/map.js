/**
 * Retornar um novo array onde cada item deve estar com o valor dobrado
 **/
// const array = [1, 2, 3, 4, 5];
// const newArray = array.map((number) => {
//   return number * 2;
// });
// console.log(newArray);

/**
 * Retornar um novo array onde cada item deve ser um objeto com as chaves **id** e **name**,
 * sendo o **id** o índice  do item e o **name** o valor do item do array original
 **/
// const array = ["Maria", "Joana", "Luiz", "Fernanda", "Bruno"];

// const objectNames = array.map((name, index) => {
//   return {
//     name,
//     id: index,
//   };
// });

// console.log(objectNames);

/**
 * Retornar um novo array apenas com o valor da chave name
 **/
// const array = [
//   {
//     id: 0,
//     name: "Maria",
//   },
//   {
//     id: 1,
//     name: "Jonas",
//   },
//   {
//     id: 2,
//     name: "Gabi",
//   },
//   {
//     id: 3,
//     name: "Flávio",
//   },
//   {
//     id: 4,
//     name: "Júlia",
//   },
// ];

// const nossoArray = array.map((item) => {
//   return item.name;
// });

// console.log(newArray);

/**
 * Retornar um novo array acrescentando a propriedade fullName em cada item, onde o valor dessa propriedade será a junção do name e do lastName
 **/
// const array = [
//   {
//     name: "Maria",
//     lastName: "Santos",
//   },
//   {
//     name: "Jonas",
//     lastName: "Souza",
//   },
//   {
//     name: "Gabi",
//     lastName: "Oliveira",
//   },
//   {
//     name: "Flávio",
//     lastName: "Silva",
//   },
//   {
//     name: "Júlia",
//     lastName: "Braga",
//   },
// ];

// const newArray = array.map(({ name, lastName }) => {
//   return {
//     name,
//     lastName,
//     fullName: `${name} ${lastName}`,
//   };
// });

// console.log(newArray);
