let gridSize = 16;

function generateBoard() {
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
        div.addEventListener('mouseenter', drawing)
        return div;
    });
}

generateBoard();

function drawing(div) {
    div.target.style = 'background-color : #999'
}