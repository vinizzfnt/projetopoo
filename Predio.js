class Predio {

    #id;
    #nome;
    #localizacao;
    #tipo;
    #limiteMaximo;
    #consumo;

    constructor(id, nome, localizacao, tipo, limiteMaximo) {
        this.#id = id;
        this.#nome = nome;
        this.#localizacao = localizacao;
        this.#tipo = tipo;
        this.#limiteMaximo = limiteMaximo;
        this.#consumo = [];
    }

    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    get localizacao() {
        return this.#localizacao;
    }

    get tipo() {
        return this.#tipo;
    }

    get limiteMaximo() {
        return this.#limiteMaximo;
    }

    get consumo() {
        return this.#consumo;
    }

    registrarConsumo(objetoConsumo) {
        this.#consumo.push(objetoConsumo);
    }

    obterSomaConsumo() {
        let soma = 0;

        for (let j = 0; j < this.#consumo.length; j++) {
            soma += this.#consumo[j].valor;
        }

        return soma;
    }
}

module.exports = Predio;