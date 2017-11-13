const log = require('single-line-log').stdout;

process.stdin.resume();
process.stdin.setEncoding('utf8');

let board = [0,1,2,3,4,5,6,7,8];
let turns = 1;

log(`
[${board[0]},${board[1]},${board[2]}]
[${board[3]},${board[4]},${board[5]}]
[${board[6]},${board[7]},${board[8]}]
O turn: `);

process.stdin.on('data', function (text) {
  let win = false;
  if (turns % 2 === 0) {
    board[text[0]] = 'X';
  } else {
    board[text[0]] = 'O';
  }
  log(`
  [${board[0]},${board[1]},${board[2]}]
  [${board[3]},${board[4]},${board[5]}]
  [${board[6]},${board[7]},${board[8]}]
  ${turns % 2 === 0 ? 'X turn: ' : 'O turn: '}`);
  if (board[0] === board[4] && board[4] === board[8]) {
    win = true;
  }
  if (board[2] === board[4] && board[4] === board[6]) {
    win = true;
  }
  for (let i = 0; i < 7; i += 3) {
    if (board[i] === board[i + 1] && board[i + 1] === board[i + 2]) {
      win = true;
    }
  }
  for (let i = 0; i < 3; i ++) {
    if (board[i] === board[i + 3] && board[i + 3] === board[i + 6]) {
      win = true;
    }
  }
  if (turns % 2 === 0 && win) {
    console.log('X win');
    process.exit();
  } else if (win) {
    console.log('O win');
    process.exit();
  }
  turns++;
});


