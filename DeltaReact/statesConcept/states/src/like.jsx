import { useState } from "react"

export default function Like()
{
     let [isliked, setIsLiked] = useState(false)
  

    let toogleLike=() =>{
       setIsLiked(!isliked)
    }

   

    let styles = {color:"red"}

    return(
        
        <p onClick={toogleLike}>
        {  
            isliked ? <i class="fa-solid fa-heart" style={styles}></i> : <i className="fa-regular fa-heart"></i>
        }
        
        </p>
    )
}