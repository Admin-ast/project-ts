// components/ChatLayout.tsx
import React from "react";

interface Message {
  text: string;
  sender: "sender" | "receiver";
}

const ChatLayout = () => {
  const messages: Message[] = [
    { text: "Hello!", sender: "sender" },
    { text: "Hi there!", sender: "receiver" },
    { text: "Hello!", sender: "sender" },
    { text: "Hi there!", sender: "receiver" },
    { text: "Hello!", sender: "sender" },
    { text: "Hi there!", sender: "receiver" },
    { text: "Hello!", sender: "sender" },
    { text: "Hi there!", sender: "receiver" },
    { text: "Hello!", sender: "sender" },
    { text: "Hi there!", sender: "receiver" },
    { text: "Hello!", sender: "sender" },
    {
      text: "Hi there! I am Your Friend And My Name Is Devarshi Ojha!",
      sender: "receiver",
    },
    // Add more messages as needed
  ];

  return (
    <div className="flex flex-col ">
      <div className="flex-grow p-4">
        <div className="flex flex-col">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 ${
                message.sender === "sender" ? "justify-start" : "justify-end"
              }`}
            >
              <span
                className={`inline-block rounded-lg py-2 px-4 ${
                  message.sender === "sender"
                    ? "bg-[#dc6563] text-white"
                    : "bg-[#f6d9d8] text-gray-700"
                }`}
              >
                {message.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Add an input field for typing messages here */}
    </div>
  );
};

export default ChatLayout;
