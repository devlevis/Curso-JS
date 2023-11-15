//Splice:
//splice(indice, quant.delete, elem1, elem2...)
//Os elemntos que eu removi serao mostrados em um outro array
//               -4      -3         -2          -1
//               0       1          2           3
const nomes = ['Levi', 'Pedro', 'Fernando', 'Guilherme']
//Começar do indice 1 e remover 2 indices apartir e incluindo o indice 1:
//const removidos = nomes.splice(1, 2)
//Remover o inidce 0, deletar o indice 0 e adicionar algo depois do indice 0:
//nomes.splice(0, 1, 'Levex')
//Adiconar no final do array alguma coisa:
//nomes.splice(nomes.length, 0, 'Levex')
//OU
//nomes.splice(4, 0, 'Levex')
//Adiconar no começo(unshift):
//nomes.splice(0, 0, 'Levex')
console.log(nomes)