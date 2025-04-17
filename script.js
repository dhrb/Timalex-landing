const productTitle = document.querySelector("#productTitle");
const navlinks = document.querySelectorAll(".navItemLink");
const activeCategory = document.getElementsByClassName("navItemLinkActive");
const productsCards = document.querySelector("#productsCards");
const form = document.querySelector(".formWrapp");
const headerBurgerIcon = document.querySelector(".headerBurgerImg");
const headerNav = document.querySelector(".headerNav");
(function () {
  console.log("emailjs initialized");
  emailjs.init({
    publicKey: "uAfhbf8EIIHvaYAbn",
  });
})();

headerBurgerIcon.addEventListener("click", () => {
  if (headerNav.classList.contains("headerNav")) {
    headerNav.classList.remove("headerNav");
    headerNav.classList.add("headerNavActive");
  } else {
    headerNav.classList.remove("headerNavActive");
    headerNav.classList.add("headerNav");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = {
    name: document.getElementById("inputName").value,
    phone: document.getElementById("inputPhone").value,
    email: document.getElementById("inputEmail").value,
    message: document.getElementById("inputText").value,
  };
  emailjs.send("default_service", "template_zqelhv8", formData).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
});

navlinks.forEach((link) => {
  link.addEventListener("click", () => {
    navlinks.forEach((navlink) => {
      if (navlink.id !== link.id) {
        navlink.classList.remove("navItemLinkActive");
      } else {
        link.classList.add("navItemLinkActive");
        console.log(activeCategory);
      }
    });
  });
});
