import "./StepIndicator.scss";

interface StepIndicatorProps {
  num: string;
  subtitle: string;
  actStep: string;
}

function StepIndicator({ num, subtitle, actStep }: StepIndicatorProps) {
  const stepIsActive = num === actStep ? "step-indicator" : "step-indinull";

  return (
    <div className="step-container">
      <div className={stepIsActive}>{num}</div>
      <div className="step-info">
        <p className="step-num">STEP {num}</p>
        <p className="step-current">{subtitle}</p>
      </div>
    </div>
  );
}

export default StepIndicator;
