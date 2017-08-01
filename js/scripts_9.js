//excercise 9.1

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

console.log ("Pole 1 trójkąta wynosi " +triangle1Area + " Pole 2 trójkąta wynosi " +triangle2Area + " Pole 3 trójkąta wynosi " +triangle3Area);
