// EXERCÍCIO 16 - ALTERANDO PROPRIEDADE
// Crie um objeto ingresso com evento, preco e quantidade.
// Altere o preço e aumente a quantidade em duas unidades.
// Mostre o objeto antes e depois das alterações.
//
// Escreva sua solução abaixo:

const ingresso = {
  evento: "Rock in Rio",
  preco: 190,
  quantidade: 2,
};

console.log(ingresso);

ingresso.preco = 200;
ingresso.quantidade = 4;

console.log(ingresso);
