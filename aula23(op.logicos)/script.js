/*
OPERADORES LOGICOS:
&& - AND, (E) -> Vai aparecer TRUE se ambos forem verdadeiros, FALSE caso contrario.
|| - OR, (OU)-> Vai aparecer true somente quando pelo menos um dos valores for verdadeiro.
!  - NOT, (!), vira o valor booleano da variavel NEGANDO a condição.
*/
const usuario = 'a';
const senha ='b';
//                  true                 false
const autorizado = usuario === 'a' || senha === 'b';
const verdade = 1;
console.log(autorizado)
console.log(!verdade)