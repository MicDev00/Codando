// >Operadores booleanos
 const numero = 10 
// Igualdade == (ou === Aqui ele compara o conteudo E o tipo do conteudo)
console.log(numero == 10)
console.log(numero === '10')
// Diferente != (ou !=== Aqui ele compara o conteudo E o tipo do conteudo)
console.log(numero != 7)
// Maior que       >
console.log(numero > 20)
// Maior ou igual >=
console.log(numero >= 10)
// Menor que      <
console.log(numero < 10)
// Menor ou igual <=
console.log(numero <= 10)

// Operações lógicas
let idade = 18
let tenhoCnh = true

// And => &&
const possoDirigir = idade >= 18 && tenhoCnh === true
console.log('Posso dirigir ?', possoDirigir)
// Or => ||
idade = 40

const votoFacultativo = idade < 18 || idade >= 70
console.log('Meu voto é facultativo ?', votoFacultativo)
//Not => |