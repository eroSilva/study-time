/**
 * Criar um clone completo do objeto do exemplo. Depois disso,
 * alterar o valor da propriedade details.options.ready para false
 * apenas do objeto clonado
 */

const data = {
  information: "a",
  details: {
    title: "b",
    description: "c",
    options: {
      id: 123,
      ready: true,
    },
  },
};

const cloneData = JSON.parse(JSON.stringify(data));
cloneData.details.options.ready = false;
cloneData.information = "Rhay";

console.log("data", data);
console.log("cloneData", cloneData);
