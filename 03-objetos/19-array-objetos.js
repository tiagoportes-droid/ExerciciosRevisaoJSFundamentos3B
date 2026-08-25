// EXERCÍCIO 19 - ARRAY DE OBJETOS
// Crie um array com três objetos de jogos.
// Cada jogo deve possuir titulo, plataforma e classificacao.
// Percorra o array e mostre o título e a plataforma de cada jogo.
//
// Escreva sua solução abaixo:

const jogos = [
  { titulo: "Zelda", platforma: "Console", classificacao: 12 },
  { titulo: "Mario", platforma: "Console", classificacao: 0 },
  { titulo: "Counter Strike", platforma: "Computador", classificacao: 18 },
];

jogos.forEach((games) => {
  console.log(games);
});
