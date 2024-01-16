import React, { useState } from "react";
import ContactList from "./ContactList";
import ChatWindow from "./ChatWindow";
import NewMessageInput from "./NewMessageInput";
import Sidebar from "../../Sidebar";

interface Contact {
  id: number;
  name: string;
  numb: number;
  lastMessage: string;
  date: string;
  time: string;
}

const contacts: Contact[] = [
  {
    id: 1,
    name: "Prabhat",
    numb: 9649,
    lastMessage: "Good Morning",
    date: "21 July23",
    time: "6:44PM",
  },
  {
    id: 1,
    name: "Prabhat",
    numb: 9649,
    lastMessage: "Good Morning",
    date: "21 July23",
    time: "6:44PM",
  },

  // Add more contacts
];
const messages = [
  { text: "Hello!", isSender: true },
  {
    text: "t’s ridiculous that you keep on dialling for a client for hours .. if someone not responding please leave … they will get calbck on when free .. from 8:26 till now .. I could not take a dongle call as you keep on dialling the same number and than automatically off the call .. again I am coming online for call and process is repeated … it’s just … what to say ..",
    isSender: true,
  },
  {
    text: "t’s ridiculous that you keep on dialling for a client for hours .. if someone not responding please leave … they will get calbck on when free .. from 8:26 till now .. I could not take a dongle call as you keep on dialling the same number and than automatically off the call .. again I am coming online for call and process is repeated … it’s just … what to say ..",
    isSender: true,
  },
  { text: "Some other issue", isSender: true },
  { text: "Some other issue", isSender: true },
  { text: "Some other issue", isSender: true },
  { text: "Some other issue", isSender: true },
  { text: "Some other issue", isSender: true },
  { text: "Some other issue", isSender: true },

  // Add more messages here...
];
const ChatWithOwnAssistant = () => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(
    contacts[0]
  );

  const handleSelectContact = (contact: Contact) => {
    setSelectedContact(contact);
  };

  return (
    <div className="">
      <div
        className="h-[78px]
     w-full bg-[#d12627cc]"
      ></div>
      <div className="lg:flex ">
        <div className="lg:w-1/4">
          <Sidebar />
        </div>
        <div className="min-h-screen md:flex lg:flex  lg:w-3/4">
          <ContactList
            contacts={contacts}
            onSelectContact={handleSelectContact}
          />
          <ChatWindow selectedContact={selectedContact} messages={messages} />
        </div>
      </div>
    </div>
  );
};

export default ChatWithOwnAssistant;