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


    // check if for the wining move
    validate(slot) {
        // Har satt tillfällig direktretur för att testa
        this.checkVertical(slot);
        if (this.checkHorizontal(slot)) {
            return true;
        }
    }


    checkHorizontal(slot) {
        let slotsConnected = 0;
        for (let j = 0; j <= 4; j++) {
            slotsConnected = 0;
            for (let i = -4; i < 0; i++) {
                let currCord = slot.col + i + j;
                if (currCord < this.gameBoard.length && currCord >= 0) {
                    if (this.gameBoard[currCord][slot.row].player === this.gameBoard[slot.col][slot.row].player) {
                        slotsConnected++;
                        if (slotsConnected === 4) {
                            // Om det är fyra i rad
                            return true;
                        }
                    }
                }
            }
        }
    }

    checkVertical(slot) {
        let slotsConnected = 0;
        for (let i = 0; i < 4; i++) {
            if (slot.row - i >= 0) {
                if (this.gameBoard[slot.col][slot.row - i].player === this.gameBoard[slot.col][slot.row].player) {
                    slotsConnected++;
                    if (slotsConnected === 4) {
                        // Om det är fyra i rad
                        return true;
                    }
                }
            }
        }
    }

    // slotClicked(col, row) {
    //     this.placeDisc(col, this.game.players[0]);
    // }

    // placing discs the board
    placeDisc(col, player) {
        for (let i = 0; i < this.gameBoard[col].length; i++) {
            if (!this.gameBoard[col][i].player) {
                this.gameBoard[col][i].player = player;
                // this.gameBoard[col][i].render();
                return this.gameBoard[col][i];
            }
        }
        return false;
    }
}
