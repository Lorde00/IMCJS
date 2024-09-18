let peso = 0
let altura = 0
let imc = 0

alert("Bem vindo à balança de IMC! Por favor, siga as instruções abaixo.\n")
nome = String(prompt("Digite seu nome: \n"))
peso = parseFloat(prompt("Digite o seu peso em KG: \n"))
altura = parseFloat(prompt("Digite a sua altura em metros(coloque .): \n"))

imc = (peso / (altura * altura))

if (imc < 16) {
    alert(`${nome}, seu IMC entá em ${Math.round(imc)} e sua classsificação: baixo peso muito grave`)
} else {
    if (imc >= 16 && imc < 17) {
        alert(`${nome}, seu IMC entá em ${Math.round(imc)} e sua classsificação: baixo peso grave`)
    } else {
        if (imc >= 17 && imc < 18.50) {
            alert(`${nome}, seu IMC entá em ${Math.round(imc)} e sua classsificação: baixo peso`)
        } else {
            if (imc >= 18.50 && imc < 25) {
                alert(`${nome}, seu IMC entá em ${Math.round(imc)} e sua classsificação: na média`)
            } else {
                if (imc >= 25 && imc < 30) {
                    alert(`${nome}, seu IMC entá em ${Math.round(imc)} e sua classsificação: sobrepeso`)
                } else {
                    if (imc >= 30 && imc < 35) {
                        alert(`${nome}, seu IMC entá em ${Math.round(imc)} e sua classsificação: obesidade grau I`)
                    } else {
                        if (imc >= 35 && imc < 40) {
                            alert(`${nome}, seu IMC entá em ${Math.round(imc)} e sua classsificação: obesidade grau II`)
                        } else {
                            if (imc >= 40) {
                                alert(`${nome}, seu IMC entá em ${Math.round(imc)} e sua classsificação: obesidade grau III`)
                            } else {
                                alert("ERRO")
                            }
                        }
                    }
                }
            }
        }
    }
}





