// Atribuição via desestruturação
let a = 'A';// b
let b = 'B';//c
let c = 'C';//a

const num = [b, c, a];
//desestruturação
[a, b, c] = num
console.log(a, b, c);

// a sestruturação veio para se eu quiser pegar e imprimir cada indice do array tenhho que fazer um a um
//destruturação é criar uma variavel como array correspondendo ao indice do array
//...rest <nome variavel> pega todos resto
//...spread
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [inide1, indece2, ...resto] = numeros
console.log(inide1, indece2);
console.log(resto);

//se quiser saltear, usa espaço vazios
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [um, , tres, , cinco] = numeros
console.log(um, tres, cinco);

//Atribuição via desustruturação por array
const numeros3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numeros3;
console.log(lista3[1]);
