function Ride_Function() {
    let Height , Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + "To ride.";
}

// TERNARY OPERATORS CHALLENGE

function Voting() {
    let age, eligible;
    age = document.getElementById("Age").value;
    eligible = (age >= 18) ? "You can Vote." : "Sorry, your not old enough.";
    document.getElementById("Eligible").innerHTML = eligible;
}


// CODING ASSIGNMENT
function Vehicle(Make, Model, Year, Color)  {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

let Jack = new Vehicle ("Dodge", "Viper", "2020", "Red");
let Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black");
let Erik = new Vehicle ("Ford", "Pinto", "1971", "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}

//NEW KEYWORD ASSIGNMENT
function Dog(name, breed, age) {
    this.Name = name;
    this.Breed = breed;
    this.Age = age;
}

let Nathan = new Dog ("Bruce", "Pitbull", 5)

function Pets() {
    document.getElementById("New_and_This").innerHTML = "Your dogs breed is a " + Nathan.Breed + ". His/Her name is " + Nathan.Name + ". Their age is " + Nathan.Age;

}

// NESTED FUNCTIONS ASSIGNMENT

function NestedFunction() {
    let name = "Nathan";
    let age = 26;
    let height = 70;

    OtherFucntion();

    function OtherFucntion(){
        if(age>18){
            if(height>60){
               document.getElementById("Nested_Function").innerHTML = name + " is allowed inside"
            }
        }
    }
}