class NavBar extends Component {

  constructor(){
    super();
    this.navItems = [
      new NavItem('Start', '/'),
      new NavItem('HighScores', '/highscores'),
      new NavItem('Rules', '/rules')
    ];
  }

}
