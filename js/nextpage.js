function Orderprice () {
  this.total = [];
  this.cost = 0;
}

function Singleorder (pizzaSize, pizzaCrust, pizzaToppings){
  this.pizzaSize = pizzaSize;
  this.pizzaCrust = pizzaCrust;
  this.pizzaToppings = pizzaToppings;
}

function sizeShow() {
  $(".sizec").slideToggle(1500);
}

function crustShow() {
  $(".crustc").slideToggle(1500);
}

function toppingsShow() {
  $(".toppingsc").slideToggle(1500);
}

var size = "";
var allCrusts = [];
var allToppings = [];

function sizeOrder1() {
  $(".pizzasizes").show(500);

  size = parseInt($("#small").val());

  $(".sizesView").text("Small (Ksh " + size + ")");
}

function sizeOrder2() {
  $(".pizzasizes").show(500);

  size = parseInt($("#medium").val());

  $(".sizesView").text("Medium (Ksh " + size + ")");
}

function sizeOrder3() {
  $(".pizzasizes").show(500);

  size =parseInt( $("#large").val());

  $(".sizesView").text("Large (Ksh " + size + ")");
}

function crustOrder1() {
  $(".pizzacrusts").show(500);

  var crusts = parseInt($("#crispy").val());
  allCrusts.push(crusts);

  $(".crustsView").append("Crispy Crust (Ksh " + crusts + ")<br>");
}