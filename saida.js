const prompt = require("prompt-sync")();

const Controlador = require("./Controlador");
const RegistroConsumo = require("./RegistroConsumo");

const sistema = new Controlador();

console.log("=== Cadastro de Prédio ===");

const id = Number(prompt("ID: "));
const nome = prompt("Nome: ");
const localizacao = prompt("Localização: ");
const tipo = prompt("Tipo: ");
const limite = Number(prompt("Limite máximo: "));

console.log(sistema.adicionarPredio(id, nome, localizacao, tipo, limite));

console.log("\n=== Registro de Consumo ===");

const idPredio = Number(prompt("ID do prédio: "));
const nomeRegistro = prompt("Nome do registro: ");
const valor = Number(prompt("Valor do consumo: "));
const data = prompt("Data: ");

try {
    const consumo = new RegistroConsumo(nomeRegistro, valor, data);
    sistema.registrarConsumo(idPredio, consumo);
} catch (erro) {
    console.log(erro.message);
}

console.log("\n=== ALERTA ===");
sistema.alerta();

console.log("\n=== RELATÓRIO ===");
sistema.gerarRelatorio();

console.log("\n=== CONSUMO POR TIPO ===");
const tipoBusca = prompt("Digite o tipo: ");
sistema.consumoPorTipo(tipoBusca);

console.log("\n=== HISTÓRICO ===");
sistema.historicoOperacoes();
