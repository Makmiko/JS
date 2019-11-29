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
  let table = document.createElement("table");
  table.setAttribute("border", "1");
  let firstElementLen = Object.keys(arr[0]).length;
  let newRow = table.insertRow();
  for (let j = 0; j < firstElementLen; j++) {
    let newCell = newRow.insertCell();
    newCell.style.padding = "5px";
    newCell.innerHTML = Object.keys(arr[0])[j].toUpperCase();
  }
  for (let i = 0; i < arr.length; i++) {
    let newRow = table.insertRow();
    for (let j = 0; j < firstElementLen; j++) {
      let newCell = newRow.insertCell();
      newCell.style.padding = "5px";
      newCell.innerHTML = Object.values(arr[i])[j];
    }
  }
  return table;
}
let articleTable = tableGenerator(articles);
document.body.append(articleTable);
// <=== До сюда идет код с генерацией таблицы из прошлого задания

//Сортировка таблицы
function tableSort(event) {
  console.log(this);
  let sortBy, globalIterator;
  let rows = this.rows;
  let switchCycle = true;
  let doASwitch;
  switch (event.target.innerText) {
    case rows[0].getElementsByTagName("td")[0].innerText:
      sortBy = 0;
      break;
    case rows[0].getElementsByTagName("td")[1].innerText:
      sortBy = 1;
      break;
    case rows[0].getElementsByTagName("td")[2].innerText:
      sortBy = 2;
      break;
    case rows[0].getElementsByTagName("td")[3].innerText:
      sortBy = 3;
      break;
    default:
      sortBy = 0;
      break;
  }
  while (switchCycle) {
    switchCycle = false;
    for (
      globalIterator = 1;
      globalIterator < rows.length - 1;
      globalIterator++
    ) {
      doASwitch = false;
      let secondOne = rows[globalIterator + 1].getElementsByTagName("td")[
        sortBy
      ];
      let firstOne = rows[globalIterator].getElementsByTagName("td")[sortBy];
      if (
        secondOne.innerHTML.toLowerCase() < firstOne.innerHTML.toLowerCase()
      ) {
        doASwitch = true;
        break;
      }
    }
    if (doASwitch) {
      rows[globalIterator].parentNode.insertBefore(
        rows[globalIterator + 1],
        rows[globalIterator]
      );
      switchCycle = true;
    }
  }
}

articleTable.addEventListener("click", tableSort);

//Создание n на n поля с блоками
function prizeBlitz(n) {
  let blockHolder = document.createElement("div");
  blockHolder.classList.add("prizeBlock");
  for (let i = 0; i < n * n; i++) {
    let newBlock = document.createElement("div");
    newBlock.classList.add("prizeItem");
    newBlock.innerText = "Pick a box";
    newBlock.style.flexBasis = 100 / n - 10 + "%";
    blockHolder.append(newBlock);
  }
  return blockHolder;
}
let blockHolder = prizeBlitz(3);
document.body.append(blockHolder);
blockHolder.addEventListener("click", getPrize);

//Добавляем глобальный счетчик
let counter = document.createElement("div");
counter.innerText = 3;
counter.classList.add("counter");
blockHolder.before(counter);

//Здесь мы следим за попытками и рандомно поставляем призы
function getPrize(event) {
  let prises = [
    "fluffy bear",
    "race car",
    "gamer console",
    "deer sweater",
    "puzzle"
  ];
  if (event.target.classList.contains("prizeItem")) {
    event.target.classList.add("picked");
    if (Math.round(Math.random())) {
      event.target.innerText =
        prises[Math.floor(Math.random() * prises.length)];
      counter.innerText = "you won " + event.target.innerText;
      this.removeEventListener("click", getPrize);
    } else {
      event.target.innerText = "no prise for you this time";
      counter.innerText--;
    }
  }
  if (counter.innerText <= 0) {
    counter.innerText = "You won nothing";
    this.removeEventListener("click", getPrize);
  }
}

//Функция для чекбокса и текстового поля
let form = document.forms.testForm;
form.checkbox.addEventListener("click", inpAccess);
function inpAccess() {
  form.text.disabled = !form.checkbox.checked;
}
