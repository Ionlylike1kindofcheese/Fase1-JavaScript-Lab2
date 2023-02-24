const tafels = [];

function selectBoxGenerate(selectboxParent) {
  for (options = 1; options <= 10; options++) {
    let numberOption = document.createElement("option");
    numberOption.innerText = options;
    numberOption.value = options;
    selectboxParent.appendChild(numberOption);
  }
  selectboxParent.addEventListener('change', () => {
    let inputParent = document.getElementById('number-inputs');
    adjustInputs(inputParent, inputParent.childElementCount, selectboxParent.value);
  });
}

function setupInputs() {
  let firstInput = document.createElement('input');
  firstInput.type = 'number';
  document.getElementById('number-inputs').appendChild(firstInput);
}

function adjustInputs(parent, childCount, selectValue) {
  if (selectValue > childCount) {
    for (let addInputs = 0; addInputs < (selectValue - childCount); addInputs++) {
      let input = document.createElement('input');
      input.type = 'number';
      parent.appendChild(input);
    }
  } else if (selectValue < childCount) {
    for (let delInputs = 0; delInputs < (childCount - selectValue); delInputs++) {
      let input = parent.lastChild;
      parent.removeChild(input);
    }
  }
}

function submitNumbers(inputField) {
  const numArray = [];
  for (let numField = 0; numField < inputField.childElementCount; numField++) {
    if (!isNaN(inputField[numField].value)) {
      numArray.push(inputField[numField].value);
    } else {
      numArray.push('ERROR');
    }
  }
  for (let index = 0; index < numArray.length; index++) {
    let tafelDiv = document.createElement('div');
    tafelDiv.className = `tafel-${numArray[index]}`;
    document.getElementById('generate-tafels').appendChild(tafelDiv);
    let header = document.createElement('h2');
    header.innerText = `Tafel van ${numArray[index]}:`;
    tafelDiv.appendChild(header);
    let ul = document.createElement("ul");
    tafelDiv.appendChild(ul);
    for (let item = 1; item <= 10; item++) {
      let li = document.createElement("li");
      if (numArray[index] === 'ERROR') {
        li.innerText = `${item} x ${numArray[index]} = ${numArray[index]}`;
      } else {
        li.innerText = `${item} x ${numArray[index]} = ${item * numArray[index]}`;
      }
      ul.appendChild(li);
    }
  }
}