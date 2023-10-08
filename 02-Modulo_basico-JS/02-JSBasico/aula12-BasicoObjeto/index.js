//basico de Objeto em js

//objeto literal
const pessoa1 = {
    nome: 'DEvClar',
    sobrenome: "oliveira",
    idade: 23,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
    },
    incrementaIdade(){
        this.idade++;
    }
};
pessoa1.fala();


function criaPessoa(nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade
    }
}
const pessoa2 = criaPessoa("Clairton", "Oliveira", 34)
console.log(pessoa2);