// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')

const cloneMenu = menu.cloneNode(true)
console.log(cloneMenu)

copy.appendChild(cloneMenu)

// Selecione o primeiro DT da dl de Faq
const primeiroDT = document.querySelector('.faq-lista dt')
console.log(primeiroDT)

// Selecione o DD referente ao primeiro DT
const primeiroDD = document.querySelector('.faq-lista dd')
console.log(primeiroDD)

// Substitua o conteúdo html de .faq pelo de .animais
const body = document.querySelector('body')
const faq = document.querySelector('#faq')
const animais = document.querySelector('#animais')

faq.innerHTML = animais.innerHTML

