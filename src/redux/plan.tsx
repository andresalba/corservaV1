import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlanItem {
  source: string;
  title: string;
  cost: number;
  promo: number;
  isSelected: boolean;
}

const initialState: PlanItem[] = [
  {
    source: "/arcade.png",
    title: "Arcade",
    cost: 9,
    promo: 2,
    isSelected: true,
  },
  {
    source: "/advanced.png",
    title: "Advanced",
    cost: 12,
    promo: 2,
    isSelected: false,
  },
  {
    source: "/pro.png",
    title: "Pro",
    cost: 15,
    promo: 2,
    isSelected: false,
  },
];

export const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    updatePlanCostByTitle: (
      state,
      action: PayloadAction<{ title: string; newCost: number }>
    ) => {
      const { title, newCost } = action.payload;
      const planToUpdate = state.find((plan) => plan.title === title);
      if (planToUpdate) {
        planToUpdate.cost = newCost;
      }
    },
    updatePlanSelectedStatusByTitle: (
      state,
      action: PayloadAction<{ title: string }>
    ) => {
      const { title } = action.payload;
      const planToUpdate = state.find((plan) => plan.title === title);
      if (planToUpdate) {
        planToUpdate.isSelected = !planToUpdate.isSelected;
      }
    },
    updatePlanSelectedWithParameter: (
      state,
      action: PayloadAction<{ title: string; newIsSelected: boolean }>
    ) => {
      const { title, newIsSelected } = action.payload;
      const planToUpdate = state.find((plan) => plan.title === title);
      if (planToUpdate) {
        planToUpdate.isSelected = newIsSelected;
      }
    },
    resetPlanSelectedStatus: (state) => {
      state.forEach((plan) => {
        plan.isSelected = false;
      });
    },
    updatePlanCostBasedOnMonthly: (state, action: PayloadAction<boolean>) => {
      const monthly = action.payload;
      state.forEach((plan) => {
        plan.cost = monthly ? plan.cost * 10 : plan.cost / 10;
      });
    },
  },
});

export const {
  updatePlanCostByTitle,
  updatePlanSelectedStatusByTitle,
  updatePlanSelectedWithParameter,
  resetPlanSelectedStatus,
  updatePlanCostBasedOnMonthly,
} = planSlice.actions;
export default planSlice.reducer;
export const initial = initialState;
