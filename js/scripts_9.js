/*excercise 9.1

function getTriangleArea(a, h) {
  if (a <= 0 || h <= 0) {
    console.log("Nieprawidłowe dane - wartośc musi być > od zera");
  } else {
    return a * h / 2;
  }
}
var triangle1Area = getTriangleArea(20, 10);
var triangle2Area = getTriangleArea(4, 8);
var triangle3Area = getTriangleArea(8, 3);

console.log(
  "Pole 1 trójkąta wynosi " +
    triangle1Area +
    " Pole 2 trójkąta wynosi " +
    triangle2Area +
    " Pole 3 trójkąta wynosi " +
    triangle3Area
);*/

//excercise 9.2
/*
var femaleNames = ["Asia", "Kasia", "Ola", "Jola"];
var maleNames = ["Piotrek", "Marek", "Arek", "Jarek"];
var newName = "";
var allNames = [];
var agree = true;
var answerUp = "";
var answer = "TAK";
allNames = allNames.concat(femaleNames, maleNames);
console.log(allNames);
while (agree) {
  newName = prompt("Proszę podać nowe unikalne imię");
  if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
  } else {
    console.log("Podane imie już istnieje w tablicy");
  }
  answer = prompt("Czy mam kontynuować dodawanie imion ? TAK/NIE");
  answerUp = answer.toUpperCase();
  if (answerUp === "TAK") {
    agree = true;
  } else {
    agree = false;
  }
  console.log("Rozszerzona tablica imion" + allNames);
}

//exercise 9.3
var text =
  "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "Triceratops".toUpperCase();
var textAfterChange = text.replace("Velociraptor", dinosaur);
var halftext = textAfterChange.substring(0, textAfterChange.length / 2);
console.log(halftext);*/

//exercise 9.4
function drawTree() {
  var depthTree = 10;
  isdigital = true;
  var starTab = ["X"];
  while (isdigital) {
    depthTree = prompt("Podaj wysokość choinki w l. całkowitych");
    isdigital = isNaN(depthTree);
    if (isdigital) {
        alert ('Podaj liczbę zamiast tekstu !!!');
    }
  }
  for (var index = 0; index < depthTree; index++) {
    starPrint = starTab.toString();
    console.log(starPrint);
    starTab.push("X");
  }
}
function drawTree1() {
  var depthTree = 10;
  isdigital = true;
  var starTab = ["X"];
  while (isdigital) {
    depthTree = prompt("Podaj wysokość choinki w l. całkowitych");
    isdigital = isNaN(depthTree);
    if (isdigital) {
        alert ('Podaj liczbę zamiast tekstu !!!');
    }
  }
  for (var index = 0; index < depthTree; index++) {
    for (var i=0;i<index;i++){
    starTab+= '*';
    console.log(starTab);
    }
  }
}
var start = new Date().getTime();
drawTree();
var end = new Date().getTime(); 
var start1 = new Date().getTime();
drawTree1();
var end1 = new Date().getTime(); 
alert ('Generowanie choinki 1 sposób trwało' +((end - start) / 1000), ' sekund');
alert ('Generowanie choinki 2 sposób trwało' +((end1 - start1) / 1000), ' sekund');