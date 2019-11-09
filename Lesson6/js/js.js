let articles = [
  {
    id: 1,
    title: "JS",
    text: "Статья про JS",
    author: "Александр"
  },
  {
    id: 2,
    title: "PHP",
    text: "Статья про PHP",
    author: "Виталий"
  },
  {
    id: 3,
    title: "Базы Данных",
    text: "Статья про Базы Данных",
    author: "Евгения"
  },
  {
    id: 4,
    title: "HTML",
    text: "Статья про HTML",
    author: "Виталий"
  }
];

let goods = [
  {
    title: "Пианино",
    price: 3000,
    count: 25
  },
  {
    title: "Гитара",
    price: 1200,
    count: 40
  },
  {
    title: "Барабаны",
    price: 2700,
    count: 12
  },
  {
    title: "Флейта",
    price: 900,
    count: 50
  },
  {
    title: "Арфа",
    price: 3400,
    count: 5
  }
];

function tableGenerator(arr) {
  let tbl = document.createElement("table");
  let firstElementLen = Object.keys(arr[0]).length;
  let newRow = tbl.insertRow();
  for (let j = 0; j < firstElementLen; j++) {
    let newCell = newRow.insertCell();
    newCell.style.padding = "5px";
    newCell.innerHTML = Object.keys(arr[0])[j].toUpperCase();
  }
  for (let i = 0; i < arr.length; i++) {
    let newRow = tbl.insertRow();
    for (let j = 0; j < firstElementLen; j++) {
      let newCell = newRow.insertCell();
      newCell.style.padding = "5px";
      newCell.innerHTML = Object.values(arr[i])[j];
    }
  }
  document.body.append(tbl);
}
tableGenerator(articles);
tableGenerator(goods);
