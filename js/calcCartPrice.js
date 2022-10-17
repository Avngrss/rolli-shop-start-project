function calcCartPriceAndDelivery() {
  const cartWrapper = document.querySelector(".cart-wrapper");
  const priceElements = cartWrapper.querySelectorAll(".price__currency");
  const totalPriceText = document.querySelector(".total-price");
  const deliveryCost = document.querySelector(".delivery-cost ");
  const cartDelivery = document.querySelector("[data-cart-delivery]");
  console.log(totalPriceText);
  //Общая стоимость товаров
  let totalPrice = 0;
  //Обходим все блоки с ценами в корзине
  priceElements.forEach(function (item) {
    //Находим количество товаров
    const amountEl = item.closest(".cart-item").querySelector("[data-counter]");
    //Добавляем стоимость товара в общую стоимость
    totalPrice += parseInt(item.innerText) * parseInt(amountEl.innerText);
  });
  //Отображаем цену на странице
  totalPriceText.innerText = totalPrice;

  //Скрываем / Показываем блок стоимости доставки
  if (totalPrice > 0) {
    cartDelivery.classList.remove("none");
  } else {
    cartDelivery.classList.add("none");
  }

  // Указываем стоимость доставки
  if (totalPrice >= 600) {
    deliveryCost.classList.add("free");
    deliveryCost.innerText = "бесплатно";
  } else {
    deliveryCost.classList.remove("free");
    deliveryCost.innerText = "250 ₽";
  }
}
