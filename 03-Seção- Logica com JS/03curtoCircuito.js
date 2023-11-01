/** valores qua sao avaliados em falso
 * false é literal em falsy
 * 0
 * '' "" `` strig vazia sao falso
 * null e undefined
 * NaN
 * 
 * qual quer coisa diferente disso é verdadeiro em JS
 * 
 * || or
 * 
 */
console.log("Clairton" && 0 && "maria");//nessa operação ele retorna o valor falso na operação. que é 0
console.log("Clairton" && true && "maria")// nesse caso retorna a ultima

console.log("Clairton" && "Fabi");

console.log(0 || false || null || 'chico' || true);//retornou o primeiro valor verdairo que ele encontrou..nao liga pros outros.

const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);