function motarHora(){
    let data = new Date();
    return data.toLocaleString('pt-Br', {
        hour12: false
    });
}
//console.log(motarHora());
const timer = setInterval(function(){
    console.log(motarHora());
}, 1000);

setTimeout(() => {
    clearInterval(timer)
}, 3000);

setTimeout(()=>{
    console.log("Ola Mundo");
}, 4000)