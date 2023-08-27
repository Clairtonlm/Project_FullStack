//Operadores Aritimeticos
/**
 * + -> Adição e concatenação
 * -
 * *
 * /
 * ** -> pontenciação
 * % resto da divisão
 * Precedencia
 *  1°  | () 
 *  2°  | **
 *  3°  | / %
 *  4°  | + -   
 * incremento ++
 * decremento --
 * ++prefixado
 * posfixado++
 * 
 */
const num = 10;
const num2 = 2;
console.log(num + num2)
console.log(num - num2)
console.log(num * num2)
console.log(num / num2)
console.log(num ** num2)//potenciação
console.log(num % num2)//resto da divisão

//incremento posfixado - ele paga o valor e depois incrementa e retem esse valor. 
let contador = 1 
contador++;//pos fixado

console.log(contador);


let prefixado = 10;// pega o valor executa a ação e mostra
--prefixado;

console.log(prefixado);

const passo = 2;
contador += passo;
console.log(contador);

//conversao de dados
const num3 = parseInt('5')//pega essa string e converte em numeto
const num5 = parseFloat("3.4")
const num4 = Number('10')
console.log(typeof num5, num5);