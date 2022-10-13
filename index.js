const defaultColor = '#ffffff00';
const black = '#333';
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

let colorClicked;
const colorPick = document.querySelector('#colorPick');
const colorButton = document.querySelector('#colorButton');
colorButton.addEventListener('click', () => {
    turnButtonFalse();
    colorClicked = true;
    colorButton.classList.add('selected');
    return colorClicked;
})

let randClicked;
const randomColor = document.querySelector('#randomColor');
randomColor.addEventListener('click', () => {
    turnButtonFalse();
    randClicked = true;
    randomColor.classList.add('selected');
    return randClicked;
});

let blackClicked = true;
const blackButton = document.querySelector('#black');
blackButton.addEventListener('click', () => {
    turnButtonFalse();
    blackClicked = true;
    blackButton.classList.add('selected');
    return blackClicked;
});

let eraseClicked;
const eraser = document.querySelector('#eraser');
eraser.addEventListener('click', () => {
    turnButtonFalse();
    eraseClicked = true;
    eraser.classList.add('selected');
    return eraseClicked;
})

function turnButtonFalse() {
    colorClicked = randClicked = blackClicked = eraseClicked = false;
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.remove('selected');
    })
    return [colorClicked,randClicked,blackClicked,eraseClicked];
}

function drawing(event) {
    if(event.buttons === 0) {
        return;
    } else {
        if (colorClicked) {
            currentColor = colorPick.value;
            event.target.style = `background-color : ${currentColor}`;
        } else if(randClicked) {
            currentColor = generateRandomColor();
            event.target.style = `background-color : ${currentColor}`;
        } else if(blackClicked) {
            currentColor = '#333333';
            event.target.style = `background-color : ${currentColor}`;
        } else if(eraseClicked) {
            currentColor = defaultColor;
            event.target.style = `background-color : ${currentColor}`;
        }
    }
}


const generateRandomColor = function() {
    return 'hsl(' + Math.floor((Math.random() * 360)) + ', 80%, 60%)';
}


const clear = document.querySelector('#clear').addEventListener('click', clearBoard);

function clearBoard() {
    const elements = document.querySelectorAll('.element');
    elements.forEach(element => {
        element.style.backgroundColor = defaultColor;
    })
}


const slider = document.querySelector('#slider');
let sizeValue = document.querySelector('#gridValue');
let gridValue = slider.value;
sizeValue.innerText = `${gridValue} x ${gridValue}`;

slider.oninput = function changeGridValue() {
    gridValue = slider.value;
    sizeValue.innerText = `${gridValue} x ${gridValue}`;
    const drawingBoard = document.querySelector('#drawingBoard');
    while(drawingBoard.firstChild) {
        drawingBoard.removeChild(drawingBoard.firstChild);
    }
    generateBoard(gridValue);
}