import { useState } from "react";


export default function lottery()
{
    let [number,setNumber]=useState()
    let [won,setWon] = useState(false)

    let getLottery = () =>{
        let no = Math.floor(Math.random() * 1000)+1
         setNumber(no)

         let sum = no.toString().split("").reduce((acc,digit) => acc + Number(digit),0)
         setWon(sum === 15)
    }



    return (
        <>
             <h1>{won ? "You Won 🎉":"Lottery"}</h1>
             <p>Lottery no ={number}</p>
             <button onClick={getLottery}>Get Lottery</button>
        </>
    )
}