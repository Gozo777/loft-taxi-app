import { addressFlow } from "./sagas";
import { call, put } from "redux-saga/effects";
import { addressRequest, addressSuccess, addressFailure } from "./actions";
import { getAddressList } from "../../helpers/api";

describe("Address sagas", () => {
  describe("Получает список адресов", () => {
    const iterator = addressFlow(addressRequest());
    it("Address call", () => {
      expect(iterator.next().value).toEqual(call(getAddressList));
    });

    it("Address — addressSuccess)", () => {
      const data = {"addresses":["Пулково (LED)","Шаверма на Невском","Инфекционная больница им. Боткина","Волковское кладбище"]};
      expect(iterator.next(data).value).toEqual(put(addressSuccess(data.addresses)));
    });
  });
});
