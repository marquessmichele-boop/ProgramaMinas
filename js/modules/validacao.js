export function validarFormulario(formulario) {

    let formularioValido = true;

    formulario.querySelectorAll("input, select, textarea").forEach(function (campo) {

        if (!campo.checkValidity()) {

            campo.classList.add("campo-erro");
            campo.setAttribute("aria-invalid", "true");

            formularioValido = false;

        } else {

            campo.classList.remove("campo-erro");
            campo.removeAttribute("aria-invalid");
        }
    });

    return formularioValido;
}


export function configurarValidacao() {

    document.addEventListener("input", function (event) {

        const campo = event.target;

        if (!campo.matches("#app input, #app select, #app textarea")) {
            return;
        }

        if (campo.checkValidity()) {
            campo.classList.remove("campo-erro");
            campo.removeAttribute("aria-invalid");
        }
    });

}