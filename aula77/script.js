//Criando Classes
class Pessoa {
    // Aqui voce coloca os parametros:
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    //E nao preciso de virgulas para separar, por exemplo, os metodos:
    //E OS METODOS JA VAO AUTOMATICAMENTE PARA O PROTOTYPE!!!!:
    falar() {
        console.log(`${this.nome} está falando`)
    }
    beber() {
        console.log(`${this.nome} está bebendo`)
    }
    comer() {
        console.log(`${this.nome} está comendo`)
    }
}


const p1 = new Pessoa('Levi', 'Sousa')
console.log(p1.falar())