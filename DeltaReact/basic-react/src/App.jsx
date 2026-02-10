import './App.css'
// import Title from './title.jsx'
import {Title ,Sum} from './title.jsx'
import Product from './product.jsx'
import Card from './card.jsx'
import Event from './events.jsx'
import From from './form.jsx'


function App() {
   let option = ["Fast Processor", "High RAM", "Large Storage"]
   let styles ={ display: "flex", gap: "20px", flexWrap: "wrap" ,justifyContent: "center",alignItems: "center", marginTop: "20px"}
   return (
   <div>
    <Title/>
    <Title/>
    <p>Sum of 2 and 3 is {Sum(2,3)}</p>
    <Product title="Laptop" price={25000} features = {option} color="black"/>
    <Product title="Bike" price={5000} features = {option} color="white"/>
    <h1>Blockbuster deals | Shop Now</h1>
    <div style={styles}>
      <Card title="Logitech MX Master" idx={0}/>
     <Card title="Apple Pencil (2nd Gen)" idx={1}/>
     <Card title="Zebronics Zeb-transformer" idx={2}/>
     <Card title="Petronics " idx={3}/>
    </div>
    <Event/>
    <From/>
     
   </div>
   )
}

export default App
