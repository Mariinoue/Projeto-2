//6 - Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.
/*let diaDaSemana='Domingo'

if(diaDaSemana==='segunda'){
    console.log('Dia de fazer exercicios')
}else if(diaDaSemana==='Terça'){
    console.log('Hoje tem Orientação')
}else if(diaDaSemana==='Quarta'){
    console.log('Hoje tem Aulas!')
}else if(diaDaSemana==='Quinta'){
    console.log('Hoje tem Plantão')
}else if(diaDaSemana==='Sexta'){
    console.log('Entregue os exercicios')
}else if(diaDaSemana==='Sabado'){
    console.log('Hoje tem Aula o dia todo')
}else {
    console.log('Pode estudar e ajudar as colegas')
}*/

let diaDaSemana='Sabado'

switch(diaDaSemana){
    case'Domingo':
      console.log('Pode estudar e ajudar as colegas')
      break
    case'Segunda':
      console.log('Pode estudar e ajudar as colegas')
      break
    case'Terça':
      console.log('Tem orientação com a Ju')
      break
    case'Quarta':
      console.log('Tem aula a mara da Simara')
      break
    case'Quinta':
      console.log('Tem plantão de dúvida galera')
      break
    case'Sabado':
      console.log('É dia de aula galera.')
      break
    default: 
      console.log('Pode estudar e ajudar as colegas')
}