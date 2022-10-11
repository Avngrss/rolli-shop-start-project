// Находим элементы на странице
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector("[data-counter]");

btnMinus.addEventListener("click", () => {
  //Проверяем чтобы счетчик был больше 1
  if (parseInt(counter.innerText) > 1) {
    //Изменяем тест в счетчике уменьшая его на 1
    counter.innerText = --counter.innerText;
  }
});
btnPlus.addEventListener("click", () => {
  counter.innerText = ++counter.innerText;
});
