import React from "react";
import NavBar from "./NavBar";
import { Router } from 'react-router-dom';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import createStore from '../../store/store';

const store = createStore();

describe('render NavBar', () => {
  test('render NavBar', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Router>
          <NavBar/>
        </Router>
      </Provider>,
   );
   expect(wrapper.find(NavBar)).toHaveLength(1);
 });
});