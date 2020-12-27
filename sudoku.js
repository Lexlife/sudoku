const { stringToArr } = require('./stringToArr');
const { comparisonSquare, isSolved } = require('./comparisonSquare')

function solve(puzzle) {
  let board = stringToArr(puzzle);
  return solveSolve(board);

}
function solveSolve(board) {
  for (let i = 0; i < board.length; i += 1) {
    for (let def = 0; def < board[i].length; def += 1) {
      if (board[i][def] == '-') {
        for (let k = 1; k <= 9; k += 1) {
          if (comparisonSquare(board, i, def, k)) {
            board[i][def] = String(k);
            if (solveSolve(board)) {
              return board;
            } else {
              board[i][def] = '-';
            }
          }          
        }
        return false;
      }
    }
  }
  return board;
}   
function prettyBoard(board) {
  let pretty = '';
  for (let i = 0; i < board.length; i += 1) {
    let string = board[i].join('     ');
    pretty = pretty + string + '\n'+'\n'; 
  }
  return pretty;
}

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
