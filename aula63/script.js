//Reduce:
//Reduce siginifica a reduzir a so uma resposta
//Formula base:
//function(acumulador, valor, indice, array)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
//Somar todos os numeros
const total = numeros.reduce(function (acumulador, valor, indice, array) {
    acumulador = acumulador + valor
    return acumulador
})
//console.log(total)

//Retornar um array com os valores pares:
const pares = numeros.reduce(function (acumulador, valor, indice, array) {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
//console.log(pares)

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Cunha', idade: 90 },
    { nome: 'Ricardo', idade: 68 },
    { nome: 'Roberto', idade: 92 },
    { nome: 'Maria', idade: 52 },
    { nome: 'Enzo', idade: 15 }
];

//Retornar a pessoas mais velha
const maisVelha = pessoas.reduce(function name(acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor
})
console.log(maisVelha)