const menuIcon = document.querySelector(".menuIcon");
const menuList = document.querySelector(".headerMenu");
const leftArrow = document.querySelector("#leftArrow");
const rightArrow = document.querySelector("#rightArrow");
const products = document.querySelector(".products");
const specsItem = document.querySelector(".specsItem");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("menuInactive");
});
window.addEventListener("resize", (screen) => {
  const newClientWidth = window.innerWidth;
  if (newClientWidth > 769) {
    menuList.classList.remove("menuInactive");
  }
});

let index = 0;
leftArrow.addEventListener("click", () => {
  index++;
  products.style.transform = `translateX(-${index * 300}px)`;
});
rightArrow.addEventListener("click", () => {
  index--;
  console.log("right clicked");
  products.style.transform = `translateX(${index * 300}px)`;
});
