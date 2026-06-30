const Sistema = require("./Sistema");

class Controlador {

    constructor() {
        this.sistema = new Sistema();
    }

    adicionarPredio(id, nome, localizacao, tipo, limiteMaximo) {
        return this.sistema.adicionarPredio(id, nome, localizacao, tipo, limiteMaximo);
    }

    registrarConsumo(idPredio, objetoConsumo) {
        this.sistema.registrarConsumo(idPredio, objetoConsumo);
    }

    alerta() {
        this.sistema.alerta();
    }

    gerarRelatorio() {
        this.sistema.gerarRelatorio();
    }

    consumoPorTipo(tipo) {
        this.sistema.consumoPorTipo(tipo);
    }

    historicoOperacoes() {
        this.sistema.historicoOperacoes();
    }

}

module.exports = Controlador;