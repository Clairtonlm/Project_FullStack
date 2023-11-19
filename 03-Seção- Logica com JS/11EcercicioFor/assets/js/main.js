
const elementos = [
    {tag: 'p', texto: 'franse1'},
    {tag: 'div', texto: 'franse2'},
    {tag: 'footer', texto: 'franse3'},
    {tag: 'section', texto: 'franse4'},
]
const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    let tagCrida = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    tagCrida.appendChild(textoCriado);
    div.appendChild(tagCrida);
}
container.appendChild(div)