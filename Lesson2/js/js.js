//Первая задача
function findSumSeven(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i != j && arr[i] + arr[j] == 7) {
        console.log("A pair with sum = 7 exists");
        return 0;
      }
    }
  }
}
findSumSeven([3, 5, 10, 2, 5]);

//Вторая задача
function threeFive(min, max) {
  for (let i = min; i < max; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("threeFive");
      continue;
    }
    if (i % 3 == 0) {
      console.log("three");
      continue;
    }
    if (i % 5 == 0) {
      console.log("five");
      continue;
    }
    console.log(i);
  }
  return 0;
}
threeFive(1, 100);

//Третья задача
function washPlates(plate_count, detergent) {
  for (let i = 0; i <= plate_count; ) {
    console.log(
      `${plate_count} plates to wash and ${detergent} detergent to use`
    );
    if (detergent > 0 && plate_count != 0) {
      plate_count--;
      detergent -= 0.5;
      console.log(`${plate_count} plates and ${detergent} detergent`);
    } else if (detergent <= 0 && plate_count > 0) {
      return `Detergen ended, you have still ${plate_count} plates to wash`;
    } else return "All plates washed";
  }
}
console.log(washPlates(20, 20));

//Четвертая задача
function averageSum(arr1, arr2) {
  if (arr1.length != arr2.length) return "Arrays are not equal length";
  console.log(arr1, arr2);
  let aver1 = 0;
  for (item of arr1) aver1 += item;
  aver1 /= arr1.length;
  let aver2 = 0;
  for (item of arr2) aver2 += item;
  aver2 /= arr2.length;
  if (aver1 > aver2) {
    return "First array's average sum is bigger";
  } else if (aver1 == aver2) {
    return "Arrays are equal";
  } else return "Second array's average sum is bigger";
}
console.log([1, 2, 3], [1, 2]); //Проверка на массивы разной длины
console.log(
  averageSum([2, 3, 4, 5, 63, 623, 3], [25, 63, 2412, 13, 52513, 5, 1]) //Проверка на правильное решение задачи
);

for (let i = 0; i < 10; i++) {
  console.log("#" + " ".repeat(i) + "#");
  i == 9 ? console.log("# ".repeat(i - 2)) : 0;
}
