import { configureStore } from "@reduxjs/toolkit";
import monthlyReducer, { periodset } from "../redux/monthly";

describe("monthlyReducer", () => {
  it("should toggle the monthly state when periodset action is dispatched", () => {
    const store = configureStore({
      reducer: {
        monthly: monthlyReducer,
      },
      middleware: [...getDefaultMiddleware()],
    });

    store.dispatch(periodset());
    const updatedState = store.getState().monthly;

    expect(updatedState.monthly).toBe(false);
  });
});
