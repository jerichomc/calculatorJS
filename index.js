

const display = document.getElementById("display");

let displayCharacters = [];

function appendToDisplay(value){
    if (display.value.length >= 10){
        window.alert("Too many characters.")
    }
    else{
        display.value += value;
    }
}

function calculate(){
    try{
        let expression = display.value;
        let result = eval(expression);
        display.value = result;
    }
    catch(error){
        display.value = "Error";
    }
}

function clearDisplay(){
    display.value = ""
}