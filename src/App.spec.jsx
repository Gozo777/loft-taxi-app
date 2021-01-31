import React from "react";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";
import { createMemoryHistory } from 'history';

jest.mock('./components/LoginForm', () => ({ LoginForm: () => <div>Login component</div> }))
jest.mock('./components/SignupForm', () => ({ SignupForm: () => <div>Sign up component</div> }))
jest.mock('./components/Profile', () => ({ Profile: () => <div>Profile component</div> }))
jest.mock('./components/Map', () => ({ Map: () => <div>Map component</div> }))

describe("App", () => {
  it("renders correctly", () => {
    const mockStore = {
      getState: () => ({ auth: {isLoggedIn: true} }),
      subscribe: () => { },
      dispatch: () => { }
    }

    const history = createMemoryHistory();

    const { container } = render(
      <Router history={history}>
      <Provider store={mockStore}>
      <App />
        </Provider>
        </Router> 
    
    )
    expect(container.innerHTML).toMatch("Login component")
  })

  describe("when clicked on navigation button", () => {
    it("opens the corresponding page", () => {
      const { getByText, container } = render(<App />)
      
      fireEvent.click(getByText('Map'))
      expect(container.innerHTML).toMatch("Map component")
      fireEvent.click(getByText('Profile'))
      expect(container.innerHTML).toMatch("Profile component")
      fireEvent.click(getByText('SignupForm'))
      expect(container.innerHTML).toMatch("SignupForm component")
    })
  })
})