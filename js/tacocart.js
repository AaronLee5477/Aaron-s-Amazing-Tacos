var taco_cart = [];
var taco_type = "";
var protein = "";
var tortilla = "";
var single_order_quantity = 0;
var total_tacos = 0;



$(function () {

// Add single order to cart
  $('#add_to_cart').click(function(){
    var single_Order = {};
    single_Order.type = $('#taco_type').val();
    single_Order.protein = $("#protein").val();
    single_Order.tortilla = $('#tortilla').val();
    single_Order.quantity = $('#single_order_quantity').val();

    //Alert for catching null values
    if (single_Order.type == "" || single_Order.protein == "" || single_Order.tortilla == "") {
      alert("Please pick each option")
    } else {
      taco_cart.push(single_Order);
      console.log(taco_cart);
      total_tacos = total_tacos + parseInt($('#single_order_quantity').val());

        // reset form
        $("#taco_type").val("");
        $("#protein").val("");
        $("#tortilla").val("");
        $("#single_order_quantity").val("1");
      };
      // Add taco total in Cart button
      $('#go_to_cart').text('Go to Cart [' + total_tacos +' taco(s)]');

  });

  // Pulling up the cart modal
  var modal = document.getElementById('cart_modal');
  var cart_button = document.getElementById('go_to_cart')
  var span = document.getElementsByClassName('close')[0];

  cart_button.onclick = function() {
    modal.style.display = 'block';
  }

  span.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

});
