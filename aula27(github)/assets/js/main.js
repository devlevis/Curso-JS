 //Capturar evento de submit do formulario
 const form = document.querySelector('#form');

// Capturando o evendo do formulario, para nao ataualizxar a pagina:
 form.addEventListener('submit', function (e) {
   e.preventDefault();
   //Aqui estou pegando o input inteiro:
   const inputPeso = e.target.querySelector('#peso');
   const inputAltura = e.target.querySelector('#altura');
   
   //Aqui irei pegar o valor do input e converter para Number:
   const peso = Number(inputPeso.value);
   const altura = Number(inputAltura.value);

   //Aqui estou criando condiçoes que falam se peso e altura sao validos, ou seja, são numeros.
   if (!peso) {
      setResultado('Peso invalido!', false);
      return;
   }

   if (!altura) {
      setResultado('Altura invalida!', false);
      return;
   }

   const imc = calculoImc(peso, altura);
   const nivelImc = relaçaoImcClassificaçao(imc);

   const msg = `Seu IMC é ${imc} e sua classificação é ${nivelImc}.`;

   setResultado(msg, true);
 });

 //Funçao de releçao entre o resultado do IMC com a classificação:
 function relaçaoImcClassificaçao(imc) {
   const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];


   //Criei varios IFs, porque colocando RETURN em baixo cancelaria o restanto dos IFS, se estiver certo. Logo nao rpecisa de ELSES IFs.:
   if (imc >= 39.9) {
      return nivel[5]
   }
   if (imc >= 34.9) {
      return nivel[4]
   }
   if (imc >= 29.9) {
      return nivel[3]
   }
   if (imc >= 28.5) {
      return nivel[2]
   }
   if (imc >= 18.6) {
      return nivel[1]
   } 
   if (imc < 18.5) {
      return nivel[0]
   }
 }

//Função de calculo do IMC:
 function calculoImc (peso, altura) {
   const imc = peso / altura ** 2;
   return imc.toFixed(2);   
 }

 //Função para criar o paragrafoo que é usado na função setResultado(resultado)
 function criaP() {
   const p = document.createElement('p');
   return p;
 }

 //Codigo para mostrar o resultado no front-end:
 function setResultado(msg, isValid) {
   const resultado = document.querySelector('#resultado');
   resultado.innerHTML = ' ';
   
   const p = criaP();

   if (isValid) {
      p.classList.add('paragrafo-resultado');
   } else {
      p.classList.add('bad');
   }

   p.innerHTML = msg;
   resultado.appendChild(p);

 }
// para que serve o parametrio na criaçao de uma função?