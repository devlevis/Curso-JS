// Let tem escopo de bloco (ou seja, Let pode ter mesmo nome estando em blocos diferentes, pois se ela estiver fechada em um escopo, ela é considerada outra), Sendo cirada a cada momento que eu usar, DIFERENTEMENDE DE var.
//Pois Var sera redeclarada e nao criada quando eu usar novamente com o memso nome.
//Bloco: {...}

//Exemplo:

const verdadeira = true;
let nome = 'Levi'; //criada
var nome2 = 'Sousa'; //criada


{
if (verdadeira) {
    let nome = 'Rafael' //criada
    var nome2 = 'Pedro' //redeclarada
    console.log(nome)
}
if (verdadeira) {
    let nome = 'Cunha' //criada
    var nome2 = 'João'; //redeclarada
    console.log(nome)
}

}

console.log(nome, nome2)

//Como podemos ver, se a Let estiver fechada em um bloco, ele pode ter o mesmo nome que outro Let com mesmo nome, pois o JavScript considera outra variavel.