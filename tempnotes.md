1. When add tacos is pressed. Add the type, protein, tortilla and quantity to the tacoCart.
2. Keep a running total for the cost of tacos.
3. Print cart and total when Go to Cart is clicked.


// reset form
//$('#taco_order').each(function() {
  //  this.reset();
//  });



American: protein, queso fresco, lettuce, pico de gallo, sour cream
California: protein, coleslaw, chipolte aioli, queso fresco
Atomic: protein, queso fresco, jalapenos, habanero salsa
Southwest: protein, queso fresco, roasted corn, guacamole, salsa verde


Temporary place for old ordering code:
<div class="container">

  <fieldset>
    <legend>Build your taco</legend>
    <div class='tortilla'>
      <label>Tortilla:</label>
      <input type="radio" id="corn" value="corn" name="tortilla"><label for="corn">Corn</label>
      <input type="radio" id="flour" value="flour" name="tortilla"><label for="flour">Flour</label>
      <input type="radio" id="wheat" value="wheat" name="tortilla"><label for="wheat">Wheat</label>
      </div>
    <br>

    <div class="protein">
      <label for="protein">Protein:</label>
      <select id="protein" name="protein">
        <optgroup label="For carnivores">
          <option value="chicken">Shredded Chicken</option>
          <option value="beef">Ground Beef</option>
          <option value="pork">Pulled Pork</option>
          <option value="barbacoa">Barbacoa</option>
          <option value="fish">Fish</option>
        </optgroup>
        <optgroup label="For herbivores">
          <option value="black_beans">Black Beans</option>
          <option value="tofu">Marinated Tofu</option>
          <option value="seitan">Jerked Seitan</option>
        </optgroup>
      </select>
      </div>
    <br>

    <div class='toppings'>
      <label>Toppings:</label>
      <p class='topping-items'><input type="checkbox" id="cheese" value="cheese" name="cheese"><label form="cheese">Cheese</label>
      <input type="checkbox" id="sourcream" value="sourcream" name="sourcream"><label form="sourcream">Sour Cream</label>
      <input type="checkbox" id="lettuce" value="lettuce" name="lettuce"><label form="lettuce">Lettuce</label>
      <input type="checkbox" id="tomato" value="tomato" name="tomato"><label form="tomato">Tomatoes</label>
      <input type="checkbox" id="cilantro" value="cilantro" name="cilantro"><label form="cilantro">Cilantro</label>
      <input type="checkbox" id="jalapeno" value="jalapeno" name="jalapeno"><label form="jalapeno">Jalapenoes</label>
      <input type="checkbox" id="picodegallo" value="picodegallo" name="picodegallo"><label form="picodegallo">Pico de Gallo</label>
      <input type="checkbox" id="salsaverde" value="salsaverde" name="salsaverde"><label form="salsaverde">Salsa Verde</label>
      <input type="checkbox" id="hotsauce" value="hotsauce" name="hotsauce"><label form="hotsauce">Habanero Hot Sauce</label>
      <input type="checkbox" id="onion" value="onion" name="onion"><label form="onion">Onions</label>
      <input type="checkbox" id="coleslaw" value="coleslaw" name="coleslaw"><label form="coleslaw">Coleslaw</label>
      <input type="checkbox" id="chipotleaioli" value="chipotleaioli" name="chipotleaioli"><label form="chipotleaioli">Chipotle Aioli</label>
    </div>

      <label for="quantity">Qty:</label>
      <input type="text" id="quanity" name="quantity">
  </fieldset>
