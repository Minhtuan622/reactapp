import React, {useState} from 'react';
import Table from "./Table";
import {WinnerGame} from "./GameWinner";

const Game = () => {
    const [state, setState] = useState({
        board: Array(9).fill(null),
        nextX: true
    })
    const winner = WinnerGame(state.board)
    const handleTable = (index) => {
        const player = [...state.board]
        if (winner || player[index]) return
        player[index] = state.nextX ? "O" : "X"
        setState({
            ...state,
            board: player,
            nextX: !state.nextX
        })
    }
    const handleButton = () => setState({board: Array(9).fill(null)
})
    return (
        <div className="text-center">
            <Table cells={state.board} onClick={handleTable}/>
            <button className="mt-16 bg-amber-600 text-white px-4 py-2 rounded-lg" onClick={handleButton}>Play Again</button>
            {winner && <p className="mt-10 font-bold text-4xl text-white">The winner is {winner}</p>}
        </div>
    );
};

export default Game;