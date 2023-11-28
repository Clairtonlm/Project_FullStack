//While
let condicao = 0;

// while(condicao <= 10){
//     console.log(condicao);
//     condicao++;
// }
function radom(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}

const min = 1;
const max = 20;
let rand = radom(min, max)

while(rand !==10){
    rand = radom(min, max)
    console.log(rand);
}