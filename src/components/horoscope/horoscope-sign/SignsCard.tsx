import { Card } from "@/components/home/Horoscope";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import React, { Key } from "react";

type Props = {
  cardDetail: Card[];
};

function SignsCard({ cardDetail }: Props) {
  return (
    <div className="py-8 lg:py-[45px]">
      <Section>
        <div className="">
          <div className="my-9">
            <h2 className="text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
              Read For Other Signs
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-[14px] md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
            {cardDetail?.map((item: Card, index: Key) => (
              <div key={index} className="mx-auto">
                <Link href={item.link}>
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={210}
                    height={294}
                    loading={"lazy"}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

export default SignsCard;
