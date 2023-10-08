//valores primitivos e referencias
/*Primitivos- string, number, boolean, undefined, null, (bigint, symbol) sao imutaveis..sao copiados se alterar uma variavel e copiar para outra e se altetar um nao altera a outra
* as string nao indexadas...0-1-2-3...
*Referencia mutavel--> array, object, function---> passados por referencia
* spreed
* let b = [...a] faz uma copia e alterando um nao altera a outra
*/
const a = {
    nome: "javaScript",
    sobrenome: 'lima'
}

const b = {...a};//b fica imdependente é uma copia
a.nome = 'joao';
console.log(b);
