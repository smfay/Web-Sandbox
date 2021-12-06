

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

for(let i = 0; i < 5; i+=1) {
    let point = randomLocation()
    compShips.push(point)
}

console.log(compShips);