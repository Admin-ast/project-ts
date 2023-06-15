import Section from "@/components/Section";
import React, { useEffect, useState } from "react";

type Props = {
  manglik: any;
};

const Manglik = ({ manglik }: Props) => {
  const [parsedManglik, setParsedManglik] = useState<any>({});
  useEffect(() => {
    if (manglik) {
      console.log(JSON.parse(manglik));
      setParsedManglik(JSON.parse(manglik));
    }
  }, [manglik]);

  return (
    <div className="mb-20  space-y-20">
      <Section>
        <div
          className={`flex items-center gap-4 rounded-xl border p-3 ${
            parsedManglik && parsedManglik.is_present
              ? " border-[red]"
              : " border-[green]"
          }`}
        >
          <div
            className={`flex h-[80px] w-[80px] items-center justify-center rounded-full text-color_1
         ${
           parsedManglik && parsedManglik.is_present ? "bg-[red]" : "bg-[green]"
         }`}
          >
            {parsedManglik && parsedManglik.is_present ? "Yes" : "No"}
          </div>
          <div className="w-[80%]">{parsedManglik.manglik_report}</div>

          {parsedManglik && parsedManglik.is_present
            ? parsedManglik.manglik_cancel_rule &&
              parsedManglik.manglik_cancel_rule.length > 0 && (
                <div>
                  {parsedManglik.manglik_cancel_rule.map(
                    (item: any, index: number) => {
                      return <div key={index}>{item}</div>;
                    }
                  )}
                </div>
              )
            : parsedManglik.manglik_present_rule &&
              parsedManglik.manglik_present_rule.length > 0 && (
                <div>
                  {parsedManglik.manglik_present_rule.map(
                    (item: any, index: number) => {
                      return <div key={index}>{item}</div>;
                    }
                  )}
                </div>
              )}
        </div>
      </Section>
    </div>
  );
};

export default Manglik;
