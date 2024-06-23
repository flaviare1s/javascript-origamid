const frase = 'JavaScript'
const regexp = /Java/
const fraseNova = frase.replace(regexp, 'Type')

console.log(fraseNova)

const numero = '123-456-78.90'
const regexp2 = /[-.]/g
const numeroLimpo = numero.replace(regexp2, '')

console.log(numeroLimpo)
