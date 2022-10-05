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
        return div;
    });
}

generateBoard(16);

function drawing(div) {
    div.target.style = 'background-color : #999';
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