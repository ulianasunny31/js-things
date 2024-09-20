//Declarations
const restartBtn = document.querySelector('.restart.btn');
const cells = document.querySelectorAll('.game-cell');

//Functions
const winMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `The game has resulted in a DRAW`;
const currPlayerMessage = () => `The current player is ${currentPlayer}.`;

class TicTaeToe {
  constructor() {
    this.statusDisplay = document.querySelector('.game--status');
    this.gameActive = true;
    this.currentPlayer = 'X';
    this.gameState = ['', '', '', '', '', '', '', '', ''];
    this.init();
  }

  init() {
    this.updateStatus();
  }

  updateStatus() {
    this.statusDisplay.innerHTML = this.currentPlayerTurn();
  }

  handleCellPlayed() {}
  handlePlayerChange() {}
  handleResultValidation() {}
  handleCellClick(e) {}
  handleRestartGame() {}
}

//Listeners
restartBtn.addEventListener('click', handleRestart);
cells.forEach((cell) => {
  cell.addEventListener('click', handleCellClick);
});

let game = new TicTaeToe();
