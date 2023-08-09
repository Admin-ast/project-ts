import Section from "@/components/Section";
import { postFetcher } from "@/service";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

type Props = {};

const Yoga = (props: Props) => {
  const [YogaDetails, setYogaDetails] = useState<any>([]);
  useEffect(() => {
    const planetResponse = async () => {
      let bodyData: any;
      if (typeof window !== "undefined") {
        console.log("kundilll", localStorage.getItem("kundliData"));
        bodyData = localStorage.getItem("kundliData");
        var jsonobject = JSON.parse(bodyData);
        jsonobject.varshaphal_year = "2023";
        bodyData = JSON.stringify(jsonobject);
        
      }
      const vasrhsphalyoga = await postFetcher("/kundli/varshaphal_yoga", bodyData);

      if (vasrhsphalyoga.status) {
        console.log(vasrhsphalyoga?.res);
        setYogaDetails(JSON.parse(vasrhsphalyoga?.res));
      } else {
        toast.error(vasrhsphalyoga.msg);
      }
    };
        planetResponse();
  }, []);

  return (
    <div className="mb-20 space-y-20">
      <Section>
        <div>Yoga </div>
        <div className="my-1 rounded-[10px] border-2 border-slate-300 p-5">
          <div className="flex flex-col gap-2  text-justify text-gray-700">
            <div className="items-center justify-between text-slate-900">
              <p className="text-lg font-bold d-block">Adhi Yoga</p><br></br>
              <p className="text-lg">Benefits are situated in sixth, seventh and eighth houses from the Moon.</p>
              <p>Adhi Yoga is a Vedic Combination that forms in the horoscope when the three benefic planets, Jupiter, Venus, and Mercury, are present in the 6th, 7th or 8th house from the Moon. The presence of this special Yoga is significant as it brings happiness and stability in the native’s life. This Yoga elevates the joy in life with sudden riches, promotion, better ability to inspire trust and respect in others. It also leads to a substantial increase in benign and philanthropic nature. </p>
            </div>
          </div>
        </div>
        <div className="my-1 rounded-[10px] border-2 border-slate-300 p-5">
          <div className="flex flex-col gap-2  text-justify text-gray-700">
            <div className="items-center justify-between text-slate-900">
              <p className="text-lg font-bold d-block">Saraswati Yoga</p><br></br>
              <p className="text-lg">Jupiter, Mercury, and Venus are located in a Kendra(Ascendant, 4th house, 7th house, 10th house) or Trikona(5th and 9th house) .</p>
              <p>So Mercury, Jupiter, and Venus these three natural benefic planets should be placed each in Lagna or in 2nd, 4th, 5th, 7th, 9th or 10th house from Ascendant and Jupiter must be strong either by exaltation or my own sign or by vargottama. Results of this Yoga is so wonderful that it is one of my personal favorite Planetary Union. </p>
            </div>
          </div>
        </div>
        <div className="my-1 rounded-[10px] border-2 border-slate-300 p-5">
          <div className="flex flex-col gap-2  text-justify text-gray-700">
            <div className="items-center justify-between text-slate-900">
              <p className="text-lg font-bold d-block">Budhaditya Yoga</p><br></br>
              <p className="text-lg">This conjunctions of planets forms a Yoga and the capacity of Yogas to deliver results increases..</p>
              <p>The type of planets that form a Yoga will decide the type of results that can be expected out of the combination, if it is formed between the benefic or friendly planets then it will give auspicious results, otherwise it may lead to inauspicious results. </p>
            </div>
          </div>
        </div>
      </Section>

    </div>
  );
};

export default Yoga;
