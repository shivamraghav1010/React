import { useState } from "react"
import './comment.css'
import CommentForm from "./commentForm"

export default function comment()
{
       let [comments,setComments] = useState([{
            username:"@srk",
            review:"All the best",
            rating:5

       }])

    let addNewComment = (comment)=>{
        setComments((currComment)=>[...currComment,comment] )
        console.log("Comment added")
    }


    return(
        <>
        <h1>All Comments</h1>
        {
            comments.map((comment,idx)=>(
             <div className="comment" key={idx}>
            <span >{comment.review}</span>
            <span>{comment.rating}</span>
            <p>{comment.username}</p>
         </div>
            ))
        }
          <br></br>
         <CommentForm  addNewComment={addNewComment}/>  
        </>
    )
}