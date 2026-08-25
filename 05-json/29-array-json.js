// EXERCÍCIO 29 - ARRAY EM JSON
// Crie um array com três objetos de tarefas contendo id, descricao e concluida.
// Converta o array para JSON e mostre o resultado.
//
// Escreva sua solução abaixo:

const tarefas = [
  { id: 1, descricao: "Comer", concluida: true },
  { id: 2, descricao: "Correr", concluida: false },
  { id: 3, descricao: "respirar", concluida: true },
];
const json = JSON.stringify(tarefas);

console.log(json)