const menuList = document.getElementById("menu-list")
const menu = document.getElementById("menu")

menuList.addEventListener("click", () => {
   menu.classList.toggle("hidden");
})