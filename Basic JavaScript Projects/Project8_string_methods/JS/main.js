// CONCAT() METHOD ASSIGNMENT
function ConcatFunction() {
    let string1 = " Hello ";
    let string2 = " World ";
    let string3 = " Hi ";

    document.getElementById("Concat").innerHTML = string1.concat(string2,string3,string1)
}

// SLICE() METHOD ASSIGNMENT
function SliceFunction() {
    let sentence = " Hello my name is Nathan."

    document.getElementById("Slice").innerHTML = sentence.slice(18,24)
}

// MORE METHODS CHALLENGE

// Upper Method 
let lowerToUpper = "hello world"
console.log(lowerToUpper.toUpperCase())

// Search Method
let search = "CaN YoU FinD My nAme .... NathAN"

console.log(search.toUpperCase().search("NATHAN"));

//NUMBER METHODS ASSIGNMENT
let num2string = 234.346;
console.log(typeof num2string.toString())

// TOPRECISION() METHOD ASSIGNMENT
let longNum = 91.208765;
console.log(longNum.toPrecision(3));

// NEW METHODS CHALLENGE

// .tofix() METHOD
console.log(typeof num2string.toFixed(2)); // it turns a number into a string and it cuts off the decimal plus rounds it

// .valueof()
let text = new String("Hello World"); // The string I created is an a part of an object 
console.log(typeof text)
let result = text.valueOf(); // I converted it into a string 
console.log(typeof result);
