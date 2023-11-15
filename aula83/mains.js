//Promisses
//resolve, reject, all, race
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => 
    {
        if(typeof msg !== 'string') reject('invalided paramater')

        setTimeout(() => {
            resolve(msg)
        }, tempo);
    });
}
const promises = [
    esperaAi('Primeiro valor', rand(1, 5)),
    esperaAi('Segundo valor', rand(1, 5)),
    esperaAi('Terceiro valor' , rand(1, 5)),
];
//Aqui irá resolver/chamar todas:
/*
Promise.all(promises)
.then(function(valor){
    console.log(valor)
})
.catch(function(erro) {
    console.log(erro)
})
*/
//Esse aparecerá o que resolver mais rapido, em menos tempo. E nao mostrá o resto:
Promise.race(promises)
.then(function(valor){
    //console.log(valor)
})
.catch(function(erro) {
    //console.log(erro)
})

function baixaPagina() {
    const emCache = false;

    if(emCache) {
        return Promise.resolve('Pagina em cache');
    } else {
        return esperaAi('Baixando pagina...', rand(2,5))
    }
}
baixaPagina()
.then(dadosPagina => {
    //"dadosPagina" corresponde à if
    console.log(dadosPagina);
})
.catch(erro => {
    //"erro" corresponde à else
    console.log(erro)
})
