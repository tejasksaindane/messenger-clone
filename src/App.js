// useState = variable in react/short term memory.
// useEffect = run code on a condition.

import React,{useState,useEffect} from 'react';
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import './App.css';
import Message from "./Message"
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input,setInput] = useState('');// the state allows you to change stuff/components without refreshing button
                                        //state means no refresh
  const [messages,setMessages] = useState([{username:'sonny',message:'hey guys'},{username:'Qazi',message:'ohhh shera'}]);
  const [username,setUsername] = useState('');
  
  // NOTE useEffect allows us to  run a piece of code once when the components load in  
  useEffect(()=>{
    //runs code here
    //if it is blank inside [],this code runs once when the app component loads
   //const name= prompt('please enter your name');
    setUsername(prompt('Please ! Enter Your Name'))
  },[]) //condition

  useEffect(()=>{
    //run once when the app components load
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id,message: doc.data()})))
    });
  },[])

  const sendMessage = (event)=>{
    //all the logic to send message goeshere
    event.preventDefault();
    
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessages([...messages,{username:username,message:input}]);
    setInput('');
  }

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"/>
     <h1>Messenger-Clone</h1>
     <h2>Welcome { username}</h2>

     <form className="app__form">
     <FormControl className="app__formControl">
  
  <Input className="app__input" placeHolder='Enter a message...' value ={input} onChange={event => setInput(event.target.value)}/>

  <IconButton className="app__iconButton" disabled = {!input} variant='contained' color="primary" type="submit" onClick={sendMessage}>
    <SendIcon />SendMessage
  </IconButton>
 </FormControl>
     {/*input field*/}
    
     {/*button*/}
 
     </form>

{/*messages themselves*/}
<FlipMove>
{
     messages.map(({id,message}) => (
       <Message key={id} username={username} message={message}/>
     ))
}
</FlipMove>


    </div>
  );
}

export default App;
