// Laços númericos: for

// Uma repetição controlada

const input = require('readline-sync') 

// O problema
/*
const nota1 = Number(input.question('Informe a nota 1: '))
const nota2 = Number(input.question('Informe a nota 1: '))
const nota3 = Number(input.question('Informe a nota 1: '))

let media = (nota1 + nota2 + nota3) / 3
*/

// Acumulador.   Ela literalmente vai acumulando

let acumulador = 0   // Obs: o nome da variavel não precisa ser esse

acumulador = acumulador + 10

acumulador += 2

acumulador++

console.clear()

// Estrutura: For

for(let i = 0; i < 4; i++){
    console.log('Repetição', i)
}

console.clear()
// Resolvendo o problema inicial
let nota
let soma = 0;
for(let i= 1; i <= 3; i++ ){
    nota = Number(input.question(`Informe a nota $(i) do aluno: `)) // Tem q ser a crase

    soma = soma + nota
}
console.log('A média do aluno é', (soma / 3))