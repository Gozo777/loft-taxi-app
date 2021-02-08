import reducer from "./reducer";
import { addressRequest, addressSuccess } from "./actions";

const randomAction = {
  type: `RANDOM_ACTION_${parseInt(Math.random() * 1000, 10)}`
};

describe("Address reducer", () => {
  const dataAddresss = ["Address1", "Address2"];

  const state0 = reducer(undefined, randomAction);

  const state1 = reducer(state0, addressRequest());

  it(`Создает запись в редьсере address {isLoading: true, data: [], error: ''}`, () => {
    expect(state1).toEqual({ isLoading: true, data: [], error: "" });
  });

  const state2 = reducer(state1, addressSuccess(dataAddresss));
  it(`Создает запись в редьсере address {isLoading: false, data: ${dataAddresss}, error: ''}`, () => {
    expect(state2).toEqual({
      isLoading: false,
      data: dataAddresss,
      error: ""
    });
  });
});
