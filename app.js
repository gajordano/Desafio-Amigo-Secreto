// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo'); // Campo de texto para inserir o nome
    const listaAmigos = document.getElementById('listaAmigos'); // Lista de amigos
    const nome = amigoInput.value.trim(); // Obtém o valor do campo de texto e remove espaços em branco

    // Valida se o campo de texto está vazio
    if (nome === '') {
        alert('Por favor, insira um nome válido.'); // Exibe um alerta se o campo estiver vazio
        return;
    }

    // Verifica se o nome já existe na lista
    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado.'); // Exibe um alerta se o nome já estiver na lista
        return;
    }

    amigos.push(nome); // Adiciona o nome ao array de amigos
    amigoInput.value = ''; // Limpa o campo de texto
    atualizarLista(); // Atualiza a lista de amigos na tela
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos'); // Lista de amigos
    listaAmigos.innerHTML = ''; // Limpa a lista atual

    // Adiciona cada nome da lista ao HTML
    amigos.forEach(nome => {
        const li = document.createElement('li'); // Cria um novo elemento <li>
        li.textContent = nome; // Define o texto do <li> como o nome do amigo
        listaAmigos.appendChild(li); // Adiciona o <li> à lista
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    const resultado = document.getElementById('resultado'); // Div para exibir o resultado do sorteio

    // Verifica se há pelo menos dois amigos na lista
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.'); // Exibe um alerta se não houver amigos suficientes
        return;
    }

    // Sorteia um nome aleatório da lista
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceSorteado];

    // Exibe o resultado do sorteio
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSecreto}</strong></li>`;
}