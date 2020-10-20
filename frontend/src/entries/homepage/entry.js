import React from 'react';
import ReactDOM from 'react-dom';
import { chat } from "@/components/chat/chat";
import Chatter from "@/components/chat/Chatter.jsx";
import io from "socket.io-client";


document.addEventListener("DOMContentLoaded", () => {
  console.log("Loading chat module!");
  chat.init();
  ReactDOM.render(<Chatter />, document.getElementById('homepage-chatter'));
});
