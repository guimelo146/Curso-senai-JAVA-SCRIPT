const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");

button.addEventListener("click", function(){
    popup.classList.add("d-block");
});

popup.addEventListener("click" , function(event){
   const classList = event.target.classList[0]
    const clasnamearray = ["popup-close", "popup-link","popup-wrapper"];

    const isclassList = clasnamearray.includes(classListclick)

    if(clasnamearray.includes(classListclick)) {
        popup.classList.remove("d-block");
    }

})