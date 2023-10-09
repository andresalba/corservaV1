import { Link } from "react-router-dom";
import Total from "./Total";
import Header from "../../Components/Header";
import "./Finishing.scss";

const handleLinkButtonClick = () => {
  console.log("click step4");
};

function Finishing() {
  return (
    <div className="finish-cont">
      <Header
        title="Finishing up"
        txt="Double-check everything looks OK before confirming."
      />
      <Total />
      <div className="finish-btncont">
        <Link to="/step3" className="footer-backbtn">
          Go Back
        </Link>
        <div className="finish-btn">
          <Link
            to="/step5"
            className="footer-nextbtn"
            onClick={handleLinkButtonClick}
          >
            Confirm
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Finishing;
