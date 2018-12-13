class Slot extends Component {


    constructor(board, row, col) {
        super();
        this.board = board;
        this.row = row;
        this.col = col;
        this.player = null;
        this.addEvents({
             'click div': 'slotClicked'
        });
    }

    slotClicked(e) {
        // e.stopPropagation();
        // if(this.player != null){
            if(FixEverything.game.game.currentPlayer() instanceof Bot){
            } else {
            this.board.game.playTurn(this);
            }
        // }
    }
}
