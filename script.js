const menu = document.querySelector("#menu")
const close = document.querySelector("#close")
const nav = document.querySelector("nav")

menu.addEventListener("click", () =>{
    nav.style.transform = "translateX(0%)"
    close.style.display = "flex"
    menu.style.display = "none"
})
close.addEventListener("click", () => {
    nav.style.transform = "translateX(105%)"
    menu.style.display = "flex"
    close.style.display = "none"
})