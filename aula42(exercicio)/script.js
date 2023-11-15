function divisivel(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log(numero,'FizzBuzz')
    }
    if (numero % 3 === 0) {
        return numero, 'Fizz'
    } 
    if (numero % 5 === 0) {
        return numero, 'Buzz'
    } 
     else {
        return numero
    }
    
}

for (let i = 0; i <= 100; i++) {
    console.log(i, divisivel(i));
}