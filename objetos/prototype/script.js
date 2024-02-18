// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

const pessoa1 = new Pessoa('André', 'Macedo', 31)

console.log(pessoa1.nomeCompleto())

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
console.log(Object.getOwnPropertyNames(NodeList.prototype))
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype))
console.log(Object.getOwnPropertyNames(Document.prototype))

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

console.log(li.constructor.name) // HTMLLIElement
console.log(li.click.constructor.name) // Function
console.log(li.innerText.constructor.name) // String
console.log(li.value.constructor.name) // Number
console.log(li.hidden.constructor.name) // Boolean
console.log(li.offsetLeft.constructor.name) // Number
console.log(li.click().constructor.name) // Undefined


// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String