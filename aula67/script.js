// definePropety e defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    

    //Mas se que nao quiser que apareça o 'estoque' por exemplo, posso usar:
    Object.defineProperty(this, 'estoque', {
        enumerable: false, //mostra a chave
        value: estoque, //valor
        writable: false, // pode ou nao alterar o valor
        configurable: true // pode ou nao reconfigurar e/ou apagar a chave
    })
}
const p1 = new Produto('Camisa', 20, 4)
p1.estoque = 5550000
//console.log(p1)

//defineProperties:

Object.defineProperties(this, {
    nome: {
        enumerable: false, //mostra a chave
        value: estoque, //valor
        writable: true, // pode ou nao alterar o valor
        configurable: false // pode ou nao reconfigurar e/ou apagar a chave
    },
    preco: {
        enumerable: false, //mostra a chave
        value: estoque, //valor
        writable: false, // pode ou nao alterar o valor
        configurable: true // pode ou nao reconfigurar e/ou apagar a chave
    }
});
