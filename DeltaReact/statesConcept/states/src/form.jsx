import { useState } from "react"

export default function form()
{
    //   let [fullname,setfullname] = useState("")
    //    let handleChange = (event) =>{
    //          console.log(event.target.value)
    //          setfullname(event.target.value)
    //    }

    let [formData,setFormData] = useState({
        fullName:"",
        userName:"",
        password:""
    })

    let handleInputChange = (event) =>{
             
        // let fieldName = event.target.name;
        //  let newValue = event.target.value;
        console.log(event.target.name)

        setFormData((currData)=>{
            //  currData[fieldName] = newValue;
             return {...currData,[event.target.name] : event.target.value}
        })

       }
     
      let handleSubmit = (event) =>{
          event.preventDefault()
          console.log(formData)
          setFormData({
               fullName:"",
                userName:"",
                password:""
                        })
      } 

    return(
        <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">User Name</label>
        <br></br>
            <input placeholder="Enter your Your name" id="fullname" type="text" name="fullName" value={formData.fullName} onChange={handleInputChange}/>
            
        <br></br>
            <input placeholder="Enter username" id="username" type="text" value={formData.userName} name="userName" onChange={handleInputChange}/>
        <br></br>
            <input placeholder="Enter Password" id="password" type="password" value={formData.password} name="password" onChange={handleInputChange}/>
            <button>Submit</button>
        </form>
    )
}