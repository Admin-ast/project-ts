import React from "react";
import ChatBubble from "./ChatBubble";
import NewMessageInput from "./NewMessageInput";
interface ChatWindowProps {
  messages: { text: string; isSender: boolean }[];
}

interface Contact {
  id: number;
  name: string;
}

interface ChatWindowProps {
  selectedContact: Contact | null;
}

const ChatWindow = ({ selectedContact, messages }: ChatWindowProps) => {
  const handleSendMessage = (message: string) => {
    // Logic to send message
  };
  return (
    <div className="md:w-3/4 lg:w-3/4 ">
      {selectedContact && (
        <div className="bg-[#DC6563] p-2 text-center text-[24px] font-bold">
          {selectedContact.name}
        </div>
      )}
      {/* Render chat messages here */}
      <div className="p-4">
        {messages.map((message, index) => (
          <ChatBubble
            key={index}
            text={message.text}
            isSender={message.isSender}
          />
        ))}
      </div>
      <NewMessageInput sendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;