function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: false, //mostra a chave
        configurable: true, // configuravel ou nao
        //Getter me retorna um valor:
        get: function () {
            return estoquePrivado;
        },
        //Já o setter é como um condicionador:
        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('O "estoque não é um número!"')
            }

            estoquePrivado = valor;
        }
    });
}
const p1 = new Produto('Camisa', 20, 4)
console.log(p1)
p1.estoque = 800;
console.log(p1.estoque)