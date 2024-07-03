//obtém o botão e a imagem do DOM
const btnMoverImagem = document.getElementById("btnMoverImagem");
let imagem = document.getElementById("imagem");

//Variavel para rastrear o estado atual da posição da imagem
let isMoved = false;

//add a função para o botão 
btnMoverImagem.addEventListener("click", function(){
    if (isMoved){
        imagem.style.left = "50px";
        isMoved = false;
        } else {
            imagem.style.left = "300px";
            isMoved = true;
    } 
})
