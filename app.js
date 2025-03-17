//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let input = document.querySelector('#amigo'); 
    let nomeAmigo = input.value.trim(); 

    if (nomeAmigo) {
        amigos.push(nomeAmigo);
        input.value = ''; 
        atualizarLista(); 
    } else {
        alert('Por favor, insira um nome válido!');
    }
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 
    amigos.forEach((amigo) => {
        let itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        lista.appendChild(itemLista);
    });
}

function sortearAmigo() {
    let lista = document.getElementById('listaAmigos');
    let resultado = document.getElementById('resultado');
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    
    lista.innerHTML = ''; 
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
}
