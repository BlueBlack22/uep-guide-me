function validateForm() {
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let address = document.getElementById("address").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let correct = true;

  if (
    firstname === "" ||
    lastname === "" ||
    email === "" ||
    username === "" ||
    address === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    correct = false;
    alert("Wszystkie pola muszą być uzupełnione.");
    return false;
  }

  if (password !== confirmPassword) {
    correct = false;
    alert("Hasła nie pasują.");
    return false;
  }

  if (correct) {
    alert("Utworzono konto.");
    location.reload();
  }
}

document.querySelector("#registrationForm").addEventListener("submit", (e) => {
  validateForm();
  e.preventDefault();
  console.log("sent");
});
