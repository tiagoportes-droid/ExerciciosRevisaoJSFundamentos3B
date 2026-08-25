// EXERCÍCIO 21 - DESESTRUTURAÇÃO DE OBJETO
// Crie um objeto viagem com destino, dias e valor.
// Utilize desestruturação para criar variáveis com essas propriedades.
// Mostre as variáveis no console.
//
// Escreva sua solução abaixo:

const viagem = {
  destino: "Japão",
  dias: 31,
  valor: 3000,
};

const { nome, dias, valor } = viagem;

console.log(nome);
console.log(dias);
console.log(valor);
