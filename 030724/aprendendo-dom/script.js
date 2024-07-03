let nome = document.getElementById("idNome");
let cidade = document.getElementById("idCity");
//obtém o elemento do DOM com o ID "nome"
function mudar(event) {
    event.preventDefault();
    document.getElementById('titulo').innerHTML = nome.value;
    document.getElementById('titulo2').innerHTML = cidade.value;
    cidade.value = ""; nome.value = ""
}