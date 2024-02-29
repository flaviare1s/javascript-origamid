// Mude a cor da tela para azul e depois para vermelho a cada 2s.
const html = document.documentElement

let corAtual = 'red'

const mudaCor = setInterval(() => {
    if(corAtual === 'blue') {
        html.style.backgroundColor = 'red'
        corAtual = 'red'
    } else {
        html.style.backgroundColor = 'blue'
        corAtual = 'blue'
    }
},2000)


// Crie um cronÔmetro utilizando o setInterval. Deve ser possível iniciar, pausar e resetar (duplo clique no pausar).

const mostrador = document.querySelector('#mostrador')
const btnIniciar = document.querySelector('#iniciar')
const btnPausar = document.querySelector('#pausar')
const btnResetar = document.querySelector('#resetar')

let cronometro
let i = 1

function handleCronometro() {
    mostrador.innerText = i++
}

function iniciar() {
    cronometro = setInterval(handleCronometro, 1000)
    btnIniciar.setAttribute('disabled', '')
}

function pausar() {
    clearInterval(cronometro)
    btnIniciar.removeAttribute('disabled')
}

function resetar() {
    mostrador.innerText = 0
    i = 0
}

btnIniciar.addEventListener('click', iniciar)
btnResetar.addEventListener('click', pausar)
btnResetar.addEventListener('dblclick', resetar)



