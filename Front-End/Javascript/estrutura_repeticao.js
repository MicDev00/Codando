// Estruturas de repetição

// Tivemos que instalar uma biblioteca p/ poder fazer um input dos dados do usúario

const input = require('readline-sync')

const numeroSorteado = 5   

let numero = Number(input.question('Qual numero você escolhe? '))

while(numero !== numeroSorteado){
    console.log('Você errou. Tente novamente...')

    numero = Number(input.question('Qual numero você escolhe? '))
}

console.log('Parabens, você acertou')