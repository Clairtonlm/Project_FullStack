function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instancia de date')
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hora12: false
    })
}
//erro
try{
    const data = new Date('01-1-1970 12:58:12')
    const hora = retornaHora()
    console.log(hora)
}catch(e){

}finally{
    console.log("tenha otimo dia");
}
