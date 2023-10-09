import { Link } from "react-router-dom";
import "./Footer.scss";

interface FooterProps {
  back: string;
  next: string;
}

function Footer({ back, next }: FooterProps) {
  return (
    <>
      <Link to={back} className="footer-backbtn">
        Go Back
      </Link>
      <div className="footer-cont">
        <Link to={next} className="footer-nextbtn">
          Next Step
        </Link>
      </div>
    </>
  );
}

export default Footer;
