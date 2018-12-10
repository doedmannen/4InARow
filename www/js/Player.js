class Player extends Component{


    // gameboard comes in with player 
    constructor(player){
        super();
        Object.assign(this, player); 
    }



    // should only work for bots
    getMove(){
        if(this.type === 'bot'){

            // Return some move
            /*
            let possibleMoves = gameboard.getPossibleMoves(); // Returns Arrays?

            let choice = Math.floor(Math.random() * possibleMoves.length);

            return possibleMoves(possibleMoves(choice));
            */



        }if(this.type === 'smartBot'){

            //return some better move

        }
        else{
            return false;
        }
    }
}
