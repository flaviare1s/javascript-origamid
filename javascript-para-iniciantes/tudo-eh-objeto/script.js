// nomeie 3 propriedades ou métodos de strings
// RESPOSTA: toLowerCase(), toUpperCase(), length
const nome = 'Flavia'
console.log(nome.toLowerCase())
console.log(nome.toUpperCase())
console.log(nome.length)


// nomeie 5 propriedades ou métodos de elementos do DOM
// RESPOSTA: addEventListener(), classList, innerHTML, alert(), click()

const btn1 = document.querySelector('#btn1')
btn1.addEventListener('click', function() {
    btn1.classList.add('ativo')
    btn1.innerHTML = 'Você clicou!'
})

const btn2 = document.getElementById('btn2')
btn2.addEventListener('click', function() {
    btn2.classList.add('ativo')
    btn2.innerHTML = 'Você clicou!'
    alert('Você clicou aqui também!')
})


// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
// RESPOSTA: clipboardData, oncut, oncopy, onpaste