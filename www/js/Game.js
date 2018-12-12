class Game extends Component{


    constructor(playerOne, playerTwo, game){
        super();
        this.game = game;
        this.players = [playerOne, playerTwo];
        this.players[0].game = this;
        this.players[1].game = this;
        this.board = new Board(this);
        this.turn = 0;
        this.discs = 42;
        this.gameOver = false;
        this.winner;
        this.activePage;
    }

    currentPlayer(){
      this.activePage = !this.gameOver; // Need to know if game is active
      // Decides whos turn it is
      let playerTurn = (this.turn % 2);
      let currentPlayer = this.players[playerTurn];
      return currentPlayer;
    }

    // Get input of a slot object
    playTurn(slot){
      // Get player in turn
      let current = this.currentPlayer();

      // Check with board if the move is valid
      let validSlot = this.board.placeDisc(slot.col, current);
      // Was the move valid?
      if(validSlot){
        this.discs--;
        this.turn++;
        validSlot.render();
        this.players[0].render();
        this.players[1].render();

        // Check with board if it was a winning move
        let validatedTurn = this.board.validate(validSlot);

        if(validatedTurn){
          // If move was a win
          this.gameOver = true;
          this.winner = current;
          this.game.winningPage = new WinningPage(this.game, winner);
          this.render();
        }
      }

      if(this.discs === 0){
        // If no more discs
        this.gameOver = true;
        this.game.winningPage = new WinningPage(this.game);
        this.game.render();
      }
    }


}
