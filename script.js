const headerBurgerIcon = document.querySelector(".headerBurgerImg");
const headerNav = document.querySelector(".headerNav");
const contactFormSent = document.querySelector(".contactFormSent");
const contactUsForm = document.querySelector(".contactUsForm");

const form =
  document.querySelector(".formWrapp") ||
  document.querySelector(".contactForm");

(function () {
  try {
    emailjs.init({ publicKey: "4ZZFnnEN3wp7yjDFa" });
    console.log("EmailJS initialized");
  } catch (error) {
    console.log(error.message);
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookieBanner");
  const acceptBtn = document.getElementById("acceptCookies");

  if (localStorage.getItem("cookiesAccepted") === "true") {
    try {
      banner.style.display = "none";
    } catch (err) {
      console.log(err.message);
    }
  }
  if (localStorage.getItem("formSent") === "true") {
    try {
      form.style.display = "none";
      contactFormSent.style.display = "flex";
      if (contactUsForm) {
        contactUsForm.style.display = "none";
      }
    } catch (err) {
      console.log(err.message);
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

    emailjs.send("service_nvj38rj", "template_zqelhv8", formData).then(
      (response) => {
        localStorage.setItem("formSent", "true");
        window.location.reload();
      },
      (error) => {
        console.log(error);
        alert(
          "Something wrong, please try again or choice our different ways of contact with us"
        );
      }
    );
  });
}
