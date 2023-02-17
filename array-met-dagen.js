function listCheck(listType, reverse, idName) {
  let days = ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag'];

  if (listType == "full") {
    reversing(days, reverse, idName);
  } else if (listType == "work") {
    reversing(days.slice(0,5), reverse, idName);
  } else if (listType == "weekend") {
    reversing(days.slice(5,7), reverse, idName);
  } else {
    listing(["ERROR"], idName);
  }
}

function reversing(list, reverse, idName) {
  if (reverse) {
    list = list.reverse();
  }
  listing(list, idName);
}

function listing(dayArray, idName) {
  let list = document.getElementById(idName);

  dayArray.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
}