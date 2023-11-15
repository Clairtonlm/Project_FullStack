//desestruturação com Objeto
const pessoa = {
    nome: 'João',
    sobrenome: 'Lima',
    idade: 30,
    endereco: {
        rua:'Rua ABC',
        numero: 123,
        bairro: 'Perdido',
        cidade: 'Zord',
        estado: 'Zy'
    }
}
//1-usando o notação ponto
//onsole.log(pessoa.nome);
//como variavel
//const nome = pessoa.nome;
//console.log(nome);
//deestruturando com objeto
//desse objeto estraia esse valores
//const {nome, sobrenome, endereco, idade} = pessoa
//console.log(nome, sobrenome, endereco, idade);

//para pegar coisas de dentro de outro objeto tipo no endereço que tem rua e bairro
const {endereco: {rua: r = 123455, numero}, endereco} = pessoa;
console.log(r , numero, endereco);