/*
function trazerCarac(nome, idade, altura, sexo) {
    return {
        nome,
        idade,
        altura,
        sexo,
    }
};
const pessoa1 = trazerCarac('Levi', 18, 170, 'M');
const pessoa2 = trazerCarac('Lunna', 28, 160, 'F');
console.log(trazerCarac(pessoa1));
*/
/*
function trazerPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
};
const pessoa1 = trazerPessoa('Luiz', 'Miranda', 21)
const pessoa2 = trazerPessoa('Levi', 'Sousa', 18)
const pessoa3 = trazerPessoa('Mayk', 'Aguiar', 42)

console.log(trazerPessoa(pessoa1))
*/
function multiplicarPorDois(x, y =2) {
    const mult = x * y;
    return mult;
}
//console.log(multiplicar(8))

function dividirPorDois(x, y= 2) {
    const div = x / y;
    return div;
}
console.log(multiplicarPorDois(22))
console.log(dividirPorDois(40))
console.log(dividirPorDois(2342318))
console.log(dividirPorDois(34348347340))
console.log(dividirPorDois(34543843840))
console.log(dividirPorDois(2343436))