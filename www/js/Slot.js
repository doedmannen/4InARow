class Slot extends Component {


    constructor(board, row, col, player=null) {
        super();
        this.board = board;
        this.row = row;
        this.col = col;
        this.player = player;
        if(player !== null){
            this.color = player.color;
        }
        this.addEvents({
             'click div': 'slotClicked'
        });
    }

    slotClicked(e) {
        e.stopPropagation();
        if(this.player != null){
             this.board.slotClicked(this.col, this.row);
        }
    }
}   