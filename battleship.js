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
    compShips.push(String(point));
}

function initGrid() {
    for(let y = 0; y < boardHeight; y+=1) {
        let rowElement = document.createElement("div")
        rowElement.classList.add("row")
        let gridElement = document.getElementById("human-grid")
        gridElement.appendChild(rowElement)
        
        for(let x = 0; x < boardHeight; x+=1) {
            let square = document.createElement("div")
            square.classList.add("square")
            square.setAttribute("x", x)
            square.setAttribute("y", y)
            square.addEventListener("click", handleSelect)
            rowElement.appendChild(square)
        }

    }
}

function handleSelect(event) {
    console.log(event);
    let x = event.target.getAttribute("x")
    let y = event.target.getAttribute("y")
    let point = { x: x, y: y }
    event.target.removeEventListener("click", handleSelect)


    humanShips.push(point);
    console.log(x,y,humanShips);
    event.srcElement.classList.add("occupied")
}

initGrid();
console.log(compShips);
console.log(humanShips);