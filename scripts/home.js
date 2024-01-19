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
  console.log("clicked");
  window.location = "./trip-1.html";
});
