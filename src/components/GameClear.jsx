import React from 'react'
import {useEffect} from "react"
import useSound from "use-sound"
import Hooray from "../assets/Hooray.mp3"

export default function GameClear({setTime,setNumber,setLevel}) {
    
    const [clearGame] = useSound(Hooray) 

    const handleClick = () => {
        setTime(false)
        setNumber(1)
        setLevel(false)
    }
    
    return (
        <div className="endOfGame">
            <div className="endCong">
                {clearGame()}
                <h1>Congratulations! All answers are correct. Please press the restart button to try again</h1>
            </div>
            <button className="restart" onClick={()=>handleClick()}>Start again</button>
        </div>
    )
}
