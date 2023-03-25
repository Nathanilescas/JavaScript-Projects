function getReceipt() {
    // This initializes our string so it can get passed from 
    // function to function, growing line by line into a full reciept
    var text1 = "<h3>You Ordered: </h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    }else if (selectedSize === "Medium Pizza") {
        sizeTotal = 8;
    }else if (selectedSize === "Large Pizza") {
        sizeTotal = 10;
    }else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 14;
    }else if (selectedSize === "Extreme Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal : $" + runningTotal + ".00");
    // These variables will get passes on to each function
    getTopping(runningTotal, text1);    
};
function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = []; // Meat toppings 
    var selectedVeggies = []; // Vegetables topping
    var toppingArray = document.getElementsByClassName("toppings");
    var veggiesArray = document.getElementsByClassName("Vegetables");


    // Checking for selected meat toppings
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value); // if selected push to array
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>"; // added to text1
        }
    }

    // Checking for selected veggies
    for (var v = 0; v < veggiesArray.length; v++) {
        if (veggiesArray[v].checked) {
            selectedVeggies.push(veggiesArray[v].value);
            text1 = text1 + veggiesArray[v].value + "<br>";
        }
    }

    var veggiesCount = selectedVeggies.length;
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    }else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal + veggiesCount);
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + "topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
}