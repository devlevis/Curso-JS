//IIFE -> Imediatly invoked function expression:
//A função tambem é mostrada no console
// (function(){}();)
//Tudo que estiver dentro, não se envolve no escopo global(global scope).

//Exemplo:
(function(peso, altura) {
    //Pode escrever qualquer codigo ou codigos aqui dentro!
    console.log(peso, altura)
})(80, 1.72);
