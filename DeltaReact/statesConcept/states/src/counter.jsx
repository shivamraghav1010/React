import { useState,useEffect } from "react"

export default function Counter(){

     let [counterX,setCounterX] = useState(0)
     let [counterY,setCounterY] = useState(0)

     let increaseX = ()=>{
        setCounterX((prevValue)=> {
            
            return prevValue + 1
        })
     }
     let increaseY = ()=>{
        setCounterY((prevValue)=> {
            
            return prevValue + 1
        })
     }

     useEffect(function sayHello(){
        console.log("Hello Shivam ")
     },[counterX])

    return(
        <>
            <h1>Counter again</h1>
            <p>{counterX}</p>
            <button onClick={increaseX}>Increase</button>
            <p>{counterY}</p>
            <button onClick={increaseY}>Increase</button>
        </>
    )
}