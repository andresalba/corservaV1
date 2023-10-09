import "./PickButton.scss";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import { updateAddOnSelectedByTitle } from "../../redux/addon";

interface PickButtonProps {
  title: string;
  txt: string;
  cost: number;
}

function PickButton({ title, txt, cost }: PickButtonProps) {
  const { monthly } = useSelector((state: any) => state.monthly);
  const addons = useSelector((state: any) => state.addons);
  const thisAddon = addons.find((addon: any) => addon.title === title);
  const dispatch = useDispatch();

  const unit = monthly ? "mo" : "yr";

  const StyledBox = styled(Box)`
    width: 100%;
    height: 81px;
    border: solid 1px;
    border-radius: 10px;
    border-color: ${thisAddon.isSelected ? "#483eff" : "#D6D9E6"};
    background-color: ${thisAddon.isSelected ? "#F8F9FF" : "white"};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    &:hover {
      border-color: #483eff;
    }
  `;

  const checkedStyle = () => {
    dispatch(updateAddOnSelectedByTitle({ title }));
  };

  return (
    <StyledBox onClick={checkedStyle}>
      <div className="pick-offer">
        <div className="pick-check">
          {thisAddon.isSelected ? (
            <img src="/checkY.png" alt="button not checked" />
          ) : (
            <img src="/checkN.png" alt="button checked" />
          )}
        </div>
        <div className="pick-check">
          <p className="pick-tittle">{title}</p>
          <p className="pick-txt">{txt}</p>
        </div>
      </div>
      <p className="pick-cost">
        +${cost}/{unit}
      </p>
    </StyledBox>
  );
}

export default PickButton;
