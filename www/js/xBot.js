class Bot extends Player{

    constructor(player){
        super(player);
    }

    runMe(){
      if(FixEverything.game.game.currentPlayer() === this){
        FixEverything.game.game.playBot(this);
      }
      return '';
    }

    //returns a valid move
    getMove(){
        let move = this.getValidMoves();
        return move[this.getRandom(move)];
    }

    getRandom(validMoves){
        return Math.floor(Math.random() * validMoves.length);
    }

    //returns array with possible valid moves
    getValidMoves(){
        let validMoves = [];
        for(let col = 0; col < this.game.board.gameBoard.length; col++){
            if(this.game.board.gameBoard[col][5].player === null){
                validMoves.push(col);
            }
        }
        return validMoves;
    }

}
