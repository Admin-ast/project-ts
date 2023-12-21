"use client";
import React, { useState } from "react";

type Section = {
  name: string;
  content: string;
};



const Footer = (props: any) => {
  const [activeSection, setActiveSection] = useState<string>("");

  const sections: Section[] = [
    { name: "Description", content: props?.props?.description },
    {
      name: "Additional Information",
      content: "Here is the additional information.",
    },
    {
      name: "Shipping & Delivery",
      content: "Shipping & Delivery information goes here.",
    },
    {
      name: "Return Policy",
      content: "Return policy details are provided here.",
    },
  ];

  const handleSectionClick = (sectionName: string) => {
    setActiveSection((prevActiveSection) =>
      prevActiveSection === sectionName ? "" : sectionName
    );
  };

  return (
    <nav className="p-4 text-black">
      <ul className="flex items-center justify-center gap-10">
        {sections.map((section) => (
          <li
            key={section?.name}
            className="cursor-pointer border-t-4 border-transparent text-xl font-bold  text-[#949494] hover:border-[#949494] hover:text-black"
            onClick={() => handleSectionClick(section?.name)}
          >
            {section.name}
          </li>
        ))}
      </ul>
      {activeSection && (
        <div className="p-4">
          <p>
            {
              sections.find((section) => section?.name === activeSection)
                ?.content
            }
          </p>
        </div>
      )}
    </nav>
  );
};

export default Footer;
