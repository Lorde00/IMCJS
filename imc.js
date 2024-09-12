

let peso = 0
let altura = 0
let imc = 0


alert("Bem vindo a balança de IMC! Por favor, siga as instruções abaixo.\n")
peso = parseFloat(prompt("Digite o seu peso em KG: \n"))
altura = parseFloat(prompt("Digite a sua altura em metros(coloque .): \n"))

imc = (peso / (altura * altura))

if(imc < 16){
    alert(`Seu IMC está em baiuxo peso muito grave, IMC = ${Math.round(imc)}`)
}

if(imc >= 16 && imc < 17) {
    alert(`Seu IMC está em baixo peso grave, IMC = ${Math.round(imc)}`)
}

if(imc >= 17 && imc < 18.50){
    alert(`Seu IMC está em baixo peso, IMC = ${Math.round(imc)}`)
}

if(imc >= 18.50 && imc < 25){
    alert(`Seu IMC está na média, IMC = ${Math.round(imc)}`)
}

if(imc >= 25 && imc < 30){
    alert(`Seu IMC está em sobrepeso, IMC = ${Math.round(imc)}`)
}

if(imc >= 30 && imc < 35){
    alert(`Seu IMC está em obesidade grau I, IMC = ${Math.round(imc)}`)
}

if(imc >= 35 && imc < 40){
    alert(`Seu IMC está em obesidade grau II, IMC = ${Math.round(imc)}`)
}

if(imc >= 40){
    alert(`Seu IMC está em obesidade grau III, IMC = ${Math.round(imc)}`)
}