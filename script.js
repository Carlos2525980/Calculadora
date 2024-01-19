


function Soma() {
    var numero1 = document.getElementById("barra1")
    var numero2 = document.getElementById("barra2")
    var resultado = document.getElementById("resultado")

    var n1 = Number(numero1.value)
    var n2 = Number(numero2.value)

    if (n1 == "" || n2 == "") {

        alert("Digite os Números")

    } else {
        var r = n1 + n2
        resultado.innerHTML = `A soma entre ${n1} e ${n2} é ${r}`
    }
}

function substrair() {

    var numero1 = document.getElementById("barra1")
    var numero2 = document.getElementById("barra2")
    var resultado = document.getElementById("resultado")

    var n1 = Number(numero1.value)
    var n2 = Number(numero2.value)

    if (n1 == "" || n2 == "") {

        alert("Digite os Números")
    } else {
        var r = n1 - n2

        resultado.innerHTML = `A substração entre ${n1} e ${n2} é ${r}`
    }
}

function dividir() {

    var numero1 = document.getElementById("barra1")
    var numero2 = document.getElementById("barra2")
    var resultado = document.getElementById("resultado")

    var n1 = Number(numero1.value)
    var n2 = Number(numero2.value)

    if (n1 == "" || n2 == "") {

        alert("Digite os Números")
    } else {
        var r = n1 - n2

        resultado.innerHTML = `A divisão entre ${n1} e ${n2} é ${r}`
    }
}

function Multiplicar() {

    var numero1 = document.getElementById("barra1")
    var numero2 = document.getElementById("barra2")
    var resultado = document.getElementById("resultado")

    var n1 = Number(numero1.value)
    var n2 = Number(numero2.value)

    if (n1 == "" || n2 == "") {

        alert("Digite os Números")
    } else {
        var r = n1 - n2

        resultado.innerHTML = `A multiplicação entre ${n1} e ${n2} é ${r}`
    }

}

