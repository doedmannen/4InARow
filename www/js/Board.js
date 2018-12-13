class Board extends Component {

    constructor(game) {
        super();
        this.game = game;
        this.gameBoard = [];
        this.buildBoard();
        this.addEvents({
            'click .column-0': 'column0Clicked',
            'click .column-1': 'column1Clicked',
            'click .column-2': 'column2Clicked',
            'click .column-3': 'column3Clicked',
            'click .column-4': 'column4Clicked',
            'click .column-5': 'column5Clicked',
            'click .column-6': 'column6Clicked'
        });
    }

    column0Clicked() {
        console.log('clicked')
        if (FixEverything.game.game.currentPlayer() instanceof Bot) {
        } else {
            this.game.playTurn(this.gameBoard[0][0]);
        }
    }

    column1Clicked() {
        console.log('clicked')
        if (FixEverything.game.game.currentPlayer() instanceof Bot) {
        } else {
            this.game.playTurn(this.gameBoard[1][0]);
        }
    }
    
    column2Clicked() {
        console.log('clicked')
        if (FixEverything.game.game.currentPlayer() instanceof Bot) {
        } else {
            this.game.playTurn(this.gameBoard[2][0]);
        }
    }

    column3Clicked() {
        console.log('clicked')
        if (FixEverything.game.game.currentPlayer() instanceof Bot) {
        } else {
            this.game.playTurn(this.gameBoard[3][0]);
        }
    }

    column4Clicked() {
        console.log('clicked')
        if (FixEverything.game.game.currentPlayer() instanceof Bot) {
        } else {
            this.game.playTurn(this.gameBoard[4][0]);
        }
    }

    column5Clicked() {
        console.log('clicked')
        if (FixEverything.game.game.currentPlayer() instanceof Bot) {
        } else {
            this.game.playTurn(this.gameBoard[5][0]);
        }
    }

    column6Clicked() {
        console.log('clicked')
        if (FixEverything.game.game.currentPlayer() instanceof Bot) {
        } else {
            this.game.playTurn(this.gameBoard[6][0]);
        }
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
        if (!this.game.gameOver) {
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