let num1 = 1;
let num2 = 2.5;

console.log(num1.toString() + num2);//toString transforma o num1 em string
console.log(typeof num1);//aqui ele é number
//nesse caso estou alterando o valor do num deixando ele como string
num1 = num1.toString();
console.log(typeof num1);//aqui num1 é string


let num3 = 1500;
//saber erpresentação binaria
console.log(num3.toString(2));

//para saber se um numero é um inteiro ou nao
let num4 = 10;
console.log(Number.isInteger(num4));//vai retornar true ou false
//o numero que estou recendo é inteiro ou nao?

//saber se um conta é verdaira...se ocoreu tudo certo com operação
let temp = "5" * num4
console.log(Number.isNaN(temp));//éinvalida ?vai retornar true ou false

// padrao IEEE 754-2008
let num5 = 0.7;
let num6 = 0.2;

num5 += num6
console.log(num5);
console.log(Number.isInteger(num5));
console.log(Number(num5).toFixed(2));
console.log(parseFloat(num5));