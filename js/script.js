//Updating All the Cost Using One FUNCTION Only
function updateCost(item, value) {
    // Getting the item using id
    const itemCost = document.getElementById(item + '-cost');

    //Checking and Updating the cost of item 

    if (item == 'memory' && value == 8) {
        itemCost.innerText = 0;
    }
    if (item == 'memory' && value == 16) {
        itemCost.innerText = 180;
    }
    if (item == 'storage' && value == 256) {
        itemCost.innerText = 0;
    }
    if (item == 'storage' && value == 512) {
        itemCost.innerText = 100;
    }
    if (item == 'storage' && value == 1) {
        itemCost.innerText = 180;
    }
    if (item == 'delivery' && value == 0) {
        itemCost.innerText = 0;
    }
    if (item == 'delivery' && value == 20) {
        itemCost.innerText = 20;
    }

    //Calling the Function calculateTotal() to evaluate the total price
    calculateTotal()
}


//Calculate Total Function used to calculate the total price
function calculateTotal() {
    //Getting all the individual price

    const bestPrice = document.getElementById('best-price').innerText;
    let bestPriceValue = parseInt(bestPrice);
    const memoryCost = document.getElementById('memory-cost').innerText;
    let memoryCostValue = parseInt(memoryCost);
    const storageCost = document.getElementById('storage-cost').innerText;
    let storageCostValue = parseInt(storageCost);
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    let deliveryCostValue = parseInt(deliveryCost);

    //Getting the Total Price
    const totalPrice = document.getElementById('total-price');
    //Getting the Total Price at the Bottom of the Website
    const bottomTotalPrice = document.getElementById('bottom-total-price');
    //Evaluating the total price by adding all the individual price
    let totalPriceNumber = bestPriceValue + memoryCostValue + storageCostValue + deliveryCostValue;

    //Updating the total Price
    totalPrice.innerText = totalPriceNumber;
    bottomTotalPrice.innerText = totalPriceNumber;


    //Checking if user changed custmoization after clicking promo code and updating the new discount total.
    if (count >= 1) {
        discountNewTotal();
    }

}

//Creating a count variable to update discount total if user customizes again after applying promo code
let count = 0;
//Function for discount and updating again
function discountNewTotal() {
    //Getting user input
    const userInputField = document.getElementById('discount-code-input');
    const userInput = userInputField.value;

    //Getting the bottom total price of the website
    const bottomTotalPrice = document.getElementById('bottom-total-price');
    const totalPrice = document.getElementById('total-price');
    //Getting the total price and converting it to Integer
    const totalPriceValue = parseInt(totalPrice.innerText);


    //Checking if the promo code is correct
    if (userInput == 'saalim123' || (document.getElementById('discount-btn').disabled == true)) {
        //Calculating new total price and rounding it to 2 decimal place
        const newTotalPrice = (((totalPriceValue / 100) * 80)).toFixed(2);
        bottomTotalPrice.innerText = newTotalPrice;
        //Displaying Promo Code Message
        document.getElementById('promo-message').innerHTML = '<i class="fas fa-check-circle"></i> Promo Code Applied'
        document.getElementById('promo-message').classList.add('text-success');
        document.getElementById('promo-message').classList.remove('text-danger');

        //Disabling the apply button as promo code applied
        document.getElementById('discount-btn').setAttribute('disabled', true);

        //Incrementing count value
        count++;
    }
    else {
        //Displaying Promo Code Message
        document.getElementById('promo-message').innerHTML = '<i class="fas fa-times-circle"></i> Invalid Promo Code!'
        document.getElementById('promo-message').classList.add('text-danger');
        document.getElementById('promo-message').classList.remove('text-success');

    }
    //Clearing Promo Code Box Input Field
    userInputField.value = '';
}
