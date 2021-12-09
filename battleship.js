

// board dimensions
let boardWidth = 10;
let boardHeight = 10;

let humanShips = [];
let compShips = [];

function randomLocation() {
    let x = Math.round(Math.random() * boardWidth);
    let y = Math.round(Math.random() * boardHeight);
    return { x:x,y:y }
}

// Computer Ships
for(let i = 0; i < 5; i+=1) {
    let point = randomLocation()
    compShips.push(point)
}

// Player Ships
for(let i = 0; i < 5; i+=1) {
    let point = randomLocation()
    humanShips.push(point)
}

function initGrid() {
    for(let i = 0; i < boardHeight; i+=1) {
        let rowElement = document.createElement("div")
        rowElement.classList.add("row")
        let gridElement = document.getElementById("human-grid")
        gridElement.appendChild(rowElement)
        
        for(let i = 0; i < boardHeight; i+=1) {
            let square = document.createElement("div")
            square.classList.add("square")
            rowElement.appendChild(square)
        }

    }
}

initGrid();
console.log(compShips);
console.log(humanShips);