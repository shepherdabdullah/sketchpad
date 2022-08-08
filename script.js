let color = "black";
let click = true;



function populateCanvas(size) {
    let canvas = document.querySelector(".canvas ")
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

populateCanvas(16);

function changeSize(input) {
    if (input >= 1 && input <= 100) {
    populateCanvas(input)
    } else {
        console.log("invalid size parameter")
    }
}

function colorSquare() {
    if (click) {
        if (color === "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color
        }
    }
}


function changeColor(choice) {
    color = choice;
}


function clearCanvas() {
    let canvas = document.querySelector(".canvas")
    let squares = canvas.querySelectorAll("div")
    squares.forEach(div => div.style.backgroundColor = "white")
}


document.querySelector("body").addEventListener("click", () => {
    click = !click;
});