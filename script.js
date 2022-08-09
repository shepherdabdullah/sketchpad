let color = "black";
let click = true;

const colorPicker = document.querySelector(".color-picker");
const sliderLabel = document.querySelector(".slider-label");
let slider = document.querySelector(".slider");


// creates a grid of empty divs arranging them into our canvas/drawing surface
function populateCanvas(size) {
    let canvas = document.querySelector(".canvas")
    let squares = canvas.querySelectorAll("div")
    squares.forEach(div => div.remove)
    canvas.style.gridTemplateColumns = `repeat(${size} , 1fr)`
    canvas.style.gridTemplateRows = `repeat(${size} , 1fr)`


    let amount = size * size
    for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare)
    square.style.backgroundColor = "white";
    canvas.insertAdjacentElement("beforeend", square)
    }
}

// calls populateCanvas function to create a default 50x50 canvas upon page load
populateCanvas(50);


// function that changes size of board by calling populateCanvas function
// clears the drawing space when canvas size is changed
function changeSize(input) {
    if (input >= 1 && input <= 100) {
    populateCanvas(input)
    clearCanvas();
    }
}


// renders canvas size changes to user in text
function updateSliderLabel() {
    sliderLabel.innerText = `${slider.value} x ${slider.value}`;
}


// function that "draws" by changing background color of any div it rolls
// while "click" is true
function colorSquare() {
    if (click) {
        if (color === "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color
        }
    }
}


// handles button color selections
function changeColor(choice) {
    color = choice;
}


// handles color picker tool selections
function selectColor(event) {
    color = event.target.value;
    colorSquare();
}

// function to reset all divs in canvas to white essentially "clearing" the canvas
function clearCanvas() {
    let canvas = document.querySelector(".canvas")
    let squares = canvas.querySelectorAll("div")
    squares.forEach(div => div.style.backgroundColor = "white")
}


// renders canvas size changes to user in text
function updateSliderLabel() {
    sliderLabel.innerText = `${slider.value} x ${slider.value}`;
}


// adds functionality to canvas size slider
slider.addEventListener("change", (e) => changeSize(e.target.value));
slider.addEventListener("mousemove", (e) => updateSliderLabel(e.target.value));
// adds functionality to colorPicker
colorPicker.addEventListener("change", (e) => selectColor(e));


// 
document.querySelector("body").addEventListener("click", (e) => {
    if(e.target.tagName != "BUTTON") {
        click = !click
    }
});