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
findSumSeven([3, 5, 7, 0]);

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
