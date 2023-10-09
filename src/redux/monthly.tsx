import { createSlice } from "@reduxjs/toolkit";

export interface MonthlyState {
  monthly: boolean;
}

const initialState: MonthlyState = {
  monthly: true,
};

export const monthlySlice = createSlice({
  name: "monthly",
  initialState,
  reducers: {
    periodset: (state) => {
      state.monthly = !state.monthly;
    },
  },
});

export const { periodset } = monthlySlice.actions;

export default monthlySlice.reducer;
