class OnlineGame{

  static async rectreateGame(gamePage){

  }

  static async onlineUpdate(game){
    setInterval(async () => {
      let game = await JSON._load('multiplaygames.json');
      serverGame = game.find(elem => {
        return elem['id'] === game.id;
      });
      if (serverGame['rounds'] !== game['rounds']){
        OnlineGame.placeNewBrick(serverGame['latestMove'], game['board']);
      }
    }, 3000);
    return '';
  }

  static placeNewBrick(latestMove, board){
    let r = latestMove[r];
    let c = latestMove[c];
    let player = latestMove[playerID];
    // update board
  }

  static async gameID(){
    // Set string of 0-9 a-z A-Z
    let randoms = "1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    // Get the multiplaygames json to make sure that the new ID is unique
    let games = await JSON._load('multiplaygames.json');

    let validation;
    do{
      gameID = "";
      // Create a random 10 char long ID for game
      for(let i = 0; i < 10; i++){
        gameID += randoms[parseInt(Math.random()*randoms.length)];
      }
      // Look for the new ID in multiplaygames
      validation = games.find(elem => {
        return elem['id'] === gameID;
      });
      // Loop as long as the ID is found in multiplaygames
    }while(validation !== undefined);

    console.log(gameID)
    return gameID;
  }



  static async playerID(){
    // Set string of 0-9 a-z A-Z
    let randoms = "1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    // Check if localStorage has a playerID
    let playerID = localStorage.playerID;

    // If no playerID is found, make a new one for this device
    if(playerID === undefined){
      // Get the players json to make sure that the new ID is unique
      let players = await JSON._load('players.json');

      let validation;
      do{
        playerID = "";
        // Create a random 5 char long ID for player
        for(let i = 0; i < 5; i++){
          playerID += randoms[parseInt(Math.random()*randoms.length)];
        }
        // Look for the new ID in players
        validation = players.find(elem => {
	        return elem['id'] === playerID;
        });
        // Loop as long as the ID is found in players
      }while(validation !== undefined);

      // If loop is done, set new playerID to localStorage and return
      localStorage.playerID = playerID;
      // Also store it on server
      players.push({"name": "unknown", "id": playerID});
      await JSON._save('play')
    }
    return ``;
  }
}
