const MAX_SIZE = 100;

const grid = document.querySelector('.sketch-grid')
const backgroundColor = document.querySelector('.background-color-picker');
const eraser = document.querySelector('.eraser');
const colorButton = document.querySelector('.color-button')
const slider = document.querySelector('.size-slider');
const sliderLabel = document.querySelector('.slider-label');
let selectedColor = document.querySelector('.color-picker');
let size;
let gradientON = false;
let eraserON = false;

selectedColor.addEventListener("input", () => {
    targetSquares(selectedColor.value);


    colorButton.style.background = selectedColor.value;

})

backgroundColor.addEventListener("input", () => {
    
    eraser.style.background = backgroundColor.value;
    
    bgSquares = document.querySelectorAll('.square');

    for (let i = 0; i < bgSquares.length; i++){
        bgSquares[i].style.background = backgroundColor.value;
    }
    

})


function targetSquares (color) {

    gradientON = false;

    bgSquares = document.querySelectorAll('.square');
    
    for (let i = 0; i < bgSquares.length; i++){

            bgSquares[i].addEventListener("mouseover", function (e){
                e.target.style.background = color;
                if (eraserON) bgSquares[i].classList.remove('gradient-1', 'gradient-2', 'gradient-3', 'gradient-4', 'gradient-5');
        })
    }
}

function targetRandomSquares () {
    gradientON = false;
    eraserON = false;
    bgSquares = document.querySelectorAll('.square');
    
    for (let i = 0; i < bgSquares.length; i++){
        bgSquares[i].addEventListener("mouseover", function (e){
            e.target.style.background = getRandomColor();
    })
    }
}


function checkWhichGradient(square) {
    if (gradientON){

    if (square.classList.contains('gradient-1')) {
        square.classList.remove('gradient-1');
        square.classList.add('gradient-2');
    }
    else if (square.classList.contains('gradient-2')) {
        square.classList.remove('gradient-2');
        square.classList.add('gradient-3');
    }
    else if (square.classList.contains('gradient-3')) {
        square.classList.remove('gradient-3');
        square.classList.add('gradient-4');
    }
    else if (square.classList.contains('gradient-4')) {
        square.classList.remove('gradient-4');
        square.classList.add('gradient-5');
    }
    else {
        if (!square.classList.contains('gradient-5'))
        square.classList.add('gradient-1');
    }
}
}


function targetGradientSquares () {

    gradientON = true;
    eraserON = false;

    bgSquares = document.querySelectorAll('.square');
    
    for (let i = 0; i < bgSquares.length; i++){

        bgSquares[i].addEventListener("mouseover", function (e){

            // e.target.style.background = '';

            checkWhichGradient(bgSquares[i]);
            
        })
    }
}

function makeGrid (size) {
   
    grid.innerHTML = '';
    let squares = [];
    let rows = [];

    for (let i = 0; i < size; i++){
        squares[i] = [];
        rows.push(document.createElement('div'))
        rows[i].classList.add('rows-grid');

        for (let j = 0; j < size; j++){
            squares[i].push(document.createElement('div'));
            squares[i][j].classList.add('square');


        rows[i].appendChild(squares[i][j]);

        }
        grid.appendChild(rows[i]);
    }
    targetSquares('#ff00ff');
}

makeGrid(18);

slider.oninput = () => {
    sliderLabel.innerText = `Select size: ${slider.value}`;
    makeGrid(slider.value);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let randomColor = '#';

    for (let i = 0; i < 6; i++){
        randomColor += letters[Math.floor(Math.random() * 16)];
    }

    return randomColor;
}