function corsite(paginas) {
    paginas.body.classList.toggle("modoescuro");

    let texto = paginas.getElementsByClassName("menu");
    texto.classList.toggle("modoescuro");

    let but = pagina.getElementByClassName("btn-darlig");
    but.classList.toggle("modoescuro");
}

function salvarCadastro(user, senha){

    var users = []
    var senhas = []

    var valorUser = user;
    users.push(valorUser);

    var valorSenha = senha;
    senhas.push(valorSenha);

    alert(users, senhas);
}

function cadastrarConta(){

    let nome = document.getElementById("user").value;
    let senha = document.getElementById("senha").value;
    let confirmarSenha = document.getElementById("confirmarSenha").value;

    if (nome == null || senha == null || confirmarSenha == null || nome == "" || senha == "" || confirmarSenha == "") {
        window.alert("Todos os campos devem ser preenchidos corretamente.");
    }
    else {
        if (senha === confirmarSenha){
            window.alert("Conta cadastrada com sucesso");
            salvarCadastro(nome, senha);
        }
        else {
            window.alert("Senha e confirmar senha devem ser iguais.");
        }
    };
}
    function conf(){
        let form=document.getElementById("cadastro")
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            cadastrarConta()
        });
    }