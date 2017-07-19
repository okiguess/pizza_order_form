// Backend logic

function Pizza(userName, toppings, size, price) {
  this.userName = name;
  this.toppings = toppings;
  this.size = size;
  this.price = price;
}

Pizza.prototype.submitName = function() {
  this.name = $("input#userName").val();
}

Pizza.prototype.pizzaOrder = function() {
  this.size = $("input:radio[name=size]:checked").val();
  var toppingsList = [];
  $("input:checkbox[name=toppings]:checked").each(function() {
    var topping = $(this).val();
    toppingsList.push(topping);
  })
  this.toppings = toppingsList;
  var toppingsTotal = this.toppings.length;
  if (this.size === "small") {
    this.price = 6 + toppingsTotal;
  } else if (this.size === "medium") {
    this.price = 12 + toppingsTotal;
  } else if (this.size === "large") {
    this.price = 20 + toppingsTotal;
  }
  $(".orderSummary").text("Get ready for some Greasy Pizza," + this.name + "!" + "Your total is $" + this.price);
}

// Front-end logic

$(document).ready(function() {
  var newPizza = new Pizza();
  $("#nameSubmit").click(function(event) {
    event.preventDefault();
    $(".orderOptions").show();
    newPizza.submitName();
  })

  $("#submit").click(function(event) {
    event.preventDefault();
    newPizza.pizzaOrder();
    $(".orderSummary").show();
  })
});
