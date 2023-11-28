//Modo Paisagem
/**
 * Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number)
 * Retorne true se a imagem estiver no modo paisagem
 */
function ePaisagem(largura, altura) {
    return largura > altura;
  }
  console.log(ePaisagem(1920, 1080));
  //refatorando com Arrow
  const paisagem = (largura, altura) => largura > altura;
  console.log(paisagem(100,200));