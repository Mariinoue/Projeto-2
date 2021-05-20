//8 - Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

//- Se a media for igual ou maior que 7 - Aprovado
//- Se a media for maior e igual a cinco e menor que 7 - Recuperação
//- Se a media for menor que 5 - Reprovado

const nota1=7
const nota2=7
const nota3=7

let media3Notas=(nota1+nota2+nota3)/3

if(media3Notas>=7 && media3Notas<=10 ){
    console.log('Aprovado')
}else if(media3Notas>10){
    console.log('Erro')
}else if(media3Notas>=5){
    console.log('Recuperação')
}else{
    console.log('Reprovado')
}

