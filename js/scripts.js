//zmienna - pobranie imienia
//var name = prompt('Enter your name');
//funkcja alert pokazująca na ekranie komunikat + wartość zmiennej
//alert('Hello, ' + name);
/* wyrzucenie zmiennej
do konsoli */
//consol.log('Hello wold, My name is ' + name);

//zadanie 8.5
function triangle() {
  var a = prompt("Podaj bok trójkąta");
  var h = prompt("Podaj wysokośc trójkąta");
  var triangleAreaCount = `${a} * ${h / 2}`;
  var triangleAreaCalue = a * (h / 2);
  alert("Pole trójkąta wg obliczeń " +triangleAreavalue);
  // alert("Pole trójkąta wg obliczeń" + triangleAreacount "wynosi "+triangleAreavalue); jak w alert dać text + zmienna , text + zmiena ??

  console.log(
    "Triangle field with base a: " +
      a +
      " and height h: " +
      h +
      " is equal to: " +
      triangleArea
  );
  return triangleArea;
}
//zadanie 8.6
function count() {
  var a = prompt("podaj wartosc zmiennej a");
  var b = prompt("podaj wartośc zmiennej b");
 // var area = `(a * a) + (2 * a * b) - (b * b)`;
  var value = a * a + 2 * a * b - b * b;
  //console.log("Wynik działania  =" ${area});
  console.log("Wynik działania (a * a) + (2 * a * b) - (b * b) =" + value);
  //sprawdzenie czy value ma wynik dodatni lub ujemny, wynik na konsoli
  if (value > 0) {
    console.log("Wynik Dodatni");
  } else if (value == 0) {
    console.log("Wartość zero !");
  } else {
    console.log("Wynik ujemny");
  }
  return value;
}
//Wywołanie funkcji obliczania pola trójkąta oraz liczby dodatniej
triangle();
count();
