import React, { useState, useEffect } from "react";
import axios from 'axios';
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:3000";

export default function Chatter() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const socket = socketIOClient(ENDPOINT);
  
  useEffect(() => {
      
    console.log("Loaded React");

    axios.get(`/api/messages/list`).then(res => {
      console.log(res.data);
      setMessages(res.data.messages);
    });
  },[]);

  useEffect(() => {
    
    socket.on('RECEIVE_MESSAGE', function(data){
      console.log("Messaggio ricevuto: ", data);
    });
/*
    socket.emit('SEND_MESSAGE', {
      author: "pippo",
      message: "pluto"
    });
    */
  }, []);

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      console.log('Enter press here! ');
      sendMessage(message);
    }
  };

  const sendMessage = (message) => {
    console.log("Sending message: ", message);
    axios.post(`/api/messages/post`, {message: message}).then(res => {
      console.log(res.data);
    });
  };

  return (
    <div className="dc-chat__container">
      <div className="dc-chat__messages-box">
        <ul>
          {messages.map(el => (
            <li key={el._id}>{el.content}</li>
          ))}
        </ul>
      </div>
      <div className="dc-chat__textarea-box">
          <textarea onChange={e => setMessage(e.target.value)} className="dc-chat__textarea" rows="6" onKeyPress={handleKeyPress}></textarea>
      </div>
    </div>
  );
}
