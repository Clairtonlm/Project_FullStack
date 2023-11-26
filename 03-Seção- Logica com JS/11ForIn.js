//For In -> lê os indices ou chaves do objeto
const frutas = ['Pera', 'Maçã', 'Uva'];
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

//interenado com for in
for(let i in frutas){
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Clairton Lima',
    idade: 43,
    profissao: ' Desenvolvedor de Sosftware'
}
for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}