//Factory functions + prototypes


const falar = {
    falar() {
        console.log(`${nome} está falando`)
    }
};
const beber = {
    beber() {
        console.log(`${nome} ${sobrenome} está bebendo`)
    }
}

//Aqui estou colocado os metodos "falar" e "beber" dentro do prototype de "criaPessoa" pelo o metodo "assign"
const pessoaPrototype = Object.assign({}, falar, beber)

function criaPessoa(nome, sobrenome) {
    //Aqui vou colocar os metodos acima: "falar" e "beber" no prototype eadicionar mais chaves na factory function:
    return Object.create(pessoaPrototype, {
        //Adicionando chaves
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const p1 = criaPessoa('Levi', 'Sousa')
console.log(p1)