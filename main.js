let openEl = document.getElementById("open")
let closeEL = document.getElementById("close")
let container = document.getElementById("container")

openEl.addEventListener("click", ()=>{
    container.classList.add("active")
})

closeEL.addEventListener("click", ()=>{
    container.classList.remove("active")
})
