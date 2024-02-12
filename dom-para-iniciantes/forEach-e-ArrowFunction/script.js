// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p')
const arrayParagrafos = Array.from(paragrafos)

arrayParagrafos.forEach((p) => {
  console.log(p)
})

// Mostre o texto dos parágrafos no console
arrayParagrafos.forEach((p) => {
  console.log(p.innerText)
})

// Como corrigir os erros abaixo:

// RESPOSTA: Colocando os parênteses

// const imgs = document.querySelectorAll('img');

// imgs.forEach(item, index => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach( => {
//   console.log(i++);
// });

// imgs.forEach(() => i++);


const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index)
})

let i = 0;
imgs.forEach(() => {
  console.log(i++)
})

imgs.forEach(() => i++)

