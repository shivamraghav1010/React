import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import './searchBox.css'
import { useState } from 'react';

export default function Search({updateInfo})
{
       let [city , setCity] = useState("")
       let [err,setErr] = useState(false)
         
       const API_URL = "https://api.openweathermap.org/data/2.5/weather"
       const API_KEY = "420bf0717e8c955f172ebd70b5993a8a"

       let getWeatherrInfo = async() =>{
           
        try{
             let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
              let data = await response.json()
        //  console.log(data)

            let result ={
              city:city,
              temp : data.main.temp,
              tempMin: data.main.temp_min,
              tempMax: data.main.temp_max,
              humidity: data.main.humidity,
              feelslike : data.main.feels_like,
              weather : data.weather[0].description
            }

            console.log(result)
            return result

        }
        catch(err)
        {
            throw err
        }
        
       }

       let handleChange = (evt) =>{
           setCity(evt.target.value)

       }

       let handleSubmit = async (evt) =>{
          
         try{
             evt.preventDefault()
           console.log(city)
           setCity("")
           let newinfo = await getWeatherrInfo()
           console.log(newinfo)
           updateInfo(newinfo)
           setErr(false)
         }
         catch(err)
         {
            setErr(true)
         }

       }

       

    return(
        <>
             <div className='SearchBox'>
            <h1>Search Your City Weather</h1>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City Name" variant="outlined" value={city}  onChange={handleChange} required />
                 <Button variant="contained" type='submit'>Send</Button>
            </form>
             {err && <p style={{color:"red"}}>Place Not Exist</p>}
             </div>
            
        </>
    )
}