"use client";
import Section from "@/components/Section";
import React, { useEffect, useState } from "react";

type Props = {
  combinedRemedies: any;
};

const Rudraksha = ({ combinedRemedies }: Props) => {
  const [rudraksh, setRudraksh] = useState<any>({});
  useEffect(() => {
    if (combinedRemedies && combinedRemedies.rudraksh) {
      const parsed = JSON.parse(
        combinedRemedies.rudraksh && combinedRemedies.rudraksh
      );
      setRudraksh(parsed);
    }
  }, [combinedRemedies]);
  return (
    <div className="mb-20  space-y-20">
      <Section>
        <div className="rounded-xl border p-3">
          <div>Rudraksha Suggestion Report</div>
          {rudraksh.detail}
          <div className="mt-5">Rudraksha & its importance</div>
          <div className="my-">
            Rudraksha beads are produced by the {"'"}Rudraksha Tree{"'"}{" "}
            scientifically called Elaeocarpus. The tree grows at a certain
            altitude in the mountains, especially the Himalayas - the home to
            Lord Shiva. The seeds are known to have very unique vibrations that
            aid the spiritual and physical growth of the wearer. In Hindu
            scriptures, it is mentioned that the one who wears Rudraksha is
            blessed with the virtues of Dharma, Artha, Kama, and Moksha. Wearing
            Rudraksha, in fact, allows the wearer to connect with Lord Shiva and
            his divine energies.
          </div>
          <div className="my-">
            It is a belief that the wearer of Rudraksha not only pleases Lord
            Shiva but also Goddess Durga, Lord Indra, Lord Brahma, Lord Vishnu,
            Lord Ganesh, Lord Kartikeya, Lord Aditya, and many other deities. If
            you want to condemn your sins or faults and purify your life, a
            Rudraksha is a good tool to begin with. It is said that a personâ€™s
            sins burn down to ashes by merely looking at a Rudraksha. On the
            other hand, wearing a Rudraksha helps in the fulfilment of the
            desires of the wearer.
          </div>
          <div className="my-">
            The number of faces a Rudraksha has varies from 1-Mukhi to 21-Mukhi,
            all of which are used for different purposes. Henceforth, it is not
            advisable to buy any Rudraksha of your choice, wear it, and expect
            it to work. In fact, wearing the wrong Rudraksha can disturb a
            nativeâ€™s life by exposing him to wrong energies or simply
            overpowering a certain planet or leaving it strengthless. Therefore,
            it is very important that you get a consultation from an astrologer
            to astrologically decide the most suitable Rudraksha for yourself.
          </div>
        </div>
        <div className="my-1 rounded-xl border p-3">
          <div>Rudraksha Recomendation</div>
          {rudraksh.recommend}
        </div>
      </Section>
    </div>
  );
};

export default Rudraksha;
