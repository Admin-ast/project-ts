import React from "react";

interface Contact {
  id: number;
  name: string;
  numb: number;
  lastMessage: string;
  date: string;
  time: string;
}

interface ContactListProps {
  contacts: Contact[];
  onSelectContact: (contact: Contact) => void;
}

const ContactList = ({ contacts, onSelectContact }: ContactListProps) => {
  return (
    <div className="md:w-1/3 lg:w-1/3  ">
      <div className="bg-gray-200 p-[14px]">
        <p className="text-center font-bold">ASSISTANT CHAT</p>
      </div>
      <div className="px-2 py-4">
        <div className="rounded-[12px] border-[0.5px] border-[#A9A9A9] p-2 hover:bg-[#D9D9D9]">
          <ul className="">
            {contacts.map((contact) => (
              <div key={contact.id} className="">
                <div className="flex  items-center gap-1 text-base font-bold">
                  <div
                    onClick={() => onSelectContact(contact)}
                    className="cursor-pointer  hover:bg-gray-300"
                  >
                    {contact.name}
                  </div>
                  <div className="">
                    <p className="">{contact.numb}</p>
                  </div>
                </div>
                <p className="text-[14px]">{contact.lastMessage}</p>
                <div className="flex gap-1 text-[12px] text-[#A9A9A9]">
                  <p className="">{contact.date},</p>
                  <p className="">{contact.time}</p>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactList;