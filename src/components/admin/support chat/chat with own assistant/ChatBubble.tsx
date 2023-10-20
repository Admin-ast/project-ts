import React from "react";

interface ChatBubbleProps {
  text: string;
  isSender: boolean;
}

const ChatBubble = ({ text, isSender }: ChatBubbleProps) => {
  const containerClass = isSender ? "self-end" : "self-start";
  const bubbleClass = isSender ? "bg-[#DC6563] " : "bg-gray-200 text-gray-800";

  return (
    <div className={`flex ${containerClass} mb-2 flex-row-reverse`}>
      <div className={`max-w-md rounded-lg py-2 px-4 ${bubbleClass}`}>
        {text}
      </div>
    </div>
  );
};

export default ChatBubble;
