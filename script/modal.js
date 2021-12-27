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
const quantity = document.getElementById("quantity");
const radioButton = document.querySelector(".checkbox-input")
const rights = document.getElementById("checkbox1")
const validate = document.querySelector(".btn-submit");
const myForm = document.getElementById("inscription");


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

/**
 * fonction qui vérifie le prénom
 */
function validateFirstName() {
  // [a-zA-Z] : lettre de A à Z majuscule et minuscule
  // {2,} : 2 et plus
  const identityFormat = /^[a-zA-Z]{2,}$/i;
  if (firstName.value.match(identityFormat)) {
    this.style.border = "2px solid green";
    this.nextElementSibling.innerText = ""
  } else {
    this.nextElementSibling.innerText = "Veuillez entrer 2 caractères ou plus pour le champ Prénom sans chiffre";
    this.style.border = "2px solid red";
  }
}
  firstName.addEventListener("blur", validateFirstName);

  /**
   * fonction qui vérifie le nom
   */
  function validateLastName() {
    // [a-zA-Z] : lettre de A à Z majuscule et minuscule
    // {2,} : 2 et plus
    const identityFormat = /^[a-zA-Z]{2,}$/i;
    if (lastName.value.match(identityFormat)) {
      this.style.border = "2px solid green";
      this.nextElementSibling.innerText = ""
    } else {
      this.nextElementSibling.innerText = "Veuillez entrer 2 caractères ou plus pour le champ Nom";
      this.style.border = "2px solid red";
    }
  }
  lastName.addEventListener("blur", validateLastName);

  /**
   * fonction qui vérifie l'email
   */
  function ValidateEmail() {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailFormat)) {
      this.style.border = "2px solid green";
      this.nextElementSibling.innerText = ""
    } else {
      this.style.border = "2px solid red";
      this.nextElementSibling.innerText = "Veuillez entrer une adresse e-mail valide";
    }
  }
  email.addEventListener("blur", ValidateEmail);


  function validateQuantity() {
    console.log(quantity.value)
    if (quantity.value == " ") {
      console.log(this.style.border)
      this.style.border = "2px solid red";
      this.nextElementSibling.innerText = "champ vide";
    }
    this.style.border = "2px solid green"
    this.nextElementSibling.innerText = ""
  }
  quantity.addEventListener("blur", validateQuantity);

  /**
   * fonction qui vérifie qu'un bouton radio est sélectionné
   */
  function verifyRadiobutton() {
    for (var i = 0; i < radioButton.length; i++)
      if (radioButton[i].checked = true) {} else {
        alert("cocher une case")
      }
  }
  radioButton.addEventListener("click", verifyRadiobutton)

  /**
   * fonction qui vérifie que les conditions d'utilisation ont été coché 
   */
  function conditionCheked()
  {
    if (rights.checked == false) {
      alert ("accepter les conditions")
      var newDiv = document.createElement ("span")
      var newContent = document.createTextNode ("Veuillez cocher les conditions d'utilisation")
      newDiv.appendChild(newContent)
      document.body.insertBefore (newDiv, rights)
    }
  }
  rights.addEventListener ("click", conditionCheked)

/**
 *  fonction qui envoie un message après validation du formulaire
 */



  function disableSubmit(disabled) {
   if (disabled) {
     document
       .getElementById("btn-submit")
       .setAttribute("disabled", true);
   } else {
     document
       .getElementById("btn-submit")
       .removeAttribute("disabled");
   }
 }
 
  /**
   * fonction qui affiche un message de validation du formulaire
   */
  myForm.addEventListener("submit", function(e){
    // j'enlève tous les blancs qu'il pourrait y avoir avec trim()
    if (firstName.value.trim() == ""){
      disableSubmit(disabled)
    }


  })


