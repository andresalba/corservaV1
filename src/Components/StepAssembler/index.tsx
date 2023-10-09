import "./StepAssembler.scss";

function StepAssembler(props: any) {
  return (
    <div className="container">
      <div className="step">{props.children}</div>
    </div>
  );
}

export default StepAssembler;
