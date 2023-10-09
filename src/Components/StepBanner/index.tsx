import StepIndicator from "./StepIndicator";
import "./StepBanner.scss";

interface StepBannerProps {
  actStep: string;
}

function StepBanner({ actStep }: StepBannerProps) {
  return (
    <div className="step-banner">
      <div className="step-steppingStones">
        <StepIndicator num="1" subtitle="YOUR INFO" actStep={actStep} />
        <StepIndicator num="2" subtitle="SELECT PLAN" actStep={actStep} />
        <StepIndicator num="3" subtitle="ADD-ONS" actStep={actStep} />
        <StepIndicator num="4" subtitle="SUMMARY" actStep={actStep} />
      </div>
    </div>
  );
}

export default StepBanner;
