import { configureStore } from "@reduxjs/toolkit";
import monthlyReducer from "./monthly.tsx";
import planReducer from "./plan.tsx";
import addonsReducer from "./addon.tsx";

export const store = configureStore({
  reducer: {
    monthly: monthlyReducer,
    plan: planReducer,
    addons: addonsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
