document.querySelector("button").onclick = () => {
  console.log(document.querySelector("#one").value); //значение введеное в данный объект
};
//выбор цвета в окне
document.querySelector("#button-color").onclick = function color() {
  console.log(document.querySelector("#two").value); //значение введеное в данный объект
  //style
  document.querySelector(
    "#button-color"
  ).style.backgroundColor = document.querySelector("#two").value; //окрас кнопки в выбранный цвет
};

//date-календарь
document.querySelector("#button-date").onclick = () => {
  console.log(document.querySelector("#three").value); //значение введеное в данный объект
};
//range-ползунок
document.querySelector("#button-range").onclick = () => {
  console.log(document.querySelector("#range").value); //значение введеное в данный объект
};
// вывод в консоль значения при изменении положения ползунка, без нажатия кнопки
document.querySelector("#range").oninput = () => {
  console.log(document.querySelector("#range").value);
  document.querySelector("span").innerHTML = document.querySelector(
    "#range"
  ).value;
};
//checkbox-галочка
document.querySelector("#btn-1").onclick = () => {
  console.log(document.querySelector("#i2").value); //значение введеное в данный объект
  let myCheckBox = document.querySelector("#i2"); //присваиваем переменную
  console.log(myCheckBox.checked); //checked свойство галочки, нажато
  if (myCheckBox.checked) {
    // если нажато, то вывести в консоль "Нажат"
    console.log("Нажат");
  } else {
    //в противном случае вывести в консоль "Отжат"
    console.log("Отжат");
  }
};

//чтение из textarea
document.querySelector("#btn-3").onclick = () => {
  let text = document.querySelector("#free"); // задали переменную
  console.log(text.value); // вывели значение переменной в консоль
  text.value = "one"; // после нажатия кнопки выйдет в textarea слово one
};
//чтение из form
document.querySelector("#btn-4").onclick = (event) => {
  //event передали внутрь функции параметр
  event.preventDefault(); // позволяет остановить перезагрузку формы
  //let textform = document.querySelector("#text-form"); // задали переменную
  //console.log(textform.value); // вывели значение переменной в консоль
  //textform.value = "one"; // после нажатия кнопки выйдет в textarea слово one
  let form = document.querySelector("form");
  console.log(form);
  // вывести в консоль значение элемента  ,формы, с id textforms
  console.log(form.elements.textforms.value); //Обращение к элементу с id textforms
  console.log(form.elements.n2.value); // обращение к элементу формы с именем n2
  //в итоге выведет в консоль оба значения из двух колонок
};
document.querySelector("#btn10").onclick = () => {
  alert("1");
};

document.querySelector("#inpbtn").onclick = () => {
  alert("5");
};
document.querySelector("#p3").onclick = () => {
  alert("3");
};

