import reducer from "./reducer";
import { orderRequest, orderSuccess } from "./actions";

const randomAction = {
  type: `RANDOM_ACTION_${parseInt(Math.random() * 1000, 10)}`
};

describe("Order reducer", () => {
  const cord = [[30.348308,59.932573],[30.355483,59.93168]];

  const state0 = reducer(undefined, randomAction);

  const state1 = reducer(state0, orderRequest());

  it(`Создает запись в редьсере order {isLoading: true, cord: [], error: ''}`, () => {
    expect(state1).toEqual({ isLoading: true, cord: [], error: "" });
  });

  const state2 = reducer(state1, orderSuccess(cord));
  it(`Создает запись в редьсере order {isLoading: false, cord: ${cord}, error: ''}`, () => {
    expect(state2).toEqual({
      isLoading: false,
      cord: cord,
      error: ""
    });
  });
});
