import React from "react";
import Section from "@/components/Section";

type Props = {};

const Note = (props: Props) => {
  return (
    <div className="flex flex-col space-y-6 bg-[url('/assets/horoscope-bg.webp')] bg-cover py-[30px]">
      <div className="py-8 lg:py-[51px]">
        <Section>
          <div className="flex flex-col space-y-6">
            <p className="text-center text-[36px] font-bold">
              The Special significance of Namkaran Ceremony
            </p>
            <div className="text-justify">
              <p>
                {`According to the Hindu religion, out of all the sixteen
                sanskaras mentioned in scriptures, Naamkaran, or the Naming
                ceremony holds great significance. The name plays a vital role
                in a person's life. In addition to that, it determines the
                existence of a being in society. That is why the Naming ceremony
                is essential in itself. A child's parents and relatives start to
                call the child's name after birth. Also Read Horoscope 2023`}
              </p>
              <p>
                {`According to the customs of Hinduism, the naming ceremony should
                be conducted by following the prescribed rites and rituals when
                the child is eleven or twelve days old. During this Naming
                ceremony, an astrologer considers a child's birth chart and
                names the baby after evaluating the Nakshatras/constellation.
                This event blesses the child inwardly and outwardly, as the
                child's mental and physical development improves after the
                naming ceremony. Moreover, this ceremony increases the life
                expectancy of the child. This ceremony gives the child a
                specific identity and is vital for their future.`}
              </p>
            </div>
          </div>
        </Section>
      </div>

      <div className=" bg-gradient-to-b from-[#fb7038] to-[#df625b] py-[30px] text-white">
        <Section>
          <div className="flex flex-col space-y-6">
            <p className="text-center text-[36px] font-bold">
              Auspicious Dates, Nakshatras, and Months for Naming Ceremony
            </p>
            <div className="text-justify">
              <p>
                . The naming ceremony should be performed on the twelfth or
                thirteenth day after the birth of the child.
              </p>
              <p>
                . This ceremony can be performed at the end of the Sutak period,
                starting from the birth of the child for the next ten days.
              </p>
              <p>
                . The purification of Sutika is done after the tenth day of
                childbirth, and the naming ceremony should be carried out on
                this particular day itself.
              </p>
              <p>
                . This ceremony should avoid Chaturthi, Navami, and Chaturdashi.
                Any auspicious work, including a naming ceremony, should not be
                performed on the new moon day.
              </p>
              <p>
                . The naming ceremony of a baby can commence naming ceremonies
                on auspicious days like Monday, Wednesday, Thursday, and Friday.
              </p>
              <p>
                . Nakshatras like Ashwini, Satabishak, Swati, Chitra, Revati,
                Hasta, Pushya, Rohini, Mrigashirsha, Anuradha, Uttarshada,
                Uttaraphalguni, Uttara Bhadrapada, and Shravan are considered
                for namkaran ceremony.
              </p>
              <p>
                . As per the astrological view, two names are usually preferred
                for a child, one of which will keep secret, and the other
                becomes a familiar name.
              </p>
              <p>
                {`. There is a right to choose the child's name per the Nakshatra
                under which the baby was born. Furthermore, the ceremony should
                also be conducted under astrological supervision.`}
              </p>
            </div>
          </div>
        </Section>
      </div>

      <div className="py-[30px]">
        <Section>
          <div className="flex flex-col space-y-6">
            <p className="text-center text-[36px] font-bold">
              Measures to consider during the Namkaran ceremony
            </p>
            <div className="text-justify">
              <p>
                . The ceremony should be conducted in a tidy place like your
                home. But in an emergency case, the ceremony can be placed in a
                religious place or temple.
              </p>
              <p>
                {`   . The baby's name should be based on the zodiac sign. Do not put
                your child's future at risk by choosing any random name.`}
              </p>
              <p>
                {` . Baby's naming ceremony should be done as per Shubh Muhurat.
                Take the help of an astrologer to find one.`}
              </p>
              <p>
                . The family should avoid non-vegetarian food and alcohol on
                that special day.
              </p>
              <p>
                . The naming ceremony of a baby can commence naming ceremonies
                on auspicious days like Monday, Wednesday, Thursday, and Friday.
              </p>
              <p>
                {` . if possible, feed roti to the cow on the day of the naming
                ceremony. The child's father should not shave or cut his hair on
                namkaran puja day.`}
              </p>
              <p>
                {`  . Every member of the family should behave affably with the
                guests. Let the child seek the blessings of the elder members of
                the family.`}
              </p>
              <p>
                {` . Offering food to the poor brings special blessings to the
                children.`}
              </p>
              <p></p>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Note;
