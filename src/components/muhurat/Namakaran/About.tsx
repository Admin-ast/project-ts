import Section from "@/components/Section";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="bg-[url('/horoscope-bg.svg')] bg-cover py-8 lg:py-[51px]">
      <Section>
        <div className="">
          <div className="flex flex-col space-y-6">
            <p className="text-center text-xl font-bold md:text-3xl">
              Naamkaran Muhurat 2023
            </p>
            <div className="text-justify">
              <p>
                {` Naamkaran Sanskar has a significant role in Hinduism. On a
                typical day, parents name their children casually in modern
                times. However, following our religious traditions, a newborn
                child must be named at the Naamkaran ritual while being watched
                over by the family's elders. A person's name confirms their
                existence. The significance of the naming ceremony will be
                explained to you in this article, along with information on the
                fortunate times to hold one in 2023. The Naamkaran ritual, like
                other auspicious events, is carried out according to Shubh
                Muhurat. For those with religious origins, the naming ritual is
                crucial and has the most astrological importance. For a newborn
                child and his/her parents, the naming ceremony is crucial.
                Therefore, it is important to conduct it at a favourable time.
                Here, the question why a naming ceremony should be held at a
                specific muhurat could come up. And this article will assist you
                in getting comprehensive solutions to all of your inquiries.`}
              </p>
              <p>
                {`  The naming ceremony for a newborn infant is one of the sixteen
                rites listed in Hindu texts. The naming ceremony is a child's
                first and most important Sanskar, and if it is carried out in
                front of family members and the child's parents, it has a
                positive effect on the child's life. As a result, a pandit or
                astrologer should preside over the child's naming ceremony on a
                lucky day. The benefits of the naming ceremony last a child's
                entire life.`}
              </p>
              <p>
                {` Vedic tradition holds that your name carries vital energy that
                enables you to resonate with cosmic energy and fully develop in
                both the spiritual and material worlds. Hinduism has several
                ceremonies throughout a person's life, beginning at birth. The
                baby's naming ceremony is one of such important rites. An
                official ceremony is held to name a kid.`}
              </p>
              <p>
                {` The tradition of naming ceremonies helps the child to attain
                good societal power when they grow up. But it is imperative to
                find the right Auspicious Muhurat for every function. This
                article will provide all the details of the dates and timings of
                your son or daughter's naming ceremony in 2023.`}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
