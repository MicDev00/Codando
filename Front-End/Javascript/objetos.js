// Objetos

// Como criar um Objeto no JS
// Utilizamos Chave e Valor

let pessoa ={
    nome: 'Maicola',
    idade: 26,
}

console.log(pessoa)
 // para  acessar um objeto
console.log(pessoa.nome)
console.log(pessoa['nome']) // forma alternativa
console.log(pessoa.idade)

// Como adicionar um par chave-valor

pessoa.altura = 1.77

console.log(pessoa)

// Como remover um par chave-valor

delete pessoa.altura

console.log(pessoa)

console.clear()
// Como percorrer

for (let chave in pessoa){
    console.log(chave)
}

// Uma dica! com a chave vc consegue descobrir o Valor do seu Objeto