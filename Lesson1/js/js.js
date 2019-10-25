// Первое задание
function isEven(num) {
  num % 2 == 0
    ? console.log("The number is even")
    : console.log("The number is odd");
  return 0;
}
isEven(23);

// Второе задание
let m = 8.5,
  n = 11.45;

function closerToTen(m, n) {
  m1 = Math.abs(m - 10); //Нахожу дельту и беру по модулю
  n1 = Math.abs(n - 10); //чтобы разница не уходила в отрицательные числа
  m1 < n1 ? console.log(m) : console.log(n);
  return 0;
}
closerToTen(m, n);

// Третье задание
function parallelepipedSquare(height, length, width) {
  console.log(2 * (height * length + height * width + length * width));
  return 0;
}
parallelepipedSquare(2, 3, 4);
