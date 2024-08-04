let num1 = document.getElementById('txtn1')
let num2 = document.getElementById('txtn2')
let res = document.getElementById('res')
let n1 = Number(num1.value)
let n2 = Number(num2.value)

function somar() {
    let result = parseInt(num1.value) + parseInt(num2.value)
    res.innerHTML = `O resultado da sua soma é ${result}`
}

function subtrair() {
    let result = parseInt(num1.value) - parseInt(num2.value)
    res.innerHTML = `O resultado da sua subtração é ${result}`
}

function multiplicar() {
    let result = parseInt(num1.value) * parseInt(num2.value)
    res.innerHTML = `O resultado da sua multiplicação ${result}`
}

function dividir() {
    let result = parseInt(num1.value) / parseInt(num2.value)
    res.innerHTML = `O resultado da sua divisão é ${result}`
}





/*function calcular() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0) {
        window.alert('Por favor, Digite algum número para continuarmos')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            
            tab.appendChild(item)
            c++
        }
    }
}*/