function corsite(paginas) {
    paginas.body.classList.toggle("modoescuro");

    let texto = paginas.getElementsByClassName("menu");
    texto.classList.toggle("modoescuro");

    let but = pagina.getElementByClassName("btn-darlig");
    but.classList.toggle("modoescuro");
}

function cadastrarConta(paginaCadastro){

    let nome = paginaCadastro.getElementById("user").value;
    let senha = paginaCadastro.getElementById("senha").value;
    let confirmarSenha = paginaCadastro.getElementById("confirmarSenha").value;

    if (nome == null || senha == null || confirmarSenha == null || nome == "" || senha == "" || confirmarSenha == "") {
            window.alert("Todos os campos devem ser preenchidos corretamente.");
    }
    else {
        if (senha == confirmarSenha){
            window.alert("Senha e confirmar senha são iguais.");
        }
        else {
            window.alert("Senha e confirmar senha devem ser iguais.");
        }
    };
}