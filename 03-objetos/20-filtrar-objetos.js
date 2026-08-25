// EXERCÍCIO 20 - FILTRANDO OBJETOS
// Crie um array com cinco funcionários contendo nome e salario.
// Utilize filter() para selecionar funcionários com salário acima de R$ 3.000.
// Mostre o novo array.
//
// Escreva sua solução abaixo:

const funcionarios = [
  { nome: "Tiago", salario: 10000 },
  { nome: "Renan", salario: 1000 },
  { nome: "Matheus", salario: 500 },
  { nome: "João", salario: 3000 },
  { nome: "Ingrid", salario: 9000 },
];

const salario = funcionarios.filter((filtro) => filtro.salario > 3000);

console.log(salario);
