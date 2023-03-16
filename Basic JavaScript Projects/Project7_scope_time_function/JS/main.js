
// LOCAL AND GLOBAL VARIABLE ASSIGNMENT
let globalVariable = "I am global";

LocalVariableFunction();

function LocalVariableFunction() {
    let localVariable = "I am local";
}

// ErrorFunction();

function ErrorFunction() {
    console.log("You are : " + globalVariable);
    console.log("You are : " + localVariable);
}

// METHOD ASSIGNMENT

ClassSchedulel()

function ClassSchedulel() {
    let time = document.getElementById("Time").value; // Input Time you arrived 
    if (time >= new Date().getHours() && time <= (new Date().getHours() + 4)) { // You'll have 4 hour opening
        document.getElementById("Date").innerHTML = "Your on Time"
    }else {
        document.getElementById("Date").innerHTML = "Your Late"
    }
}

// ELSE ASSIGNMENT

    function CheckAge() {
        let legalAge = document.getElementById("Age").value;
        let output = document.getElementById("Output");
        if (legalAge >= 21) {
            output.innerHTML = "You are old enough to drink..."
        }
        else {
            output.innerHTML = "You are NOT old enough to drink..."
        }
    }

// ELSE IF ASSIGNMENT
    function Time_function() {
        let time = new Date().getHours();
        let replay;

        if (time < 12 == time > 0) {
            replay = "It's morning time!";
        }
        else if (time >= 12 == time < 18) {
            replay = "It's afternoon time."
        }
        else {
            replay = "It's evening time."
        }
        document.getElementById("Time_of_day").innerHTML = replay;
    }