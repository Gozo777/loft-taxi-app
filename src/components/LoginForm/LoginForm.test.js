import React from "react";
import LoginForm from "./LoginForm";
import { Router } from 'react-router-dom';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import createStore from '../../store/store';

const store = createStore();

describe('render LoginForm', () => {
  test('render LoginForm', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Router>
          <LoginForm/>
        </Router>
      </Provider>,
   );
   expect(wrapper.find(LoginForm)).toHaveLength(1);
 });
});