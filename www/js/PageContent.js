class PageContent extends Component {

  constructor(){
    super();
    this.startPage = new StartPage();
    this.missingPage = new MissingPage();
    this.gamePage = new GamePage();
    this.highScorePage = new HighScorePage();
    this.rulePage = new RulePage();
    FixEverything.game = this.gamePage;
    FixEverything.highScorePage = this.highScorePage;
  }

}
