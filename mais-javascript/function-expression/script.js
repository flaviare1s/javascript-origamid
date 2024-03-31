// Remova o erro:
// priceNumber('R$ 99,99');
// const priceNumber = n => +n.replace('R$', '').replace(',', '.');
// R- O erro está na tentativa de inicializar uma function expression antes de declará-la. O certo seria:
const priceNumber = n => +n.replace('R$', '').replace(',', '.')
console.log(priceNumber('R$ 99,99'))


// Crie uma IIFE e isole o escopo de qualquer código JS.
// (function() {
//     const nome = 'teste'
//     console.log(nome)
// })()

// Como podemos utilizar a função abaixo.
const active = callback => callback()

active(function() {
    console.log('Testando active')
})

