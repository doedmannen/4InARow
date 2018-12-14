class NavItem extends Component {

  constructor(name, url){
    super();
    this.name = name;
    this.url = url;
    this.addEvents({
      'click .nav-link' : 'navFunctions'
    });
  }

  showMe(){
    if(this.name === 'Play Game'){
      if(FixEverything.game.game && !FixEverything.game.game.gameOver){
        if(window.location.pathname === "/gamepage"){
          return `Rage quit game`;
        }
        return `Continue playing`;
      }
    }
    return this.name;
  }

  navFunctions(){
    if(window.location.pathname === "/gamepage" && FixEverything.game.game){
      if(this.name === 'Play Game' && FixEverything.game.game.activePage){
        FixEverything.game.newGame();
      }
    }
  }

}
