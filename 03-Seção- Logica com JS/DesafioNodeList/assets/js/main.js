const paragrafos = document.querySelector('.paragrafo');
const ps = document.querySelectorAll('p')
//para pegar os estilos que foi computado pelo navegador do html
const estilo = getComputedStyle(document.body);
const mudarCorP = estilo.backgroundColor;
console.log(backgraundColorBody);

for(let p of ps){
    p.style.backgroundColor = mudarCorP
    p.style.color = '#FFFFFF'
}