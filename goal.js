function generateTheKey() {
 
    if (localStorage.numberOfKeys) {
      localStorage.numberOfKeys = Number(localStorage.numberOfKeys)+1;
    } else {
      localStorage.numberOfKeys = 1;
    }
   
    keys = Object.keys(localStorage);
    
   let key1 = Number(localStorage.numberOfKeys);
    if (Number(keys.length) == Number(localStorage.numberOfKeys)) {
      return key1;
    }

    localStorage.numberOfKeys = Number(localStorage.numberOfKeys)-1;
    let key2 = Number(localStorage.numberOfKeys);
    return key2;
};



const formId = "doneGoal"; 
const url = location.href; 
const formIdentifier = generateTheKey(); 

const saveButton = document.querySelector("#save"); 
let form = document.querySelector(`#${formId}`); 
let formElements = form.elements; 
// localStorage.clear();


const getFormData = () => {
  let data = { [formIdentifier]: {} };
  for (const element of formElements) {
    if (element.name.length > 0) {
      if (element.value == "" || datepicker.value == "") {
        alert("Name must be filled out");
    return false;
      }
      data[formIdentifier][element.name] = element.value;
    }
  }
  data[formIdentifier]["grOfImp"] = document.querySelector('input[name="grOfImp"]:checked').value;
  data[formIdentifier]["datepicker"] = document.getElementById("datepicker").value;
  return data;
};

saveButton.onclick = event => {
  event.preventDefault(); 
 
  data = getFormData();
  localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));
if (data == "") {
    localStorage.removeItem(formIdentifier);
  }
};

$( function() {
  $( document ).tooltip();
} );

$( function() {
  $( "#dialog" ).dialog();
} );

$( function() {
    $( "#datepicker" ).datepicker();
  } );
  
function fulfillTable() {
  keys = Object.keys(localStorage);
  for (const x of keys) {
      if (x % x == 0) {
      valKey = JSON.parse(localStorage.getItem(String(x)));
      rowFunc(valKey);
      }
  }
};

function rowFunc( myFirst) {  
  const node = document.createElement("tr");
  const root1 =  document.createElement("td");
  node.appendChild(root1);
  root1.innerHTML = myFirst.nameOfPeak;
  root1.style.fontFamily = "Monocrone";
  
  const root2 = document.createElement("td");
  node.appendChild(root2);
  root2.innerHTML = myFirst.altitude;
 
  const root3 = document.createElement("td");
  node.appendChild(root3);
  root3.innerHTML = myFirst.datepicker;
  
  const root4 = document.createElement("td");
  node.appendChild(root4);
  root4.innerHTML = myFirst.grOfImp;
  root4.style.textAlign = "center";

  const root5 = document.createElement("td");
  node.appendChild(root5);
  root5.innerHTML = myFirst.nameOfCountry;
  
  const root6 = document.createElement("td");
  node.appendChild(root6);
  root6.innerHTML = myFirst.text;
  document.getElementById("tableAdd").appendChild(node);
 };

window.onload = (event) => {
  fulfillTable();
};
  

const getFormData1 = () => {
  let data = { [formIdentifier]: {} };
  for (const element of formElements) {
    if (element.name.length > 0) {
      data[formIdentifier][element.name] = element.value;
    }
  }
  data[formIdentifier]["grOfImp"] = document.querySelector('input[name="grOfImp"]:checked').value;
  data[formIdentifier]["datepicker"] = document.getElementById("datepicker").value;
  return data;
};

  document.getElementById("nameOfPeak").addEventListener("change" , saveSesion); 
  document.getElementById("nameOfCountry").addEventListener("change" , saveSesion); 
  document.getElementById("datepicker").addEventListener("change" , saveSesion); 
  document.getElementById("altitude").addEventListener("change" , saveSesion); 
  document.getElementById("textOfArea").addEventListener("change" , saveSesion); 

function saveSesion() {
 data = getFormData1();
  sessionStorage.setItem("save", JSON.stringify(data[formIdentifier]));
};

if (sessionStorage.getItem("save")) {
  elemSave = JSON.parse(sessionStorage.getItem("save"));
  document.getElementById("nameOfPeak").value = elemSave.nameOfPeak;
  document.getElementById("nameOfCountry").value = elemSave.nameOfCountry;
  document.getElementById("datepicker").value = elemSave.datepicker;
  document.getElementById("altitude").value = elemSave.altitude;
  document.getElementById("textOfArea").value = elemSave.text;
  sessionStorage.clear();
}

$(document).ready(function(){
  $("#mainName").click(function(){
    $("#mainName").animate({
      fontSize: '3.5em'
    });
  });
});

const btn = document.getElementById('save');

btn.addEventListener('click', function handleClick(event) {
 
  event.preventDefault();

  document.getElementById("nameOfPeak").value = '';
  document.getElementById("nameOfCountry").value = '';
  document.getElementById("datepicker").value = '';
  document.getElementById("altitude").value = '';
  document.getElementById("textOfArea").value = '';
  sessionStorage.clear();
});
