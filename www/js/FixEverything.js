class FixEverything{
  static fixBoardSize(){
    setTimeout(() => {
      let gameDom = document.getElementsByClassName('game-main')[0];
      let boardDom = document.getElementsByClassName('board-display')[0];
      let gWidth = gameDom.offsetWidth;
      let gHeight = gameDom.offsetHeight;
      if(gHeight > gWidth){
        boardDom.style.maxHeight = `${gWidth}px`;
      } else {
        let diff = (gWidth-gHeight)/2;
        boardDom.style.maxWidth = `${gHeight}px`;
        boardDom.style.marginLeft = `${diff}px`;
      }
    }, 1);
    return ``;
  };
}
