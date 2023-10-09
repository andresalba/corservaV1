import "./PickAdd.scss";
import PickButton from "./PickButton";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useSelector } from "react-redux";

function PickAdd() {
  const addons = useSelector((state: any) => state.addons);

  return (
    <div className="pick-cont">
      <Header
        title="Pick add-ons"
        txt="Add-ons help enhance your gaming experience."
      />
      <div className="step-btns">
        {addons.map((item: any) => (
          <PickButton
            key={item.title}
            title={item.title}
            txt={item.txt}
            cost={item.cost}
          />
        ))}
      </div>
      <div className="pick-btncont">
        <Footer back="/step2" next="/step4" />
      </div>
    </div>
  );
}

export default PickAdd;
