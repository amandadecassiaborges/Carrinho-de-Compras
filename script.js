function incrementQuantity(elementId) {
    const quantityElement = document.getElementById(elementId);
    let quantity = parseInt(quantityElement.textContent);
    quantity += 1;
    quantityElement.textContent = quantity.toString();
  
    updateTotalPrice();
  }
  
  function decrementQuantity(elementId) {
    const quantityElement = document.getElementById(elementId);
    let quantity = parseInt(quantityElement.textContent);
  
    if (quantity > 0) {
      quantity -= 1;
      quantityElement.textContent = quantity.toString();
  
      updateTotalPrice();
    }
  }
  
  function updateTotalPrice() {
    const priceElements = document.querySelectorAll('.price');
    const totalPriceElement = document.querySelector('#total-price strong');
    let totalPrice = 0;
  
    priceElements.forEach(function (priceElement) {
      const priceText = priceElement.textContent.replace('R$', '').replace('.', '').replace(',', '.');
      const price = parseFloat(priceText);
      const quantityId = priceElement.parentNode.parentNode.querySelector('.qty span').id;
      const quantityElement = document.getElementById(quantityId);
  
      const quantity = parseInt(quantityElement.textContent);
      const productTotalPrice = price * quantity;
  
      totalPrice += productTotalPrice;
    });
  
    totalPriceElement.textContent = 'R$ ' + totalPrice.toFixed(2).replace('.', ',');
  }
  