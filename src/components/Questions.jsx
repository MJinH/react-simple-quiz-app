import React from 'react'
import {useState,useEffect} from "react"
import useSound from "use-sound"
import Correct from "../assets/Correct.mp3"
import Wrong from "../assets/Wrong.mp3"


export default function Questions({data,number,setNumber,setTime,setLevel}) {

    const [question,setQuestion] = useState()
    const [selected, setSelected] = useState()
    const [activeOn, setActiveOn] = useState()

    const [trueAnswer] = useSound(Correct)
    const [wrongAnswer] = useSound(Wrong)

    useEffect(()=> {
        setQuestion(data[number - 1])
    },[data,number])

    const handleClick = (a) => {
        setSelected(a)
        setActiveOn("answer")
        setTimeout(()=> {
            if(a.answer) {
                trueAnswer()
                setActiveOn("answer correct")  
            } else {
                wrongAnswer()
                setActiveOn("answer wrong")
            }
        },500)
        
        setTimeout(()=> {
            if(a.answer) {
                setNumber(number + 1)
                if(number >= data.length) {
                    setLevel(true)
                } 
                setSelected()
            } else {
                setTime(true)
                setNumber(1)
            }
        },1000)

    }


    return (
        <div className="questions">
            <div className="question">
                {question?.question}
            </div>
            <div className="answers">
                {question?.answers.map((a) => (
                    <div 
                        className={selected === a ? activeOn : "answer"}
                        onClick={()=>!selected && handleClick(a)}>
                        {a.text}
                    </div>
                ))}
            </div>  
        </div>
    )
}
