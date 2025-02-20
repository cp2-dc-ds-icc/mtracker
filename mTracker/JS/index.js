function corsite(paginas){
    paginas.body.classList.toggle("modoescuro");

    let texto = paginas.getElementsByClassName("menu");
    texto.classList.toggle("modoescuro");

    let but = pagina.getElementByClassName("btn-darlig");
    but.classList.toggle("modoescuro");
    }

function cadastrarConta(){

    let nome = document.getElementById("user").value;
    let senha = document.getElementById("senha").value;
    let confirmarSenha = document.getElementById("confirmarSenha").value;

    if (nome === "" || senha === "" || confirmarSenha === "") {
        window.alert("Todos os campos devem ser preenchidos corretamente.");
    }
    else {
        if (localStorage.getItem(nome) === null){
            if (senha === confirmarSenha){
                window.alert("Conta cadastrada com sucesso");
                localStorage.setItem(nome, senha);
                window.location.href = "../login.html";
            }
            else {
                window.alert("Senha e confirmar senha devem ser iguais.");
            }
        }
        else {
            window.alert("Nome de usuário já cadastrado.");
        }
    };
    }

function logarConta(){

    let nome = document.getElementById("user").value;
    let senha = document.getElementById("senha").value;

    if (localStorage.getItem(nome) === null){
        window.alert("Conta inexistente.");
    }
    else if (localStorage.getItem(nome) !== senha){
        window.alert("Senha incorreta.");
    }
    else {
        window.alert("Logado.")
        window.location.href = "../index.html";
    }
}