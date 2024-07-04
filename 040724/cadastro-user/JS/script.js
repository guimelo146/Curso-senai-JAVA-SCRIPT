let form = document.querySelector("#cadastroForm");
let cadastrolist = document.querySelector("#cadastrolist");

//obtém os valores dos campos de entrada
let nome = document.getElementById("nome")
let email = document.getElementById("email")

//adiciona um evento de formulário
form.addEventListener("submit", function (event) {
    event.preventDefault();
let listItem = document.createElement("li")
listItem.innerHTML = `strong>Nome:</strong> ${nome.value}<br>
<strong>Email:</strong></br>`
cadastrolist.appendChild(listItem)
form.reset()
})
