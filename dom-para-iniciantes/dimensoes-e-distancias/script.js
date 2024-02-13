// Verifique a distância da primeira imagem em relação ao topo da página
const img = document.querySelector('img')
const distanciaImagem = img.offsetTop

console.log(distanciaImagem)


// Retorne a soma da largura de todas as imagens
function somaImagens() {
    const imgs = document.querySelectorAll('img')
    let soma = 0

imgs.forEach((image) => {
    soma += image.offsetWidth
})
console.log(soma)
}

window.onload = function() {
    somaImagens()
}

// Verifique se os links da página possue o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a')

links.forEach((link) => {
    const larguraLink = link.offsetWidth
    const alturaLink = link.offsetHeight
    if(larguraLink > 48 && alturaLink > 48) {
        console.log(link, 'Possui acessibilidade!')
    } else {
        console.log('Não possui boa acessibilidade!')
    }
})


// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
const telaPequena = window.matchMedia('(max-width: 720px)').matches
const menu = document.querySelector('.menu')

if(telaPequena) {
    menu.classList.add('menu-mobile')
} else {
    console.log('menu-desktop')
}

console.log(menu.classList)