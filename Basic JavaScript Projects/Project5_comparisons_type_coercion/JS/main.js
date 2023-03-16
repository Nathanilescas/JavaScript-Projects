// type of assignment
document.write(typeof "Hello World")

// combining string to a number
let num1 = 5 + "5    ";
document.write(num1);

document.write(0/0);
document.write(isNaN("Hello World"))
document.write(isNaN(8));

let posInfinity = 1.7976931348623157E3088888;
let negInfinity = -1.7976931348623157E3088888;

function PosInfinity() { //This function will output a infinity
    document.getElementById("posInfinity").innerHTML = posInfinity
}

function NegInfinity() { //This function will output a negative infinity
    document.getElementById("negInfinity").innerHTML = negInfinity
}

document.write("     the anwser is :  ", 10<20); // Boolean Logic
document.write("     the anwser is :  ", 10>20);

console.log(20+23); // This will display in the console


let boolean = 20 > 25;
console.log(boolean)

console.log(20==23);
console.log(12==12);

// Triple Assignment

console.log(100 === 100);
console.log(12 === "32");
console.log(12 === "12");
console.log(12 === 32);

// AND OPERATOR ASSIGNMENT

// AND OPERATOR
console.log(12 == 12 && 23 > 12);
console.log(12 == 12 && 23 < 12);

// OR OPERATOR
console.log(12 == 12 || 23 < 12 );
console.log(12 == 23 || 23 < 12 );

// NOT OPERATOR ASSIGNMENT

console.log(!( 23 === "23" ));