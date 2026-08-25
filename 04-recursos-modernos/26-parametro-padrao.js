// EXERCÍCIO 26 - PARÂMETRO PADRÃO
// Crie uma função calcularEntrega que receba valor e taxa.
// O parâmetro taxa deve possuir o valor padrão 10.
// Retorne a soma do valor com a taxa e teste informando e omitindo a taxa.
//
// Escreva sua solução abaixo:

const padrao = (nome = "Visitante") => {
  console.log(`Hello, ${nome}`);
};

padrao();
padrao("Tiago");
