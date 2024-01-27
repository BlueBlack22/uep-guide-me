const time = new Date();
const ad = document.querySelector("#ad");
const greeting = document.querySelector("#greeting");

if (time.getHours() >= 17 || time.getHours() <= 3) {
  greeting.textContent = "Dobry wieczór,";
} else {
  greeting.textContent = "Dzień dobry,";
}

ad.addEventListener("click", () => {
  window.location.href = "https://www.lot.com";
});

document.querySelector("#trip1").addEventListener("click", () => {
  window.location = "./trip-1.html";
});

document.querySelector("#trip2").addEventListener("click", () => {
  window.location = "./trip-2.html";
});

document.querySelector("#trip3").addEventListener("click", () => {
  window.location = "./trip-3.html";
});

document.querySelector("#trip4").addEventListener("click", () => {
  window.location = "./trip-4.html";
});

document.querySelector("#trip5").addEventListener("click", () => {
  window.location = "./trip-5.html";
});

document.querySelector("#logout").addEventListener("click", () => {
  window.location = "../index.html";
  alert("Nastąpiło wylogowanie");
});
