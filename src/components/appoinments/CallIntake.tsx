import React from "react";
import MoreAstrologer from "./MoreAstrologer";
import CallIntakeForm from "./CallIntakeForm";
import AstrologerDetails from "./AstrologerDetails";

type Props = {
  id:string;
  name:string;
};

const CallIntake = ({id, name}: Props) => {
  return (
    <div >
      {/* <MoreAstrologer /> */}
      <CallIntakeForm id={id}  text="Call Intake Form" type="Call" className="" name={name} />
      {/* <AstrologerDetails
        name="Anupam"
        speciality="Vedic, Vastu, Face reading "
        rate="Rate your experience"
        language="English, Hindi, Punjabi "
        experience=" 3 years"
        className=""
      /> */}
    </div>
  );
};

export default CallIntake;
