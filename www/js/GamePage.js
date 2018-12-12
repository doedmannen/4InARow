class GamePage extends Component{
    constructor(){
        super();
        this.addRoute('/gamepage', 'Play');
        this.form = new Form(this);
        this.winningPage;
        
        // Test uncomment this if you want to test winningPage
        // this.winningPage = new WinningPage(this, {name: 'Jesus Christ Son Of God', turns: 13});
    }

    rematch(){
      let player1 = this.game.players[0];
      let player2 = this.game.players[1];
      this.game = new Game(new Player(player1), new Player(player2), this);
      this.winningPage = undefined;
      this.render();
      FixEverything.navbar.render();
    }
    
    newGame(){
      this.game = undefined;
      this.form = new Form(this);
      this.winningPage = undefined;
      this.render();
      FixEverything.navbar.render();
    }

    // takes an object with name and score property
    async saveScore(score){
        let scores = await JSON._load('scores.json');
        scores.push(score);
        JSON._save('scores.json', scores).then(()=>{
            console.log('Saved');
        })
    }

    unmount(){
      if(this.game){
        this.game.activePage = false;
      }
    }

}
