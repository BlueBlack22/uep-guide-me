function validateForm() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  if (
    username === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("Wszystkie pola muszą być uzupełnione.");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Hasła nie pasują.");
    return false;
  }

  return true;
}
