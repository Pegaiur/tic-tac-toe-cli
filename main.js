const log = require('single-line-log').stdout;

process.stdin.resume();
process.stdin.setEncoding('utf8');

let board = [0,1,2,3,4,5,6,7,8];
let turns = 1;

log(`
[${board[0]},${board[1]},${board[2]}]
[${board[3]},${board[4]},${board[5]}]
[${board[6]},${board[7]},${board[8]}]
`);

process.stdin.on('data', function (text) {
  if (turns % 2 === 0) {
    board[text[0]] = 'O';
  } else {
    board[text[0]] = 'X';
  }
  turns++;
  log(`
  [${board[0]},${board[1]},${board[2]}]
  [${board[3]},${board[4]},${board[5]}]
  [${board[6]},${board[7]},${board[8]}]
  `);
});


