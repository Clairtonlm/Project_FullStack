const data = new Date('1981-01-10 00:00:00');
const diaSemana = data.getDay();
let diaSemanaTexto;


switch(diaSemana){
    case 0: 
    diaSemanaTexto = 'Domingo';
    break;
    case 1: 
    diaSemanaTexto = 'Segunda';
    break;
    case 2: 
    diaSemanaTexto = 'terça';
    break;
    case 3: 
    diaSemanaTexto = 'Quarta';
    break;
    case 4: 
    diaSemanaTexto = 'Quinta';
    break;
    case 5: 
    diaSemanaTexto = 'Sexta';
    break;
    case 6: 
    diaSemanaTexto = 'Sábado';
    break;
    default: 'Dia invalido';
    break;
}
console.log(diaSemana, diaSemanaTexto);