import React, { useState } from "react";
import { BsChevronDoubleRight } from "react-icons/bs";

interface NewMessageInputProps {
  sendMessage: (message: string) => void;
}

const NewMessageInput = ({ sendMessage }: NewMessageInputProps) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    sendMessage(message);
    setMessage("");
  };

  return (
    <div className="relative flex w-full bg-gray-200 p-4">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="w-full rounded border p-2"
      />
      <button
        onClick={handleSendMessage}
        className="absolute left-[300px] mt-2 rounded py-2 md:left-[450px] lg:left-[500px]"
      >
        <BsChevronDoubleRight />
      </button>
    </div>
  );
};

export default NewMessageInput;