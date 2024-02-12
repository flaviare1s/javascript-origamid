// Por qual motivo o código abaixo retorna com erros?
// RESPOSTA: Porque no console está pedindo var, em vez do nome da variável. Além disso, const e portas possuem escopo de bloco, então, não podem ser acessadas de fora.
// {
//     var cor = 'preto'
//     const marca = 'Fiat'
//     let portas = 4
//   }
//   console.log(var, marca, portas)
{
  var cor = 'preto'
  const marca = 'Fiat'
  let portas = 4

  console.log(cor, marca, portas)
}

  
  // Como corrigir o erro abaixo?
  // function somarDois(x) {
  //   const dois = 2
  //   return x + dois
  // }
  // function dividirDois(x) {
  //   return x + dois
  // }
  // somarDois(4)
  // dividirDois(6)

  const dois = 2
  function somarDois(x) {
    return x + dois;
  }
  function dividirDois(x) {
    return x / dois;
  }
  console.log(somarDois(4))
  console.log(dividirDois(6))
  
  // O que fazer para total retornar 500?
  // var numero = 50
  
  // for(var numero = 0; numero < 10; numero++) {
  //   console.log(numero)
  // }
  
  // const total = 10 * numero
  // console.log(total)

  // RESPOSTA: Troca o var de dentro do loop por let. Também podemos trocar o var de fora por const.

  const numero = 50
  
  for(let numero = 0; numero < 10; numero++) {
    console.log(numero)
  }
  
  const total = 10 * numero
  console.log(`O total é ${total}`)