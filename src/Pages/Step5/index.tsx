import StepBanner from "../../Components/StepBanner";
import ThankYou from "./ThankYou";
import StepAssembler from "../../Components/StepAssembler";

function Step5() {
  return (
    <StepAssembler>
      <StepBanner actStep="4" />
      <ThankYou />
    </StepAssembler>
  );
}

export default Step5;
