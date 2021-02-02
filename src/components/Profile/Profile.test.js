import React from "react";
import Profile from "./Profile";
import { Router } from 'react-router-dom';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import createStore from '../../store/store';

const store = createStore();

describe('render Profile', () => {
  test('render Profile', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Router>
          <Profile />
        </Router>
      </Provider>,
   );
   expect(wrapper.find(Profile)).toHaveLength(1);
 });
});