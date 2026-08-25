// EXERCÍCIO 32 - ENCAPSULAMENTO
// Crie uma classe CarteiraDigital com o campo privado #saldo.
// Crie os métodos adicionarCredito(valor), realizarPagamento(valor) e consultarSaldo().
// Não permita pagamentos maiores que o saldo disponível.
//
// Escreva sua solução abaixo:

class CarteiraDigital {
  #saldo = 0;

  adicionarCredito(valor) {
    this.#saldo += valor;
  }

  realizarPagamento(valor) {
    this.#saldo -= valor;
  }

  consultarSaldo() {
    console.log(`O seu saldo atual é de ${this.#saldo}`);
  }
}

const carteiraDigital = new CarteiraDigital();
carteiraDigital.adicionarCredito(1000);
carteiraDigital.realizarPagamento(100);

carteiraDigital.consultarSaldo();
