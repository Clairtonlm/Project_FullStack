//Math

let num = 9.50;
//arendodar para baixo
let nun2 = Math.floor(num)
console.log(nun2);

//arendodar pra cima
let num3 = Math.ceil(num)
console.log(num3);

//arendodar para o mais proximo
let arendada = Math.round(num)
console.log(arendada);
//pagar o maior numero em uma sequencia
console.log(Math.max(1,2,4,56,200,59));
console.log(Math.min(1,2,3,4,5,6,400));

//gerar numeros aleatorios
const aleatorio = ((Math.random()*(10 -5 )+ 5).toFixed(0))//entre 5 e 10
const aleatorio2 = Math.round(Math.random()*10)
console.log(aleatorio);
console.log(aleatorio2);