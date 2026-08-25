// EXERCÍCIO 10 - FINDINDEX - SETOR
// Crie um array com os setores: Vendas, Financeiro, TI e RH.
// Utilize findIndex() para descobrir a posição de "TI".
// Mostre o índice encontrado.
//
// Escreva sua solução abaixo:

const setores = ["Vendas", "Finaceiro", "TI", "RH"];

const findSetor = setores.findIndex((setor) => setor === "TI");
console.log(`O setor de TI é o ${findSetor}º`)