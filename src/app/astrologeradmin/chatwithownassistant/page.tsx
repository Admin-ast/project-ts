"use client";
import ChatWithOwnAssistant from "@/components/admin/support chat/chat with own assistant/ChatWithOwnAssistant";
import React from "react";
//import socketClient from "socket.io-client";
import { useEffect } from "react";

type Props = {};

const chatwithownassistant = (props: Props) => {
    // var socket = socketClient("http://localhost:8000");

    // useEffect(() => {
    //   socket.on('connection', () => {
    //     console.log('I am connected to backend');
    // });
    // socket.emit("reply");
    // socket.on("sendmessage", (message) => {
    //   console.log(message);
    // })


    // },[]);
    
  return (
    <div>
      <ChatWithOwnAssistant />
    </div>
  );
};

export default chatwithownassistant;