import Section from "@/components/Section";
import React, { useEffect, useState } from "react";

type Props = {
  combinedRemedies: any;
};

const Gemstone = ({ combinedRemedies }: Props) => {
  const [lifeStone, setLifeStone] = useState<any>({});
  const [luckyStone, setLuckyStone] = useState<any>({});
  const [fortuneStone, setFortuneStone] = useState<any>({});
  useEffect(() => {
    if (combinedRemedies && combinedRemedies.gemSuggestion) {
      const parsed = JSON.parse(
        combinedRemedies.gemSuggestion && combinedRemedies.gemSuggestion
      );
      setLifeStone(parsed.LIFE && parsed.LIFE);
      setLuckyStone(parsed.LUCKY && parsed.LUCKY);
      setFortuneStone(parsed.BENEFIC && parsed.BENEFIC);
    }
  }, [combinedRemedies]);

  return (
    <div className="mb-20  space-y-20">
      <Section>
        <div className="mt-5">Life Stone</div>
        <div className="my-2 rounded-xl border p-2">
          <div>
            A life stone is a lifeStone for the Lagna lord, which the native can
            wear throughout his or her life. A life stone collectively
            influences everything that makes your self-image, i.e. your wealth,
            education, health, business, spouse, intellect, etc.
          </div>

          <div className="flex justify-start gap-10  ">
            <div className="flex flex-col justify-between gap-4 p-2 [&>*]:font-bold">
              <div>Life Stone</div>
              <div>How to wear:</div>
              {/* <div>Mantra:</div> */}
            </div>
            <div className="flex flex-col justify-between gap-4 p-2">
              <div>
                {" "}
                {lifeStone && lifeStone["name"] ? lifeStone["name"] : "-"}{" "}
              </div>

              <div>
                {lifeStone && lifeStone["wear_metal"]
                  ? lifeStone["wear_metal"]
                  : "-"}{" "}
                {lifeStone && lifeStone["wear_finger"]
                  ? `on ${lifeStone["wear_finger"]} finger`
                  : "-"}{" "}
              </div>
              {/* <div>{lifeStone && lifeStone["m_place"] ? lifeStone["m_place"] : "-"}</div> */}
            </div>
          </div>
        </div>
        <div className="mt-5">Lucky Stone</div>
        <div className="my-2 rounded-xl border p-2">
          <div>
            A lucky gemstone is worn to enhance the native{"'"}s luck and open
            new doors to success for him. An individual{"'"}s lucky stone is one
            that keeps luck ticking for him while ensuring the blessing of
            favourable planets upon him.
          </div>

          <div className="flex justify-start gap-10  ">
            <div className="flex flex-col justify-between gap-4 p-2 [&>*]:font-bold">
              <div>lucky Stone</div>
              <div>How to wear:</div>
              {/* <div>Mantra:</div> */}
            </div>
            <div className="flex flex-col justify-between gap-4 p-2">
              <div>
                {" "}
                {luckyStone && luckyStone["name"]
                  ? luckyStone["name"]
                  : "-"}{" "}
              </div>

              <div>
                {luckyStone && luckyStone["wear_metal"]
                  ? luckyStone["wear_metal"]
                  : "-"}{" "}
                {luckyStone && luckyStone["wear_finger"]
                  ? `on ${luckyStone["wear_finger"]} finger`
                  : "-"}{" "}
              </div>
              {/* <div>{lifeStone && lifeStone["m_place"] ? lifeStone["m_place"] : "-"}</div> */}
            </div>
          </div>
        </div>
        <div className="mt-5">Fortune Stone</div>
        <div className="my-2 rounded-xl border p-2">
          <div>
            A lucky gemstone is worn to enhance the native{"'"}s luck and open
            new doors to success for him. An individual{"'"}s lucky stone is one
            that keeps luck ticking for him while ensuring the blessing of
            favourable planets upon him.
          </div>

          <div className="flex justify-start gap-10  ">
            <div className="flex flex-col justify-between gap-4 p-2 [&>*]:font-bold">
              <div>Fortune Stone</div>
              <div>How to wear:</div>
              {/* <div>Mantra:</div> */}
            </div>
            <div className="flex flex-col justify-between gap-4 p-2">
              <div>
                {" "}
                {fortuneStone && fortuneStone["name"]
                  ? fortuneStone["name"]
                  : "-"}{" "}
              </div>

              <div>
                {fortuneStone && fortuneStone["wear_metal"]
                  ? fortuneStone["wear_metal"]
                  : "-"}{" "}
                {fortuneStone && fortuneStone["wear_finger"]
                  ? `on ${fortuneStone["wear_finger"]} finger`
                  : "-"}{" "}
              </div>
              {/* <div>{lifeStone && lifeStone["m_place"] ? lifeStone["m_place"] : "-"}</div> */}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Gemstone;
