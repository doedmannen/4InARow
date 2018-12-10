class HighScorePage extends Component{

    // propably need some optimization - scores loads up each team user switches between top10/all
    constructor(){
        super();
        this.addRoute('/highscores', 'HighScores');
        // boolean for switching between only ten HighScores/All HighScores
        this.showOnlyTen = true;
        this.scores = [];
        this.updateScore();
        this.addEvents({
            // event for switching between all scores / top ten
            'click .switch-mode-btn' : 'switchMode'
        });
    }

    // Bubble Sort
    bubble(arr) {
        var len = arr.length;
        for (var i = 0; i < len - 1; i++) {
          for (var j = 0; j < len - i - 1; j++) {
  
            //comparing scores of two objects
            if (arr[j].score > arr[j + 1].score) {
              //if the first object has bigger score move it up in the array
              var temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
            }
          }
        }
        return arr;
      }

    // loading up json file, converting into an array, sorting and displaying it on the page
    async updateScore(){
        this.scores = await JSON._load('scores.json');
        this.bubble(this.scores);
        this.render();
    }

    // switching between all scores / top ten
    switchMode(){
        this.showOnlyTen = !this.showOnlyTen;
        this.updateScore();
    }


    // generating the HTML code for highscores
    getScoresUI(){
        let scoresUI = `<ul class="list-group">`;
        scoresUI += `<li class="list-group-item d-flex bg-secondary text-white">
                    <span class="flex-fill">#.</span> 
                    <span class="flex-fill text-center">Name</span>
                    <span class="flex-fill text-right">Score</span></
                    li> \n`;
        if(this.showOnlyTen && this.scores.length > 10){
            let i = 0;
            while( i < 10){
                scoresUI += `<li class="list-group-item d-flex ${i%2 === 0 ? `bg-light` : ``}">
                    <span class="flex-fill">${i+1}.</span> 
                    <span class="flex-fill text-center">${this.scores[i].name}</span>
                    <span class="flex-fill text-right"> ${this.scores[i].score}</span></
                    li> \n`;
                i++;    
            }
        }
        else{
            this.scores.forEach((el, i) => {
                scoresUI += `<li class="list-group-item d-flex ${i%2 === 0 ? `bg-light` : ``}">
                    <span class="flex-fill">${i+1}.</span> 
                    <span class="flex-fill text-center">${this.scores[i].name}</span>
                    <span class="flex-fill text-right"> ${this.scores[i].score}</span></
                    li> \n`;
            });
        }
        scoresUI += `</ul>`
        return scoresUI;
    }
}
