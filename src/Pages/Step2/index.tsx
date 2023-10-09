import StepBanner from "../../Components/StepBanner";
import SelectPlan from "./SelectPlan";
import StepAssembler from "../../Components/StepAssembler";

function Step2() {
  return (
    <StepAssembler>
      <StepBanner actStep="2" />
      <SelectPlan />
    </StepAssembler>
  );
}

export default Step2;
