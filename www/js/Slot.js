class Slot extends Component {


    constructor(board, row, col, player) {
        super();
        this.board = board;
        this.row = row;
        this.col = col;
        this.player = player;
        this.color = player.color;
        this.addEvents({
             'click div': 'slotClicked'
        });
    }

    slotClicked(e) {
        e.stopPropagation();
        if(this.player != null){
            this.board.slotClicked(this.col);
        }
    }
}   