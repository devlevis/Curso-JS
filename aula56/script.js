//É como se fosse um laço de repetição em uma função
//Uma funcçao que se chama de volta ate cumrpir o requesito
function recursiva(max) {
    if (max >= 500) return;
    max++;
    console.log(max)
    recursiva(max);
}
recursiva(0);
