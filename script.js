//variables
let whites;
let sugar;
let almondFlour;
let powderedSugar;

const whitesText = document.querySelector("#whites");
const sugarText = document.querySelector("#sugar");
const almondFlourText = document.querySelector("#almondFlour");
const powderedSugarText = document.querySelector("#powderedSugar");

let inputBox = document.getElementById('grams');

function calculate() {
    //get user input
    let input = document.getElementById('grams').value;

    //calculate new amounts
    whites = input;
    sugar = (45 * input) / 50;
    almondFlour = (65 * input) / 50;
    powderedSugar = (65 * input) / 50;

    //change the text
    whitesText.textContent = whites;
    sugarText.textContent = sugar;
    almondFlourText.textContent = almondFlour;
    powderedSugarText.textContent = powderedSugar;

    //clear the input box
    inputBox.value = "";
}