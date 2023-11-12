function logar() {
    a = 1;
    alert(a); // Usando 'alert' para exibir o valor atual de 'a'
    atualizarMenu(); // Chama a função para atualizar o menu
}

function deslogar() {
    a = 0;
    alert(a); // Usando 'alert' para exibir o valor atual de 'a'
    atualizarMenu(); // Chama a função para atualizar o menu
}

function atualizarMenu() {
    alert(a); // Usando 'alert' para exibir o valor atual de 'a'
    if (a == 1) {
        document.getElementById("menu").style.display = "none";
        document.getElementById("logmenu").style.display = "block";
    } else {
        document.getElementById("menu").style.display = "block";
        document.getElementById("logmenu").style.display = "none";
    }
}
