//criar uma função para previnir o envi do formulario
/*function meuEscopo(){
    const form = document.querySelector('.form');

    form.onsubmit = function (evento){
        evento.preventDefault();
        alert(enviado)
        console.log('foi');
    };
}
meuEscopo();*/
//Outra maneira de fazer
function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
   
    function recebeEventoForm(evento){
        evento.preventDefault();

       const nome = form.querySelector('.nome');//estou pegando nome que estar dentro de formulario
       const sobrenome = form.querySelector('.sobrenome');
       const peso = form.querySelector('.peso');
       const altura = form.querySelector('.altura');

      //criar o objeto no array
      pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
      });
      console.log(pessoas);
      resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();