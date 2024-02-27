// Retorne a soma total de caracteres dos parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p')

const totalCaracteres = Array.from(paragrafos).reduce((acc, paragrafo) => {

    return acc + paragrafo.innerText.length
},0)

console.log(totalCaracteres)


// Crie uma função que retorne novos elementos html, com os seguintes parâmetros tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
    const elemento = document.createElement(tag)
    classe ? elemento.classList.add(classe) : ''
    conteudo? elemento.innerHTML = conteudo : null

    return elemento
}

console.log(criarElemento('p', 'ativo', 'Esse é o conteúdo do elemento'))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico


const h1Titulo = criarElemento.bind(null, 'h1', 'titulo')

const cursoJavaScript = h1Titulo('Cursos de JavaScript')
const cursoCSS = h1Titulo('Cursos de CSS')

console.log(cursoJavaScript)
console.log(cursoCSS)



// function criarTitulo(conteudo) {
//     const h1 = document.createElement('h1')
//     h1.classList.add('titulo')
//     conteudo? h1.innerHTML = conteudo : null
//     return h1
// }

// console.log(criarTitulo('Esse é o meu título!'))