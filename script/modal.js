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
const modalClose = document.querySelector (".close");
const firstname = document.getElementById ("first");
const validate = document.querySelector (".btn-submit");

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
modalClose.addEventListener("click",closeModal);

/**
 * fonction qui affiche un message de validation du formulaire
 */

