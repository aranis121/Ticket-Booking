
function handleTicketPrice(increase){
    const firstClassInput = document.getElementById("first-class-input");
    const firstInputNumber = parseInt(firstClassInput.value);
    let firstNewInput = firstInputNumber;
    if(increase == true){
         firstNewInput = firstInputNumber + 1 ;
    }
    if(increase == false && firstInputNumber > 0){
         firstNewInput = firstInputNumber - 1 
    };
    firstClassInput.value = firstNewInput;
    const firstTotalPrice = firstNewInput * 150;
    document.getElementById("first-class-price").innerHTML = "$" + firstTotalPrice;
    calculateSubTotal()
}

function EconomyTicketPrice(increase){
    const economyClassInput = document.getElementById("economy-class-input");
    const economyInputInt = parseInt(economyClassInput.value);
    let economyNewInput = economyInputInt;
    if(increase == true){
        economyNewInput = economyInputInt + 1 ;
    }
    if(increase == false && economyInputInt > 0){
        economyNewInput = economyInputInt - 1 
    };
    economyClassInput.value = economyNewInput;
    const economyTotalPrice = economyNewInput * 100;
    document.getElementById("economy-class-price").innerHTML = "$" + economyTotalPrice;
    calculateSubTotal()
}


function calculateSubTotal(){
    const firstClassInput = document.getElementById("first-class-input");
    const firstInputNumber = parseInt(firstClassInput.value);

    const economyClassInput = document.getElementById("economy-class-input");
    const economyInputNumber = parseInt(economyClassInput.value);

    const subTotal = firstInputNumber * 150 + economyInputNumber * 100;
    document.getElementById("sub-total").innerHTML = "$" + subTotal;


    const tax = subTotal * 0.10;
    document.getElementById("tax-amount").innerHTML = "$" + tax;


    const allTotalCost = subTotal + tax;
    document.getElementById("all-total").innerText = "$" + allTotalCost
}

function bookNow() {
    // traveling place
    document.getElementById('display-from').innerText = document.getElementById('fling-from').value;
    document.getElementById('display-to').innerText = document.getElementById('fling-to').value;

    // traveling date
    document.getElementById('display-departure-date').innerText = document.getElementById('departure').value;
    document.getElementById('display-return-date').innerText = document.getElementById('return').value;

    // first class information
    document.getElementById('firsts-class').innerText = document.getElementById('first-class-input').value;
    document.getElementById('fast-class-price').innerText = document.getElementById('first-class-input').value * 150;

    // economy information
    document.getElementById('second-class').innerText = document.getElementById('economy-class-input').value;
    document.getElementById('second-class-price').innerText = document.getElementById('economy-class-input').value * 100;

    // subtotal information
    document.getElementById('subtotal-price').innerText = document.getElementById('sub-total').innerText;

    // vat information
    document.getElementById('vat').innerText = document.getElementById('tax-amount').innerText;

    // total information
    document.getElementById('total-count').innerText = parseInt(getElementById('first-class-input').value) + parseInt(getElementById('economy-class-input').value);
    document.getElementById('total-price').innerText = getElementById('all-total').innerText;
}
// get element id 
function getElementById(id) {
    return document.getElementById(id);
}












