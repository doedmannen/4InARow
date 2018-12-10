class Board extends Component {

    constructor() {
        super();
        this.gameBoard = [];
        this.buildBoard();
    }

    buildBoard() {
        for (let row = 0; row < 6; row++) {
            let rowArr = [];
            for (let col = 0; col < 7; col++) {
                rowArr.push(new Slot(this, row, col, {color:"red"}));
            }
            this.gameBoard.push(rowArr);
        }
    }
    columnClicked(col) {
        alert('You clicked column ' + col);
    }

    getPossibleMoves(){

    }
}
