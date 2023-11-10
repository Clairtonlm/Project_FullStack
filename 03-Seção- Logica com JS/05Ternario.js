const pontos = 1000;
// if(pontos >=1000){
//     console.log("Usuário vip");
// }else{
//     console.log("Usuário normal");
// }

//no ternario
const nivel = pontos >= 1000 ? "usuário vip" : 'usuário normal';
console.log(nivel);