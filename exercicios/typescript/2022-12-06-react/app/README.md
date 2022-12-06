## Setup de app react

Crie um projeto react com typescript dentro deste diretório. Devemos conseguir executar o app a partir desse diretório. Os demais exercícios serão feitos utilizando os recursos instalados aqui.

## Tipando props de um componente

Crie um componente chamado `Card`, dentro de um diretório `./components` que deve renderizar:

- uma imagem (Obrigatória)
- um título (Obrigatório)
- uma descrição (Opcional)
- um link (Opcional)

Implemente o card na App.tsx passando as informações acima por props.

## Reaproveitando tipos

Crie um componente `List` que recebe uma prop chamada `cards` (obrigatória). Essa prop vai receber um array com os dados que vamos usar para renderizar os Cards (mesmos dados do exercício anterior). Além disso, o `List` deve receber um `title` (obrigatório).

O tipo da prop `cards` deve ser o mesmo que foi definido no componente Card, porém, devemos conseguir renderizar N componentes.
