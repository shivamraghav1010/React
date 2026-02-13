import './App.css'
import Count from './count'
import Like from './like'
import Ludo from './ludo'
import Todo from './Todo'
import Lottery from './lottery'
import Lottery2 from './lottery2'
import TicketNum from './ticketNum'
import Form from './form'
import Comment from './comment'
import CommentForm from './commentForm'

function App() {


  return (
    <>
        <Count/>
        <Like/>
        <Ludo/>
        <Todo/>
        <Lottery/>
        <Lottery2/>
        <TicketNum no={2}/>
        <TicketNum no={3}/>
        <TicketNum no={4}/>
        &nbsp;&nbsp;
         <Form/>
        &nbsp;&nbsp;
         <Comment/>
        

    </>
  )
}

export default App
