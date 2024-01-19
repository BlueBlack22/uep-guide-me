const time = new Date();
const ad = document.querySelector("#ad");
const greeting = document.querySelector("#greeting");

console.log(time.getHours());
if (time.getHours() >= 17 || time.getHours() <= 3) {
  greeting.textContent = "Dobry wieczór,";
} else {
  greeting.textContent = "Dzień dobry,";
}

ad.addEventListener("click", () => {
  window.location.href = "https://www.lot.com";
});
