class Bot extends Player{

    constructor(player){
        super();  
        Object.assign(this, player);
    }

    //returns a valid move 
    getMove(){
        let move = this.getValidMoves();        
        return move[this.getRandom(move)];
    }

    getRandom(validMoves){
        let randomOfValidMoves = Math.floor(Math.random() * validMoves.length);
        return randomOfValidMoves;
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