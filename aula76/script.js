const pessoas = [
    { id: 3, nome: 'Luiz' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Helena' }
]
const novasPessoas = new Map();
for (const pessoa of pessoas) {
    //Aqui estou criando uma const que chama a chave "id" de cada objeto de "pessoas", por isso fiz o for of:
    const {id} = pessoa;
    //Aqui eu setei/coloquei o "id" antes do reso do objeto, como eu querai, usando "{...pessoa":
    novasPessoas.set(id, {...pessoa})
    //Aqui estou deletando uma chave de "novasPessoas" de acordo com a chave:
    novasPessoas.delete(3)
    console.log(novasPessoas)
}
//console.log(novasPessoas)
