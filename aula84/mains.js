//Promisses
//resolve, reject, all, race
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Deu ruim!');
                return
            } 
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}
/*
esperaAi('Fase 1', rand(0, 3))
.then(valor => {
    console.log(valor)
    return esperaAi('Fase 2', rand(0,3))
})
.then(valor => {
    console.log(valor)
    return esperaAi('Fase 3', rand(0,3))
})
.then(valor => {
    console.log(valor)
})
.catch(erro => {
    console.error(erro);
})
*/

async function executa() {
    try {
   const fase1 = await esperaAi('Frase1', rand(0, 3))
   console.log(fase1)
   const fase2 = await esperaAi(2, rand(0, 3))
   console.log(fase2)
   const fase3 = await esperaAi('Fase3', rand(0, 3))
   console.log(fase3)
   } catch (e) {
    console.log(e)
   }
}
executa()
function ola(nome, tempo) {
    setTimeout(() => {
        console.log(nome)
    }, tempo)
}