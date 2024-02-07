const openNav = document.getElementById("menu-btn");
const nav = document.getElementById("nav");
const exitNav = document.getElementById("exit-btn");

openNav.addEventListener("click", function () {
  nav.classList.add("open-nav");
});

exitNav.addEventListener("click", function () {
  nav.classList.remove("open-nav");
});
