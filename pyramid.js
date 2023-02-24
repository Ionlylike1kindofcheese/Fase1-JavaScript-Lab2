function createPyramid() {
  let indexMax = document.getElementById('array-input').value;
  const stepArray = [];
  let pyramidStateDiv;
  pyramidStateDiv = createDivWITHheader('oplopend', document.getElementById('pyramid-array'));
  for (index = 0; index <= indexMax; index++) {
    stepArray.push(index);
    let pyramidSteps = document.createElement('p');
    pyramidSteps.innerHTML = stepArray.join('');
    pyramidSteps.style.margin = '0 auto'
    pyramidStateDiv.appendChild(pyramidSteps);
  }
  pyramidStateDiv = createDivWITHheader('aflopend', document.getElementById('pyramid-array'));
  for (index = 0; index <= indexMax; index++) {
    let pyramidSteps = document.createElement('p');
    pyramidSteps.innerHTML = stepArray.join('');
    pyramidSteps.style.margin = '0 auto'
    pyramidStateDiv.appendChild(pyramidSteps);
    stepArray.pop();
  }
}

function createDivWITHheader(state, pyramidGeneralParent) {
  let subDiv = document.createElement('div');
  subDiv.id = `pyramid-${state}`;
  pyramidGeneralParent.appendChild(subDiv);
  let header = document.createElement('h2');
  header.innerText = `Piramide ${state}:`
  subDiv.appendChild(header);
  return subDiv;
}