// Create from 16x16 to 100x100 grids of square divs

const squaresContainer = document.querySelector('#squares-container');

gridGenerator(16);

function gridGenerator(size) {
  squaresContainer.innerHTML = '';

  for (let a = 0; a < size; a++) {
    const squareRow = document.createElement('div');
    squareRow.className = 'square-row';

    for (let b = 0; b < size; b++) {
      const square = document.createElement('div');
      square.className = 'square';

      squareRow.appendChild(square);
    }

    squaresContainer.appendChild(squareRow);
  }
}

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

addGlobalEventListener('mouseover', '.square', (e) => {
  e.target.style.backgroundColor = '#68b0abff';
});
