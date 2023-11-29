//Trabalhando com erros Try Catch
function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y devem ser números');
    }
    return x + y;
}

try {
    
    console.log(soma(1, 3));
    console.log("a", 5);
} catch (error) {
    console.log(error);
}finally{
    console.log('Sou sempre executado');
}