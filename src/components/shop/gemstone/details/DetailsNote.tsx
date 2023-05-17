import Section from "@/components/Section";
import React from "react";

type Props = {};

const DetailsNote = (props: Props) => {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')] bg-cover bg-repeat pb-8">
      <div className="flex flex-col gap-5">
        <div className=" bg-[#FFF7E5] py-6 text-justify">
          <Section>
            <div className="flex flex-col gap-5">
              <p className="text-center text-[32px] font-bold">
                What are its Benefits?
              </p>
              <p>
                Amethyst is a powerful and protective stone. It is a natural
                tranquiliser, relieves stress and strain, soothes irritability,
                balances mood swings, dispels anger, rage, fear and anxiety. It
                alleviates sadness and grief, and dissolves negativity.
              </p>
            </div>
          </Section>
        </div>
        <div className="py-6 text-justify">
          <Section>
            <div className="flex flex-col gap-5">
              <p className="text-center text-[32px] font-bold">
                Can I get this gemstone with ring/pendant?
              </p>
              <p>
                {`Yes, you can choose among silver ring/pendant, Copper ring/pendant etc. as per your
                requirement. Please note that we always provide you adjustable ring to avoid
                inconvenience about ring size. Also, Pendant doesn't include chain.`}
              </p>
            </div>
          </Section>
        </div>
        <div className="bg-[url('/assets/cloud-bg.webp')] bg-cover  bg-repeat py-6 text-justify text-white">
          <Section>
            <div className="flex flex-col gap-5">
              <p className="text-center text-[32px] font-bold">
                How are these energized and how can you wear it?
              </p>
              <p>
                {`"To purify and activate the amethyst gemstone, take a metal bowl and add Gangajal, Tulsi Leaves, Raw cow's milk, Honey, and Ghee. After immersing the ring/pendant with the gemstone in the bowl, recite the mantra “Om Sham Shanishcharaye Namah” 108 times to energize the stone. The ring/pendant can then be immediately taken out of the bowl, rinsed with water and worn. This ring should ideally be worn on the middle finger of the right hand on a Saturday Evening during Krishna Paksha (waning moon). "
`}
              </p>
            </div>
          </Section>
        </div>
        <div className="py-6 text-justify">
          <Section>
            <div className="flex flex-col gap-5">
              <p className="text-center text-[32px] font-bold">
                How natural and authentic is this gemstone?
              </p>
              <p>
                Customer satisfaction is something we take pride in, and with
                more than 5 lakh happy customers, we can assure you that we
                provide 100 percent Genuine, Authentic, Lab-certified and
                Astrologer-approved gemstones.
              </p>
            </div>
          </Section>
        </div>
        <div className=" bg-[#FFF7E5] py-6 text-justify">
          <Section>
            <div className="flex flex-col gap-5">
              <p className="text-center text-[32px] font-bold">
                What is the return policy and Estimated delivery duration?
              </p>
              <p>
                We have a 7 days Return and Replacement Policy, ONLY if the
                product delivered is damaged or defective. This product requires
                energization of upto 2 or 3 days by the astrologer, following
                which it will be shipped to you. The estimated time of delivery
                is about 7 to 10 days.
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default DetailsNote;
