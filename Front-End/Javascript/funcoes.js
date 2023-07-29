// Funções é o principal quando falamos em Reutilização


// criando uma função

function saudacao(){
    console.log('Olá, seja bem vindo(a) ao nosso curso de JS!')
}

// P/ q éla possa ser executada devemos chama-lá

saudacao()

console.clear()

// Como enviar parametros para as funções

function saudacao(nome, curso='JavaScript'){
    console.log(`Olá, ${nome}! Seja bem vindo(a) ao nosso curso de ${curso}`)
}

saudacao('Marcola')

console.clear()

// Retorno da função

function soma(numero1, numero2){
    return numero1 + numero2

//Toda vez que vc usar um return na função, a função acaba nele
}

let resultado = soma(10, 20)

console.log(resultado)

console.clear()

function maiorDoQue50(numero){
    if(numero >= 50){
        return true
    }
    
    return false
}