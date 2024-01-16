"use client";
import Section from "@/components/Section";
import React, { useEffect, useState } from "react";

type Props = {
  kalsarpa: any;
};

const Kalsarpa = ({ kalsarpa }: Props) => {
  const [parsedKalpsara, setParsedKalpsara] = useState<any>({});
  useEffect(() => {
    if (kalsarpa) {
      console.log(JSON.parse(kalsarpa));
      setParsedKalpsara(JSON.parse(kalsarpa));
    }
  }, [kalsarpa]);
  return (
    <div className="mb-20  space-y-20">
      <Section>
        <div
          className={`flex items-center gap-4 rounded-xl border p-3 ${
            parsedKalpsara && parsedKalpsara.present
              ? " border-[red]"
              : " border-[green]"
          }`}
        >
          <div
            className={`flex h-[80px] w-[80px] items-center justify-center rounded-full text-color_1
       ${parsedKalpsara && parsedKalpsara.present ? "bg-[red]" : "bg-[green]"}`}
          >
            {parsedKalpsara && parsedKalpsara.present ? "Yes" : "No"}
          </div>
          <div className="w-[80%]">
            {parsedKalpsara && parsedKalpsara.present
              ? "Kalsharpa Dosha Is Present In Kundli."
              : "Kalsharpa Dosha Is not Present In Kundli."}
          </div>
        </div>
        <div
          className="mt-2"
          dangerouslySetInnerHTML={{
            __html:
              parsedKalpsara &&
              parsedKalpsara.report &&
              parsedKalpsara.report.report,
          }}
        ></div>
      </Section>
    </div>
  );
};

export default Kalsarpa;
