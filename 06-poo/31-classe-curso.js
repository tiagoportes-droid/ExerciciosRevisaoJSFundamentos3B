// EXERCÍCIO 31 - CLASSE E INSTÂNCIAS
// Crie uma classe Curso com constructor para nome, duracao e modalidade.
// Crie um método exibirInformacoes() e duas instâncias da classe.
// Mostre os dados dos dois cursos.
//
// Escreva sua solução abaixo:

class Curso {
  constructor(nome, duracao, modalidade) {
    this.nome = nome;
    this.duracao = duracao;
    this.modalidade = modalidade;
  }

  exibirInformacoes() {
    console.log(`O nome do curso é ${this.nome} | Duração ${this.duracao}hrs`);
  }
}

const curso = new Curso("Desenvolvimento de Sistemas", 16, "Presencial");
curso.exibirInformacoes();

const curso2 = new Curso("Metalurgia", 42, "EAD");
curso2.exibirInformacoes();
