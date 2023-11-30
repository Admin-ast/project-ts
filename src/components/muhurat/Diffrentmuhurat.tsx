import React from "react";
import Section from "../Section";
import Table from "./Table";

type Props = {};

const Diffrentmuhurat = (props: Props) => {
  return (
    <div className="bg-[url('/horoscope-bg.svg')] bg-cover py-[30px]">
      <Section>
        <div className="flex flex-col space-y-10">
          <div className="flex flex-col space-y-6">
            <p className="text-center text-[30px] font-bold ">
              Different Muhurat and its Characteristics
            </p>
            <div className="text-justify">
              <p>
                Hinduism has so far evaluated 30 Muhurtas for determining the
                auspicious hour. The first Muhurta, known as Rudra Muhurta,
                begins at six in the morning and is classified as an unlucky
                Muhurta. The second Muhurta then begins 48 minutes after the
                first Muhurta. Ahi Muhurta is the name of this muhurta, which
                belongs to the pessimistic muhurta genre. You may learn more
                about each lucky Muhurta and its features here. Additionally,
                you should be aware that this Muhurta takes a break for 48–48
                minutes
              </p>
            </div>
          </div>
          <div className="flex flex-col  gap-3">
            <Table
              ftitle1="Rudra"
              ftitleResult1="Inauspicious"
              ftitle2="Rudra"
              ftitleResult2="Inauspicious"
              ftitle3="Rudra"
              ftitleResult3="Inauspicious"
              ftitle4="Rudra"
              ftitleResult4="Inauspicious"
              stitle1="Rudra"
              stitleResult1="Inauspicious"
              stitle2="Rudra"
              stitleResult2="Inauspicious"
              stitle3="Rudra"
              stitleResult3="Inauspicious"
              stitle4="Rudra"
              stitleResult4="Inauspicious"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Diffrentmuhurat;
