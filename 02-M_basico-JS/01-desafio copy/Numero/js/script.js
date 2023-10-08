//prompt retorna uma string
//let numero = prompt("Digite um numero");
//convertendo em numero
//numero = Number(numero)
const numero = Number(prompt("Digite um numero"))
const numTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

//alterar elemento interno do html
numTitulo.innerHTML = numero;//vai pagar o que eu digitar
texto.innerHTML = "";//para comecar inicie com vazio
texto.innerHTML+= `<p>Seu numero + (2) é ${numero + (2)}</p>`;
texto.innerHTML += ` <p>Raiz quadrada de ${numero} é: ${Math.sqrt(numero)}</p>`
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p>${numero} é NaN: ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p>Arrendodado para baixo é ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>Arrendodado para cima é ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>Com duas casas decimais é ${(numero).toFixed(2)}</p>`