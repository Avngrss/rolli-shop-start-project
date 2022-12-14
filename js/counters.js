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
    } else if (event.target.closest(".cart-wrapper") && parseInt(counter.innerText) === 1) {
      //Удаляем товар из корзины
      event.target.closest(".cart-item").remove();

      //Отображение статуса корзины Пустая / Полная
      toggleCartStatus();

      //Пересчитываем общую стоимость товаров в корзине
      calcCartPriceAndDelivery();
    }
  }

  //Проверяем клик на + или - внутри корзины
  if (event.target.hasAttribute("data-action") && event.target.closest(".cart-wrapper")) {
    //Пересчитываем общую стоимость товаров в корзине
    calcCartPriceAndDelivery();
  }
});
