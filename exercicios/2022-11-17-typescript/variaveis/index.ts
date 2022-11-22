// Tipando variáveis

// Criar uma variável que só pode receber valores do tipo `string`

var foo:string = "bar"

// Criar uma variável que só pode receber valores numéricos

var numerinho:number = 123

// Criar uma variável que pode receber valores numéricos e strings

var numering: number | string = "Moniquinha"
numering = 13

// Criar uma variável que só pode receber valores boleanos

var boolinho: boolean = false

// Criar uma variável que só pode receber um objeto com as 
// chaves `id` como um número e `name` como uma string, ambas obrigatórias

var objetozinho: {
  id: number,
  name: string,
} = {
  id: 6,
  name: "hexa"
}

// Criar uma variável que só pode receber um objeto com as 
// chaves `id` como um número e `name` como uma string, ambas obrigatórias (Usando a notação type)

type objetozinhoTipo = {
  id: number
  name: string
}

var objetozinho: objetozinhoTipo = {
  id: 6,
  name: "Hex"
}


// Criar uma variável que só pode receber um objeto com as 
// chaves `id` como um número e `name` como uma string, ambas obrigatórias (Usando a notação interface)
interface ObjetozinhoInterface {
  id: number
  name: string
}

var objetozinho:ObjetozinhoInterface = {
  id: 13,
  name: 'mo',
}


// Criar uma variável que pode receber um objeto com as chaves `title` e `description` como string, 
// sendo que apenas `title` é obrigatória

type DataType = {
  title: string,
  description?: string,
  name?: string,
}

var data:DataType = {
  title: 'oi, tudo bem?'
}

var data:DataType = {
  title: 'oi, tudo bem?',
  description: 'ero',
  name: 'gui',
}