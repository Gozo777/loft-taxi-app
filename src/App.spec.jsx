import React from 'react';
import { Router } from 'react-router-dom';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import App from './App';
import createStore from './store';

const store = createStore();

describe('render routes', () => {
  test('render App', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Router >
          <App />
        </Router>
      </Provider>,
    );
    expect(wrapper.find(App)).toHaveLength(1);
  });

  test('render children', () => {
    const Child = () => <div>CHILD</div>;

    const wrapper = shallow(
      <Provider store={store}>
        <Router>
          <App>
            <Child />
          </App>
        </Router>
      </Provider>,
    );
    expect(wrapper.find(App)).toHaveProperty('children');
    expect(wrapper.find(Child)).toHaveLength(1);
  });
});