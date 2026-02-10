import { useState } from "react";
import { helper,Addition } from "./helper";


export default function lottery()
{
    let [ticket,setTicket]=useState(helper(3))

    let sum = Addition(ticket) === 15;
    
     let check = () => {
        setTicket(helper(3))
     }

     return (
        <>
             <h1>Lottery2</h1>
             <p>{sum && "Congratulations You Won!!"}</p>
             <div>
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
             </div>

             <button onClick={check}>Get Lottery</button>
        </>
    )
}