const menuList = document.querySelector(".menu-icon i");
const nav = document.querySelector("nav ul" );

menuList.addEventListener("click", function(){
    nav.classList.toggle("slide")
})

