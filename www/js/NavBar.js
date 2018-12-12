class NavBar extends Component {

  constructor(){
    super();
    this.navItems = [
      new NavItem('Start', '/'),
      new NavItem('Play Game', '/gamepage'),
      new NavItem('HighScores', '/highscores'),
      new NavItem('Rules', '/rules')
    ];
    this.addEvents({
      'click .navbar-nav' : 'render'
    });
  }

}
