function comparisonSquare(board, i, j, num) {
  for (let row = 0; row < 9; row +=1) {
    // координаты бокса
    const m = 3 * parseInt(i / 3) + parseInt(row / 3);
    const n = 3 * parseInt(j / 3) + (row % 3);
    if (board[i][row] == num || board[row][j] == num || board[m][n] == num) {
      return false;
    }
  }
  return true;
}

function isSolved(board) {
  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < board.length[row]; col += 1) {
      if (board[row][col] == '-') {
        return false;
      }
    }
  }
  return true;
}

module.exports = {
  comparisonSquare,
  isSolved
}
