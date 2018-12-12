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
        if (this.checkHorizontal(slot)) {
            return true;
        }
    }


    checkHorizontal(slot) {
        let slotCol = slot.col;
        let slotRow = slot.row;
        let slotsConnected = 0;
        // check horizontal
        for (let j = 0; j <= 4; j++) {
            slotsConnected = 0;
            for (let i = -4; i < 0; i++) {
                let currCord = i + j;
                if (slotCol + currCord < this.gameBoard.length && slotCol + currCord >= 0) {
                    if (this.gameBoard[slotCol + currCord][slotRow].player === this.gameBoard[slotCol][slotRow].player) {
                        slotsConnected++;
                        if (slotsConnected === 4) {
                            //console.log för att testa
                            console.log(slot.player.name + " won!");
                            return true;
                        }
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
