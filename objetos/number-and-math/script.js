// Retorne um número aleatório
// entre 1050 e 2000

// FÓRMULA: Math.floor(Math.random() * (max - min + 1) + min)

const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050)
console.log(aleatorio)


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
let arrayNumeros = numeros.split(', ')

console.log(arrayNumeros)
console.log(...arrayNumeros)

const maximo = Math.max(...arrayNumeros)
console.log(maximo)


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
let listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function limparPreco(preco) {
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.')
    preco = +preco.toFixed(2)
    return preco
}

let soma = 0
listaPrecos.forEach((preco) => {
   soma += limparPreco(preco)
})

console.log(soma)

console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
