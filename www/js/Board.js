class Board extends Component {

    constructor(game) {
        super();
        this.game = game;
        this.gameBoard = [];
        this.buildBoard();
    }

    buildBoard() {
        for (let col = 0; col < 7; col++) {
            let colArr = [];
            for (let row = 0; row < 6; row++) {
                colArr.push(new Slot(this, row, col));
            }
            this.gameBoard.push(colArr);
        }
    }

    // placing discs the board
    placeDisc(col, player) {
        if(!this.game.gameOver){
            for (let i = 0; i < this.gameBoard[col].length; i++) {
                if (!this.gameBoard[col][i].player) {
                    this.gameBoard[col][i].player = player;
                    // this.gameBoard[col][i].render();
                    return this.gameBoard[col][i];
                }
            }
        }
        return false;
    }
}