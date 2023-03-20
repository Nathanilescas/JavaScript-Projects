// WHILE LOOP 

function Call_Loop() {
    let i = 0;
    let colors = ["red","black","blue", "pink", "gold"]
    while (i <= colors.length ) {
        if (colors[i] == "pink") {
            document.getElementById("Loop").innerHTML = "Matched the right color : " + colors[i] 
            break;
        }
        i++
    }
}

// FOR LOOP
function for_Loop() {
    let array = [1,33,53,52,2,100];
    let add = 0;
    for (i=0; i < array.length; i++) {
        add += array[i];
    }
    document.getElementById("List_of_Instruments").innerHTML = "The total is " + add;
}

// Array
function array_Function() {
    let array_2 = ["Nate","Bruce", "Jonny","ED", "Tek","Hurley"]
    let randomNum = Math.trunc(Math.random()*6)
    document.getElementById("Array").innerHTML = "My dog's name will be " + array_2[randomNum]
}

// CONST KEYWORD ASSIGNMENT
function constant_function() {
    const pets = {
        color : "brown",
        breed : "pitbull",
        name : "bruce",
        age : 5,
    }
    pets.color = "Brown/gray";
    pets.name = "freckles";
    pets.weight = 60;
    document.getElementById("Constant").innerHTML = "My dog's name is " + pets.name + " and he is a " + pets.breed + ". Before we adopted him his name used to be " +
    pets.name + " he weighs " + pets.weight
}

//LET KEYWORD ASSIGNMENT
let dog = "bruce";

// RETURN STATEMENT CHALLENGE
function Return_Statement() {
    let x = 12;
    let y = 2;
    return z = x + y; // the z value will return when the function is called
}

// OBJECT ASSIGNMENT
let car = {
    make : "Honda",
    model : "Civic",
    year : 2014,
    statement : function() {
        return "My car is a " + this.year + " " + this.make + " " + this.model;
    }
}
alert(car.statement());