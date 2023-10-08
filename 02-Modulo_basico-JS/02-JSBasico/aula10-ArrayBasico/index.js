// Array Basicos
const alunos = ['Luiz','Clairton','Noah', ];

alunos[0] = 'Fabiane';//editar um array
//adcionar elemento no array
alunos[3] = 'luiza'
//tambe, pode ser assim add no array
alunos[alunos.length] = 'João';
alunos[alunos.length] = 'Sara';
alunos[alunos.length] = 'Tito';
//adcionar elemento ao final so array
alunos.push('Bia')
// no inicio so array no indice 0
alunos.unshift('Damião')
//removendo do final do array
alunos.pop()
//remove do nicio do array
const removido = alunos.shift()
console.log(removido);
//remove um elemento do array, mas nao altera o indice ele fica vazio
delete alunos[5];

//para fatiar um array pegar de x a y .slice
console.log(alunos.slice(0, 3));
console.log(alunos.slice(0, -2));//elimina os dois finais

console.log(alunos instanceof Array);//saber se é um instancia de array
//tamanho do array
console.log(alunos.length);
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
console.log(alunos[3]);