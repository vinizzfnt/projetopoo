class Usuario {
    #nome;
    #id;
    #ativo;

    constructor(nome, id, ativo) {
        this.#nome = nome;
        this.#id = id;
        this.#ativo = ativo;
    }

    get nome() {
        return this.#nome;
    }

    get id() {
        return this.#id;
    }

    get ativo() {
        return this.#ativo;
    }

    ativarUsuario() {
        this.#ativo = true;
    }

    desativarUsuario() {
        this.#ativo = false;
    }
}

module.exports = Usuario;