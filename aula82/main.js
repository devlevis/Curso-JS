//Promisses

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

esperaAi('Ola 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Ola 2', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Ola 3', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi(222222, rand(1, 3))
    }).then(resposta => {
        console.log(resposta)
    })
    .catch(e => {
        console.warn('ERRO:', e)
    })

console.log('Isso saira primeiro que as promisses')

