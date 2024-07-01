const button = document.getElementById("button")
const names = ["joel", "nariga", "lucio"]
button.addEventListener("click", function (e) {
    for (let i = 0; i < names.length; i++) {
        console.log(`<li>${names[i]}</li>`)

    }
})