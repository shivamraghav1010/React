import SearchBox from './searchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function weather()
{
    const [weatherInfo,setweatherInfo]=useState({
    city:"Delhi",
    feelslike:24.84,
    temp:25.05,
    tempMin:25.05,
    tempMax:25.05,
    humidity:47,
    weather:"haze"
    })

    let updateInfo = (newinfo)=>{
        setweatherInfo(newinfo)
    }

    return(
        <>
           <SearchBox updateInfo={updateInfo}/>
           <InfoBox info={weatherInfo}/>
        </>
    )
}