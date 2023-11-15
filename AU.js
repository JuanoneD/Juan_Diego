
  function logar() {
    a = 1;
    atualizarMenu(); 
}

function deslogar() {
    a = 0;
    atualizarMenu(); 
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

  

const dados = [
    { nome: 'Jão Carlos', email: 'jãocarlos@gmail.com', telefone: '41 9991-1233', endereco: 'Rua da Terra Roxa' },
    { nome: 'Jão Carlos', email: 'jãocarlos@gmail.com', telefone: '41 9991-1233', endereco: 'Rua da Terra Roxa' },
    { nome: 'Jão Carlos', email: 'jãocarlos@gmail.com', telefone: '41 9991-1233', endereco: 'Rua da Terra Roxa' },
  ];
  
  function preencherTabela() {
    const tabela = document.getElementById('minhaTabela');
    const corpoTabela = tabela.getElementsByTagName('tbody')[0];
  

    for (let i = 0; i < dados.length; i++) {
      const linha = document.createElement('tr');
      const dado = dados[i];
  

      const celulaNome = document.createElement('td');
      celulaNome.textContent = dado.nome;
      const celulaEmail = document.createElement('td');
      celulaEmail.textContent = dado.email;
      const celulaTelefone = document.createElement('td');
      celulaTelefone.textContent = dado.telefone;
      const celulaEndereco = document.createElement('td');
      celulaEndereco.textContent = dado.endereco;
      const celulaAcoes = document.createElement('td');
      

      const linkEditar = document.createElement('a');
      linkEditar.href = '#';
      const imgEditar = document.createElement('img');
      imgEditar.src = 'src\ed.png';
      imgEditar.height = '20px';
      linkEditar.appendChild(imgEditar);
  
      const linkExcluir = document.createElement('a');
      linkExcluir.href = '#';
      const imgExcluir = document.createElement('img');
      imgExcluir.src = 'src\ex.png';
      imgExcluir.height = '20px';
      linkExcluir.appendChild(imgExcluir);
  

      celulaAcoes.appendChild(linkEditar);
      celulaAcoes.appendChild(linkExcluir);

      linha.appendChild(celulaNome);
      linha.appendChild(celulaEmail);
      linha.appendChild(celulaTelefone);
      linha.appendChild(celulaEndereco);
      linha.appendChild(celulaAcoes);
  
      corpoTabela.appendChild(linha);
    }
  }