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
  var cart_HTML = ""
  var single_cost = 0
  var total_cost = 0

  cart_button.onclick = function() {
    modal.style.display = 'block';
    $(".modal_content").append("<h3>Your Cart</h3>");

    // Displaying individual orders on the modal
    if (taco_cart.length > 0) {
      for (i = 0; i < taco_cart.length; ++i) {
        cart_HTML +="<li><span class=modal_order>";
        cart_HTML +=taco_cart[i].type + " ";
        cart_HTML +=taco_cart[i].protein + " on ";
        cart_HTML +=taco_cart[i].tortilla + "</span>";
        single_cost = taco_cart[i].quantity * 3;
        cart_HTML +="<span class=modal_cost>";
        cart_HTML +=single_cost.toFixed(2);
        cart_HTML +="</span>";
      }

      // Displaying cart total in the modal
      total_cost = total_tacos * 3;
      cart_HTML +="<li><span class=modal_order>Total</span><span=modal_cost>";
      cart_HTML +=total_cost.toFixed(2) + "</span>"
      $(".modal_content").append(cart_HTML);
      $(".modal_content").append("<button type='submit' id='checkout' class='button'>Checkout</button>")

    } else {
      $(".modal_content").append("<p>Your cart is empty!! Order some tacos!! <p>");
    }
  }

  span.onclick = function () {
    modal.style.display = "none";
    $(".modal_content").empty();
  }

  $('.checkout').click(function() {
    alert("Checkout feature is under construction");
  });


});
