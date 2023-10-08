//na String é indexada [0, 1,2,3,4...]
let umaString = "um texto eu nao sei";
console.log(umaString)
console.log(umaString.charAt(8));
console.log(umaString.concat(' em um livro'));
console.log(umaString.indexOf("o"))
console.log(umaString.lastIndexOf("o"))//busca de traz pra frente
console.log(umaString.match(/[a-z]/))
console.log(umaString.search(/x/))//pedindo para encontar o X e estar em qual indice
console.log(umaString.replace('um', 'outra'))//substitui a palavra um por outra e imprime todo texto depois
console.log(umaString.replace(/um/, 'outra'))
console.log(umaString.length);//tamanho da string
console.log(umaString.slice(-2))//mostra de 0 a indice 5
console.log(umaString.substring())
console.log(umaString.split(' ', 2))//separar por espaço com  2 resultado
