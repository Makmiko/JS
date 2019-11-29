//Задача про города
cities = [
  "New York",
  "Magnitogorsk",
  "Juvyasculya",
  "Throneheim",
  "Auraangabad",
  "Verona"
];
function citySort(cities) {
  cities.sort((item1, item2) => {
    if (item1.toLowerCase() < item2.toLowerCase()) {
      return -1;
    }
    if (item1.toLowerCase() == item2.toLowerCase()) {
      return 0;
    }
    if (item1.toLowerCase() > item2.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  return cities;
}
console.log(citySort(cities));

//Задача про вхождения
let string =
  "This is a string, entered by a user, who just wants to enter something";
function findInString(str, substr) {
  let offset = 0;
  let strpos;
  let posSum = 0;
  let indexes = [];
  while (str.indexOf(substr) != -1) {
    strpos = str.indexOf(substr);
    posSum += strpos + offset;
    offset = 1;
    indexes.push(posSum);
    str = str.slice(strpos + 1);
  }
  return indexes;
  //   let indexes = [];
  //   let strpos;
  //   for (var i = 0; i < str.length; i++) {
  //     if (~str.indexOf(substr)) {
  //       strpos = str.indexOf(substr);
  //       indexes.push(strpos);
  //       str = str.slice(strpos);
  //       i = 0;
  //     }
  //   }
  //   return indexes;
}
console.log(findInString(string, "a"));

//Задача на палиндром
function pali(str) {
  let string = str
    .toLowerCase()
    .split(" ")
    .join("");
  let strReverse = string
    .split("")
    .reverse()
    .join("");
  if (string == strReverse) return "Слово - палиндром";
  return "Слово - не палиндром";
}
console.log(pali("Атака заката"));

//Подстрока-палиндром
function subPali(str) {
  let sliceCounter = 0;
  let maxPali = "";
  let string = str
    .toLowerCase()
    .split(" ")
    .join("");
  let strReverse = string
    .split("")
    .reverse()
    .join("");
  for (let i = 0; i < str.length; i++) {
    if (
      string.substr(i, string.length) == strReverse.substr(i, string.length) &&
      maxPali.length < string.length
    ) {
      maxPali = string;
    } else {
      sliceCounter++;
      maxPali = subPali(string.slice(sliceCounter));
    }
  }
  if (maxPali != "") {
    return maxPali + " является максимальным палиндромом";
  } else {
    return "";
  }
}
console.log(subPali("aabbccccba"));
