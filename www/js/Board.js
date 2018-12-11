class Board extends Component {

    constructor() {
        super();
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
    columnClicked(col) {
        alert('You clicked column ' + col);
    }

    getPossibleMoves() {

    }

    slotClicked(col, row) {
        alert('You clicked column ' + col + ', row ' + row);
    }
}
