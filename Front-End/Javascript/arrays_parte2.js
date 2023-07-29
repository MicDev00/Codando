// Arrays parte - 2

let arr1 = [30, 12 ,45,34,29] 
let arr2 = []

console.clear()
// FAtiamento: slice

console.log(arr1.slice(0,2))
console.log(arr1.slice(2))

//Adicionando elementos: pus | unshift

console.log('Antes de adicionar', arr2)

arr2.push(10,20,30) // Pode adicionar quantos quiser, serão sempre acrescentados no final

console.log('Antes de adicionar', arr2)

console.log('Antes de adicionar com unshitft', arr2)

arr2.unshift(0)       // Será acrescentados no Inicio 

console.log('Depois de adicionar com unshift', arr2)

console.clear()

// Removendo elementos: pop | shift

console.log('Antes de remover com o pop:', arr2)

arr2.pop() // por padrão remove o ultimo elemento do array

console.log('Depois de remover com o pop:', arr2)

// shift

console.log('Antes de remover com o shift:', arr2)

arr2.shift() // por padrão remove o primeiro elemento do array

console.log('Depois de remover com o shift:', arr2)

console.clear()

// > Concatenando arrays: concat

console.log('arr1',arr1)
console.log('arr2',arr2)

console.log(arr1.concat(arr2))


// Buscando elementos: indexoff | lastindexoff //retorna o ultimo elemento repetido do indice
console.log(arr1)

let indiceDoElemento34 = arr1.indexOf(34)

console.log(indiceDoElemento34)

console.clear()
//Descobrindo a existencia de um elemento: includes

console.log(arr1)
console.log(arr1.includes(10))
console.log(arr1.includes(12))

// Invertendo Arrays: reverse

console.log('arr1 normal:', arr1)

let arr1Invertido = arr1.reverse()

console.log('arr1Invertido:', arr1Invertido)