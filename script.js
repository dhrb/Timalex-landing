const form = document.querySelector(".formWrapp");
const headerBurgerIcon = document.querySelector(".headerBurgerImg");
const headerNav = document.querySelector(".headerNav");

(function () {
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

document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookieBanner");
  const acceptBtn = document.getElementById("acceptCookies");

  // Если уже согласился — не показываем
  if (localStorage.getItem("cookiesAccepted") === "true") {
    banner.style.display = "none";
  }

  acceptBtn.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    banner.style.display = "none";
  });
});

const glide = new Glide(".glide", {
  type: "slider", // Тип слайдера
  startAt: 2, // Начинаем с первого слайда
  perView: 4, // Показываем один слайд за раз
  focusAt: "center", // Центрируем активный слайд
  gap: 10, // Зазор между слайдами
  rewind: true,
});

glide.mount();
