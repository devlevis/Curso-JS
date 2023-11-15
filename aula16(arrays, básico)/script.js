/*
const alunos = ['Luiz', Maria, João']; // DESSA FORMA OS CARACTERES SERÃO CONTADOS POR ELEMENTOS E NÃO POR LETRA
//console.log(alunos.length);
console.log(alunos[1])
= Luiz, Maria, João
*/
/*
const alunos = ['Luiz', 'Maria', 'João',];
console.log(alunos[1])
= Maria
*/
/*
EDITAR UM INDICE:
/*
const alunos = ['Luiz', 'Maria', 'João',];
alunos[0]= 'Levi'

console.log(alunos)
*/
/*
ADICIONAR ELEMENTOS:
const alunos = ['Luiz', 'Maria', 'João',];
alunos[0]= 'Levi'
alunos[3]= 'Luiza'
alunos[4]= 'Marcelo'
console.log(alunos)
= [ 'Levi', 'Maria', 'João', 'Luiza', 'Marcelo' ]
*/
/*
Dessa forma eu adiciono mais rapidamente elemntos ao final da const ou let:
const alunos = ['Luiz', 'Maria', 'João',];
alunos.push('Cunha', 'Sousa','Silva');
console.log(alunos)
= [ 'Luiz', 'Maria', 'João', 'Cunha', 'Sousa', 'Silva' ]
*/
/*
Adcionar elemento antes:
const alunos = ['Luiz', 'Maria', 'João',];
alunos.unshift('Marcelo');
alunos.unshift('Levi');
console.log(alunos)
*/
/*
Remover o ultimo elemento(indice) do resultado 
const alunos = ['Luiz', 'Maria', 'João',];
alunos.pop();
console.log(alunos)
=[ 'Luiz', 'Maria' ]
*/
/*
Remover o PRIMEIRO elemento(indice) do resultado
const alunos = ['Luiz', 'Maria', 'João',];
alunos.shift();
console.log(alunos)
= [ 'Maria', 'João' ]
*/
/*
Apagar e não alterar os indices:
const alunos = ['Luiz', 'Maria', 'João',];
delete alunos[0]
console.log(alunos)
console.log(alunos.length)
= [ <1 empty item>, 'Maria', 'João' ]
= 3
*/
/*
const alunos = ['Luiz', 'Maria', 'João',];
alunos.push('Levi')
alunos.push('Cunha')
console.log(alunos.slice(0, -1))
*/
/*
Como saber se tal const, let é uma Array:
const alunos = ['Luiz', 'Maria', 'João',];
console.log(alunos instanceof Array)
= true
*/