import "./AddOnsTotal.scss";
import { useSelector } from "react-redux";

interface AddOnsTotalProps {
  title: string;
  cost: number;
  isSelected: boolean;
}

function AddOnsTotal({ title, cost, isSelected }: AddOnsTotalProps) {
  const { monthly } = useSelector((state: any) => state.monthly);
  const unit = monthly ? "mo" : "yr";

  return (
    <>
      {isSelected && (
        <div className="total-calcC">
          <p className="total-txtC">{title}</p>
          <p className="total-sum">
            +${cost}/{unit}
          </p>
        </div>
      )}
    </>
  );
}

export default AddOnsTotal;
