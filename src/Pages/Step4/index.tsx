import StepBanner from "../../Components/StepBanner";
import Finishing from "./Finishing";
import StepAssembler from "../../Components/StepAssembler";

function Step4() {
  return (
    <StepAssembler>
      <StepBanner actStep="4" />
      <Finishing />
    </StepAssembler>
  );
}

export default Step4;
