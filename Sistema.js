const Predio = require("./Predio");
const Usuario = require("./Usuario");
const Operacao = require("./Operacao");

class Sistema {

    #predios;
    #operacoes;
    #usuario;

    constructor() {
        this.#predios = [];
        this.#operacoes = [];
        this.#usuario = new Usuario("Administrador", 1, true);
    }


    verificarUsuarioAtivo() {
        if (!this.#usuario.ativo) {
            throw new Error("Usuário inativo não pode realizar operações no sistema");
        }
    }

    adicionarPredio(id, nome, localizacao, tipo, limiteMaximo) {


        this.verificarUsuarioAtivo();

        const predioRepetido = this.#predios.find(p => p.id === id);

        if (predioRepetido) {
            return `O ID ${id} já foi cadastrado`;
        }

        const novoPredio = new Predio(id, nome, localizacao, tipo, limiteMaximo);
        this.#predios.push(novoPredio);

        this.#operacoes.push(
            new Operacao(
                `Prédio ${nome} cadastrado`,
                this.#usuario.nome
            )
        );

    return `Prédio ${nome} cadastrado com sucesso`;
    }

    registrarConsumo(idPredio, objetoConsumo) {


        this.verificarUsuarioAtivo();

        const predioEncontrado = this.#predios.find(p => p.id === idPredio);

        if (predioEncontrado) {

            predioEncontrado.registrarConsumo(objetoConsumo);

            this.#operacoes.push(
                new Operacao(
                    `Consumo registrado para ${predioEncontrado.nome}`,
                    this.#usuario.nome
                )
            );
        }
    }

    alerta() {

        for (let i = 0; i < this.#predios.length; i++) {

            let soma = this.#predios[i].obterSomaConsumo();

            if (soma > this.#predios[i].limiteMaximo) {

                console.log(`ALERTA! Seu consumo é ${soma} e passou do limite máximo ${this.#predios[i].limiteMaximo}`);

            } else {

                console.log(`Resumo - ${this.#predios[i].nome}: Seu consumo: ${soma} | Seu limite: ${this.#predios[i].limiteMaximo}`);

            }

        }

    }

   gerarRelatorio() {

    if (this.#predios.length === 0) {
        console.log("Nenhum prédio cadastrado.");
        return;
    }

    for (let i = 0; i < this.#predios.length; i++) {

        console.log(`\nPrédio: ${this.#predios[i].nome}`);
        console.log(`ID: ${this.#predios[i].id}`);
        console.log(`Localização: ${this.#predios[i].localizacao}`);
        console.log(`Tipo: ${this.#predios[i].tipo}`);
        console.log(`Limite máximo: ${this.#predios[i].limiteMaximo}`);
        console.log(`Consumo total: ${this.#predios[i].obterSomaConsumo()}`);

        console.log("Registros de consumo:");

        if (this.#predios[i].consumo.length === 0) {
            console.log("Nenhum consumo registrado.");
        } else {
            for (let j = 0; j < this.#predios[i].consumo.length; j++) {
                console.log(
                    `- ${this.#predios[i].consumo[j].nome} | Valor: ${this.#predios[i].consumo[j].valor} | Data: ${this.#predios[i].consumo[j].data}`
                );
            }
        }
    }
}

    consumoPorTipo(tipo) {

        let soma = 0;

        for (let i = 0; i < this.#predios.length; i++) {

            if (this.#predios[i].tipo === tipo) {
                soma += this.#predios[i].obterSomaConsumo();
            }

        }

       console.log(`O total de energia gasta por "${tipo}" foi ${soma}`);
    }

    historicoOperacoes() {

        for (let i = 0; i < this.#operacoes.length; i++) {
            console.log(this.#operacoes[i].descricao());
        }

    }
}

module.exports = Sistema;
