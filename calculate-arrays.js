const arrayEen = [1,2,3,4,5,6,7,8,9,10];
const arrayTwee = [2,4,6,8,10,12,14,16,18,20];

function optellen(arrayEen, arrayTwee) {
  let header = document.createElement('h2');
  header.innerText = 'Optellen van de twee arrays zijn:'
  document.body.appendChild(header);
  let ul = document.createElement('ul');
  document.body.appendChild(ul);
  for (index = 0; index <= (arrayEen.length - 1); index++) {
    let li = document.createElement('li');
    li.innerText = `${arrayEen[index]} + ${arrayTwee[index]} = ${arrayEen[index] + arrayTwee[index]}`;
    ul.appendChild(li);
  }
}

function aftrekken(arrayTwee, arrayEen) {
  let header = document.createElement('h2');
  header.innerText = 'Aftrekken van de twee arrays zijn:'
  document.body.appendChild(header);
  let ul = document.createElement('ul');
  document.body.appendChild(ul);
  for (index = 0; index <= (arrayEen.length - 1); index++) {
    let li = document.createElement('li');
    li.innerText = `${arrayTwee[index]} - ${arrayEen[index]} = ${arrayTwee[index] - arrayEen[index]}`;
    ul.appendChild(li);
  }
}

function vermenigvuldigen(arrayEen, arrayTwee) {
  let header = document.createElement('h2');
  header.innerText = 'Vermenigvuldigen van de twee arrays zijn:'
  document.body.appendChild(header);
  let ul = document.createElement('ul');
  document.body.appendChild(ul);
  for (index = 0; index <= (arrayEen.length - 1); index++) {
    let li = document.createElement('li');
    li.innerText = `${arrayEen[index]} * ${arrayTwee[index]} = ${arrayEen[index] * arrayTwee[index]}`;
    ul.appendChild(li);
  }
}

function delen(arrayTwee, arrayEen) {
  let header = document.createElement('h2');
  header.innerText = 'Delen van de twee arrays zijn:'
  document.body.appendChild(header);
  let ul = document.createElement('ul');
  document.body.appendChild(ul);
  for (index = 0; index <= (arrayEen.length - 1); index++) {
    let li = document.createElement('li');
    li.innerText = `${arrayTwee[index]} / ${arrayEen[index]} = ${arrayTwee[index] / arrayEen[index]}`;
    ul.appendChild(li);
  }
}