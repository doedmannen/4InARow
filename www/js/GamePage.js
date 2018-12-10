class GamePage extends Component{
    constructor(){
        super();
        this.addRoute('/gamepage', 'Play');
        this.form = new Form(this);
        this.board = new Board();
    }


    // takes an object with name and score variable
    async saveScore(score){
        let scores = await JSON._load('scores.json');
        scores.push(score);
        JSON._save('scores.json', scores).then(()=>{
            console.log('Saved');
        })
    }

}