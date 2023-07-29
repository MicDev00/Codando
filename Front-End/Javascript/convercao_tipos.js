// > Coerção(Conversão) de Tipos


// 1 - Coerção explicita (Manual)
const numero = 10

console.log(numero, typeof numero)  // typeoff p/ exibir o tipo do dado

numeroEmFormatoDeString = String(numero)
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)
    // Existem muitas outras conversões

// 2 - Coerção Implicita (Automática)

console.log('10' + 1) // Ou sejá ele concatena
console.log('10' - 1)
console.log('10' * 3)
console.log(10 - 'asasiso')