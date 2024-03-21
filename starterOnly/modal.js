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
// Ajout du sélecteur pour le bouton de fermeture
const closeBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector("form[name='reserve']");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
// Ajout de l'événement pour le bouton de fermeture
closeBtn.addEventListener("click", closeModal);

form.addEventListener("submit", validateForm);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


function validateForm(event) {
  event.preventDefault(); 


  let isValid = true;

  formData.forEach((field) => {
    const input = field.querySelector("input, textarea, select");


    if (input.hasAttribute("required") && input.value.trim() === "") {
      isValid = false;

      field.classList.add("error");
    } else {

      field.classList.remove("error");
    }


  });


  if (isValid) {
    form.submit();
  }
}


