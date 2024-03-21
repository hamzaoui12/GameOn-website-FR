function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector("form[name='reserve']");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
closeBtn.addEventListener("click", closeModal);
// submit form event
form.addEventListener("submit", validateForm);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// form validation
function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  // Validation checks
  let isValid = true;

  // Loop through form fields
  formData.forEach((field) => {
    const input = field.querySelector("input, textarea, select");

    // Check if field is required and empty
    if (input.hasAttribute("required") && input.value.trim() === "") {
      isValid = false;
      // Add error class
      field.classList.add("error");
    } else {
      // Remove error class
      field.classList.remove("error");
    }

    // Additional validation checks can be added here
  });

  // If form is valid, submit it
  if (isValid) {
    form.submit();
  }
}


