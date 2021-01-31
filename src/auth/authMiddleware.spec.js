import { authMiddleware } from './authMiddlewares';
import { authenticate } from './actions';
import { serverLogin } from '../api';
import { ExpansionPanelActions, jssPreset } from '@material-ui/core';

jest.mock("./api", () => ({ serverLogin: jest.fn(() => true) }))

describe("authMiddleware", () => {
  desribe("#AUTHENTICATE", () => {
    it("authenticates through api", async () => {
      const dispatch = jest.fn()
      
      await authMiddleware({ dispatch })()(
        authenticate("testlogin", "testpassword")
      )

      expect(serverLogin).toBeCalledWith("testlogin", "testpassword")
      expect(dispatch).toBeCalledWith(
        {type: "LOG_IN"}
      )
    })
  })
})