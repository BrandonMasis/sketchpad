// Create from 16x16 to 100x100 grids of square divs

const squaresContainer = document.querySelector('#squares-container');

function gridGenerator(size) {
  for (let i = 0; i < size; i++) {
    const squareRow = document.createElement('div');
    squareRow.className = 'square-row';

    for (let i = 0; i < size; i++) {
      const square = document.createElement('div');
      square.className = 'square';

      squareRow.appendChild(square);
    }

    squaresContainer.appendChild(squareRow);
  }
}
