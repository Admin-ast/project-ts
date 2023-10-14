import Section from "@/components/Section";
import Faq from "@/components/common/Faq";
import { Faqs } from "@/components/horoscope/horoscope-sign";
import React from "react";

type Props = {};
const faqsDetail: Faqs = {
  title: "FAQs",
  faq: [
    {
      ques: "How can I connect with an astrologer on chat?",
      ans: "To chat with astrologer online, you simply need to recharge your wallet and find the 'Chat with Astrologer' section on our app or website. Once you click on it, you can choose from hundreds of astrologers you can chat with at your convenience.    ",
    },
    {
      ques: "How can I connect with an astrologer on chat?",
      ans: "To chat with astrologer online, you simply need to recharge your wallet and find the 'Chat with Astrologer' section on our app or website. Once you click on it, you can choose from hundreds of astrologers you can chat with at your convenience.    ",
    },
    {
      ques: "How can I connect with an astrologer on chat?",
      ans: "To chat with astrologer online, you simply need to recharge your wallet and find the 'Chat with Astrologer' section on our app or website. Once you click on it, you can choose from hundreds of astrologers you can chat with at your convenience.    ",
    },
    {
      ques: "How can I connect with an astrologer on chat?",
      ans: "To chat with astrologer online, you simply need to recharge your wallet and find the 'Chat with Astrologer' section on our app or website. Once you click on it, you can choose from hundreds of astrologers you can chat with at your convenience.    ",
    },
    {
      ques: "How can I connect with an astrologer on chat?",
      ans: "To chat with astrologer online, you simply need to recharge your wallet and find the 'Chat with Astrologer' section on our app or website. Once you click on it, you can choose from hundreds of astrologers you can chat with at your convenience.    ",
    },
  ],
};
const AfterTable = (props: Props) => {
  return (
    <div className="">
      <Section>
        <div className="">
          <p className="text-center text-[36px] font-bold">
            Annaprashan ceremony significance
          </p>
          <p className="mt-[35px] text-justify">{`Annaprashan is a ceremony where solid food is introduced to a newborn baby for the very first time. We all know that babies depend on breast milk in the initial stage after birth, i.e., for six months. After that, it is crucial to announce solid food for the first time. And the parents ensure that it is done by following all rituals and observance. Annaprashan is celebrated across India under different names with slightly varying customs. Annaprashan is known as Mukhe Bhaat in West Bengal, Bhath Khulai in Himachal Pradesh, and Choroonu in Kerala.`}</p>
        </div>
        <div className="mt-[71px]">
          <p className="text-center text-[36px] font-bold">
            Important observance to follow at Annaprashan Sanskar in 2023
          </p>
          <p className="mt-[35px] text-justify">{`Annaprashan observance or Annaprashan customs is pretty interesting. During the custom, the baby sits on the lap of his maternal uncle, who feeds the baby his first solid food, followed by other family members who also provide for the child. On this occasion, the baby gets some valuable gifts.
An exciting activity during this ceremony is when many things like pens, books, gold ornaments, food, and a small lump of clay are arranged on a plate and displayed to the baby. The child gets an option to choose one object out of them. The baby's choice will help to know about their preferences, areas of interest when they grow up, and what they will build in the future. For example, if a child chooses gold ornaments, the baby will get great wealth, a pen signifies wisdom, and clay means property. Nevertheless, selecting a book or food implies that the child will be learned, charitable and sympathetic to others.`}</p>
        </div>
      </Section>
      <div className="mt-[35px] bg-gradient-to-b from-[#fb7038] to-[#df625b]">
        <Section>
          <p className="mt-[35px] text-center text-[36px] font-bold text-white">
            Precautions before performing Annaprashan Sanskar 2023
          </p>
          <p className="mt-[35px]  text-justify text-white">{`It is essential to understand that your baby is very young and is being given solid food for the first time, so it is necessary to consider some factors.`}</p>
          <p className="mt-[10px] text-justify text-white">{`● Feed the baby what they like at that moment. Furthermore, it is advisable to prefer easily-digestible food like plain rice. Some food included in the ceremony may be heavy for a child; in that case, you don't need to opt for such a meal.`}</p>
          <p className="mt-[10px] text-justify text-white">{`● Emphasising cleanliness is very important at the auspicious ceremony; otherwise, your child may fall sick due to infection of germs and bacteria in the food.`}</p>
          <p className="mt-[10px] text-justify text-white">{`● Make sure to consult your child's paediatrician beforehand to double-check what you can introduce as an apt food for him/her.`}</p>
          <p className="mt-[10px] text-justify text-white">{`● Clean your hands and ask everyone else present there to feed the baby to wash their hands before feeding to avoid infections.`}</p>
          <p className="mt-[10px] text-justify text-white">{`● Ensure your baby isn't disturbed during the ceremony and enjoys it with everyone. In addition to that, let the baby sleep early so that the child gets enough sleep to be ready to enjoy the ceremony.`}</p>
          <p className="mt-[10px] text-justify text-white">{`● Too many guests can distract or swamp the baby. So avoid overcrowdedness by too many invited visitors.`}</p>
          <p className="mt-[10px] text-justify text-white">{`● Dress your baby in soft and comfortable material, so the infant does not feel uncomfortable during the rites.`}</p>
          <p className="mt-[10px] text-justify text-white">{`● Do not dress in sequined or harsh fabrics that might cause skin irritation to the child. It would be suitable to wear clothes made of cotton for the summer season.`}</p>
          <p className="mt-[10px] text-justify text-white">{`● Don't prefer tight-fitting clothes for the baby. Always take loose and comfortable clothes for the child to avoid uneasiness after wearing them.`}</p>
          <p className="mt-[10px] text-justify text-white">{`● Keep a plethora of tissue papers and napkins to clean up the food scraps created while feeding the baby.`}</p>
          <p className="mt-[10px] text-justify text-white">{`●Ensure that the ceremony takes place in a ventilated area, so the baby does not face any difficulties, although the people sitting there do not suffocate during the event.`}</p>
        </Section>
      </div>
      <Faq faqDetail={faqsDetail} />
    </div>
  );
};

export default AfterTable;
