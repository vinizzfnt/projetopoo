const prompt = require("prompt-sync")();

const Controlador = require("./Controlador");
const RegistroConsumo = require("./RegistrarConsumo");

const sistema = new Controlador();

let opcao;

do {
    console.log("--------- MENU -----------");
    console.log("1 - Cadastrar prédio");
    console.log("2 - Registrar consumo");
    console.log("3 - Ver alertas");
    console.log("4 - Gerar relatório");
    console.log("5 - Consumo por tipo");
    console.log("6 - Histórico de operações");
    console.log("7 - Panorama geral");
    console.log("0 - Sair");

    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {

        case "1":
            console.log("Cadastro de Prédio");

            const id = Number(prompt("ID: "));
            const nome = prompt("Nome: ");
            const localizacao = prompt("Localização: ");
            const tipo = prompt("Tipo: ");
            const limite = Number(prompt("Limite máximo: "));

            console.log(sistema.adicionarPredio(id, nome, localizacao, tipo, limite));
            break;

        case "2":
            console.log("Registro de Consumo");

            const idPredio = Number(prompt("ID do prédio: "));
            const nomeRegistro = prompt("Nome do registro: ");
            const valor = Number(prompt("Valor do consumo: "));
            const data = prompt("Data: ");

            try {
                const consumo = new RegistroConsumo(nomeRegistro, valor, data);
                sistema.registrarConsumo(idPredio, consumo);
                console.log("Consumo registrado com sucesso!");
            } catch (erro) {
                console.log(erro.message);
            }
            break;

        case "3":
            console.log("ALERTAS");
            sistema.alerta();
            break;

        case "4":
            console.log("RELATÓRIO");
            sistema.gerarRelatorio();
            break;

        case "5":
            console.log("CONSUMO POR TIPO");
            const tipoBusca = prompt("Digite o tipo: ");
            sistema.consumoPorTipo(tipoBusca);
            break;

        case "6":
            console.log("HISTÓRICO DE OPERAÇÕES");
            sistema.historicoOperacoes();
            break;

        case "7":
            console.log("PANORAMA GERAL");
            console.log("Alertas");
            sistema.alerta();

            console.log("Relatório");
            sistema.gerarRelatorio();

            console.log("Histórico");
            sistema.historicoOperacoes();
            break;

        case "0":
            console.log("Sistema encerrado.");
            break;

        default:
            console.log("\nOpção inválida!");
    }

} while (opcao !== "0");
