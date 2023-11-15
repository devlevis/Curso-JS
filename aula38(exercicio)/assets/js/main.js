const divParagrafos = document.querySelector('#paragrafos');
const p = divParagrafos.querySelectorAll('p');

const estilosDoBody = getComputedStyle(document.body);
const corDoBody = estilosDoBody.backgroundColor;

for (const cor of p) {
    cor.style.backgroundColor = corDoBody;
    cor.style.color = 'white';
}
console.log(corDoBody)