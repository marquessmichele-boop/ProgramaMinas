export function salvarCadastro(formulario) {

    const cadastro = {
        nome: formulario.querySelector("#nome").value,
        email: formulario.querySelector("#email").value,
        telefone: formulario.querySelector("#telefone").value,
        cpf: formulario.querySelector("#cpf").value,
        cep: formulario.querySelector("#cep").value,
        interesse: formulario.querySelector("#interesse").value,
        historia: formulario.querySelector("#historia").value
    };

    localStorage.setItem("cadastro", JSON.stringify(cadastro));
}


export function recuperarCadastro() {

    const dados = localStorage.getItem("cadastro");

    if (!dados) {
        return null;
    }

    return JSON.parse(dados);
}