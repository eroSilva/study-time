/**
 * Exibir todos os itens do array no console sendo que cada log deve ter um texto concatenado com o **item** e o seu **índice**.
 **/
const letras = ["a", "b", "c", "d", "e"];
letras.forEach((element, index) => {
  console.log(`O item é ${element} e o índice é ${index}`);
});

/**
 * Exibir todos os itens maiores ou iguais a 70
 **/
const numeros = [47, 50, 51, 70, 71, 89, 97, 101, 120];
numeros.forEach((element) => {
  if (element >= 70) console.log(element);
});

/**
 * Exibir a quantidade de nomes que tem Souza no sobrenome
 **/
const nomes = [
  "Maria Sousa Filha",
  "Benedida Martins",
  "Sergio alves",
  "Bruno Souza",
  "Jéssica Santos",
  "Paulo Martins Sereno",
  "Mercedes Benz",
  "João Gonçalves",
  "Souza Junior",
  "Carlos da Silva souza",
  "Bianca da Silva sOuza",
];

let count = 0;

nomes.forEach((element) => {
  if (element.toLowerCase().includes(" souza")) {
    count++;
    console.log(element);
  }
});

console.log(count);
