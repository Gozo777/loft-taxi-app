import React from "react";
import SignupForm from "./SignupForm";
import { Router } from 'react-router-dom';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import createStore from '../../store/store';

const store = createStore();

describe('render SignupForm', () => {
  test('render SignupForm', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Router>
          <SignupForm />
        </Router>
      </Provider>,
   );
   expect(wrapper.find(SignupForm)).toHaveLength(1);
 });
});