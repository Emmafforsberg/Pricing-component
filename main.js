/* Toggle switch */
document
  .querySelector(".toggle__switch")
  /* When the user presses dowen on the switch */
  .addEventListener("mouseup", function () {
    /* Goes through card__price */
    var price = document.getElementsByClassName("card__price");
    for (var i = 0; i < price.length; i++) {
      var element = price[i];
      var classList = element.classList;
      classList.toggle("card__price--hidden");
    }
  });
