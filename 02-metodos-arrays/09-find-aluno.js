// EXERCÍCIO 09 - FIND - ALUNO
// Crie um array de objetos com nome e matrícula de quatro alunos.
// Utilize find() para localizar o aluno com a matrícula 103.
// Mostre o aluno encontrado.
//
// Escreva sua solução abaixo:

const alunos = [
  { nome: "Ingrid", matricula: 100 },
  { nome: "Tiago", matricula: 101 },
  { nome: "Matheus", matricula: 102 },
  { nome: "João", matricula: 103 },
];

const findAluno = alunos.find(
  (numeroMatricula) => numeroMatricula.matricula === 103,
);

console.log(`O aluno ${findAluno.nome} possui a maticula 103`);
