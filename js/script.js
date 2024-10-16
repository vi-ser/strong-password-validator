const passwordInput = document.getElementById("password");
const validationBar = document.getElementById("bar");

const lengthCriteria = document.getElementById("length-condition");
const capitalCriteria = document.getElementById("capital-condition");
const numberCriteria = document.getElementById("number-condition");
const specialCriteria = document.getElementById("special-condition");

passwordInput.addEventListener("input", function () {
  const password = passwordInput.value;
  let strength = 0;
  let isLong = false;
  let hasCapitalLetters = false;
  let hasNumbers = false;
  let hasSpecialChars = false;

  if (password.length >= 9) {
    strength++;
    isLong = true;
    lengthCriteria.querySelector("i").classList.replace("fa-x", "fa-check");
    lengthCriteria.style.color = "#41C0A1";
  } else {
    lengthCriteria.querySelector("i").classList.replace("fa-check", "fa-x");
    lengthCriteria.style.color = "#aeaeae";
  }

  if (/[A-Z]/.test(password)) {
    strength++;
    hasCapitalLetters = true;
    capitalCriteria.querySelector("i").classList.replace("fa-x", "fa-check");
    capitalCriteria.style.color = "#41C0A1";
  } else {
    capitalCriteria.querySelector("i").classList.replace("fa-check", "fa-x");
    capitalCriteria.style.color = "#aeaeae";
  }

  if (/\d/.test(password)) {
    strength++;
    hasNumbers = true;
    numberCriteria.querySelector("i").classList.replace("fa-x", "fa-check");
    numberCriteria.style.color = "#41C0A1";
  } else {
    numberCriteria.querySelector("i").classList.replace("fa-check", "fa-x");
    numberCriteria.style.color = "#aeaeae";
  }

  if (/[!@#\$%\^&\*]/.test(password)) {
    strength++;
    hasSpecialChars = true;
    specialCriteria.querySelector("i").classList.replace("fa-x", "fa-check");
    specialCriteria.style.color = "#41C0A1";
  } else {
    specialCriteria.querySelector("i").classList.replace("fa-check", "fa-x");
    specialCriteria.style.color = "#aeaeae";
  }

  if (strength == 0) {
    validationBar.style.backgroundColor = "#e2e2e2";
    validationBar.style.width = "0%";
  } else if (strength == 1) {
    validationBar.style.backgroundColor = "#EC334D";
    validationBar.style.width = "25%";
  } else if (strength == 2) {
    validationBar.style.backgroundColor = "#FFC356";
    validationBar.style.width = "50%";
  } else if (strength == 3) {
    validationBar.style.backgroundColor = "#FDEB86";
    validationBar.style.width = "75%";
  } else if (strength == 4) {
    validationBar.style.backgroundColor = "#41C0A1";
    validationBar.style.width = "100%";
  }

  console.log(strength);
  console.log(isLong);
  console.log(hasCapitalLetters);
  console.log(hasSpecialChars);
  console.log(hasNumbers);
});
