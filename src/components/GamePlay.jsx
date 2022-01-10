import React from 'react'


export default function GamePlay({setGamePlay}) {

    const handleClick = () => {
        setGamePlay("Unknown Player")
    }

    return (
        <div className="gamePlay">
            <div className="gameStart">
                <h1 className="welcome">Welcome to simple quiz game :)</h1>
                <h1 className="welcome">This quiz game consists of 10 simple questions.  
                Please press start button to play the game</h1>
            </div>
            <button className="restart" onClick={()=>handleClick()}>Start Game</button>
        </div>
    )
}
