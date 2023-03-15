function ChangeColor(newcolor) { // This element will change the color of the text of the html element
    let element = document.getElementById("firstparagraph");
    element.style.color = newcolor;
}

function Concatenate() { // This function will change add text to the html element
    let sentence = "Hi! My name is What? My name is Who? My name is";
    sentence += " Chika-chika Slim Shady";
    document.getElementById("concatenate").innerHTML = sentence;
}