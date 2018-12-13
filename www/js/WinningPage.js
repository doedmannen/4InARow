class WinningPage extends Component{


    // if winningPlayer is null then its a draw
    constructor(gamePage, winningPlayer=null){
        super();
        this.gamePage = gamePage;
        this.winningPlayer = winningPlayer;
        this.addEvents({
            'click .rematch-btn' : 'rematch',
            'click .new-game-btn' : 'newGame',
        });
        FixEverything.navbar.render();
    }

    getText(){
        if(this.winningPlayer === null){
            return `It's a draw!`
        }else{
            return `Congrats <span class="text-primary">${this.winningPlayer.name}</span>. You only needed ${21 - this.winningPlayer.discs} discs to win. Wanna see highscore list?`
        }
    }

    rematch(){
        this.gamePage.rematch();
    }

    newGame(){
        this.gamePage.newGame();
    }
}
