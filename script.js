let numero1 = ""
let numero2 = ""
let operacao = ""
let expressao = ""

function soma(a,b) {
    return a + b
}

function subtrair(a,b) {
    return a - b
}

function multiplicar(a,b) {
    return a * b
}

function dividir(a,b) {
    if ( b === 0) {
        return "Erro"
    }
    return a / b
}

function adicionar(valor) {
    let display = document.getElementById("display")

    if(valor === "+" || valor ==="-" || valor === "*" || valor === "/"){
        operacao = valor
        expressao += " " + valor + " "
        display.value = expressao
    } else {
        if (operacao === "") {
            numero1 += valor
            display.value = numero1
        } else {
            numero2 += valor 
        }
        expressao += valor
        display.value = expressao
    }
}

function limpar() {
    numero1 = ""
    numero2 = ""
    operacao = ""
    expressao = ""
    document.getElementById("display").value =""
}

function calcular() {
    let resultado 

    let n1 = Number(numero1)
    let n2 = Number(numero2)


    if (operacao === "+"){
        resultado = soma(n1,n2)
    }
      if (operacao === "-"){
        resultado = subtrair(n1,n2)
    }
      if (operacao === "*"){
        resultado = multiplicar(n1,n2)
    }
      if (operacao === "/"){
        resultado = dividir(n1,n2)
    }
     let display = document.getElementById("display")
     display.value = expressao + " = " + resultado

    numero1 = resultado.toString()
    numero2 = ""
    operacao = ""
    expressao = numero1

}
document.addEventListener("keydown", function(event) {
   let tecla = event.key

   if (!isNaN(tecla)) {
    adicionar(tecla)
   }

   if (tecla === "+" || tecla === "-" || tecla === "*" || tecla === "/")
   {
    adicionar(tecla)
   }
   if (tecla === "Enter"){
    calcular()
   }
   if (tecla === "Backspace") {
    limpar()
   }
})
