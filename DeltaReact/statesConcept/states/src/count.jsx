import { useState } from "react"

export default function Counter()
{
    let [count,setCount]= useState(0);

    function incCount()
    {
        setCount((currCount)=>{
            return currCount+1;
        });
        setCount((currCount)=>{
            return currCount+1;
        });
        
        setCount((currCount)=>{
            return currCount+1;
        });
        setCount((currCount)=>{
            return currCount+1;
        });
        console.log(count);
    };
    
    return (
       <div>
         <p>Count={count}</p>
        <button onClick={incCount}>click</button>
       </div>
    )
}