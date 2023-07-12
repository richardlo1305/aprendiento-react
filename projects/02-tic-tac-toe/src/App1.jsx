import { useState } from "react";
import confetti from "canvas-confetti";

import { Square } from "./components/Square";
import { TURNS } from "./constants";

import { checkWinner, checkEndGame } from "./logic/board";

import { WinnerModal } from "./components/WinnerModal"


export default function App1(){

    //se crea el tablero con un array con nueve posiciones y se asigna null a todas.
    const [board, setBoard] = useState(() => {
        const boardFromStorage = window.localStorage.getItem('board');
        if(boardFromStorage) return JSON.parse(boardFromStorage)
        return Array(9).fill(null)
    });

    //se crea el estado para saber el turno y se inicia con el turno O.
    const [turn, setTurn] = useState(() => {
        const turnFromStorage = window.localStorage.getItem('turn');
        return turnFromStorage ?? TURNS.O
    });

    //Estado para saber el ganador. null -> cuando no se halla jugado, false -> cuando no exita ganador.
    const [winner, setWinner] = useState(null);



    const updateBoard = (index) => {
        
        //si ya existe algo en esa posicion o hay un ganador, no hace nada
        if(winner || board[index]) return
        
        //Hace una copia del table, debido a que las props deben ser inmutables.
        //asigna una letra a la posicion en el nuevo tablero, actualiza el tablero principal.
        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard);

        //Cambia el turno, y actualiza la opcion.
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
        setTurn(newTurn);

        //Guardar aqui la partida
        window.localStorage.setItem('board', JSON.stringify(newBoard));
        window.localStorage.setItem('turn', newTurn);

        //Consulta si existe un ganador y lo guarda en una constante, si existe un ganador actualiza el estado winner
        const newWinner = checkWinner(newBoard);
        if(newWinner){
            confetti();
            setWinner(newWinner);
        }else if(checkEndGame(newBoard)){
            setWinner(false)
        }
    }

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setTurn(TURNS.O);
        setWinner(null);

        window.localStorage.removeItem('board');
        window.localStorage.removeItem('turn');
    }
    return (
        <main className="board">
            <h1> Tic Tac Toe</h1>
            <button onClick={resetGame}>Reset game</button>
            <section className="game">
            {
                board.map((square, index) => {
                    return  (
                                <Square 
                                    key={index} 
                                    index={index}
                                    updateBoard = { updateBoard }
                                >
                                    {square}
                                </Square>
                            )
                })
            }
            </section>
            <section className="turn">
                <Square isSelected = { turn === TURNS.O }>{TURNS.O}</Square>
                <Square isSelected = { turn === TURNS.X }>{TURNS.X}</Square>
            </section>

            <WinnerModal winner = {winner} resetGame = {resetGame}/>
        </main>
        
    )
}