document
  .querySelector("#login")
  .addEventListener("click", (e) => (window.location = "./pages/login.html"));

document.querySelector("#guide").addEventListener("click", () => {
  window.location = "./pages/register-guide.html";
});

document.querySelector("#tourist").addEventListener("click", () => {
  window.location = "./pages/register-tourist.html";
});
