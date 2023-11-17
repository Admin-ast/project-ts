import React from "react";
import Section from "../Section";

type Props = {};

function About({}: Props) {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')] bg-cover py-8 lg:py-[51px]">
      <Section>
        <div className="">
          <h2 className="mb-[18px] text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-[40px]">
            WHY ASTROLOGY ?
          </h2>
          <p className="text-center text-[24px]">
            {" "}
            Astrology reveals the will of the God
          </p>
          <p className="text-justify text-base font-medium">
            Astrology, type of divination that involves the forecasting of
            earthly and human events through the observation and interpretation
            of the fixed stars, the Sun, the Moon, and the planets. Devotees
            believe that an understanding of the influence of the planets and
            stars on earthly affairs allows them to both predict and affect the
            destinies of individuals, groups, and nations. Though often regarded
            as a science throughout its history, astrology is widely considered
            today to be diametrically opposed to the findings and theories of
            modern Western science. Astrology, type of divination that involves
            the forecasting of earthly and human events through the observation
            and interpretation of the fixed stars, the Sun, the Moon, and the
            planets. Devotees believe that an understanding of the influence of
            the planets and stars on earthly affairs allows them to both predict
            and affect the destinies of individuals, groups, and nations. Though
            often regarded as a science throughout its history, astrology is
            widely considered today to be diametrically opposed to the findings
            and theories of modern Western science. Astrology, type of
            divination that involves the forecasting of earthly and human events
            through the observation and interpretation of the fixed stars, the
            Sun, the Moon, and the planets. Devotees believe that an
            understanding of the influence of the planets and stars on earthly
            affairs allows them to both predict and affect the destinies of
            individuals, groups, and nations. Though often regarded as a science
            throughout its history, astrology is widely considered today to be
            diametrically opposed to the findings and theories of modern Western
            science. Astrology, type of divination that involves the forecasting
            of earthly and human events through the observation and
            interpretation of the fixed stars, the Sun, the Moon, and the
            planets. Devotees believe that an understanding of the influence of
            the planets and stars on earthly affairs allows them to both predict
            and affect the destinies of individuals, groups, and nations. Though
            often regarded as a science throughout its history, astrology is
            widely considered today to be diametrically opposed to the findings
            and theories of modern Western science.
          </p>
        </div>
      </Section>
    </div>
  );
}

export default About;
