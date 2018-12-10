class Form extends Component{
    constructor(game){
        super();
        this.addEvents({
            'click .btn-start': 'readValues',
        });
        this.game = game;
        this.player1 = {};
        this.player2 = {};

    }

    validate(p1, p2){

        if(p1.name >= 20 || p1.name <= 2){
            console.log('p1 fel');
            return false;
        }
    
        if(p2.name >= 20 || p2.name <= 2){
            console.log('p1 fel');
            return false;
        }
    }

    readValues(){
        let p1 = {};
        let p2 = {};

        p1.name = this.baseEl.find('.name-player1').val();
        p2.name = this.baseEl.find('.name-player2').val();

        this.validate(p1,p2);
        //this.player1.type = this.baseEl.find('input[name="player1-type"]:checked').val();
        //this.player2.type = this.baseEl.find('input[name="player2-type"]:checked').val();

        //this.player1.type = document.querySelector('.form-player1 input[name="player1-type"]:checked').value;
        //this.player2.type = document.querySelector('.form-player2 input[name="player2-type"]:checked').value;


        // console.log(this.player1.name);
        // console.log(this.player1.type);

        // console.log(this.player2.name);
        // console.log(this.player2.type);

        
    }


}