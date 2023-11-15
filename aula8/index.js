const nome = 'Edson';
const sobrenome = 'Levi';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc = peso / (altura * altura);
let anoNascimento = 2023 - idade;

console.log(imc);
console.log(anoNascimento);

console.log(`${nome} ${sobrenome} tem ${idade} anos de idade pesa ${peso} kg e seu IMC é de ${imc} além de uma altura de ${altura}.`);