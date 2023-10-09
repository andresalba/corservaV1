import {
  updatePlanCostByTitle,
  updatePlanSelectedStatusByTitle,
  resetPlanSelectedStatus,
} from "../redux/plan"; 

describe("Plan Reducers", () => {
  it("should update plan cost by title", () => {
    const initialState = [
      {
        source: "/arcade.png",
        title: "Arcade",
        cost: 9,
        promo: 2,
        isSelected: true,
      },
    ];

    const action = updatePlanCostByTitle({ title: "Arcade", newCost: 12 });

    const newState = planReducer(initialState, action);

    expect(newState.find((plan) => plan.title === "Arcade")?.cost).toBe(12);
  });

  it("should update plan selected status by title", () => {
    const initialState = [
      {
        source: "/arcade.png",
        title: "Arcade",
        cost: 9,
        promo: 2,
        isSelected: true,
      },
    ];

    const action = updatePlanSelectedStatusByTitle({ title: "Arcade" });

    const newState = planReducer(initialState, action);

    expect(newState.find((plan) => plan.title === "Arcade")?.isSelected).toBe(
      false
    );
  });

  it("should reset plan selected status", () => {
    const initialState = [
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
        isSelected: true,
      },
    ];

    const action = resetPlanSelectedStatus();

    const newState = planReducer(initialState, action);

    expect(newState.every((plan) => !plan.isSelected)).toBe(true);
  });
});
