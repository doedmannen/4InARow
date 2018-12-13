class WinChecker {
    // check if for the wining move

    validate(slot) {
        if (this.checkHorizontal(slot) || this.checkVertical(slot) || this.checkDiagonal(slot)) {
            return true;
        }
    }


    checkHorizontal(slot) {
        for (let j = 0; j <= 4; j++) {
            let slotsConnected = 0;
            for (let i = -4; i < 0; i++) {
                let currCol = slot.col + i + j;
                if (this.checkBoundary(currCol, slot.row, slot)) {
                    if (slot.board.gameBoard[currCol][slot.row].player === slot.board.gameBoard[slot.col][slot.row].player) {
                        slotsConnected++;
                        if (slotsConnected === 4) {
                            return true;
                        }
                    }
                }
            }
        }
    }

    checkVertical(slot) {
        let slotsConnected = 0;
        for (let i = 0; i < 4; i++) {
            if (this.checkBoundary(slot.col, slot.row - i, slot)) {
                if (slot.board.gameBoard[slot.col][slot.row - i].player === slot.board.gameBoard[slot.col][slot.row].player) {
                    slotsConnected++;
                    if (slotsConnected === 4) {
                        return true;
                    }
                }
            }
        }
    }

    checkDiagonal(slot) {
        for (let k = 0; k < 2; k++) {
            for (let j = 0; j <= 4; j++) {
                let slotsConnected = 0;
                for (let i = -4; i < 0; i++) {
                    let currCol = slot.col + i + j;
                    let currRow = (k === 0) ? slot.row - (i + j) : slot.row + (i + j);
                    if (this.checkBoundary(currCol, currRow, slot)) {
                        if (slot.board.gameBoard[currCol][currRow].player === slot.board.gameBoard[slot.col][slot.row].player) {
                            slotsConnected++;
                            if (slotsConnected === 4) {
                                return true;
                            }
                        }
                    }
                }
            }
        }
    }

    checkBoundary(col, row, slot) {
        return col < slot.board.gameBoard.length && col >= 0 && row >= 0 && row < slot.board.gameBoard[col].length;
    }
}