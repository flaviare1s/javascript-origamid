// metodo match():
const frase = 'JavaScript, TypeScript, CoffeeScript, Java'

const regexp = /\w+/g

const resultados = frase.match(regexp)

console.log(resultados)

// método split():

frase.split(', ');
// ["JavaScript", "TypeScript", "CoffeeScript"]
frase.split(/Script/g);
// ["Java", ", Type", ", Coffee", ""]

const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

tags.split(/(?<=<\/?)\w+/g).join('div');
// <div>
//   <div>Item 1</div>
//   <div>Item 2</div>
// <div>


// metodo replace():
const tags2 = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

const resultado3 = tags2.replace(/(?<=<\/?)\w+/g, 'div');
// <div>
//   <div>Item 1</div>
//   <div>Item 2</div>
// <div

console.log(resultado3)
