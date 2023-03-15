function Arithmetic() { // This number adds 2 plus 2
    let add = 2+2;
    document.getElementById("Math").innerHTML = add + Math.trunc(Math.random()*9)
}

function SubtractionOp() { // This function subtracts 10 from 20
    let subtractNums = 20 -10;
    document.getElementById("Subtraction").innerHTML = subtractNums;
}

function MultiplicationOp() { // This function multipies numbers 
    let multiplicatonNums = 2*4;
    document.getElementById("Multiplication").innerHTML = multiplicatonNums;
}

function DivisionOp() { // This function divides numbers
    let divisionNums = 10/5;
    document.getElementById("Division").innerHTML = divisionNums;
}

function MultipleOp() { // THis function multiplies numbers
    let multipleNums = ((1+4)*10)/50;
    document.getElementById("Multiple").innerHTML = multipleNums;
}

function ModulusOp() { // This function return the remainder
    let modulusNum = 100%3;
    document.getElementById("Modulus").innerHTML = modulusNum;
}

function NegativeOp() { // This function returns the opposite number
    let num = 100;
    document.getElementById("Negative").innerHTML = -num;
}

function IncrementOp() { // This function adds one
    let incrementNum = 2;
    incrementNum++
    document.getElementById("Increment").innerHTML = incrementNum;
}

function DecrementOp() { // This function subtracts one
    let decrementNum = 3;
    decrementNum--;
    document.getElementById("Decrement").innerHTML = decrementNum;
}

function RandomOp() { // This function returns a random number 
    let randomNum = Math.random()*10 + 1;
    document.getElementById("RandomNumber").innerHTML = randomNum;
}

function Pie() { // This is a Math PI property which return the number PI
    document.getElementById("MathPie").innerHTML = Math.PI;
}

function MoreRandomOp() { // This function return a random number
    document.getElementById("MoreRandom").innerHTML = Math.trunc(Math.random()*10+1);
}