import { authMiddleware } from './authMiddlewares';
import { authenticate, logIn } from '../actions/actions';
import { serverLogin } from './api';
import { ExpansionPanelActions, jssPreset } from '@material-ui/core';

jest.mock("./api", () => ({ serverLogin: jest.fn(() => true) }))

describe("authMiddleware", () => {
  afterAll(jest.clearAllMocks)

  desribe("#authenticate", () => {

    desribe('with correct credentials', () => {
      it("authenticates through api", async () => {
        serverLogin.mockImplementation(async () => true);
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
})