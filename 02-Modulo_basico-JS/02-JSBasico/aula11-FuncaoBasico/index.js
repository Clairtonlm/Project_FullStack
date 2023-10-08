//Funções Basico
function saudacao(nome) {
    return ` Bom dia ${nome}`;
}
const variavel = saudacao('clairton');//estar sendo executada-estou chamando a função
console.log(variavel);

function soma(x=0, y=0){
    const resultado = x + y;
    return resultado;
}
const resul = soma(5,3)
console.log(resul);

//função anonima- uma funcao dentro de uma variavel
const raiz = function(n){
    return n**0.5
};
console.log(raiz(9));

//ArrowFunction
const raizQ = n=>n**0.5
    
console.log(raiz(25));