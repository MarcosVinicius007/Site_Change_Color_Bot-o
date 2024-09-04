const inputColor = document.querySelector("input")
const container = document.querySelector(".conteiner")
const colorHex = document.querySelector("span")

function changeColorBackground(e){
    const colorSelected = e.target.value
    container.style.css.bacgroundColor  = colorSelected;

     colorHex.textContent = colorSelected;++++
    inputColor.HTMLInputElemen.taddEventListener("input",changColorBackgroud);
}