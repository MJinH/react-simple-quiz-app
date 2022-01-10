import Questions from "./components/Questions"
import {data} from "./quizData"
import './app.css';
import Count from "./components/Count";
import {useState,useEffect} from "react"
import GameClear from "./components/GameClear";
import GamePlay from "./components/GamePlay";



function App() {

  const [time,setTime] = useState(false)
  const [number,setNumber] = useState(1)
  const [level,setLevel] = useState(null)
  const [gamePlay,setGamePlay] = useState(false)

  const handleClick = () => {
    setTime(false)
  }


  return (
    <>
    {!gamePlay ? <GamePlay setGamePlay={setGamePlay}/> : (<>
      {!level ? 
        <div className="app">
            <div className="appContainer">
              {time ? (
                <div className="gameEnd">
                  <h1>The answer is incorrect! Please try again</h1>
                  <button className="restart" onClick={()=>handleClick()}>Start again</button>
                </div>
              ) : (
                <>
                  <div className="top">
                    <div className="timer">
                      <Count 
                        setTime = {setTime}
                        number = {number}
                        setNumber = {setNumber}
                      />
                    </div>
                  </div>
                  <div className="bottom">
                    <Questions
                      data = {data}
                      number = {number}
                      setNumber = {setNumber}
                      setTime = {setTime}
                      setLevel = {setLevel}
                    />
                  </div>
                </>
              )}
          </div>
        </div>
      : (
        <div className="app">
          <GameClear 
              setTime = {setTime}
              setNumber = {setNumber}
              setLevel = {setLevel}
          />
        </div>
      )}</>)}
    </>
  );
}

export default App;
