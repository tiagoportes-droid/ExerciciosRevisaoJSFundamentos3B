// EXERCÍCIO 30 - SIMULANDO RESPOSTA DE API
// Crie um objeto resposta com as propriedades status, quantidade e clientes.
// A propriedade clientes deve conter um array com dois objetos.
// Converta a resposta para JSON e depois novamente para objeto.
// Mostre o status e os clientes recebidos.
//
// Escreva sua solução abaixo:

const simuAPI = [
  { status: true, quantidade: 4, cliente: [{ nome: "Tiago", idade: 16 }] },
  { status: false, quantidade: 20, cliente: [{ nome: "Pablo", idade: 17 }] },
];

const json = JSON.stringify(simuAPI);
console.log(json);

const json2 = JSON.parse(json);
console.log(json2);
