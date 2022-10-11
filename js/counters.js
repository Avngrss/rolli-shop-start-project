//Добавляем прослушку на всем окне
window.addEventListener("click", function (event) {
  // Обьявляем переменную для счетчика
  let counter;

  // Клик строго по кнопкам
  if (event.target.dataset.action === "plus" || event.target.dataset.action === "minus") {
    // Находим обертку счетчика
    const counterWrapper = event.target.closest(".counter-wrapper");
    // Находим див с числом счетчика
    counter = counterWrapper.querySelector("[data-counter]");
  }

  //проверяем ялвляется ли элемент по которому был совершен клик кнопкой плюс
  if (event.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
  }

  //проверяем ялвляется ли элемент по которому был совершен клик кнопкой минус
  if (event.target.dataset.action === "minus") {
    //Проверяем чтобы счетчик был больше 1
    if (parseInt(counter.innerText) > 1) {
      //Изменяем тест в счетчике уменьшая его на 1
      counter.innerText = --counter.innerText;
    }
  }
});
