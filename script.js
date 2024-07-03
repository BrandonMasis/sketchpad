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
  let currentOpacity = parseFloat(window.getComputedStyle(e.target).opacity);

  if (currentOpacity < 1) {
    currentOpacity += 0.1;
  }

  e.target.style.backgroundColor = `#68b0abff`;
  e.target.style.opacity = currentOpacity;
});

addGlobalEventListener('click', '#sizeSelector', (e) => {
  let size = prompt('Enter size');
  if (size >= 16 && size <= 100) {
    gridGenerator(size);
  } else {
    alert('Incorrect size, Minimun 16 | Maximun 100');
  }
});
