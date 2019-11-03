let goods = {
  piano: {
    title: "Пианино",
    price: 3000,
    count: 25
  },
  guitar: {
    title: "Гитара",
    price: 1200,
    count: 40
  },
  drum: {
    title: "Барабаны",
    price: 2700,
    count: 12
  },
  flute: {
    title: "Флейта",
    price: 900,
    count: 50
  },
  harp: {
    title: "Арфа",
    price: 3400,
    count: 5
  }
};

let books = [
  { author: "Толстой", title: "Война и мир" },
  { author: "Гончаров", title: "Обломов" },
  { author: "Лермонтов", title: "Герой Нашего Времени" }
];

//1 Задача
function getGoods(obj, from, to) {
  let res = [];
  for (let good in obj) {
    if (obj[good].price >= from && obj[good].price <= to) {
      res.push(obj[good].title);
    }
  }
  return res;
}
console.log(getGoods(goods, 2000, 3000));

//2 Задача
function addToCart(obj, title, countCart) {
  for (let good in obj) {
    if (obj[good].title == title) {
      if (obj[good].count >= countCart) {
        obj[good].count -= countCart;
        return `Товар ${obj[good]["title"]} добавлен в объеме ${countCart} шт.`;
      } else {
        return "К сожалению товара не хватает на складе";
      }
    }
  }
}
console.log(addToCart(goods, "Пианино", 7));

//3 Задача
function objectSort(arr) {
  let sortedArr = arr.sort((a, b) => {
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    return 0;
  });
  return sortedArr;
}
console.log(objectSort(books));
