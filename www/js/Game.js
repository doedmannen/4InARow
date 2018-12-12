class Game extends Component{


    constructor(playerOne, playerTwo, game){
        super();
        this.game = game;
        this.players = [playerOne, playerTwo];
        this.players[0].game = this;
        this.players[1].game = this;
        this.board = new Board(this);
        this.turn = 0;
        this.gameOver = false;
        this.winner;
        this.activePage;
        this.addEvents({
          'click .btn-resetGame':'resetGame'
        });
    }

    currentPlayer(){
      this.activePage = !this.gameOver; // Need to know if game is active
      // Decides whos turn it is
      let playerTurn = (this.turn % 2);
      let currentPlayer = this.players[playerTurn];
      if(currentPlayer instanceof Bot){
        let slot = currentPlayer.getMove();
        this.botPlayer(slot, currentPlayer);
      }
      return currentPlayer;
    }

    botPlayer(slot, current){
      let validSlot = this.board.placeDisc(slot, current);
      if(validSlot){
        current.discs--;
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

      if((this.players[0].discs + this.players[1].discs) === 0){
        // If no more discs
        this.gameOver = true;
        this.game.winningPage = new WinningPage(this.game);
        this.game.render();
      }
    }

    
    
    // Get input of a slot object
    playTurn(slot){
      // Get player in turn
      let current = this.currentPlayer();
      // Check with board if the move is valid
      let validSlot = this.board.placeDisc(slot.col, current);
      // Was the move valid?
      if(validSlot){
        current.discs--;
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

      if((this.players[0].discs + this.players[1].discs) === 0){
        // If no more discs
        this.gameOver = true;
        this.game.winningPage = new WinningPage(this.game);
        this.game.render();
      }
    }

    resetGame(){
      this.game.rematch();
    }


}
