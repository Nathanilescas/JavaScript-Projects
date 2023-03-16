
// LOCAL AND GLOBAL VARIABLE ASSIGNMENT
let globalVariable = "I am global";

LocalVariableFunction();

function LocalVariableFunction() {
    let localVariable = "I am local";
}

ErrorFunction();

function ErrorFunction() {
    console.log("You are : " + globalVariable);
    console.log("You are : " + localVariable);
}