
function gerarNumeros(min, max) {
const gerador = Math.random() * (max - min) + min;
return Math.floor(gerador);
}

let gerar = gerarNumeros(1, 9)

while (gerar !== 8) {
 gerar = gerarNumeros(1, 9)
 console.log(gerar)
}

do {
    gerar = gerarNumeros(1, 9)
 console.log(gerar)
} while (gerar !== 8);

//let entreNumeros = gerarNumeros(1, 10)
//console.log(entreNumeros.toFixed(1))

/*
const nome = 'Levi';

let indice = 0;
while (indice < nome.length) {
    console.log(nome[indice])
    indice++;
}
*/