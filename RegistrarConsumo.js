class RegistroConsumo {
    #nome;
    #valor;
    #data;

    constructor(nome, valor, data) {

        if (valor < 0) {
            throw new Error("O valor de consumo não pode ser negativo");
        }

        this.#nome = nome;
        this.#valor = valor;
        this.#data = data;
    }

    get nome() {
        return this.#nome;
    }

    get valor() {
        return this.#valor;
    }

    get data() {
        return this.#data;
    }
}

module.exports = RegistroConsumo;