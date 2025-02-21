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
        localStorage.setItem("logado", "true");
        localStorage.setItem("usuarioLogado", nome);
        window.location.href = "../index.html";
    }
}

function verificarLogin(){
    let status = localStorage.getItem("logado")
    if (status === "true"){
        window.alert("Você já está logado.");
        window.location.href = "../sair.html";
    }
}

function permissaoEntrar(){
    let status = localStorage.getItem("logado")
    if (status !== "true"){
        window.alert("Você ainda não está logado.");
        window.location.href = "../login.html";
    }
}

function logout(){
    localStorage.removeItem("logado");
    localStorage.removeItem("usuarioLogado");
    window.location.href = "../login.html";
}

function fazerPost(){
    let usuario = localStorage.getItem("usuarioLogado");
    let postagem = document.getElementById("post").value;
    let postagemLista = document.getElementById("postagens");

    if (postagem === ""){
        window.alert("A postagem não pode estar vázia.");
    } 
    else{
        let li = document.createElement("li");
        li.innerHTML = usuario + ": " + postagem;

        postagemLista.appendChild(li);
        document.getElementById("post").value = "";
        salvarComentario(usuario, postagem);
    }
}

function salvarComentario(user, post) {
    let posts = localStorage.getItem("posts");
    if (!posts){
        posts = "";
    }
    else {
        posts += "\n";
    }
    posts += user + ": " + post;
    localStorage.setItem("posts", posts);
}

function carregarPosts(){
    let posts = localStorage.getItem("posts");
    let postsLista = document.getElementById("postagens");

    postsLista.innerHTML = "";

    if(posts){
        let listaPosts = posts.split("\n");
        listaPosts.forEach(postagem => {
            let li = document.createElement("li");
            li.innerHTML = postagem;
            postsLista.appendChild(li);
        });
    }
}