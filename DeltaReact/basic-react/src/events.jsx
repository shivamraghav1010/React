function event()
{
    console.log("Oh Captain Oh My Captain")
    alert("Oh Captain Oh My Captain")
}


export default function eventhandling(){
    return(
        <div>
            <button onClick={event}>Click me!!</button>
        </div>
    )
}