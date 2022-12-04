const form = document.getElementById("form");
const nom = document.getElementById("nom");
const prix = document.getElementById("prix");
const marque = document.getElementById("marque");
const date = document.getElementById("date");
const Promo = document.getElementsByName("P");
const type = document.getElementById("type");
const mis1 = document.querySelector(".mis1");
const mis2 = document.querySelector(".mis2");
const button = document.querySelector(".btn");
let arr = [];
let ajt = document.getElementById("A");
var promo;

function validatenom(lnom) {
  if (lnom.value.trim() === "") {
    setErrorFor(lnom, "First name is required");
  } else if (lnom.value.length < 3 || lnom.value.length > 30) {
    setErrorFor(lnom, "First name is invalid");
  } else {
    setSuccessFor(lnom, "Looks Good!");
  }
}
function validatemarque(lmarque) {
  if (lmarque.value.trim() === "") {
    setErrorFor(lmarque, "Last name is required");
  } else if (lmarque.value.length < 2 || lmarque.value.length > 30) {
    setErrorFor(lmarque, "Last name is invalid");
  } else {
    setSuccessFor(lmarque, "Looks Good!");
  }
}
function validateprix(lprix) {
  if (lprix.value.trim() === "") {
    setErrorFor(lprix, "price  is required");
  } else if (
    lprix.value.length < 1 ||
    lprix.value.length > 30 ||
    lprix.value.match(
      /([A-Z]{3}|[A-Z]?[\$€¥])?\s?(\d{1,3}((,\d{1,3})+)?(.\d{1,3})?(.\d{1,3})?(,\d{1,3})?)/
    )
  ) {
    setSuccessFor(lprix, "Looks Good!");
  } else {
    setErrorFor(lprix, "price is invalid");
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
  const typeValue = type.value;
  if (nomValue === "") {
    setErrorFor(nom, "nom is required");
  } else if (nomValue.length < 3 || nomValue.length > 30) {
    setErrorFor(nom, "nom is invalid");
  } else {
    setSuccessFor(nom, "Looks Good!");
    arr.push(true);
  }
  console.log(arr.length);
  if (prixValue === "") {
    setErrorFor(prix, "price  is required");
  } else if (
    prixValue.length > 1 &&
    prixValue.length < 30 &&
    prixValue.match(
      /([A-Z]{3}|[A-Z]?[\$€¥])?\s?(\d{1,3}((,\d{1,3})+)?(.\d{1,3})?(.\d{1,3})?(,\d{1,3})?)/
    )
  ) {
    setSuccessFor(prix, "Looks Good!");
    arr.push(true);
  } else {
    setErrorFor(prix, "price is invalid");
  }
  console.log(arr.length);
  if (marqueValue === "") {
    setErrorFor(marque, "marque is required");
  } else if (marqueValue.length < 2 || marqueValue.length > 30) {
    setErrorFor(marque, "marque is invalid");
  } else {
    setSuccessFor(marque, "Looks Good!");
    arr.push(true);
  }
  console.log(arr.length);
  if (dateValue === "") {
    setErrorFor(date, "Date is required");
  } else {
    setSuccessFor(date, "Looks Good!");
    arr.push(true);
  }
  console.log(arr.length);
  var gen = !Promo[0].checked && !Promo[1].checked;

  if (Promo[0].checked) {
    arr.push(true);
    mis1.innerHTML = "Look good !";
    mis1.style.color = "green";
    promo = document.getElementById("o").value;
  } else if (Promo[1].checked) {
    arr.push(true);
    mis1.innerHTML = "Look good !";
    mis1.style.color = "green";
    promo = document.getElementById("n").value;
  } else {
    mis1.innerHTML = "Choose one";
    mis1.style.color = "red";
  }
  console.log(arr.length);
  if (typeValue === "") {
    setErrorFor(type, "choose one");
  } else {
    setSuccessFor(type, "Looks good!");
    arr.push(true);
  }
  console.log(arr.length);
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

var selectedRow = null;
ajt.onclick = function getitdone() {
  if (ajt.value === "Ajouter") {
    arr.length = 0;
    boom();
    if (arr.length != 6) {
      arr.length = 0;
      boom();
    } else {
      var formData = readFormData();
      insertNewRecord(formData);
      resetform();
    }
  } else if (ajt.value === "Modifier") {
    arr.length = 0;
    boom();
    if (arr.length != 6) {
      arr.length = 0;
      boom();
    } else {
      var formData = readFormData();
      updateRecord(formData);
      resetform();
      document.getElementById("A").value = "Ajouter";
    }
  }
};
// function getitdone(){
//   arr.length = 0;
//   boom()
//   if(arr.length!=6){
//     e.preventDefault();
//   }else {
//     onFormSubmit()
//   }
// }

function readFormData() {
  var formData = [];
  formData["nom"] = document.getElementById("nom").value;
  formData["prix"] = document.getElementById("prix").value;
  formData["marque"] = document.getElementById("marque").value;
  formData["date"] = document.getElementById("date").value;
  formData["type"] = document.getElementById("type").value;
  formData["promo"] = promo;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("productsdetails")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  //   for (let i=0;i<table.length;i++) {
  //   var x=newRow.insertElement(i);
  //       x.innerHTML= data.table[i];
  // }
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.nom;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.prix;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.marque;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.date;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.type;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.promo;
  cell6 = newRow.insertCell(6);
  cell6.innerHTML = `<button onClick="onEdit(this)">Edit</button>
  <button onclick="onDelete(this)">Delete</button>`;
}
function resetform() {
  document.getElementById("nom").value = "";
  document.getElementById("prix").value = "";
  document.getElementById("marque").value = "";
  document.getElementById("date").value = "";
  document.getElementById("type").value = "";
  Promo[0].checked = Promo[0].unchecked;
  Promo[1].checked = Promo[1].unchecked;
  var selectedRow = null;
  const ff = document.querySelectorAll(".form-control");
  for (let i = 0; i < ff.length; i++) {
    if (ff[i].classList.contains("success")) {
      ff[i].classList.remove("success");
      mis1.innerHTML = " ";
    mis1.style.color = "green";
    }
  }
}
function onEdit(td) {
  document.getElementById("A").value = "Modifier";
  selectedRow = td.parentElement.parentElement;
  document.getElementById("nom").value = selectedRow.cells[0].innerHTML;
  document.getElementById("prix").value = selectedRow.cells[1].innerHTML;
  document.getElementById("marque").value = selectedRow.cells[2].innerHTML;
  document.getElementById("date").value = selectedRow.cells[3].innerHTML;
  document.getElementById("type").value = selectedRow.cells[4].innerHTML;
  if (selectedRow.cells[5].innerHTML === "Oui") {
    document.getElementById("o").checked = true;
  } else {
    document.getElementById("n").checked = true;
  }
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.nom;
  selectedRow.cells[1].innerHTML = formData.prix;
  selectedRow.cells[2].innerHTML = formData.marque;
  selectedRow.cells[3].innerHTML = formData.date;
  selectedRow.cells[4].innerHTML = formData.type;
  selectedRow.cells[5].innerHTML = formData.promo;
  if (Promo[0].checked) {
    selectedRow.cells[5].innerHTML = document.getElementById("o").value;
  } else {
    selectedRow.cells[5].innerHTML = document.getElementById("n").value;
  }
}
let getrow
function onDelete(td) {
  getrow=td.parentElement.parentElement;
  document.getElementById('id01').style.display='block'
}
function delet()
{
  document.getElementById("productsdetails").deleteRow(getrow.rowIndex);
  document.getElementById('id01').style.display='none'
}
console.log(getrow.rowIndex)
var modal = document.getElementById("id01");
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};