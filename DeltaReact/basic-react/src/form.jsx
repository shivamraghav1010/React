function handler(event){
    event.preventDefault();
    console.log("Form submitted Successfully")
    // console.log(event.title)
}

export default function form(){
    return (
        <form onSubmit={handler}>
            <input placeholder="Enter Your Name" name="title"/>
            <button>Submit</button>
        </form>
    )
}