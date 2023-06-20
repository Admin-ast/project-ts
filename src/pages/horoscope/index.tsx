import Section from "@/components/Section";
import Hero from "@/components/common/Hero";
import { postFetcher } from "@/service";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
function Index() {
  const [loading, setLoading] = useState<any>(false);
  const [type, setType] = useState<any>("");
  const [zodiac, setZodaic] = useState<any>("");
  const [horo, setHoro] = useState<any>({});
  const router = useRouter();
  const zodaics = [
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "saggitarius",
    "capricorn",
    "aquarius",
    "pisces",
  ];
  const availType = ["yesterday", "today", "tomorrow", "monthly", "yearly"];
  useEffect(() => {
    const { type, zodiac } = router.query;
    setLoading(true);
    setHoro(null);
    setType(type);
    setZodaic(zodiac);
    if (!availType.includes(type)) {
      setType("today");
    }
    if (!zodaics.includes(zodiac)) {
      setZodaic("aries");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);
  useEffect(() => {
    const horos = async () => {
      const result = await postFetcher(
        `/horoscope/${type}?zodiac=${zodiac}`,
        ""
      );
      if (result?.res) {
        setHoro(result.res);
      }
      setLoading(false);
    };
    if (type && zodiac) {
      horos();
    }
  }, [type, zodiac]);

  return (
    <>
      <Hero text="Horoscope" />
      <Section>
        <div className="my-5 justify-start  gap-5 md:flex">
          <div>
            <div className="whitespace-nowrap font-semibold capitalize">
              <div className="text-[23px]">SELECT OTHER SIGN</div>
              <select
                name={zodiac}
                id="cars"
                value={zodiac}
                onChange={(e) => {
                  router.push(
                    `/horoscope?type=${type}&zodiac=${e.target.value}`
                  );
                }}
                className="w-full border p-2"
              >
                <option value="aries">Aries</option>
                <option value="taurus">Taurus</option>
                <option value="gemini">Gemini</option>
                <option value="cancer">Cancer</option>
                <option value="leo">Leo</option>
                <option value="virgo">Virgo</option>
                <option value="libra">Libra</option>
                <option value="scorpio">Scorpio</option>
                <option value="saggitarius">Saggitarius</option>
                <option value="capricorn">Capricorn</option>
                <option value="aquarius">Aquarius</option>
                <option value="pisces">Pisces</option>
              </select>
            </div>
            <div className="mt-4 text-[23px] font-bold">Horoscops:</div>
            <div className="mt-2 ml-5 flex flex-col gap-5  text-[darkgray]">
              {availType.map((item, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className={`${
                        type === item ? "font-semibold text-[black]" : ""
                      } cursor-pointer`}
                      onClick={() => {
                        router.push(`/horoscope?type=${item}&zodiac=${zodiac}`);
                      }}
                    >
                      <span className="capitalize">{item}</span>
                      {"'"}s Horoscope
                    </div>
                  </>
                );
              })}
              {/* <div>Today{"'"}s Horoscope</div>
              <div>Tomorrow{"'"}s Horoscope</div>
              <div>Monthly{"'"}s Horoscope</div>
              <div>Yearly{"'"}s Horoscope</div> */}
            </div>
          </div>
          {loading && (
            <div className="my-10 w-full text-center font-semibold">
              Loading
            </div>
          )}
          {!loading && horo && type !== "monthly" && (
            <div className="mt-5 w-full md:mt-0">
              <div className="text-center font-semibold">
                <span className=" capitalize ">{zodiac} </span>
                {type}
                {"'"}s Horoscope
              </div>
              <div className="">{horo?.prediction_date}</div>
              <div>
                <span>Personal: </span>
                {horo?.prediction?.personal_life}
              </div>
              <div className="mt-2">
                <span>Travel: </span>
                {horo?.prediction?.travel}
              </div>
              <div className="mt-2">
                <span>Profession: </span>
                {horo?.prediction?.profession}
              </div>
              <div className="mt-2">
                <span>Health: </span>
                {horo?.prediction?.health}
              </div>
              <div className="mt-2">
                <span>Emotions: </span>
                {horo?.prediction?.emotions}
              </div>
            </div>
          )}
          {!loading && horo && type == "monthly" && (
            <>
              <div className=" ">
                <div className="text-center font-semibold">
                  <span className=" capitalize ">{zodiac} </span>
                  {type}
                  {"'"}s Horoscope
                </div>
                <div className="font-semibold">{horo?.prediction_month}</div>
                <div>
                  {horo?.prediction?.map((item: any, index: any) => {
                    return (
                      <div key={index} className="my-2 ">
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </Section>
    </>
  );
}

export default Index;
