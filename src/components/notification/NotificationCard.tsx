import React from "react";
import Section from "../Section";

type Props = {};
const card = [
  {
    text: "We were on a BREAK!!!😢",
    subText:
      " Rough love-patch? Nothing feels right? Find out how you can mend things up😇",
  }
    
];

const NotificationCard = (props: Props) => {
  return (
    <>
      <Section>
        <div className=" mt-[58px] mb-[49px]">
          {card.map((item, index) => (
            <div
              key={index}
              className="mt-[10px] rounded-[20px] border-[3px] border-[#DC6563]"
            >
              <p className="text-center font-[Georgia] text-[36px]">
                {item.text}
              </p>

              <p className="text-center font-[Roboto] text-[22px]">
                {item.subText}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default NotificationCard;
