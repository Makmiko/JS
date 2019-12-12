// самолет москва - нью-йорк
// время в полете 10 часов
// когда (дата и время) самолет
// прилетит в нью-йорк (по местному времени),
// если из Москвы он вылетает
// в 22:15 28 декабря 2019 года

//Функция переводит любую дату в другой формат и суммирует с длительностью полета в часах
function flightTimeChange(currentDate, TZTo, flightTime) {
  let finalDate = currentDate.tz(TZTo);
  return finalDate.add(flightTime, "hours");
}
console.log(moment("2019-12-28 22:15").format());
console.log(
  flightTimeChange(moment("2019-12-28 22:15"), "America/New_York", 10).format()
);
