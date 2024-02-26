// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maioresQue100 = numeros.filter((numero) => {
  return numero > 100
})

console.log(maioresQue100)


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

console.log(instrumentos.includes('Baixo'))


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Maçã',
    preco: 'R$ 2,99'
  },
  {
    item: 'Feijão',
    preco: 'R$ 25,49'
  },
  {
    item: 'Suco',
    preco: 'R$ 5,35'
  },
  {
    item: 'Castanha',
    preco: 'R$ 10,60'
  }
]

const precos = compras.map((item) => {
  return item.preco
})

console.log(precos)

const precosNumero = precos.map((preco) => {
  return preco.replace(',', '.')
})

const precosNumeroFloat = precosNumero.map((preco) => {
  return parseFloat(preco.split('R$')[1])
})

console.log(precosNumeroFloat)

const valorTotal = precosNumeroFloat.reduce((acc, preco) => {
  return acc += preco
}, 0)

console.log(valorTotal)