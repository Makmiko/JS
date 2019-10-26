// Первое задание
function isEven(num) {
  return num % 2 == 0 ? "The number is even" : "The number is odd";
}
console.log(isEven(23));

// Второе задание
let m = 8.5,
  n = 11.45;

function closerToTen(m, n) {
  m1 = Math.abs(m - 10); //Нахожу дельту и беру по модулю
  n1 = Math.abs(n - 10); //чтобы разница не уходила в отрицательные числа
  return m1 < n1 ? m : n;
}
console.log(closerToTen(m, n));

// Третье задание
function parallelepipedSquare(height, length, width) {
  return 2 * (height * length + height * width + length * width);
}
console.log(parallelepipedSquare(2, 3, 4));
