import React from 'react'
import {useState,useEffect} from "react"


export default function Count({setTime,number,setNumber}) {
    const [count,setCount] = useState(20)

    useEffect(()=> {
        if(count === 0) {
            setNumber(1)
            return setTime(true)  
        }
        const interval = setInterval(()=> {
            setCount(count - 1)
        },1000)
        return () => clearInterval(interval)
    },[setTime,count])

    useEffect(() => {
        setCount(20)
    },[number])


    return count
}
