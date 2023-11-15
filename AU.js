
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

  
// Suponha que você tenha um array de objetos representando dados
const dados = [
    { nome: 'Jão Carlos', email: 'jãocarlos@gmail.com', telefone: '41 9991-1233', endereco: 'Rua da Terra Roxa' },
    { nome: 'Jão Carlos', email: 'jãocarlos@gmail.com', telefone: '41 9991-1233', endereco: 'Rua da Terra Roxa' },
    { nome: 'Jão Carlos', email: 'jãocarlos@gmail.com', telefone: '41 9991-1233', endereco: 'Rua da Terra Roxa' },
    // Adicione mais objetos conforme necessário
  ];
  
  // Função para preencher a tabela
  function preencherTabela() {
    const tabela = document.getElementById('minhaTabela');
    const corpoTabela = tabela.getElementsByTagName('tbody')[0];
  
    // Percorre os dados e cria uma linha para cada item
    for (let i = 0; i < dados.length; i++) {
      const linha = document.createElement('tr');
      const dado = dados[i];
  
      // Cria células para cada propriedade do objeto
      const celulaNome = document.createElement('td');
      celulaNome.textContent = dado.nome;
      const celulaEmail = document.createElement('td');
      celulaEmail.textContent = dado.email;
      const celulaTelefone = document.createElement('td');
      celulaTelefone.textContent = dado.telefone;
      const celulaEndereco = document.createElement('td');
      celulaEndereco.textContent = dado.endereco;
      const celulaAcoes = document.createElement('td');
      
      // Criação dos links de ação
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
  
      // Adiciona os links de ação na célula de ações
      celulaAcoes.appendChild(linkEditar);
      celulaAcoes.appendChild(linkExcluir);
  
      // Adiciona as células na linha
      linha.appendChild(celulaNome);
      linha.appendChild(celulaEmail);
      linha.appendChild(celulaTelefone);
      linha.appendChild(celulaEndereco);
      linha.appendChild(celulaAcoes);
  
      // Adiciona a linha ao corpo da tabela
      corpoTabela.appendChild(linha);
    }
  }