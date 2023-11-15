//Escreva uma função que recebe 2 numeros e retorne o maior deles:
let num1 = Math.round(Math.random() * (10 - 1) + 1)
let num2 = Math.round(Math.random() * (10 - 1) + 1)
function maiorEntre(num1, num2) {
    if (num1 > num2) {
        console.log(`Num1: ${num1} é maior que num2: ${num2}`)
    } else if (num2 > num1) {
        console.log(`Num2: ${num2} é maior que num1: ${num1}`)
    } else {
        console.log(`Os dois são iguais: ${num1}, ${num2}`)
    }
    return num1 || num2;
}
console.log(maiorEntre(num1, num2))