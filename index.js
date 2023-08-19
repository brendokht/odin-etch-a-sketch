const square = document.querySelector('.square');

for(var i = 0; i < 16; ++i) {
    const row = document.createElement('div');
    row.classList.add('row');
    for(var j = 0; j < 16; ++j) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        row.appendChild(pixel);
    }
    square.appendChild(row);
}

const pixels = document.querySelectorAll('.pixel');

pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', (e) => {
        pixel.classList.add('toggled');
    });
})