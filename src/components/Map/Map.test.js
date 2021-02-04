import React from "react";
import Map from "./Map";
import { Router } from 'react-router-dom';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import createStore from '../../store/store';

const store = createStore();

describe('render Map', () => {
  test('render Map', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Router>
          <Map/>
        </Router>
      </Provider>,
   );
   expect(wrapper.find(Map)).toHaveLength(1);
 });
});