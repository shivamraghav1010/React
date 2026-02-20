import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import './infoBox.css'


export default function Box({info})
{
   let haze="https://images.unsplash.com/photo-1423209086112-cf2c8acd502f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   let hot ="https://images.unsplash.com/photo-1581224463294-908316338239?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   let winters = "https://plus.unsplash.com/premium_photo-1672021618005-b89f86e8d6bc?q=80&w=1179&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let rainy = "https://images.unsplash.com/photo-1569357391013-3cfd7de712ae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return(
        <>
            <h1><i>Weather at {info.city}</i></h1>
    <div className='classContainer'>
     <Card sx={{ minWidth: 385 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={info.humidity >80 ? rainy : info.humidity >80 ? haze : info.temp >20 ? hot : winters}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         <i>{info.city}</i> {info.humidity >80 ? <ThunderstormIcon/> : info.temp >20 ? <SunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature:{info.temp}&deg;C</p>
          <p>Humidity:{info.humidity}&deg;C</p>
          <p>Weather:{info.weather}&deg;C</p>
          <p>Feelslike:{info.feelslike}&deg;C</p>
          <p>TempMin:{info.tempMin}&deg;C</p>
          <p>TempMax:{info.tempMax}&deg;C</p>
          
        </Typography>
      </CardContent>
      
              </Card>
            </div>
             
        </>
    )
}