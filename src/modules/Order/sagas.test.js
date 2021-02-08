import { orderFlow } from "./sagas";
import { call, put } from "redux-saga/effects";
import { orderRequest, orderSuccess } from "./actions";
import { getRoute } from "../../helpers/api";

describe("Order sagas", () => {
  describe("Получает массив координат", () => {
    const address1 = "Шаверма на Невском";
    const address2 = "Пулково (LED)";

    const iterator = orderFlow(orderRequest({ from: address1, to: address2 }));
    it("Order call", () => {
      expect(iterator.next().value).toEqual(call(getRoute, address1, address2));
    });

    it("Order — orderSuccess", () => {
      const data = [
        [30.348308, 59.932573],
        [30.355483, 59.93168],
        [30.350019, 59.922859]
      ];
      expect(iterator.next(data).value).toEqual(put(orderSuccess(data)));
    });
  });
});
