let table = document.querySelector('.table1');
// let puzzle = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
let button = document.querySelector('.button2');
const newArr = [
'1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--',
'--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3',
'29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9',
'-8--2-----4-5--32--2-3-9-466---9---4---64-5-1134-5-7--36---4--24-723-6-----7--45-',
'6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--',
'---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----',
'-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--',
'-96-4---11---6---45-481-39---795--43-3--8----4-5-23-18-1-63--59-59-7-83---359---7',
'----754----------8-8-19----3----1-6--------34----6817-2-4---6-39------2-53-2-----',
'3---------5-7-3--8----28-7-7------43-----------39-41-54--3--8--1---4----968---2--',
'3-26-9--55--73----------9-----94----------1-9----57-6---85----6--------3-19-82-4-',
'-2-5----48-5--------48-9-2------5-73-9-----6-25-9------3-6-18--------4-71----4-9-',
'--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--',
'----------2-65-------18--4--9----6-4-3---57-------------------73------9----------',
'---------------------------------------------------------------------------------',
]


function fillStart(table, puzzle) {
  let arrayCeils = table.querySelectorAll('td');
  for (let i = 0; i < puzzle.length; i += 1) {
    arrayCeils[i].innerText = puzzle[i];
  }
  // console.log(arrayCeils);
}

function solve(puzzle) {
  let board = stringToArr(puzzle);
  solveSolve(board);
  let pretty = '';
  for (let i = 0; i < board.length; i += 1) {
    let string = board[i].join('');
    pretty = pretty + string;
  }
  return pretty;
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

function comparisonSquare(board, i, j, num) {
  for (let row = 0; row < 9; row += 1) {
    // координаты бокса
    const m = 3 * parseInt(i / 3) + parseInt(row / 3);
    const n = 3 * parseInt(j / 3) + (row % 3);
    if (board[i][row] == num || board[row][j] == num || board[m][n] == num) {
      return false;
    }
  }
  return true;
}

function stringToArr(string) {

  let b = string.split("");
  // console.log(b);
  const arr = [];
  for (i = 0; i < b.length; i += 9) {
    arr.push(b.slice(i, i + 9));

  }
  return arr;
}

document.getElementById('vars').addEventListener('change', () => {
  console.log(3443);
 const changedPuzzle = newArr[document.getElementById("vars").options.selectedIndex];

  fillStart(table, changedPuzzle);
})









puzzle = newArr[document.getElementById('vars').options.selectedIndex];

fillStart(table, puzzle);

button.addEventListener('click', () => {
  puzzle = newArr[document.getElementById('vars').options.selectedIndex];
  let result = solve(puzzle);
  let table2 = document.querySelector('.table2');
  fillStart(table2, result);
})

