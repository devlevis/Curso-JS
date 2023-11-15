//return
//retorna um valor
//termina a função
function soma(x, y) {
    return x + y;
}

/*function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto
    }
    return falaResto
}
const olaMundo = falaFrase('Ola')
console.log(olaMundo('Doido'))*/
function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    };
}
const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(triplica(2, 2))