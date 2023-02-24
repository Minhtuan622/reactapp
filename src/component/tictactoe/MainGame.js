import React, {useState} from 'react';
import Table from "./Table";
import {LogicGame} from "./LogicGame";

const MainGame = () => {
    // const [board, setBoard] = useState(Array(9).fill(null))
    // const [nextX, setNextX] = useState(true)
    const [state, setState] = useState({
        board: Array(9).fill(null),
        nextX: true
    })

    const winner = LogicGame(state.board)

    const handleClick = (index) => {
        const play = [...state.board]
        if (winner || play[index]) return
        play[index] = state.nextX ? 'X' : 'O'
        setState({
            ...state,
            board: play,
            nextX: !state.nextX
        })
    }
    const handleResetGame = () => setState({ board: Array(9).fill(null)})

    return (
        <div className="flex flex-col justify-center items-center">
            <Table cells={state.board} onClick={handleClick}/>
            <button onClick={handleResetGame} className='bg-emerald-600 text-white px-3 py-1 rounded-xl w-[500px] mt-[50px]'>Reset game</button>
            {winner && <p className='text-5xl mt-5 font-semibold'>The winner is {winner}</p>}
        </div>
    );
};

export default MainGame;