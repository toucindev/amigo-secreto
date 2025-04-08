let amigosLista = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo').value.trim();

    if (amigo.length === 0) {
        alert('Por favor, informe o nome do amigo antes de adicionar.');
        return;
    }

    if (amigosLista.includes(amigo)) {
        alert(`O amigo "${amigo}" já foi adicionado à lista.`);
        return;
    }

    amigosLista.push(amigo);
    document.getElementById('lista-amigos').textContent = amigosLista.join(', ');
    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    if (amigosLista.length === 0) {
        alert('A lista de amigos está vazia. Adicione pelo menos dois nomes.');
        return;
    }

    if (amigosLista.length % 2 !== 0) {
        alert('Para realizar o sorteio, a quantidade de amigos deve ser um número **par**.');
        return;
    }

    let amigosEmbaralhados = [];

    while (amigosEmbaralhados.length < amigosLista.length) {
        let amigo;
        do {
            let indiceAleatorio = gerarAmigoAleatorio(amigosLista.length);
            amigo = amigosLista[indiceAleatorio];
        } while (amigosEmbaralhados.includes(amigo));

        amigosEmbaralhados.push(amigo);
    }

    let html = document.querySelector('.prizeDraw__container');
    html.innerHTML = '';

    for (let x = 0; x < amigosEmbaralhados.length; x += 2) {
        html.innerHTML += `<p class="lista-sorteio">${amigosEmbaralhados[x]} → ${amigosEmbaralhados[x + 1]}</p>`;
    }
}

function gerarAmigoAleatorio(qtd) {
    return Math.floor(Math.random() * qtd);
}

function reiniciar() {
    amigosLista = [];
    document.querySelector('.prizeDraw__container').innerHTML = '';
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('nome-amigo').value = '';
}
