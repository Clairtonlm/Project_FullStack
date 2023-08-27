/**Clairton Lima tenho 43 anos, pesa 83 kg tem 1.70 de latura e seu IMC é 33.09058349573495739 */
const nome = 'Clairton Lima';
const idade = 43;
const peso = 83;
const alturaEmM = 1.70;

const IMC = (peso / (alturaEmM * alturaEmM)).toFixed(2);
console.log(` Olá meu nome é ${nome} tenho ${idade} e meu IMC é ${IMC}`)
if(IMC >= 29){
    console.log(`Olá ${nome} de ${idade} anos voce tem um IMC de ${IMC}  que estar dentro dos padroes `);
}else{
    console.log(`Olá ${nome} de ${idade} anos voce tem um IMC de ${IMC}  que estar fora dos padroes  `);
}
