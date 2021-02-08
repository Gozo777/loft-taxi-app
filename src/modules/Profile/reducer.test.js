import reducer from "./reducer";
import { profileSubmit } from "./actions";

const randomAction = {
  type: `RANDOM_ACTION_${parseInt(Math.random() * 1000, 10)}`
};

describe("Order reducer", () => {
  const profileData = {
    name: "Ivanov",
    date: "31/12/2020",
    card: "4566123645694568",
    cvv: "123"
  };

  const state0 = reducer(undefined, randomAction);

  const state1 = reducer(state0, profileSubmit(profileData));
  it(`Создает запись в редьсере profile`, () => {
    expect(state1).toEqual(profileData);
  });
});
