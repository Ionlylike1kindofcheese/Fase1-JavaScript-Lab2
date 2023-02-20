function checkInput() {
  let getElement = document.getElementById('nameAmmout');
  let newOutput = getElement.options[getElement.selectedIndex].value;

  let form = document.getElementById("input-fields");
  if (form.hasChildNodes()) {
    let oldOutput = form.childElementCount;
    if (newOutput < oldOutput) {
      delOldInputs(form, (oldOutput - newOutput));
    } else {
      createInputs(form, (newOutput - oldOutput));
    }
  } else {
    createInputs(form, newOutput);
  }
}

function createInputs(form, newOutput) {
  newOutput -= 1;
  for (let inputs = 0; inputs <= newOutput; inputs++) {
    let input = document.createElement("input");
    form.appendChild(input);
  }
}

function delOldInputs(form, diff) { 
  diff -= 1;
  for (let dels = 0; dels <= diff; dels++) {
    let lastChild = form.lastChild;
    form.removeChild(lastChild);
  }
}

function submitForm() {
  let form = document.getElementById("input-fields");
  const nameArray = [];
  for (let textField = 0; textField <= (form.childElementCount - 1); textField++) {
    if (form[textField].value != '') {
      nameArray.push(form[textField].value);
    }
  }
  if (nameArray.length < 3) {
    alert('Je moet minimaal 3 namen hebben ingevuld');
  } else {
    showResult(nameArray);
  }
}

function showResult(nameArray) {
  let generalDiv = document.getElementById("show-names");
  genHeader('De ingevoerde namen in de array zijn:', generalDiv);
  genList(nameArray, generalDiv);
  genHeader('De ingevoerde namen in de array in omgekeerde volgorde zijn:', generalDiv);
  genList((nameArray.reverse()), generalDiv);
}

function genHeader(text, genDiv) {
  let header = document.createElement("h2");
  header.innerText = text;
  genDiv.appendChild(header);
}

function genList(list, genDiv) {
  let ul = document.createElement("ul");
  genDiv.appendChild(ul);
  for (item = 0; item <= (list.length - 1); item++) {
    let li = document.createElement("li");
    li.innerText = list[item];
    ul.appendChild(li);
  }
}