//For of -> quando quero pegar o valor de um elemento interavel como
// Array, String
const nome = ['Clairton', 'fabi', 'Noah', 'Mell']
//tradicional--com elemento intravis
console.log('------For tradicional------');
for(let i = 0; i< nome.length; i++){
    
    console.log(nome[i]);
}
//For in--retona o indice ou chave, objeto
console.log('------For in------');
for(let i in nome){
    
    console.log(nome[i]);
}
//For of -> pega diretamente o valor sem pegar o indice

const nome1 = 'Noah ravi'
console.log('------For of------');
for(let valor of nome){
    
    console.log(nome);
}
//forEach
console.log('---ForEach------');
nome.forEach(function(valor, indice){
    console.log(valor, indice);
})