import { useState } from "react"

export default function ludo()
{
      let [value,setValue] = useState({Blue:0,Green:0,Yellow:0,Red:0})
        
       function changeBlue()
       {
           setValue((prev)=>( {...prev ,Blue: prev.Blue+1}))
       }

       function changeGreen()
       {
          setValue((prev)=>{return{...prev,Green:prev.Green+1}})
       }
       function changeYellow()
       {
          setValue((prev)=>({...prev,Yellow:prev.Yellow+1}))
       }
       function changeRed()
       {
          setValue((prev)=>{return{...prev,Red:prev.Red+1}})
       }

       function change(event)
       {
          setValue((prev)=>({
            ...prev,
               [event.target.name]:prev[event.target.name]+1
          }))
       }

    return( <>
           <p>Blue={value.Blue}</p>
           <button onClick={change} name="Blue" style={{color:"white", backgroundColor:"blue"}}>+1</button>
           <p>Green={value.Green}</p>
           <button onClick={change} name="Green" style={{color:"back", backgroundColor:"Green"}}>+1</button>
           <p>Yellow={value.Yellow}</p>
           <button onClick={change} name="Yellow" style={{color:"black", backgroundColor:"Yellow"}}>+1</button>
           <p>Red={value.Red}</p>
           <button onClick={change} name="Red" style={{color:"white", backgroundColor:"Red"}}>+1</button>
     </>
    )
}