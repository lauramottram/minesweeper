// dynamically generate player boards
const generatePlayerBoard = (numberofRows, numberofColumns) => {
  let board = []; // represents overall game board
  for (let rowIndex = 0; rowIndex < numberofRows; rowIndex ++) {
    let row = []; // represents single row to add to game board
    for (let columnIndex = 0; columnIndex < numberofColumns; columnIndex ++) {
      row.push(' ');
    } board.push (row);
  } return board;
};

// dynamically generate bomb boards
const generateBombBoard = (numberofRows, numberofColumns, numberofBombs) => {
  let board = []; // represents overall game board
  for (let rowIndex = 0; rowIndex < numberofRows; rowIndex ++) {
    let row = []; // represents single row to add to game board
    for (let columnIndex = 0; columnIndex < numberofColumns; columnIndex ++) {
      row.push(null);
    } board.push (row);
  }

let numberofBombsPlaced = 0;
    while (numberofBombsPlaced < numberofBombs) {
      let randomRowIndex = Math.floor(Math.random() * numberofRows);
      let randomColumnIndex = Math.floor(Math.random() * numberofColumns);
      if (board[randomRowIndex] && [randomColumnIndex] !== 'B') {
        board[randomRowIndex][randomColumnIndex]='B';
        numberofBombsPlaced++;
      }
    }
  return board;
};

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3,4);

let bombBoard = generateBombBoard(3,4,5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);

getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  const neighborOffsets = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [1, 1],
    [0, 1],
    [1, -1],
    [1, 0],
  ];
  const numberOfRows = bombBoard.length;
  const numberofColumns = bombBoard[0].length;
  let numberofBombs = 0;
  neighborOffsets.forEach(offset => {
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1];
    if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberofColumns) {
      if (bombBoard[neighborRowIndex[0]] == 'B') {
        bombBoard++;
      }
    }
  });
  return numberofBombs;
};

const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
  if (playerBoard[rowIndex][columnIndex] !== ' ') {
    console.log('This tile has already been flipped!');
    return;
  } else if
    (bombBoard[rowIndex][columnIndex] !== 'B') {
      playerBoard[rowIndex][columnIndex] === 'B';
      return
    } else
    playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
};

flipTile(playerBoard, bombBoard, 1, 2);
console.log('Updated Player Board: ');
printBoard(playerBoard);
