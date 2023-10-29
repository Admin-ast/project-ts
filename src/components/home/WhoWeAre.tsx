import Image from "next/image";
import React from "react";
import Button from "../common/Button";
import Section from "../Section";

type Props = {};

function WhoWeAre({}: Props) {
  return (
    <div className=" py-12 shadow-xl">
      <Section>
        <div className="flex flex-col items-center space-y-4 lg:grid lg:grid-cols-12 lg:space-x-6  lg:space-y-0">
          <div className="col-span-3">
            <Image
              src="/assets/home/who.webp"
              alt="who"
              width={252}
              height={348}
              loading={"lazy"}
            />
          </div>
          <div className="col-span-9 space-y-6">
            <h2 className="mb-[18px] text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-[40px]">
              Who We Are?
            </h2>
            <p className="text-justify text-base font-medium">
              Astrology, type of divination that involves the forecasting of
              earthly and human events through the observation and
              interpretation of the fixed stars, the Sun, the Moon, and the
              planets. Devotees believe that an understanding of the influence
              of the planets and stars on earthly affairs allows them to both
              predict and affect the destinies of individuals, groups, and
              nations. Though often regarded as a science throughout its
              history, astrology is widely considered today to be diametrically
              opposed to the findings and theories of modern Western science.
              Astrology, type of divination that involves the forecasting of
              earthly and human events through the observation and
              interpretation of the fixed stars, the Sun, the Moon, and the
              planets. Devotees believe that an understanding of the influence
              of the planets and stars on earthly affairs allows them to both
              predict and affect the destinies of individuals, groups, and
              nations. Though often regarded as a science throughout its
              history, astrology is widely considered today to be diametrically
              opposed to the findings and theories of modern Western science.
              Astrology, type of divination that involves the forecasting of
              earthly and human events through the observation and
              interpretation of the fixed stars, the Sun, the Moon, and the
              planets. Devotees believe that. earthly affairs allows them to
              both predict and affect the destinies of individuals, groups, and
              nations. Though often regarded as a science throughout its
              history, astrology is widely considered today to be diametrica.
            </p>
            <Button
              text="Contact Us"
              className="mx-auto bg-gradient-to-b from-[#fb7038] to-[#df625b]"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}

export default WhoWeAre;
