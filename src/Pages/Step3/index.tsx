import StepBanner from "../../Components/StepBanner";
import PickAdd from "./PickAdd";
import StepAssembler from "../../Components/StepAssembler";

function Step3() {
  return (
    <StepAssembler>
      <StepBanner actStep="3" />
      <PickAdd />
    </StepAssembler>
  );
}

export default Step3;
