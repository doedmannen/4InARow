class Player extends Component{


    // gameboard comes in with player
    constructor(player){
        super();
        Object.assign(this, player);
        this.discs = 21;
        this.animation = '';
    }

    runMe(){
      return '';
    }

    // should only work for bots
    getMove(){
        if(this.type === 'bot'){

        }if(this.type === 'smartBot'){

            //return some better move

        }
        else{
            return false;
        }
    }
}
