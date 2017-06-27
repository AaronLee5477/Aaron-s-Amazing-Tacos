var taco_cart = [];
var taco_type = "";
var protein = "";
var tortilla = "";
var quantity = 0;
var total = 0;

$(function () {
  // 1. Select all the inputs
  // taco-type=element

  //create reset functoin
  $('#add_to_cart').click(function(){
    var single_Order = {};
    single_Order.type = $('#taco_type').val();
    single_Order.protein = $("#protein").val();
    single_Order.tortilla = $('#tortilla').val();
    single_Order.quantity = $('#quantity').val();
    taco_cart.push(single_Order);
    // clear form
    console.log(taco_cart);
    });
});
