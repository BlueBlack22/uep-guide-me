userDB = [
  {
    username: "jan.kowalski",
    password: "12345",
    guide: false,
  },
  {
    username: "adam.nowak",
    password: "12345",
    guide: true,
  },
];

function validateForm() {
  let name = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let userFound = false;

  if (name === "" || pass === "") {
    alert("Username and password are required.");
    return false;
  }

  for (let i in userDB) {
    if (userDB[i].username == name) {
      userFound = true;
      if (userDB[i].password == pass) {
        window.location = "./tourist-home.html";
      } else {
        alert("Password is wrong");
      }
    }
  }

  if (userFound == false) {
    alert("Account not in database");
  }
}

document.querySelector("#loginForm").addEventListener("submit", (e) => {
  validateForm();
  e.preventDefault();
});
