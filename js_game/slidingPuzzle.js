const container = document.getElementById('puzzle-container');
const shuffleBtn = document.getElementById('shuffle-btn');
const gridSize = 4; // 4x4 puzzle

let tiles = [];

// Initialize the grid
function initPuzzle() {
  tiles = [...Array(gridSize * gridSize).keys()];
  renderPuzzle();
}

// Render the puzzle
function renderPuzzle() {
  container.innerHTML = ''; // Clear previous grid
  tiles.forEach((tile, index) => {
    const div = document.createElement('div');
    div.classList.add('tile');
    if (tile === 0) {
      div.classList.add('empty'); // Mark empty tile
    } else {
      div.textContent = tile;
    }
    div.addEventListener('click', () => moveTile(index));
    container.appendChild(div);
  });
}

// Shuffle the grid
function shuffleTiles() {
  do {
    tiles = tiles.sort(() => Math.random() - 0.5);
  } while (!isSolvable(tiles) || isSolved()); // Ensure solvable & not solved
  renderPuzzle();
}

// Move a tile
function moveTile(index) {
  const emptyIndex = tiles.indexOf(0);
  const validMoves = [
    emptyIndex - gridSize, // Above
    emptyIndex + gridSize, // Below
    emptyIndex - 1,        // Left
    emptyIndex + 1,        // Right
  ];

  if (validMoves.includes(index) && isAdjacent(index, emptyIndex)) {
    [tiles[emptyIndex], tiles[index]] = [tiles[index], tiles[emptyIndex]]; // Swap tiles
    renderPuzzle();
    if (isSolved()) {
      setTimeout(() => alert('You solved the puzzle!'), 300);
    }
  }
}

// Check if the puzzle is solved
function isSolved() {
  return tiles.every((tile, index) => tile === (index + 1) % (gridSize * gridSize));
}

// Check if the puzzle is solvable
function isSolvable(tiles) {
  const inversions = tiles.reduce((acc, tile, i) => {
    if (tile === 0) return acc;
    return acc + tiles.slice(i + 1).filter(other => other !== 0 && tile > other).length;
  }, 0);

  const emptyRow = Math.floor(tiles.indexOf(0) / gridSize) + 1;
  return (gridSize % 2 === 1 && inversions % 2 === 0) || 
          (gridSize % 2 === 0 && (inversions + emptyRow) % 2 === 1);
}

// Check if two tiles are adjacent
function isAdjacent(index1, index2) {
  const row1 = Math.floor(index1 / gridSize);
  const col1 = index1 % gridSize;
  const row2 = Math.floor(index2 / gridSize);
  const col2 = index2 % gridSize;
  return Math.abs(row1 - row2) + Math.abs(col1 - col2) === 1;
}

// Event listeners
shuffleBtn.addEventListener('click', shuffleTiles);

// Initialize
initPuzzle();
