// EXERCÍCIO 33 - GETTERS E SETTERS
// Crie uma classe Aluno com o campo privado #nota.
// Crie get nota e set nota. O setter deve aceitar somente valores entre 0 e 10.
// Crie um aluno, altere sua nota e mostre o resultado.
//
// Escreva sua solução abaixo:

class Aluno {
  #nota;

  constructor(nome, nota) {
    this.nome = nome;
    this.nota = nota;
  }


  get nota() {
    return this.#nota;
  }


  set nota(valor) {
    if (valor >= 0 && valor <= 10) {
      this.#nota = valor;
    } else {
      console.log(`Nota inválida (${valor}). A nota deve estar entre 0 e 10.`);
    }
  }
}


const aluno1 = new Aluno("Ingrid", 7);
console.log(`Nota inicial de ${aluno1.nome}: ${aluno1.nota}`); // 7


aluno1.nota = 9.5;
console.log(`Nova nota de ${aluno1.nome}: ${aluno1.nota}`); // 9.5


aluno1.nota = 12;
console.log(`Nota após tentativa inválida: ${aluno1.nota}`); 