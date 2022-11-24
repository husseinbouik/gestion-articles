const form = document.getElementById("form");
const nom = document.getElementById("nom");
const prix = document.getElementById("prix");
const marque = document.getElementById("marque");
const date = document.getElementById("date");
const Genre = document.getElementsByName("M");
const mis1 = document.querySelector(".mis1");
const mis2 = document.querySelector(".mis2");
const button= document.querySelector('.btn');
let arr =[];

function validatenom(lnom) {
  if (lnom.value.trim() === "") {
    setErrorFor(lnom, "First name is required");
  } else if ((lnom.value.length < 3) || (lnom.value.length > 30)) {
    setErrorFor(lnom, "First name is invalid");
  } else {
    setSuccessFor(lnom, "Looks Good!");
  }
}
function validateprix(lprix) {
  if (lprix.value.trim() === "") {
    setErrorFor(lprix, "Last name is required");
  } else if ((lprix.value.length < 3) || (lprix.value.length > 30)) {
    setErrorFor(lprix, "Last name is invalid");
  } else {
    setSuccessFor(lprix, "Looks Good!");
  }
}
function validatemarque(lmarque) {
    if (lmarque.value.trim() === "") {
      setErrorFor(lmarque, "Last name is required");
    } else if ((lmarque.value.length < 1) || (lmarque.value.length > 30)) {
      setErrorFor(lmarque, "Last name is invalid");
    } else {
      setSuccessFor(lmarque, "Looks Good!");
    }
  }
  
function validateemail(ema) {
  if (ema.value.trim() === "") {
    setErrorFor(ema, "Email  is required");
  } else if (ema.value.match(/^\w+([\.-]?\w+)*@*(ofppt)*(\.ma)+$/g)) {
    setSuccessFor(ema, "Looks Good!");
  } else {
    setErrorFor(ema, "Email is invalid");
  }
}
function validatephone(phone) {
  if (phone.value.trim() === "") {
    setErrorFor(phone, "Phone number  is required");
  } else if (
    phone.value.match(
      /^((\+212)?[ -])?(06|05|07)(\d{1})[ -]?(\d{3})[ -]?(\d{4})+$/
    )
  ) {
    setSuccessFor(phone, "Looks Good!");
  } else {
    setErrorFor(phone, "Phone number is invalid");
  }
}
nom.addEventListener("keyup", function () {
    validatenom(nom);
});
prix.addEventListener("keyup", function () {
    validateprix(prix);
});
marque.addEventListener("keyup", function () {
    validatemarque(marque);
});


function boom() {
  const nomValue = nom.value.trim();
  const prixValue = prix.value.trim();
  const dateValue = date.value.trim();
  const marqueValue = marque.value.trim();
    if (nomValue === "") {
      setErrorFor(nom, "nom is required");
    } else if ((nomValue.length < 3) || (nomValue.length > 30)) {
      setErrorFor(nom, "nom is invalid");
    } else {
      setSuccessFor(nom, "Looks Good!");
      arr.push(true)
    }
    if (prixValue === "") {
      setErrorFor(prix, "prix is required");
    } else if ((prixValue.length < 3) || (prixValue.length > 30)) {
      setErrorFor(prix, "prix is invalid");
    } else {
      setSuccessFor(prix, "Looks Good!");
      arr.push(true)

    }
    if (marqueValue === "") {
        setErrorFor(marque, "marque is required");
      } else if ((marqueValue.length < 3) || (marqueValue.length > 30)) {
        setErrorFor(marque, "marque is invalid");
      } else {
        setSuccessFor(marque, "Looks Good!");
        arr.push(true)
      }
    if (dateValue === "") {
        setErrorFor(date, "Date is required");
      } else {
        setSuccessFor(date, "Looks Good!");
        arr.push(true)
      }
  var gen = !Genre[0].checked && !Genre[1].checked;
  if (gen) {
    mis1.innerHTML = "Choose one";
    mis1.style.color = "red";
  } else {
    mis1.innerHTML = "Look good !";
    mis1.style.color = "green";
    arr.push(true)
  }
 
  let checkbox = document.querySelectorAll('input[type="checkbox"]');
  let marked_checkboxes = [];
  let text = document.getElementById("confirm");
  text.innerHTML = " ";
  checkbox.forEach((check_box) => {
    if (check_box.checked) {
      text.innerHTML = `Good`;
      text.style.color = "green";
      marked_checkboxes.push(check_box);
    }
  });
  if (marked_checkboxes.length >= 1 && marked_checkboxes.length <= 3) {
    text.innerHTML = `Good`;
      text.style.color = "green";
      arr.push(true)
  } else {
    text.innerHTML = "Choose between 1 and 3";
    text.style.color = "red";
  }
}
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}
function setSuccessFor(input, message) {
  const formControl = input.parentElement;
  const samp = formControl.querySelector("samp");
  formControl.className = "form-control success";
  samp.innerText = message;
}
function isEmail(email) {
  return /^\w+([\.-]?\w+)*@*(ofppt)*(\.ma)+$/.test(email);
}
function isPhonenumber(phonenumber) {
  var phoneRe = /^((\+212)?[ -])?(06|05|07)(\d{1})[ -]?(\d{3})[ -]?(\d{4})+$/;
  return phoneRe.test(phonenumber);
}
function validate() {
  let checkbox = document.querySelectorAll('input[type="checkbox"]');
  let marked_checkboxes = [];
  let text = document.getElementById("confirm");
  text.innerHTML = " ";
  checkbox.forEach((check_box) => {
    if (check_box.checked) {
      text.innerHTML = `Good`;
      text.style.color = "green";
      marked_checkboxes.push(check_box);
    }
  });
  if (marked_checkboxes.length >= 1 && marked_checkboxes.length <= 3) {
    text.innerHTML = `Good`;
      text.style.color = "green";
  } else {
    text.innerHTML = "Must select a minimum of 1 options to proceed";
    text.style.color = "red";
  }
}

