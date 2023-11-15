/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigiht, symbol). Eles são subtituiveis, não mutáveis(COPIADOS)

Rferências (mutáveis) - array, object, function(APONTAM PRO MESMO LOCAL DA MEMÓRIA, ou seja, TEM MESMO VALOR E MUDANÇAS)
*/
// Valores Primitivos, eles apenas copiam o primiero dado antes dele, exemplo:
/*
let a = 'A';
let b = a;
= A, A
a = 'B';
= B, A
*/
// Valores por Referencias, vao fazer todasa as variaveis apontar para um mesmo valor, eles mudando ou não, sem precisar alterar em cada um:

let a = [1, 2, 3]
let b = a
console.log(a, b)
    = [1, 2, 3][1, 2, 3]
a = [1, 2, 3, 4]
console.log(a, b)
    = [1, 2, 3, 4][1, 2, 3, 4]
ou
b.pop()
console.log(a, b)
    = [1, 2, 3][1, 2, 3]
    * /

Dessa forma o valor de 'b', apenas copiara o 'a', como um primitivo
let a = [1, 2, 3]
let b = [...a]
    * /