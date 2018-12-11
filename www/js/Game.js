class Game extends Component{


    constructor(playerOne, playerTwo){
        super();
        this.players = [playerOne, playerTwo];
        this.board = new Board(this);
        this.turn = 0;
        this.discs = 42;
        this.gameOver = false;
        this.winner;
    }

    currentPlayer(){
      // Decides whos turn it is
      let playerTurn = (this.turn % 2);
      let currentPlayer = this.players[playerTurn];
      return currentPlayer;
    }

    // Get input of a slot object
    playTurn(slot){
      // Get player in turn
      current = currentPlayer();
      // Check with board if the move is valid
      validSlot = board.placeDisc(slot, current);
      // Was the move valid?
      if(validSlot){
        this.discs--;
        this.turn++;

        // Check with board if it was a winning move
        validatedTurn = board.validate(validSlot);

        if(validatedTurn === 'win'){
          // If move was a win
          this.gameOver = true;
          this.winner = current;
        }
      }

      if(this.discs === 0){
        // If no more discs
        this.gameOver = true;
      }
      this.render();
    }


}
