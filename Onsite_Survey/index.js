var emailInput = document.getElementById("emailValue");
var mobileInput = document.getElementById("mobileValue");
var required_email_text = document.getElementById("required-email");
var required_mob_text = document.getElementById("required-mobile");
var mobile_error_text = document.getElementById("error-number");
var email_error_text = document.getElementById("error-email");
console.log("hello world");
const phoneInputField = document.querySelector("#mobileValue");
const phoneInput = window.intlTelInput(phoneInputField, {
  preferredCountries: ["in", "co", "uk", "de"],
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
console.log(phoneInput);
//when user type something in email input box then required text will be remove
emailInput.addEventListener("input", () => {
  email_error_text.innerText = "";
  if (emailInput.value === "") {
    required_email_text.style.display = "block";
  } else {
    required_email_text.style.display = "none";
  }
});

// // when user type something in mobile input box then required text will be remove
mobileInput.addEventListener("input", () => {
  mobile_error_text.innerText = "";
  if (mobileInput.value === "") {
    required_mob_text.style.display = "block";
  } else {
    required_mob_text.style.display = "none";
  }
});

document.querySelector("#form").addEventListener("click", sendData);
// regrex

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function sendData() {
  event.preventDefault();
  console.log("hello");
  let email = emailInput.value;
  let mobile = mobileInput.value;
  let storeData = {
    email: email,
    mobile: mobile,
  };
  // check validation
  if (!email.match(mailformat) || email.length < 11 || email.length > 30) {
    email_error_text.innerText = "You have entered an invalid email address.";
  } else if (mobile.length < 10 || mobile.length > 10 || isNaN(mobile)) {
    mobile_error_text.innerText = "You have entered an invalid Mobile number.";
  } else {
    localStorage.setItem("data", JSON.stringify(storeData));
    window.location.href = "./displayPage.html";
  }
}
