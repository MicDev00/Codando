// >Operadores Condicionais

const idade = 16

if (idade >= 18){
    console.log('Você é maior de idade!')
} else{
    console.log('Você é menor de idade!')
}

console.clear()

// Se média >= 7, aprovado
// Se média < 7 e média >= 5, Recuperação
// Se média < 5, Reprovado

let media = 4

if(media >= 7){
    console.log('Você foi aprovado!')
} else if(media < 7 && media>= 5){
    console.log('Você está de Recuperação!')
} else{
    console.log('Você foi REPROVADO!')
}