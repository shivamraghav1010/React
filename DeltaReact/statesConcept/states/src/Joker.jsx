import { useState,useEffect } from "react"
import axios from "axios";

export default function fetcher()
{
      let[text,setText]=useState({setup:"",punchline:""})

     let url="https://official-joke-api.appspot.com/random_joke"

        let getapi = async ()=>{
           
            try{
                let response = await axios.get(url)
            // let data = await response.json()
            console.log(response.data)
            setText(()=>({setup:response.data.setup,punchline:response.data.punchline}))
            }
            catch(err){
                console.log(err)
            }
        }

        useEffect(()=>{
            getapi();
        },[])

    return(<>
             <h1>jokes</h1>
              <p>{text.setup}</p>
              <p>{text.punchline}</p>
             <button onClick={getapi}>Jokes</button>
            
             

           </>
    )
}