import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function todo(){
    let [arr,setArr] = useState([{task:"sample task",id:uuidv4(),isdone:false}])
    let [newTodo,setNewTodo] = useState("");
    

    let addtask = () =>{
       
        if(newTodo.trim() === ""){
            return
        }

        // return([...prevValue,task])
        setArr((prevValue)=>{
            
            return [
            
            ...prevValue,
             { task: newTodo, id: uuidv4(),isdone:false }
        ]
        })
        setNewTodo("")
    }
    // let list = arr.map((task)=> <li>{task}</li>)

    let deleteTodo = (id) =>{
        console.log(id)
        setArr((prevtodo)=>prevtodo.filter((prevtodo)=> prevtodo.id!= id))
       
    }

    let toUpperCase = () => {
         
        setArr(arr.map((prevValue)=> {
            
            return {

                ...prevValue ,
               task:prevValue.task.toUpperCase()

            }
        }
            ))
        
    }
    let upperCaseOne = (id) => {
         
        setArr(arr.map((prevValue)=> {
            
            if(prevValue.id === id)
            {
                return {

                ...prevValue ,
               task:prevValue.task.toUpperCase()

            }}
             return prevValue;
        }))}

        let isdone = (id) =>{
          setArr( (prev) => 

            prev.map((todo)=>
                 
                todo.id === id ? { ...todo,isdone:!todo.isdone}: todo

                // if(prevValue.id === id)
                // {
                //     return {
                //     ...prevValue,
                //     isdone:true
                //     }
                    
                // }
                //  return prevValue;
                
            )
          )
           console.log(arr) 
        }

          let isdoneAll = () => {
             
            setArr((prev)=>
                         prev.map((todo)=>({
                          ...todo,isdone:!todo.isdone
                         })
        )            
            )

          }

    return(
        <>
            <div>
                <input placeholder='Enter the task' value={newTodo} onChange={(e)=>{setNewTodo(e.target.value)}}/>
                <button onClick={addtask}>add</button>
                <hr></hr>
            </div>
             <div>
                <ul>
                     {/* {list} */}
                     {
                        arr.map((todo)=> (
                        <li key={todo.id}>
                            <span style={{textDecoration: todo.isdone ? "line-through" : "none"}}>{todo.task}</span>
                            &nbsp;&nbsp;
                            <button onClick={() =>deleteTodo(todo.id)}>Delete</button>
                            &nbsp;&nbsp;
                            <button onClick={() =>upperCaseOne(todo.id)}>Uppercase one</button>
                            &nbsp;&nbsp;
                            <button onClick={() =>isdone(todo.id)}>isdone</button>
                            
                        </li>))
                     }
                </ul>
                <button onClick={toUpperCase}>To UpperCAse</button>
                <button onClick={isdoneAll}>Done All</button>
             </div>
        </>
    )
}