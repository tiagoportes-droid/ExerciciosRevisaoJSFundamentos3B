// EXERCÍCIO 08 - FILTER - TEMPERATURAS
// Considere as temperaturas: [18, 25, 31, 16, 29, 35, 22].
// Utilize filter() para selecionar somente temperaturas acima de 25 graus.
//
// Escreva sua solução abaixo:

const temp = [18, 25, 31, 16, 29, 35, 22];

const filtrarTemperatura = temp.filter((temperatura) => temperatura > 25);

console.log(filtrarTemperatura);
