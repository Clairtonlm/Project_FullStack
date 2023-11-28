//Escreva uma função que receba dois numeros e retorne o maior deles.
function maiorNumero( num1, num2){
    if(num1 > num2){
        return num1
    }else{
        return num2
    }
}
//refatorando a função
function maior(x, y){
    return x > y ? x : y;
}
console.log(maior(10, 20));

const max2 = (x, y) =>  x > y ? x : y;
console.log(maior(10, 200));
