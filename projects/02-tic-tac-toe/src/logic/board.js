import { WINNER_COMBOS } from "../constants";

//funcion para comprobar si existe un ganador

export const checkWinner = (boardToCheck) => {
    for(const combo of WINNER_COMBOS){
        const [a, b, c] = combo;
        if(boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]){
            return boardToCheck[a];
        }
    }
    return null;
}

//funcion para saber si no hay un ganador y ya finalizo el juego
export const checkEndGame = (checkBoard) => {
    return checkBoard.every((square) => {
        return square !== null
    });
}