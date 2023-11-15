const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosPares= numeros.filter(valor => valor % 2 === 0)
console.log(numerosPares)
const dobrarValor = numeros.map(valor => valor * 2)
console.log(dobrarValor)
const total = numeros.reduce(function (x, valor) {
    const total = x + valor 
    return total
}, 0)
console.log(total)