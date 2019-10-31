//Первая задача
function findComponentSum(num) {
  if (num >= 1) {
    return (num % 10) + findComponentSum(Math.trunc(num / 10));
  }
  return 0;
}
console.log(findComponentSum(321));

//Вторая задача
function range(min, max, step = 1) {
  let arr = [];
  for (let i = 0; min <= max; i++) {
    arr[i] = min;
    min += step;
  }
  return arr;
}
console.log(range(1, 10, 2));

//Четвертая задача
function arrGen() {
  return new Array(Math.trunc(Math.random() * 10)).fill(0).map(function() {
    return Math.trunc(Math.random() * 1000);
  });
}
let arr1 = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
let arr5 = [];
function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
arr1 = arrGen();
arr2 = arrGen();
arr3 = arrGen();
arr4 = arrGen();
arr5 = arrGen();

function getMaxArr(...arr) {
  let maximum = 0;
  let arrayNum;
  for (let i = 0; i < arr.length; i++) {
    if (maximum < arrSum(arr[i])) {
      maximum = arrSum(arr[i]);
      arrayNum = i + 1;
    }
  }
  return "Array: " + arrayNum + ", MaxSum: " + maximum;
}
console.log("1: " + arr1);
console.log("2: " + arr2);
console.log("3: " + arr3);
console.log("4: " + arr4);
console.log("5: " + arr5);
console.log(getMaxArr(arr1, arr2, arr3, arr4, arr5));

//Третья задача
function days(count) {
  if (
    count % 10 == 0 ||
    (count % 100 >= 5 && count % 100 <= 20) ||
    count % 10 >= 5
  ) {
    return " Дней";
  }
  if (count % 10 == 1) return " День";
  if (count % 100 < 5 || (count % 100 > 20 && count % 10 < 5)) {
    return " Дня";
  }
}

for (let i = 0; i <= 100; i++) {
  console.log(i + days(i));
}
