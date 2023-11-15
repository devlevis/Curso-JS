/*
try {
    console.log(variavel)
} catch (error) {
    console.log('A variavel acima ainda não existe')
}
*/
/*
function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number')  {
        throw new Error('x e y precisam ser numeros')
    }
    return x + y
}
try {
    console.log(soma(1, '6'))
} catch (error) {
    console.log(error)
}
*/
try {
    console.log(variavelNaoDefinida)
    console.log('Sem erros no codigo')
} catch (error) {
    //Aqui é caso der errado:
    console.log('Tratando o erro')
} finally {
    //Sempre aparece junto ao catch ou try:
    console.log('Finally: Sempre aparece, independente se esta certo ou errado')
}
