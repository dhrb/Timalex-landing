const headerBurgerIcon = document.querySelector(".headerBurgerImg");
const headerNav = document.querySelector(".headerNav");
const contactFormSent = document.querySelector(".contactFormSent");
const contactUsForm = document.querySelector(".contactUsForm");

const form =
  document.querySelector(".formWrapp") ||
  document.querySelector(".contactForm");

(function () {
  emailjs.init({ publicKey: "4ZZFnnEN3wp7yjDFa" });
  console.log("EmailJS initialized");
})();

document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookieBanner");
  const acceptBtn = document.getElementById("acceptCookies");

  if (localStorage.getItem("cookiesAccepted") === "true") {
    banner.style.display = "none";
  }
  if (localStorage.getItem("formSent") === "true") {
    form.style.display = "none";
    contactFormSent.style.display = "flex";
    if (contactUsForm) {
      contactUsForm.style.display = "none";
    }
  }
  acceptBtn?.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    banner.style.display = "none";
  });
});

if (headerBurgerIcon && headerNav) {
  headerBurgerIcon.addEventListener("click", () => {
    headerNav.classList.toggle("headerNavActive");
    headerNav.classList.toggle("headerNav");
  });
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = {
      name: document.getElementById("inputName")?.value || "",
      phone: document.getElementById("inputPhone")?.value || "",
      email: document.getElementById("inputEmail")?.value || "",
      message: document.getElementById("inputText")?.value || "",
    };

    console.log("Sending form:", formData);

    emailjs.send("service_nvj38rj", "template_zqelhv8", formData).then(
      (response) => {
        localStorage.setItem("formSent", "true");
        window.location.reload();
      },
      (error) => {
        console.log(error);
        prompt(
          "Something wrong, please try again or choice our different ways of contact with us"
        );
      }
    );
  });
}
