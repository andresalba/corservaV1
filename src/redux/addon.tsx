import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddOnItem {
  title: string;
  txt: string;
  cost: number;
  isSelected: boolean;
}

const initialState: AddOnItem[] = [
  {
    title: "Online Service",
    txt: "Access to multiplayer games",
    cost: 1,
    isSelected: true,
  },
  {
    title: "Larger Storage",
    txt: "Access to multiplayer games",
    cost: 2,
    isSelected: true,
  },
  {
    title: "Customizable Profile",
    txt: "Access to multiplayer games",
    cost: 2,
    isSelected: true,
  },
];

export const addonSlice = createSlice({
  name: "addons",
  initialState,
  reducers: {
    updateAddOnCostByTitle: (
      state,
      action: PayloadAction<{ title: string; newCost: number }>
    ) => {
      const { title, newCost } = action.payload;
      const addOnToUpdate = state.find((addOn) => addOn.title === title);
      if (addOnToUpdate) {
        addOnToUpdate.cost = newCost;
      }
    },
    updateAddOnSelectedByTitle: (
      state,
      action: PayloadAction<{ title: string }>
    ) => {
      const { title } = action.payload;
      const addOnToUpdate = state.find((addOn) => addOn.title === title);
      if (addOnToUpdate) {
        addOnToUpdate.isSelected = !addOnToUpdate.isSelected;
      }
    },
    updateAddOnCostBasedOnMonthly: (state, action: PayloadAction<boolean>) => {
      const monthly = action.payload;
      state.forEach((addOn) => {
        addOn.cost = monthly ? addOn.cost * 10 : addOn.cost / 10;
      });
    },
  },
});

export const {
  updateAddOnCostByTitle,
  updateAddOnSelectedByTitle,
  updateAddOnCostBasedOnMonthly,
} = addonSlice.actions;
export default addonSlice.reducer;
export const initial = initialState;
