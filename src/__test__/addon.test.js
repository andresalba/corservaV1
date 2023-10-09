import { updateAddOnSelectedByTitle } from '../redux/addon'; 

describe('Addon Reducers', () => {
  it('should toggle the isSelected property by title', () => {
    const initialState = [
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
    ];

    const action = updateAddOnSelectedByTitle({ title: "Online Service" });

    const newState = addonReducer(initialState, action);

    const updatedAddOn = newState.find(addOn => addOn.title === "Online Service");

    expect(updatedAddOn?.isSelected).toBe(false);
  });

});
