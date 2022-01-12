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
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const dateControl = document.getElementById("birthdate")
const quantity = document.getElementById("quantity");
const radios = document.querySelectorAll("input[name=location]");
const rights = document.getElementById("checkbox1")
const modalBody = document.querySelector(".modal-body")
const form = document.getElementById("inscription")
const validClose = document.querySelector(".valid-close")
const submit = document.getElementById("submit")

/**
 * fonction qui permet l'ouverture de la modal
 */
function launchModal() {
  modalbg.style.display = "block";
}
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

/**
 * fonction qui permet la fermeture de la modal
 */
function closeModal() {
  modalbg.style.display = "none";
}
// close modal event 
modalClose.addEventListener("click", closeModal);
validClose.addEventListener("click", closeModal);

// regex email
var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// regex pour le nom et le prénom
var identityFormat = /^[a-zA-Z]{2,}$/i;
// [a-zA-Z] : lettre de A à Z majuscule et minuscule
// {2,} : 2 et plus
// $ : regarde ce qui est en accord avec précédemment. ici cela veut dire qu'il matchera uniquement avec des lettres

/**
 * Fonction qui vérifie un champ avec une regex
 */
function validChamp(champ, regex, messageError) {
  if (champ.value.match(regex)) {
    champ.style.border = "2px solid green";
    champ.nextElementSibling.innerText = ""
    return true;
  } else {
    champ.nextElementSibling.innerText = messageError;
    champ.style.border = "2px solid red";
    return false;
  }
}
firstName.addEventListener("blur", function (e) {
  validChamp(firstName, identityFormat, "Veuillez entrer 2 caractères ou plus et sans chiffre")
});
lastName.addEventListener("blur", function (e) {
  validChamp(lastName, identityFormat, "Veuillez entrer 2 caractères ou plus et sans chiffre")
});
email.addEventListener("blur", function (e) {
  validChamp(email, mailFormat, "Veuillez entrer une adresse e-mail valide")
});

/**
 * fonction de vérification pour la date
 */
function validateDate() {
  if (dateControl.value) { // true
    dateControl.style.border = "2px solid green";
    dateControl.nextElementSibling.innerText = ""
    return true
  } else {
    dateControl.style.border = "2px solid red";
    dateControl.nextElementSibling.innerText = "Veillez entrer votre date de naissance"
    return false
  }
}
dateControl.addEventListener("blur", validateDate)

/**
 * fonction qui vérifie qu'un chiffre est rempli
 */
function validateQuantity() {
  if (quantity.value) { // true
    quantity.style.border = "2px solid green"
    quantity.nextElementSibling.innerText = ""
    return true;
  } else {
    quantity.style.border = "2px solid red";
    quantity.nextElementSibling.innerText = "Veuillez entrer un chiffre entre 0 et 99";
    return false;
  }
}
quantity.addEventListener("blur", validateQuantity);

/**
 * fonction qui vérifie qu'un bouton radio est sélectionné
 */
function verifyRadiobutton() {
  valueRadiobutton = false;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      document.querySelector("#radioError").innerText = "";
      valueRadiobutton = radios[i].value;
      valueRadiobutton = true
      console.log(valueRadiobutton)
      break
    } else {
      document.querySelector("#radioError").innerText = "Veuillez choisir une option";
      valueRadiobutton = false
      console.log(valueRadiobutton)
    }
  }
}

/**
 * fonction qui vérifie que les conditions d'utilisation ont été coché 
 */
function conditionCheked() {
  if (!rights.checked) {
    document.querySelector("#checkbox").innerText = "Veuillez accepter les conditions d'utilisation";
    return false
  } else {
    document.querySelector("#checkbox").innerText = "";
    return true
  }
}
rights.addEventListener('change', conditionCheked)

// bouton fermer que je mets en display none
validClose.classList.add("display")

/**
 *  fonction qui soumet le formulaire
 *  relié au html dans le form
 *  par l'attribut onsubmit="validate(event)""
 */
function validate(e) {
  e.preventDefault() // empeche le rechargement de la page
  validChamp(firstName, identityFormat, "Veuillez entrer 2 caractères ou plus et sans chiffre"),
    validChamp(lastName, identityFormat, "Veuillez entrer 2 caractères ou plus et sans chiffre"),
    validChamp(email, mailFormat, "Veuillez entrer une adresse e-mail valide"),
    validateDate(), validateQuantity(), verifyRadiobutton(), conditionCheked()
  if (
    validChamp(firstName, identityFormat, "Veuillez entrer 2 caractères ou plus et sans chiffre") &&
    validChamp(lastName, identityFormat, "Veuillez entrer 2 caractères ou plus et sans chiffre") &&
    validChamp(email, mailFormat, "Veuillez entrer une adresse e-mail valide") &&
    validateDate() &&
    validateQuantity() &&
    valueRadiobutton === true &&
    conditionCheked()
  ) {
    //form.submit()
    validClose.classList.remove("display")
    modalBody.classList.add("successful")
    modalBody.innerHTML = "Merci pour votre inscription"
  }
}

// Autre façon d'appeler mon formulaire pour le soumettre 
// const form = document.getElementById("inscription");
// form.addEventListener("submit", function(e){
// e.preventDefault()
// }