//A propiedade "Symbol" serve para setar u valor unico, identificador unico, que nesse caso eu escolhi como "0":
//E o valor de "Symbol", nenhum usurario pode inteferir nele
const velocidadeInicial = Symbol('velocidade')
class Carro {
    constructor(nome) {
        this.nome = nome;
        //Aqui preciso dos colchetes e dentro colocar a conts do Symbol:
        this[velocidadeInicial] = 0;
    }
    //Aqui progamei que toda vez que chamar a chave "velocidade",mesmo uma pessoa tentando alterar o vlaor dela, ela tera o valor do "Symbol" = 0
    get velocidade() {
        return this[velocidadeInicial]
    }
    //Aqui eu vou setar as regras da velocidade, quando alguem quiser colocar uma velocidade:
    set velocidade(valor) {
        //Aqui estou falando que se for diferente de um numero, retorne:
        if(typeof valor !== 'number')  return;
        //Aqui estou falando que se o numero colocado pela a pessoa for maior que 100 e menor que 0, retorne:
        if(valor >= 100 || valor <= 0) return;
        //Mas caso of "ifs" atras nao acontecam, retorne o valor colocado pelo o cliente, e nao o valor incial("Symbol"):
        this[velocidadeInicial] = valor;
    }

    acelerar() {
        if (this[velocidadeInicial] >= 100) {
            return console.log(`Você já está no limite de velocidade da via`);
        }
        return this[velocidadeInicial] + 1
    }
}
const c1 = new Carro('Peujot')
//Preciso colocar assim para ver meu Symbol:
//console.log(c1[velocidadeInicial])
c1.velocidade = 65
console.log(c1.acelerar())