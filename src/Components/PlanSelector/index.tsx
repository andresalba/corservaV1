import { useState } from "react";
import "./PlanSelector.scss";

function PlanSelector() {
  const [selectedOption, setSelectedOption] = useState("radio1");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label className="radio-container">
        <input
          type="radio"
          name="radioGroup"
          value="radio1"
          checked={selectedOption === "radio1"}
          onChange={handleRadioChange}
          className="radio-input"
        />
        <div className="img-cont">
          <img src="/arcade.png" alt="Image" className="imag" />
          <div className="divtitle">Arcade</div>
          <div className="divcost">$90/yr</div>
          <div className="divpromo">2 months free</div>
        </div>
      </label>

      <label className="radio-container">
        <input
          type="radio"
          name="radioGroup"
          value="radio1"
          checked={selectedOption === "radio1"}
          onChange={handleRadioChange}
          className="radio-input"
        />
        <div className="img-cont">
          <img src="/advanced.png" alt="Image" className="imag" />
          <div className="divtitle">Advanced</div>
          <div className="divcost">$120/yr</div>
          <div className="divpromo">2 months free</div>
        </div>
      </label>

      <label className="radio-container">
        <input
          type="radio"
          name="radioGroup"
          value="radio1"
          checked={selectedOption === "radio1"}
          onChange={handleRadioChange}
          className="radio-input"
        />
        <div className="img-cont">
          <img src="/pro.png" alt="Image" className="imag" />
          <div className="divtitle">Pro</div>
          <div className="divcost">$150/yr</div>
          <div className="divpromo">2 months free</div>
        </div>
      </label>
    </div>
  );
}

export default PlanSelector;
