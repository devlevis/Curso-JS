//As funcoes geradora sao funcoes que geram um por vez, ou seja, tenho que chamar mais vezes usando o metodo 'next()' para passar pro proximo valor, deixando assism o sistema mais leve e nao fazendo tudo de uma vez:
//O 'yield', diferente do 'return', possibilita continuar lendo as linhas de codigo abaixo
function* geradora1() {
    //Codigo qualquer...
    yield 'Valor 1';
    //Codigo qualquer...
    yield 'Valor 2';
    //Codigo qualquer...
    yield 'Valor 3';
}
const g1 = geradora1();
/*
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
*/

function* geradora2() {
    yield 1;
    yield 2;
    yield 3;
}
function* geradora3() {
    //Aqui estou chamando a outra função geradora:
    yield *geradora2();
    yield 4;
    yield 5;
    yield 6;
}
const g3 = geradora3();
for (const valor of g3) {
    console.log(valor)
}