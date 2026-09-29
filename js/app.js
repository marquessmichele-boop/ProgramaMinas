import { paginas } from "./modules/paginas.js";
import { configurarNavegacao } from "./modules/navegacao.js";
import { configurarValidacao } from "./modules/validacao.js";
import { salvarCadastro } from "./modules/armazenamento.js";

const app = document.querySelector("#app");

configurarNavegacao(paginas, app);

configurarValidacao();

document.addEventListener("submit", function (event) {

    const formulario = event.target;

    if (!formulario.closest("#app")) {
        return;
    }

    event.preventDefault();

    if (!formulario.checkValidity()) {
        return;
    }

    salvarCadastro(formulario);

    alert("Cadastro preenchido corretamente!");
});