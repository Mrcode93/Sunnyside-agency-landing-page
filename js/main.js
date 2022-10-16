let hamburger = document.querySelector("#hamburger");
let menu = document.querySelector(".mobile");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
