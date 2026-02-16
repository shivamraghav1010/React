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
import Counter from './counter'
import Jokes from './Joker'
import Delete from './delete'

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
        &nbsp;&nbsp;
         <Counter/>
        &nbsp;&nbsp;
         <Jokes/>
        &nbsp;&nbsp;
         <Delete/>
        

    </>
  )
}

export default App
