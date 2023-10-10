import React from "react";
import MoreAstrologer from "./MoreAstrologer";
import CallIntakeForm from "./CallIntakeForm";
import AstrologerDetails from "./AstrologerDetails";

type Props = {};

const CallIntake = (props: Props) => {
  return (
    <div className="gap-[16px] lg:flex">
      <MoreAstrologer />
      <CallIntakeForm text="Call Intake Form" className="" />
      <AstrologerDetails
        name="Anupam"
        speciality="Vedic, Vastu, Face reading "
        rate="Rate your experience"
        language="English, Hindi, Punjabi "
        experience=" 3 years"
      />
    </div>
  );
};

export default CallIntake;
