import Box from "@mui/material/Box";
import "./Total.scss";
import { Link } from "react-router-dom";
import AddOnsTotal from "./AddOnsTotal";
import { useSelector } from "react-redux";

const estilos = {
  box: {
    bgcolor: "#F8F9FF",
    width: "100",
    height: "228px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
  },
};

function Total() {
  const plan = useSelector((state: any) => state.plan);
  const selectedPlan = plan.find((item: any) => item.isSelected); // Find the selected plan
  const addons = useSelector((state: any) => state.addons);
  const { monthly } = useSelector((state: any) => state.monthly);
  const unit = monthly ? "mo" : "yr";

  const totalCost =
    selectedPlan?.cost +
    addons.reduce((acc: number, item: any) => {
      if (item.isSelected) {
        acc += item.cost;
      }
      return acc;
    }, 0);

  return (
    <>
      <Box sx={estilos.box}>
        <div className="total-calcP">
          <div>
            <div className="total-bold">{selectedPlan?.title} (Monthly)</div>
            <Link to="/step2" className="total-txtP">
              Change
            </Link>
          </div>
          <p className="total-bold">
            ${selectedPlan?.cost}/{unit}
          </p>
        </div>
        <div className="total-divi">
          <div className="divider"></div>
        </div>
        {addons.map((item: any) => (
          <AddOnsTotal
            key={item.title}
            title={item.title}
            cost={item.cost}
            isSelected={item.isSelected}
          />
        ))}
      </Box>
      <div className="total-calcP">
        <div className="total-txtP">Total Per {unit}</div>
        <div className="total-result">
          +${totalCost}/{unit}
        </div>
      </div>
    </>
  );
}

export default Total;
