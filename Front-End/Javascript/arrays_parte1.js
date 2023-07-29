//Estrutura de dedados: Arrays

//Como criar um  Array
let arr = ['Maicola', 26, 1.77, true]
console.log(arr)

// Como acessar os elementos de um Array?
console.log('Primeiro elemento:', arr[0])
console.log('Segundo elemento:', arr[1])
console.log('Terceiro elemento:', arr[2])
console.log('Quarto elemento:', arr[3])

// Como obter o tamanho do array
console.log('tamanho do array', arr.length)

// Percorrendo arrays
  console.clear()

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}
 console.clear()

 for(let elemento of arr ){  //Eu vou percorrendo cada elemento do meu Indice
    console.log(elemento)
 }
 console.clear()

 for(let indice in arr){  //Eu vou percorrendo os indices do meu array
    console.log(indice, arr[indice])
 }