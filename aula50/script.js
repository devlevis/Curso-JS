function retornaFuncao() {
    const nome = 'Levi'
    return function peido() {
        return nome
    };
    
}

const funcao = retornaFuncao();
console.dir(funcao)