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
  } else  {
    agree = false;
  }
  console.log("Rozszerzona tablica imion" + allNames);
}
