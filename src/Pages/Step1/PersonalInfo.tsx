import { useEffect, useState } from "react";
import "./PersonalInfo.scss";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import InfoButton from "../../Components/InfoButton";

function PersonalInfo() {
  const [name, setName] = useState("");
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isNameComplete, setIsNameComplete] = useState(false);

  const [email, setEmail] = useState("");
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailComplete, setIsEmailComplete] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneNumberEmpty, setIsPhoneNumberEmpty] = useState(false);
  const [isPhoneNumberNumeric, setIsPhoneNumberNumeric] = useState(true);
  const [isPhoneNumberComplete, setIsPhoneNumberComplete] = useState(false);

  const [complete, setComplete] = useState(false);

  const handleNameChange = (e: any) => {
    const newName = e.target.value;
    setName(newName);
    setIsNameEmpty(newName.trim() === "");
    if (!isNameEmpty) {
      setIsNameComplete(true);
    } else {
      setIsNameComplete(false);
    }
  };
  const handleEmailChange = (e: any) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailEmpty(newEmail.trim() === "");
    setIsEmailValid(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(newEmail));
    if (!isEmailEmpty && isEmailValid) {
      setIsEmailComplete(true);
    } else {
      setIsEmailComplete(false);
    }
  };
  const handlePhoneNumberChange = (e: any) => {
    const newPhoneNumber = e.target.value;
    setPhoneNumber(newPhoneNumber);
    setIsPhoneNumberEmpty(newPhoneNumber.trim() === "");
    setIsPhoneNumberNumeric(/^\d+$/.test(newPhoneNumber));
    if (!isPhoneNumberEmpty && isPhoneNumberNumeric) {
      setIsPhoneNumberComplete(true);
    } else {
      setIsPhoneNumberComplete(false);
    }
  };

  const handleButtonClick = () => {
    //si name mail o phone 3 ifs se controlan los alerts
    if (isNameComplete && isEmailComplete && isPhoneNumberComplete) {
      setComplete(true);
    } else {
      setComplete(false);
    }
  };

  useEffect(() => {
    if (isEmailComplete && isPhoneNumberComplete && isNameComplete) {
      setComplete(true);
    } else {
      setComplete(false);
    }
  }, [isEmailComplete, isPhoneNumberComplete, isNameComplete]);

  return (
    <div className="personal-cont">
      <Header
        title="Personal info"
        txt="Please provide your name, email address, and phone number."
      />
      <div>
        <div className="personal-fill">
          <div>
            <div className="person-error">
              <label htmlFor="name">Name</label>
              {isNameEmpty && (
                <span className="error-text">This field is required</span>
              )}
            </div>
            <input
              className={`personal-input ${isNameEmpty ? "empty" : ""}`}
              placeholder="e.g. Stephen King"
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div>
            <div className="person-error">
              <label htmlFor="email">Email Address</label>
              {isEmailEmpty && (
                <span className="error-text">This field is required</span>
              )}
            </div>
            <input
              className={`personal-input ${
                isEmailEmpty || !isEmailValid ? "empty" : ""
              }`}
              placeholder="e.g. stephenking@lorem.com"
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <div className="person-error">
              <label htmlFor="phoneNumber">Phone Number</label>
              {isPhoneNumberEmpty && (
                <span className="error-text">This field is required</span>
              )}
            </div>
            <input
              className={`personal-input ${
                isPhoneNumberEmpty || !isPhoneNumberNumeric ? "empty" : ""
              }`}
              placeholder="e.g. +1 234 567 890"
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
            />
          </div>
        </div>
        <div className="button-container">
          {complete ? (
            <div className="footer-cont">
              <Link to="step2" className="footer-nextbtn">
                Next Step
              </Link>
            </div>
          ) : (
            <InfoButton onClick={handleButtonClick} />
          )}
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
