function DictionaryAminals() {
    let animal = {
        species : "Dog",
        color : "Brown",
        breed : "Pitbull",
        Age : 5,
    }
    delete animal.breed // This will delete the value breed 
    document.getElementById("Dictionary").innerHTML = animal.breed
}