function placeOrder() {

    const price = document.getElementById('price').innerText;
    const discount = document.getElementById('discount').innerText;
    const finalPrice = calculateFinalPrice(price, discount);
  
    if (confirm(`The final price is $${finalPrice}. Do you want to proceed with the purchase?`)) {
      alert('Thank you for your purchase!');
    
    } else {
      alert('Purchase canceled.');
    }
  }
  
  function calculateFinalPrice(price, discount) {
    const numericPrice = parseFloat(price);
    const numericDiscount = parseFloat(discount.replace('%', ''));
    const discountAmount = (numericPrice * numericDiscount) / 100;
    return (numericPrice - discountAmount).toFixed(2);
  }
  