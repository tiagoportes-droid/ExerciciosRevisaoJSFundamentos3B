// EXERCÍCIO 34 - HERANÇA E SUPER
// Crie uma classe Produto com nome, preço e um método exibirDados().
// Crie a classe ProdutoDigital que herde de Produto e receba também o tamanhoArquivo.
// Utilize super() no constructor e sobrescreva exibirDados() incluindo o tamanho.
//
// Escreva sua solução abaixo:

class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  exibirDados() {
    console.log(`O produto ${this.nome} tem o preço de R$ ${this.preco}`);
  }
}

class ProdutoDigital extends Produto {
  constructor(nome, preco, tamanhoArquivo) {
    super(nome, preco);
    this.tamanhoArquivo = tamanhoArquivo;
  }

  exibirDados() {
    console.log(
      `O produto ${this.nome} tem o preço de R$ ${this.preco} e ocupa ${this.tamanhoArquivo}MB.`,
    );
  }
}

const ebook = new ProdutoDigital("E-book de JavaScript", 29.9, 15);
ebook.exibirDados();
