// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
let pessoa = {
  nome: 'Flávia',
  sobrenome: 'Reis',
  idade: 41,
  endereco: 'Rua Fictícia, 1620',
  profissao: 'desenvolvedora',
  nomeCompleto() {
    return(`${this.nome} ${this.sobrenome}`) 
  },
}

console.log(pessoa)

// Crie um método no objeto anterior, que mostre o seu nome completo
console.log(pessoa.nomeCompleto())

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

  carro.preco = 3000

  console.log(carro.preco)
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem

  let cachorro = {
    nome: 'Toby',
    especie: 'cachorro',
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    late(pessoa) {
      if(pessoa === 'homem') {
        return 'Latiu!'
      } else {
        return 'Não late!'
      }
    }
  } 

  console.log(cachorro.late('homem'))

 
