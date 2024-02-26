const comidas = ['Pizza', 'Feijão', 'Legumes', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const primeiro = comidas.shift()
console.log(primeiro)
// Remova o último valor de comidas e coloque em uma variável
const ultimo = comidas.pop()
console.log(ultimo)
// Adicione 'Arroz' ao final da array
comidas.push('Arroz')
// Adicione 'Sanduíche' e 'Batata' ao início da array
comidas.unshift('Sanduíche', 'Batata')

console.log(comidas)



const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort()
// Inverta a ordem dos estudantes
estudantes.reverse()
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'))
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'))

console.log(estudantes)



let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
const ul = html.split('section').join('ul').split('div').join('li')

console.log(ul)


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carros2 = carros.slice()

carros.pop()

console.log(carros2)

