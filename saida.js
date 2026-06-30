const PromptSync = require("prompt-sync");

const Controlador = require("./Controlador");
const RegistroConsumo = require("./RegistroConsumo");

const novoPredio = new Controlador();

const id = Number(prompt("ID do prédio: "));
const nome = prompt("Nome do prédio: ");
const localizacao = prompt("Localização: ");
const tipo = prompt("Tipo: ");
const limite = Number(prompt("Limite máximo: "));

console.log(
    novoPredio.adicionarPredio(id, nome, localizacao, tipo, limite)
); 
