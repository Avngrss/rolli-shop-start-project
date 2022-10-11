// Отслеживаем клик по страницы
window.addEventListener("click", function (event) {
  //проверяем что клик бл совершен по кнопке "Добавить в корзину"
  if (event.target.hasAttribute("data-card")) {
    //Находим карточку с товаром по которой был совершен клик
    const card = event.target.closest(".card");

    //Собираем данные с этого товара и записываем их в единый обьект productInfo
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector(".product-img").getAttribute("src"),
      title: card.querySelector(".item-title").innerText,
      itemsInBox: card.querySelector("[data-items-in-box]").innerText,
      weigth: card.querySelector(".price__weight").innerText,
      price: card.querySelector(".price__currency").innerText,
      counter: card.querySelector("[data-counter]").innerText,
    };
  }
});
