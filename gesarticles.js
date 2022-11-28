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

function validatenom(lnom) {
  if (lnom.value.trim() === "") {
    setErrorFor(lnom, "First name is required");
  } else if (lnom.value.length < 3 || lnom.value.length > 30) {
    setErrorFor(lnom, "First name is invalid");
  } else {
    setSuccessFor(lnom, "Looks Good!");
  }
}
function validateprix(lprix) {
  if (lprix.value.trim() === "") {
    setErrorFor(lprix, "Last name is required");
  } else if (lprix.value.length < 3 || lprix.value.length > 30) {
    setErrorFor(lprix, "Last name is invalid");
  } else {
    setSuccessFor(lprix, "Looks Good!");
  }
}
function validatemarque(lmarque) {
  if (lmarque.value.trim() === "") {
    setErrorFor(lmarque, "Last name is required");
  } else if (lmarque.value.length < 1 || lmarque.value.length > 30) {
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
  const typeValue = type.value;
  if (nomValue === "") {
    setErrorFor(nom, "nom is required");
  } else if (nomValue.length < 3 || nomValue.length > 30) {
    setErrorFor(nom, "nom is invalid");
  } else {
    setSuccessFor(nom, "Looks Good!");
    arr.push(true);
  }
  if (prixValue === "") {
    setErrorFor(prix, "prix is required");
  } else if (prixValue.length < 3 || prixValue.length > 30) {
    setErrorFor(prix, "prix is invalid");
  } else {
    setSuccessFor(prix, "Looks Good!");
    arr.push(true);
  }
  if (marqueValue === "") {
    setErrorFor(marque, "marque is required");
  } else if (marqueValue.length < 3 || marqueValue.length > 30) {
    setErrorFor(marque, "marque is invalid");
  } else {
    setSuccessFor(marque, "Looks Good!");
    arr.push(true);
  }
  if (dateValue === "") {
    setErrorFor(date, "Date is required");
  } else {
    setSuccessFor(date, "Looks Good!");
    arr.push(true);
  }
  var gen = !Promo[0].checked && !Promo[1].checked;
  if (Promo[0].checked) {
    mis1.innerHTML = "Look good !";
    mis1.style.color = "green";
    promo=document.getElementById("o").value;
  } else if(Promo[1].checked){
    mis1.innerHTML = "Look good !";
    mis1.style.color = "green";
    promo=document.getElementById("n").value;
  }else{
    mis1.innerHTML = "Choose one";
    mis1.style.color = "red";
  }
if (typeValue ===''){
  setErrorFor(type,"choose one");
}else{
  setSuccessFor(type,"Looks good!");
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

var selectedRow = null;
function onFormSubmit() {
  var formData = readFormData();
  if( selectedRow == null)
        insertNewRecord(formData);
        else
        updateRecord(formData)

  resetform();
}
function readFormData() {
  var formData =[];
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
  cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                     <a onClick="onDelete(this)">Delete</a>`;
}
function resetform(){
document.getElementById("nom").value="";
document.getElementById("prix").value="";
document.getElementById("marque").value="";
document.getElementById("date").value="";
document.getElementById("type").value="";
Promo[0].checked=Promo[0].unchecked;
Promo[1].checked=Promo[1].unchecked;
// document.getElementById("promo").value="";
var selectedRow = null;

}
function onEdit(td){
selectedRow =td.parentElement.parentElement;
document.getElementById("nom").value= selectedRow.cells[0].innerHTML;
document.getElementById("prix").value= selectedRow.cells[1].innerHTML;
document.getElementById("marque").value= selectedRow.cells[2].innerHTML;
document.getElementById("date").value= selectedRow.cells[3].innerHTML;
document.getElementById("type").value= selectedRow.cells[4].innerHTML;
document.getElementById("promo").value= selectedRow.cells[5].innerHTML;
if (Promo[0].checked) {
  document.getElementById("o").value= selectedRow.cells[5].innerHTML;
} else {
  document.getElementById("n").value= selectedRow.cells[5].innerHTML;
}
if (promo==='Oui') {
Promo[0].unchecked=Promo[0].checked;
Promo[1].unchecked=Promo[1].unchecked;
} else {
  Promo[0].unchecked=Promo[0].unchecked;
  Promo[1].unchecked=Promo[1].checked;
}
}
function updateRecord(formData){
  selectedRow.cells[0].innerHTML = formData.nom;
  selectedRow.cells[1].innerHTML = formData.prix;
  selectedRow.cells[2].innerHTML = formData.marque;
  selectedRow.cells[3].innerHTML = formData.date;
  selectedRow.cells[4].innerHTML = formData.type;
  selectedRow.cells[5].innerHTML = formData.promo;
}
function onDelete(td){
  if(confirm('are you sure to delete this record?')){
   row = td.parentElement.parentElement;
   document.getElementById("productsdetails").deleteRow(row.rowIndex);
   resetform();

  }
}