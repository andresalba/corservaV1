import PersonalInfo from "./PersonalInfo";
import StepBanner from "../../Components/StepBanner";
import StepAssembler from "../../Components/StepAssembler";

function Step1() {
  return (
    <StepAssembler>
      <StepBanner actStep="1" />
      <PersonalInfo />
    </StepAssembler>
  );
}

export default Step1;
