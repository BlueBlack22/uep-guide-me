let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 7000); // Change image every 2 seconds
}

const time = new Date();
const ad = document.querySelector("#ad");
const greeting = document.querySelector("#greeting");
const homeIcon = document.querySelector("#homepage-icon");
const homeLink = document.querySelector("#homepage-link");
const signUp = document.querySelector("#signup-btn");

if (time.getHours() >= 17 || time.getHours() <= 3) {
  greeting.textContent = "Dobry wieczór,";
} else {
  greeting.textContent = "Dzień dobry,";
}

ad.addEventListener("click", () => {
  window.location.href = "https://www.lot.com";
});

homeIcon.addEventListener(
  "click",
  () => (window.location = "./tourist-home.html")
);

homeLink.addEventListener(
  "click",
  () => (window.location = "./tourist-home.html")
);

signUp.addEventListener("click", () => {
  alert("Wysłano zgłoszenie! Oczekuj kontaktu z przewodnikiem.");
});

document.querySelector("#logout").addEventListener("click", () => {
  window.location = "../index.html";
  alert("Nastąpiło wylogowanie");
});
