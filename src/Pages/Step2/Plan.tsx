import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import "./Plan.scss";
import { useDispatch, useSelector } from "react-redux";
import { updatePlanSelectedStatusByTitle } from "../../redux/plan";
import { resetPlanSelectedStatus } from "../../redux/plan";

function Plan({
  surc,
  title,
  cost,
  promo,
}: {
  surc: any;
  title: any;
  cost: any;
  promo: any;
}) {
  const { monthly } = useSelector((state: any) => state.monthly);
  const dispatch = useDispatch();
  const plan = useSelector((state: any) => state.plan);
  const thisPlan = plan.find((item: any) => item.title === title);
  const unit = monthly ? "mo" : "yr";
  const StyledBox = styled(Box)`
    width: 138px;
    height: 100%px;
    padding-bottom: 16px;
    background-color: ${thisPlan.isSelected ? "#f8f9ff" : "white"};
    border: solid 1px;
    border-radius: 10px;
    border-color: ${thisPlan.isSelected ? "#483eff" : "#d6d9e6"};
    cursor: pointer;

    &:hover {
      border-color: #483eff;
    }
  `;

  const handleBoxClick = () => {
    dispatch(resetPlanSelectedStatus());
    dispatch(updatePlanSelectedStatusByTitle({ title }));
    //alert(thisPlan.title+ " is " +thisPlan.isSelected)
  };

  return (
    <StyledBox onClick={handleBoxClick}>
      <div className="imgCont">
        <img src={surc} alt="Image" className="imag" />
        <div className="divtitle">{title}</div>
        <div className="divcost">
          ${cost}/{unit}
        </div>
        {!monthly && <div className="divpromo">{promo} months free</div>}
      </div>
    </StyledBox>
  );
}

export default Plan;
