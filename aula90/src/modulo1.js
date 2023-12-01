const nome = 'Levi'
const sobrenome = 'Sousa'
const idade = 30

function some(x, y) {
    return x + y
}

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
}

export {nome, sobrenome, idade, some, Pessoa as default}