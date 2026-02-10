import { useState } from "react"

export default function Ludo()
{
        let [moves,setMoves] = useState({blue:0,red:0,yellow:0,green:0})

         let updateBlue =() =>{
            
             setMoves((prevValue)=>{
               return {...prevValue,blue:prevValue.blue +1}
             }) //to detect the change in object we use spread operator 
         }
         let updatered =() =>{
            
             setMoves((prevValue)=>{
               return {...prevValue,red:prevValue.red +1}
             }) //to detect the change in object we use spread operator 
         }
         let updategreen =() =>{
            
             setMoves((prevValue)=>{
               return {...prevValue,green:prevValue.green +=1}
             }) //to detect the change in object we use spread operator 
         }
         let updateyellow =() =>{
            
             setMoves((prevValue)=>{
               return {...prevValue,yellow:prevValue.yellow +=1}
             }) //to detect the change in object we use spread operator 
         }

     return (
        <>
            <div className="board">
                     <p>Blue={moves.blue}</p>
                     <button onClick={updateBlue} style={{background:"blue", color:"white"}}>+1</button>
                     <p>Red={moves.red}</p>
                     <button onClick={updatered} style={{background:"red", color:"white"}}>+1</button>
                     <p>Green={moves.green}</p>
                     <button onClick={updategreen} style={{background:"green", color:"white"}}>+1</button>
                     <p>Yellow={moves.yellow}</p>
                     <button onClick={updateyellow} style={{background:"yellow", color:"blue"}}>+1</button>
            </div>
        </>
     )
}