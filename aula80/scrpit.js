//Metodo de instancia e estaticos:
//Metodo de instancia é o que tem contrle/acesso a instacia em si(o objeto criado, por exemplo o 'controle1')
//Metodo Estatico faz parte da "classe pai" no cado a 'ControleRemoto'. Ou simplemente pode ser definido como uma funcao que voce quis criar dentro de uma classe, em vez de cria ruma funcao fora dela, alem de ter acesso ao objto/instacia criada aparitr da classe pai
class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    //Metodo de instancia
    aumentarVolume() {
        this.volume += 2;
    }
    //Metodo de instancia
    diminuirVolume() {
        this.volume -= 2;
    }
    //Metodo Estatico
    static trocaPilha() {
        console.log('Vou trocar!')
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
//Assim eu chamo um metodo estatico:
ControleRemoto.trocaPilha()
console.log(controle1);