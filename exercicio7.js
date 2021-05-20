//7 - Elabore um algoritmo que receba dois números e \n 
// determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

let num1=20
let num2=20

if(num1>num2){
    console.log(`${num1} é maior`)
}else if(num1<num2){
    console.log(`${num2} é maior`)
}else if(num1===num2){
    console.log('são numeros iguais')
}else{
    console.log('Digitar entrada valida')
}