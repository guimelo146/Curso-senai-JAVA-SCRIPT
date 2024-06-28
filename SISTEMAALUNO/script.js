const button = document.querySelector("button");
const inputNota = document.querySelector("#nota");

//criando uma função para limpar o campo
function clearform() {
    inputNota.value = "";
}
//criando uma função
button.addEventListener("click", function (event) {
    event.preventDefault();
    const inputNotavalue = inputNota.value;
    //console.log (inputnotavalue); 
    console.log(inputNota.value);
    //validação 
    if (inputNotavalue === '') {
        alert("Preencher a caixa de texto para validar nota")
        return false
    }
    //lógica
    if (inputNotavalue >= 6) {
        alert("Você está aprovado")
    } else {
        alert("Você está reprovado")
    }
    //chamando função limpar campo
    clearform();
})