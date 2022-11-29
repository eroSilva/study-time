/**
 * Criar um objeto para armazenar os dados de um profissional,
 * onde cada profissional deve conter:
 * - nome (string)
 * - sobrenome (string)
 * - idade (number)
 * - skills (array)
 * - endereco (objeto)
 *     - cep (string)
 *     - rua (string)
 *     - bairro (string)
 *     - cidade (string)
 *     - país (string)
 *
 * Em seguida, exiba na tela todas as informações desse profissional
 * numa única frase.
 * "Este é o profissional {{nome completo do profissional}}, de {{idade}} anos de idade.
 *  Ele reside no endereço {{endereço completo}}.
 *  Suas habilidades principais são {{skills}}."
 */

const profissional = {
  nome: "Monique",
  sobrenome: "Oliveira",
  idade: "28",
  skills: ["javascript", "html", "css"],
  endereco: {
    cep: "04314000",
    rua: "Simao da Matta",
    bairro: "Vila Guarani",
    cidade: "São Paulo",
    país: "Brasil",
  },
};

const exibeProfissional = `Esse profissional se chama ${profissional.nome} ${
  profissional.sobrenome
}, de ${profissional.idade} anos de idade. Ele reside no endereço ${
  profissional.endereco.rua
}, ${profissional.endereco.bairro}, ${profissional.endereco.cidade}, ${
  profissional.endereco.país
} - ${
  profissional.endereco.cep
}. Suas habilidades principais são:${profissional.skills.map((item) => {
  return ` ${item}`;
})}`;
console.log(exibeProfissional);
