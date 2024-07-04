// obtem os elementos do DOM

let valor2 = document.getElementById('valor2')        /*obtem os valores*/
let valor1 = document.getElementById('valor1')
const Btnsomar = document.getElementById('Btnsomar')    /* botão */
const Btnsub = document.getElementById('Btnsub')
const Result = document.getElementById('resultado')     /*obtem o resultado*/

Btnsomar.addEventListener("click", function () {
    let soma = Number(valor1.value) + Number(valor2.value)

    Result.textContent = soma

    valor1.value = "";
    valor2.value = "";

    setTimeout(function(){
    Result.textContent = "0";
    }, 1000)
})
Btnsub.addEventListener("click", function () {
    let sub = valor1.value - valor2.value

    Result.textContent = sub

    valor1.value = "";
    valor2.value = "";

    setTimeout(function(){
    Result.textContent = "0";
    }, 1000)
})
Btnmult.addEventListener("click", function(){
    let mult = valor1.value * valor2.value
    
    Result.textContent = mult

    valor1.value = "";
    valor2.value = "";

    setTimeout(function(){
    Result.textContent = "0";
    }, 1000)
})
Btndiv.addEventListener("click", function(){
    let div = valor1.value / valor2.value
    
    Result.textContent = div

    valor1.value = "";
    valor2.value = "";

    setTimeout(function(){
    Result.textContent = "0";
    }, 1000)
})