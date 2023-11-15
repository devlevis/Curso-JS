//Funçoes Fabrica(factory function):
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        //getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        fala: function(assunto) {
            return `${this.nome} está falando ${assunto}`
        },
        altura: a,
        peso: p,
        //Esse 'get'(getter) faz o metodo fingir ser uma chave, com isso, nao precisando colocar os parenteses no console.log
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
const p1 = criaPessoa('Levi', 'Sousa', 1.70, 80)
console.log(p1.nomeCompleto)