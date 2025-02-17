function corsite(paginas) {
    paginas.body.classList.toggle("modoescuro");

    let texto = paginas.getElementsByClassName("menu");
    texto.classList.toggle("modoescuro");

    let but = pagina.getElementByClassName("btn-darlig");
    but.classList.toggle("modoescuro");
}

function cadastrarConta(paginaCadastro){
    let nome = paginaCadastro.getElementById("user");
    let senha = paginaCadastro.getElementById("senha");
    let confirmarSenha = paginaCadastro.getElementById("confirmarSenha");

    if (nome == null || senha == null || confirmarSenha == null) {
        if (nome == null && senha == null && confirmarSenha == null){
            window.alert("Todos os campos devem ser preenchidos.")
        }
        else {
            window.alert("Todos os campos devem ser preenchidos.")
            }
    }
    else {
        if (senha != confirmarSenha){
            window.alert("Senha e confirmar senha devem ser iguais.")
        }
    }
}