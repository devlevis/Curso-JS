//Heranca com classes:

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        //False = desligado
        //True = ligado
        //Mas aqui estou falando que ele ja comeca desligado
        this.ligado = false;
    }

    ligar() {
        //Se "ligado" estiver true, voce diz "ja ligado"
        if (this.ligado) {
            console.log(`${this.nome} já ligado`); 
            return;
        }
        //Caso contrario, ligue
        this.ligado = true;
    }
    desligar() {
        //Se "ligado" estiver false, voce diz "ja desligado"
        if (!this.ligado) {
            console.log(`${this.nome} já desligado`);
            return;
        }
        //Caso contrario, desligue:
        this.ligado = false;
    }
}

//Chamar as funcoes de uma classe(classe pai) para outra(classe filha):
//Uso o "extends" e o nome da classe que quero pegar na frente
//E necessito do "super()" no constructor da nova classe OBRIGATORIAMENTE, se eu quiser pegar as chaves da classe pai
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        //Aqui eu chamei as chaves da classe pai:
        super(nome);

        //Aqui crio novas chaves exclusivas da classe filha(Smartphone):
        this.cor = cor;
        this.modelo = modelo;
    }
    //E colocando metodos com memso nome da classe api, voce acabad alterando o metodo na classe filha
    ligar() {
        console.log('Voce alterou o metodo ligar')
    }
 };
 const s1 = new Smartphone('Galaxy', 'Vermelho', 'S23 Ultra')
 s1.ligar()
 console.log(s1)