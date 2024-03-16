const grid = document.querySelector('.sketch-grid')

// const sq1 = document.createElement('div');
// // const sq2 = document.createElement('div');
// // const sq3 = document.createElement('div');

// sq1.addEventListener("mouseover", function (e){
//     e.target.style.background = "blue";
// })

// sq1.addEventListener("mouseleave", function (e){
//     e.target.style.background = "red";
// })


// sq1.classList.add('square');
// sq2.classList.add('square');
// sq3.classList.add('square');

// grid.appendChild(sq1);
// grid.appendChild(sq2);
// grid.appendChild(sq3);

let sizePrev; 
let hasPlayed = false;

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

            
            squares[i][j].addEventListener("mouseover", function (e){
                e.target.style.background = "blue";
            })


        // squares[i][j].addEventListener("mouse", function (e){
        //     e.target.style.background = "red";
        // })

        rows[i].appendChild(squares[i][j]);

        }
        grid.appendChild(rows[i]);
    }
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



