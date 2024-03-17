const grid = document.querySelector('.sketch-grid')

let selectedColor = document.querySelector('.color-picker');

selectedColor.addEventListener("input", () => {
    targetSquares(selectedColor.value);

    colorButton.style.background = selectedColor.value;

})

const backgroundColor = document.querySelector('.background-color-picker');

backgroundColor.addEventListener("input", () => {
    
    bgSquares = document.querySelectorAll('.square');

    for (let i = 0; i < bgSquares.length; i++){
        bgSquares[i].style.background = backgroundColor.value;
    }

    eraser.style.background = backgroundColor.value;

})

const eraser = document.querySelector('.eraser');


const colorButton = document.querySelector('.color-button')


function targetSquares (color) {

    bgSquares = document.querySelectorAll('.square');
    
    for (let i = 0; i < bgSquares.length; i++){
        bgSquares[i].addEventListener("mouseover", function (e){
            e.target.style.background = color;
    })
    }
}

function targetRandomSquares () {
    bgSquares = document.querySelectorAll('.square');
    
    for (let i = 0; i < bgSquares.length; i++){
        bgSquares[i].addEventListener("mouseover", function (e){
            e.target.style.background = getRandomColor();
    })
    }
}

// function targetGradientSquares () {
//     bgSquares = document.querySelectorAll('.square');
    
//     for (let i = 0; i < bgSquares.length; i++){
//         bgSquares[i].addEventListener("mouseover", function (e){
//             e.target.style.opacity -= 0.3;
//     })
//     }
// }
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

let size;

document.querySelector('.select-size-button').addEventListener("click", () => {
    do {
        size = prompt('Select dimensions of grid (< 100');
    }
    while (size > 100);

    makeGrid(size);
})


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let randomColor = '#';
    for (let i = 0; i < 6; i++){
        randomColor += letters[Math.floor(Math.random() * 16)];
    }
    return randomColor;
}