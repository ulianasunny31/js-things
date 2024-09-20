class TicTacToe {
  constructor() {
    this.statusDisplay = document.querySelector('.game-status-title');
    this.restartBtn = document.querySelector('.restart-btn');
    this.cells = Array.from(document.querySelectorAll('.game-cell'));
    this.gameActive = true;
    this.currentPlayer = 'X';
    this.gameState = ['', '', '', '', '', '', '', '', ''];
    this.init();
    this.winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }

  //Small message methods
  winMessage = () => `Player ${this.currentPlayer} has won!`;
  drawMessage = () => `The game has resulted in a DRAW`;
  currPlayerMessage = () => `The current player is ${this.currentPlayer}.`;

  //Methods
  init() {
    this.updateStatus();
    this.listener();
  }

  updateStatus() {
    this.statusDisplay.innerHTML = this.currPlayerMessage();
  }

  handleCellPlayed(cell, index) {
    this.gameState[index] = this.currentPlayer;
    cell.innerHTML = this.currentPlayer;
  }

  handlePlayerChange() {
    // console.log('Current Player Changed:', this.currentPlayer);
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    this.updateStatus();
  }

  handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i < this.winningConditions.length; i++) {
      const winCondition = this.winningConditions[i];
      const a = this.gameState[winCondition[0]];
      const b = this.gameState[winCondition[1]];
      const c = this.gameState[winCondition[2]];

      console
        .log
        // `Checking win condition: ${winCondition}, Values: ${a}, ${b}, ${c}`
        ();
      if (a === '' || b === '' || c === '') continue;
      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }
    if (roundWon) {
      this.statusDisplay.innerHTML = this.winMessage();
      this.gameActive = false;
      return;
    }

    if (!this.gameState.includes('')) {
      this.statusDisplay.innerHTML = this.drawMessage();
      this.gameActive = false;
      return;
    }

    //no one won the game yet, and that there are still moves to be played
    this.handlePlayerChange();
  }

  handleCellClick = (e) => {
    const clickedCell = e.target;
    const cellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (!this.gameActive || this.gameState[cellIndex] !== '') {
      return;
    }

    this.handleCellPlayed(clickedCell, cellIndex);

    this.handleResultValidation();
  };

  handleRestartGame = () => {
    this.gameActive = true;
    this.currentPlayer = 'X';
    this.gameState = ['', '', '', '', '', '', '', '', ''];
    this.updateStatus();
    this.cells.forEach((cell) => (cell.innerHTML = ''));
  };

  //Listeners
  listener() {
    this.restartBtn.addEventListener('click', () => this.handleRestartGame());
    this.cells.forEach((cell) => {
      cell.addEventListener('click', (e) => this.handleCellClick(e));
    });
  }
}

//Starting the game
const game = new TicTacToe();
