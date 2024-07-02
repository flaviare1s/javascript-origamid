const regexp = /\w+/gi

const regexp2 = new RegExp('\\w+', 'gi')

const frase = 'JavaScript e Java Linguagem 101'

console.log(frase.replace(regexp, 'X'))
console.log(frase.replace(regexp2, 'X'))

console.log(regexp.flags)

// método test():

const regexp3 = /Java/g

console.log(regexp3.test(frase))
console.log(regexp3.test(frase))
console.log(regexp3.test(frase))
console.log(regexp.lastIndex)

let i = 1
while(regexp3.test(frase)) {
  console.log(i++, regexp3.lastIndex)
}


// método exec():

const frase2 = 'JavaScript, TypeScript, CoffeeScript, Java'

const regexp4 = /Script/g

let regexp4Result

while((regexp4Result = regexp4.exec(frase2)) !== null) {
  console.log(regexp4Result[0])
}
