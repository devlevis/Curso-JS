               //01 23456789
let umaString = 'Um "texto"';

console.log(umaString + ' em um lindo dia');
console.log(umaString.concat(' em um lindo dia'))
console.log(`${umaString} em um lindo dia`);

console.log(umaString.lastIndexOf('o'))
console.log(umaString.replace(/t/g, '%'))
//detectar quantidades de caracateres:
console.log(umaString.length);
console.log(umaString.slice(4, 6))