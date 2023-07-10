import Section from "@/components/Section";
import React, { useEffect, useState } from "react";

type Props = {
  sadesati: any;
};

const Sadesati = ({ sadesati }: Props) => {
  const [parsedSadesatiCurrent, setParsedSadesatiCurrent] = useState<any>({});
  const [parsedSadesatiTimeline, setParsedSadesatiTimeline] = useState<any>({});
  useEffect(() => {
    if (sadesati) {
      const current = JSON.parse(sadesati?.current);
      const timeline = JSON.parse(sadesati?.timeline);
      setParsedSadesatiCurrent({ current });
      setParsedSadesatiTimeline(timeline);
      // setParsedSadesati(JSON.parse(sadesati));
    }
  }, [sadesati]);
  useEffect(() => {
    console.log(parsedSadesatiTimeline);
  }, [parsedSadesatiTimeline]);

  return (
    <div className="mb-20  space-y-20">
      <Section>
        <div
          className={`flex items-center gap-4 rounded-xl border p-3 ${
            parsedSadesatiCurrent && parsedSadesatiCurrent.sadhesati_status
              ? " border-[red]"
              : " border-[green]"
          }`}
        >
          <div
            className={`flex h-[80px] w-[80px] items-center justify-center rounded-full text-color_1
     ${
       parsedSadesatiCurrent && parsedSadesatiCurrent.sadhesati_status
         ? "bg-[red]"
         : "bg-[green]"
     }`}
          >
            {parsedSadesatiCurrent && parsedSadesatiCurrent.sadhesati_status
              ? "Yes"
              : "No"}
          </div>
          <div className="w-[80%]">
            <div>Current Sadesati Status</div>
            <div>{parsedSadesatiCurrent.consideration_date}</div>
          </div>
        </div>

        <table className="mt-2 w-full  gap-3 border">
          <thead>
            <tr className="whitespace-nowrap border bg-[#FFF7E5] [&>*]:border-r [&>*]:px-5 [&>*]:py-3">
              <th>Date</th>
              <th>Summary</th>
              <th>Sign Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {parsedSadesatiTimeline &&
              parsedSadesatiTimeline.length > 0 &&
              parsedSadesatiTimeline.map((item: any, index: number) => {
                return (
                  <>
                    <tr className="text-sm [&>*]:border-r [&>*]:py-3 [&>*]:px-5 [&>*]:odd:bg-[#FFF7E5]">
                      <td className="whitespace-nowrap">
                        {item && item?.date}
                      </td>
                      <td>{item && item?.summary}</td>
                      <td>{item && item?.saturn_sign}</td>
                      <td>{item && item?.type}</td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>

        <div className="mt-2 rounded-xl border p-3">
          <div className="">Shani Sade Sati: Rising Phase</div>
          <div>
            With Saturn transiting in the 12th house of your Kundli from the
            Moon, the movement marks the beginning of the Shani Sade Sati phase
            for you. During this period, you need to be cautious of instances
            that can lead to financial losses, accidents, relationship woes, bad
            health and even deprivation. During the Shani Sade Sati phase, you
            need to rein your actions and words, especially at your workplace,
            or else you will have to face challenges in adjusting to the
            professional scenario. On the domestic front, family and
            finance-related tensions may prevail. If trying to get married,
            Saturn{"'"}s nature of dealy may overpower that desire of yours. In
            such instances, being patient will come to your emotional aid.
            Consider the Shani Sade Sati phase for working hard towards your
            dreams, as Shani rewards you based on your karma and hard work. You
            are advised not to take high risks in business matters in this
            period.
          </div>
        </div>
        <div className="my-2 rounded-xl border p-3">
          <div className="">Shani Sade Sati: Peak Phase</div>
          <div>
            As you tread into the peak phase of Shani Sade Sati, things might
            get a bit tough for you hereafter. Yet, acknowledging the tough as a
            challenge is advised. Saturn transiting over the natal Moon from
            here may complicate certain prevalent health woes. Your immune
            system may show unprecedented weakness. Hence, do follow a proper
            diet and an active lifestyle. A teen or working adult may suffer
            from depression, unknown fear or phobia, especially of losing their
            source of income during this phase. You also need to be cautious
            about keeping your societal image intact during this phase. On the
            bright side, the peak Shani Sade Sati period will incline you
            towards your spiritual side. You will feel more peaceful if you
            surrender to God. Take spiritual tours during this period with your
            spouse.
          </div>
        </div>
        <div className="rounded-xl border p-3">
          <div className="">Shani Sade Sati: Setting Phase</div>
          <div>
            The setting period of Shani{"'"}s Sade Sati has begun for you with
            Saturn moving into the 2nd house from the natal Moon. The period
            marks financial and domestic woes but less severe in form. However,
            professional decisions should be made after careful consultation
            with expert stakeholders. Also, you need to keep your hands tight
            when it comes to spending money, as expenses might soar for you in
            this phase of Shani Sade Sati. Sudden financial losses and fear of
            theft are also a possibility. A lot of attention needs to be
            diverted towards family and your own self, as if you don{"'"}t do
            so, small problems will turn into bigger problems. There will be
            some delay in getting the results you desire, but good things will
            surely happen for you. If possible, give up any bad habits such as
            smoking and drinking to keep Saturn happy.
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Sadesati;
