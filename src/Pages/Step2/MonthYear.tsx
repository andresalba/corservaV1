import SwitchYM from "../../Components/SwitchYM";
import "./MonthYear.scss";
import { useDispatch, useSelector } from "react-redux";
import { periodset } from "../../redux/monthly";
import { updatePlanCostByTitle } from "../../redux/plan";

function MonthYear() {
  const { monthly } = useSelector((state: any) => state.monthly);
  const plan = useSelector((state: any) => state.plan);
  const dispatch = useDispatch();

  const toggleSwitch = () => {
    dispatch(periodset());
    ChangePlanValue();
  };

  const ChangePlanValue = () => {
    if (monthly) {
      plan.forEach((item: any) => {
        const newCost = item.cost * 10;
        dispatch(updatePlanCostByTitle({ title: item.title, newCost }));
      });
    } else {
      plan.forEach((item: any) => {
        const newCost = item.cost / 10;
        dispatch(updatePlanCostByTitle({ title: item.title, newCost }));
      });
    }
  };

  return (
    <div className="step-period">
      <div className={monthly ? "select-on" : "select-off"}>Monthly</div>
      <SwitchYM
        isChecked={!monthly}
        onChange={toggleSwitch}
        className="step-switch"
      />
      <div className={monthly ? "select-off" : "select-on"}>Yearly</div>
    </div>
  );
}

export default MonthYear;
