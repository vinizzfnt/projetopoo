const prompt = require("prompt-sync")();

const Controlador = require("./Sistema");
const RegistroConsumo = require("./RegistrarConsumo");

const novoPredio = new Controlador();

const id = Number(prompt("ID do prédio: "));
const nome = prompt("Nome do prédio: ");
const localizacao = prompt("Localização: ");
const tipo = prompt("Tipo: ");
const limite = Number(prompt("Limite máximo: "));

console.log(
    novoPredio.adicionarPredio(id, nome, localizacao, tipo, limite)
); 
novoPredio.alerta();

console.log("==================");

novoPredio.gerarRelatorio();

console.log("==================");

novoPredio.consumoPorTipo("Instituição");

console.log("==================");

novoPredio.historicoOperacoes();