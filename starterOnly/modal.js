// Cette fonction permet de modifier la classe CSS d'un élément HTML pour rendre la navigation responsive
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Sélection des éléments du formulaire et du bouton pour ouvrir le modal
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const CloseBtn = document.querySelectorAll(".close");
const SubmitBtn = document.getElementById("btn-submit");
const form = document.querySelector(".modal-body");
const confirmationBtn = document.querySelectorAll(".confirmation-btn");
const modalFirst = document.getElementById("first");
const modalLast = document.getElementById("last");
const modalEmail = document.getElementById("email");
const modalBirthdate = document.getElementById("birthdate");
const modalQuantity = document.getElementById("quantity");
const modalCheckbox1 = document.getElementById("checkbox1");
const modalLocation = document.getElementsByName("location");
const modalBodyText = document.getElementById("modalBodyText");
const confirmationMessage = document.getElementById("confirmation-Message");

// Événement d'ouverture du modal lorsque le bouton est cliqué
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "block";
  modalBodyText.style.display = "block";
  confirmationMessage.style.display = "none";
}

// Événement de fermeture du modal lorsque le bouton de fermeture est cliqué
CloseBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    closeModal();
    resetFormFields();
  })
);

// Fonction pour réinitialiser les champs du formulaire
function resetFormFields() {
  modalFirst.value = "";
  modalLast.value = "";
  modalEmail.value = "";
  modalBirthdate.value = "";
  modalQuantity.value = "";
  modalCheckbox1.checked = false;
  modalLocation.forEach((input) => (input.checked = false));
}

// Fonction pour fermer le modal
function closeModal() {
  modalbg.style.display = "none";
}
// Fonction pour fermer le modal de confirmation
confirmationBtn.forEach((btn) =>
  btn.addEventListener("click", confirmationModal)
);

function confirmationModal() {
  modalbg.style.display = "none";
}

// Fonction pour vérifier la validité du formulaire
function checkFormValidity() {
  if (
    modalFirst.value.length >= 2 &&
    modalLast.value.length >= 2 &&
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(modalEmail.value) &&
    /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(
      modalBirthdate.value
    ) &&
    dateValidity(modalBirthdate) &&
    /^\d+$/.test(modalQuantity.value) &&
    checkOneRadioChecked(modalLocation) &&
    modalCheckbox1.checked
  ) {
    return true;
  }
}

// Fonction pour vérifier la validité de la date de naissance
function dateValidity() {
  let date = new Date();
  let fullDateNumber = date.getTime();
  let dateBirthday = new Date(modalBirthdate.value);
  let dateBirthdayNumber = dateBirthday.getTime();

  if (dateBirthdayNumber < fullDateNumber) {
    return true;
  } else {
    document.querySelector(".errorBirthdate").innerHTML =
      "Veuillez entrer une date de naissance valide.";
    return false;
  }
}

// Définition de la fonction pour vérifier si au moins un bouton radio est sélectionné
function checkOneRadioChecked() {
  let isSomeOneChecked = false;
  document.querySelectorAll('input[name="location"]').forEach((input) => {
    if (input.checked) {
      isSomeOneChecked = true;
    }
  });
  return isSomeOneChecked;
}

// Fonction pour vérifier la validité des champs du formulaire
function checkFieldsValidity() {
  if (modalFirst.value.length < 2) {
    document.querySelector(".errorFirst").innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
  } else {
    document.querySelector(".errorFirst").innerHTML = "";
  }

  if (modalLast.value.length < 2) {
    document.querySelector(".errorLast").innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  } else {
    document.querySelector(".errorLast").innerHTML = "";
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(modalEmail.value)) {
    document.querySelector(".errorEmail").innerHTML =
      "Veuillez entrer une adresse mail valide. Ex: game@on.com";
  } else {
    document.querySelector(".errorEmail").innerHTML = "";
  }

  if (
    !/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(
      modalBirthdate.value
    )
  ) {
    document.querySelector(".errorBirthdate").innerHTML =
      "Veuillez entrer une date de naissance valide.";
  } else {
    document.querySelector(".errorBirthdate").innerHTML = "";
  }

  if (!/^\d+$/.test(modalQuantity.value)) {
    document.querySelector(".errorQuantity").innerHTML =
      "Indiquez un nombre entre 0 et 99";
  } else {
    document.querySelector(".errorQuantity").innerHTML = "";
  }

  if (!checkOneRadioChecked(modalLocation)) {
    document.querySelector(".errorLocation").innerHTML =
      "Choisissez une des options.";
  } else {
    document.querySelector(".errorLocation").innerHTML = "";
  }

  if (!modalCheckbox1.checked) {
    document.querySelector(".errorCheckbox").innerHTML =
      "Vérifiez que vous acceptez les conditions d'utilisation.";
  } else {
    document.querySelector(".errorCheckbox").innerHTML = "";
  }
}

// Ajout d'événements pour effacer les messages d'erreur lors de la saisie dans les champs du formulaire
modalFirst.addEventListener("input", function () {
  document.querySelector(".errorFirst").innerHTML = "";
});

modalLast.addEventListener("input", function () {
  document.querySelector(".errorLast").innerHTML = "";
});

modalEmail.addEventListener("input", function () {
  document.querySelector(".errorEmail").innerHTML = "";
});

modalBirthdate.addEventListener("input", function () {
  document.querySelector(".errorBirthdate").innerHTML = "";
});

modalQuantity.addEventListener("input", function () {
  document.querySelector(".errorQuantity").innerHTML = "";
});

modalLocation.forEach(function (input) {
  input.addEventListener("input", function () {
    document.querySelector(".errorLocation").innerHTML = "";
  });
});

modalCheckbox1.addEventListener("input", function () {
  document.querySelector(".errorCheckbox").innerHTML = "";
});

//function displaying a congratulation message
function confirmation() {
  modalBodyText.style.display = "none";
  confirmationMessage.style.display = "block";
}
// Événement de soumission du formulaire
document
  .getElementById("btn-submit")
  .addEventListener("click", function (submit) {
    submit.preventDefault();

    checkFieldsValidity();

    if (checkFormValidity()) {
      confirmation();
      document.getElementById("reserve").reset();
    }
  });
