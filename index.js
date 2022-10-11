const defaultColor = '#333';
let currentColor;

function generateBoard(gridSize) {
    const drawingBoard = document.querySelector('#drawingBoard');
    for(let i = 1; i <= gridSize; i++) {
        const row = document.createElement('div');
        for(let j = 1; j <= gridSize; j++) {
            const element = document.createElement('div');
            element.classList = ('element');
            row.appendChild(element);
        }
        row.classList = ('row');
        drawingBoard.appendChild(row);
    }
    const divs = document.querySelectorAll('.element');
    divs.forEach(div => {
        div.addEventListener('mouseenter', drawing);
    });
}
generateBoard(16);


let randClicked;
const randomColor = document.querySelector('#randomColor');
randomColor.addEventListener('click', () => {
    return randClicked = true;
});

const black = document.querySelector('#black');
black.addEventListener('click', () => {
    return randClicked = false;
});

    
function drawing(event) {
    if(event.buttons === 0) {
        return;
    } else {
        if(randClicked) {
            currentColor = generateRandomColor();
            event.target.style = `background-color : ${currentColor}`;
        } else if(!randClicked) {
            currentColor = defaultColor;
            event.target.style = `background-color : ${currentColor}`;
        }
    }
}

const customGrid = document.querySelector('#customGrid');
customGrid.addEventListener('click', changeGridSize);

function changeGridSize() {
    const drawingBoard = document.querySelector('#drawingBoard');
    while(drawingBoard.firstChild) {
        drawingBoard.removeChild(drawingBoard.firstChild);
    }
    let customSize = prompt('Please choose a number between 16 and 100 for your drawing board size.');
    console.log(customSize)
    if(customSize >= 16 && customSize <= 100) {
        generateBoard(customSize); 
    } else if(!customSize) {
        generateBoard(16);
    } else {
        customSize = prompt('Make sure you choose a number between 16 and 100 for your drawing board size');
    }
}

const generateRandomColor = function() {
    return 'hsl(' + Math.floor((Math.random() * 360)) + ', 80%, 60%)';
}