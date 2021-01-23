function submitCardNumber(cardNumber) {
  var cardNumber = document.getElementById("cardNumber").value;
  console.log(cardNumber);
  document.getElementById("bc").src = "https://www.barcodesinc.com/generator/image.php?code=" + cardNumber + "&style=197&type=C128B&width=250&height=60&xres=1&font=3";
}