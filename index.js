const width = 600;
const height = 600;
let squareSize = 16;

// Create square based on given variables
function changeSquareSize(size) {
    const square = document.querySelector('.square');
    
    for(var i = 0; i < size; ++i) {
        const row = document.createElement('div');
        row.classList.add('row');
        for(var j = 0; j < size; ++j) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.style.width = `${width/size}px`;
            pixel.style.height = `${height/size}px`;
            pixel.addEventListener('mouseover', (e) => {
                pixel.classList.add('toggled');
            });
            row.appendChild(pixel);
        }
        square.appendChild(row);
    }
}

// Add event listener for button to change size
const sizeBtn = document.querySelector('.button');
sizeBtn.addEventListener('click', (e) => {
    let newSquareSize = null;
    let valid = false;
    let promptMsg = 'Choose a size for the square between 16x16 and 128x128'
    while(!valid) {
        newSquareSize = prompt(promptMsg);

        if((newSquareSize = Math.floor(parseInt(newSquareSize)))) {
            if(newSquareSize < 16 || newSquareSize > 128) {
                promptMsg = 'Square size invalid please make sure it is between 16 and 128'
                valid = false;
            }
            else {
                valid = true;
            }
        }
        else {
           promptMsg = 'Please choose an integer between 16 and 128'
            valid = false; 
        }
    }
    
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        row.remove();
    });
    changeSquareSize(newSquareSize);
});

changeSquareSize(squareSize);