import { authFlow } from "./sagas";
import { call, put } from "redux-saga/effects";
import { authRequest, authSuccess, authFailure } from "./actions";
import { auth } from "../../helpers/api";

describe("Auth sagas", () => {
  describe("Авторизован, если данные введены верно", () => {
    const userData = {
      login: "test@test.com",
      password: "123123"
    };

    const iterator = authFlow(authRequest(userData));
    it("Auth call", () => {
      expect(iterator.next(userData).value).toEqual(
        call(auth, userData["login"], userData["password"])
      );
    });

    it("Auth — authSuccess)", () => {
      const data = { success: true };
      expect(iterator.next(data).value).toEqual(put(authSuccess()));
    });
  });

  describe("Ошибка, если данные введены не верно", () => {
    const userData = {
      login: "test@test.com",
      password: "78987946"
    };

    const iterator = authFlow(authRequest(userData));
    it("Auth call", () => {
      expect(iterator.next(userData).value).toEqual(
        call(auth, userData["login"], userData["password"])
      );
    });

    it("Auth — authFailure)", () => {
      const data = { success: false, error: "Неверный пароль" };

      expect(iterator.next(data).value).toEqual(put(authFailure(data.error)));
    });
  });
});
