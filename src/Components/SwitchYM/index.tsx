import React, { FC } from "react";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/system";

import { SwitchYMI } from "./interface";

const SwitchST = styled(Switch)({
  width: 38,
  height: 20,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 4,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#022959",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#022959",
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: "red",
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 1,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 12,
    height: 12,

    backgroundColor: "white",
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#022959",
    opacity: 1,
  },
});

export const SwitchYM: FC<SwitchYMI> = (props: any) => {
  const { onChange, className, isChecked = false } = props;
  const switchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
    // alert("switch is "+ event.target.checked + " " +(event.target.checked ? "Montly" : "Yearly"));
  };
  return (
    <>
      <SwitchST
        checked={isChecked}
        onChange={switchHandler}
        className={className}
      />
    </>
  );
};

export default SwitchYM;
