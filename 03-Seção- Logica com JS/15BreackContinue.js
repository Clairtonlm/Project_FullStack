//Breack e Continue
const numeros = [1,2,3,4,5,6,7,8,9]
for(let variavelQualquer of numeros){
    if(variavelQualquer % 2 == 0){
        continue;//pula pra proxima interação do laço
    }
    console.log(variavelQualquer);
}

const numeros2 = [1,2,3,4,5,6,7,8,9]
for(let numero of numeros){
    if(numero === 7){
        console.log("Encontrei e saindo");
        break;//acabou o laço
    }
    console.log(numero);
}