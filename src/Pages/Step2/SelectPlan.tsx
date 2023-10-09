import "./SelectPlan.scss";
import Plan from "./Plan";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import MonthYear from "./MonthYear";
import { useSelector } from "react-redux";

function SelectPlan() {
  const plan = useSelector((state: any) => state.plan);

  return (
    <div className="select-cont">
      <Header
        title="Select your plan"
        txt="You have the option of monthly or yearly billing"
      />
      <div className="select-plans">
        {plan.map((item: any) => (
          <Plan
            key={item.title}
            surc={item.source}
            title={item.title}
            cost={item.cost}
            promo={item.promo}
          />
        ))}
      </div>
      <MonthYear />
      <div className="select-btncont">
        <Footer back="/" next="/step3" />
      </div>
    </div>
  );
}

export default SelectPlan;
