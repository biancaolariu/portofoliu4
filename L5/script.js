// Cache the DOM
var button = document.getElementById("button")
var nume = document.getElementById('nume")
var prenume = document.getElementById("prenume")
var educatie = document.getElementById("educatie")
var asteptari = document.getElementById("asteptari")
var img = document.querySelector("img")
var body = document.querySelector("body")
var an = document.getElementById("anNastere")

// Add event listener
button.addEventListener("click", altaViata)
an.addEventListener("mouseover", displayAge)

const d = new Date()
var year = d.getFullYear()

//Define function
function displayAge() {
        an.innerHTML = year - an.innerHTML
}

function altaViata() {
        nume.innerHTML = "Inginer"
        prenume.innnerHTML = "Google"

        educatie.innerHTML = "Google"
        asteptari.innerHTML = "<ul><li>Workshops</li><li>Intership</li></ul>"
        
        img.src = "images/cat.jpeg"
        img.style.opacity = "70%"
        img.style.height = "200px"
        img.style.width = "300px"
        img.style.border = "2px solid black"
  
        body.style.backgroundColor = "pink"
        
}