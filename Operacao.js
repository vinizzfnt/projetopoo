class Operacao {
    #registro;
    #responsavel;
    #data;

    constructor(registro, responsavel) {
        this.#registro = registro;
        this.#responsavel = responsavel;
        this.#data = new Date();
    }

    get registro() {
        return this.#registro;
    }

    get responsavel() {
        return this.#responsavel;
    }

    get data() {
        return this.#data;
    }

    descricao() {
      return `Responsável: ${this.#responsavel}, Data: ${this.#data.toLocaleString("pt-BR")}, Resumo: ${this.#registro}`;
    }
}

module.exports = Operacao;