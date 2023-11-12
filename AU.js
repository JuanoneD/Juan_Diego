function logar() {
    a = 1;
    atualizarMenu(); // Chama a função para atualizar o menu
}

function deslogar() {
    a = 0;
    atualizarMenu(); // Chama a função para atualizar o menu
}

function atualizarMenu() {
    if (a == 1) {
        document.getElementById("menu").style.display = "none";
        document.getElementById("logmenu").style.display = "block";
    } else {
        document.getElementById("menu").style.display = "block";
        document.getElementById("logmenu").style.display = "none";
    }
}

// function prer_tab(){
//     document.getElementById("tabela1");
//     document.createElement("tr");
// }