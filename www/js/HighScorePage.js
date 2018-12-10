class HighScorePage extends Component{


    constructor(){
        super();
        this.addRoute('/highscores', 'HighScores');
        // boolean for switching between only ten HighScores/All HighScores
        let showOnlyTen = false;
        this.scores = [];
        this.updateScore();
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


    // generating the HTML code for highscores
    getScoresUI(){
        let scoresUI = ``;
        this.scores.forEach(el => {
            scoresUI += `<p>${el.name} - ${el.score}</p> \n`;
        });

        return scoresUI;
    }
}
