// EXERCÍCIO 25 - REST PARAMETERS
// Crie uma função maiorNumero que receba uma quantidade indefinida de números
// utilizando Rest. A função deve retornar o maior valor recebido.
// Teste com pelo menos seis números.
//
// Escreva sua solução abaixo:

const maiorNumero = (...numeros) => {
  return Math.max(...numeros);
};

console.log(maiorNumero(10, 20, 32, 102, 10232, 1411));
