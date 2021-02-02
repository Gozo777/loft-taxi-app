import { reducer, INIT_STATE } from './reducer.js';

describe('reducers', () => {
  test('LOG_IN', () => {
    const action = {
      type: 'LOG_IN',
      payload: {
        email: 'email',
        password: 'password',
      },
    };

    expect(reducer(INIT_STATE, action)).toEqual({
      ...INIT_STATE,
      authed: true,
      user: {
        email: action.payload.email,
        password: action.payload.password,
      },
    });
  });

  test('SIGN_UP', () => {
    const action = {
      type: 'SIGN_UP',
      payload: {
        user: {
          email: 'email',
          password: 'password',
          name: 'name',
          surname: 'surname',
        },
      },
    };

    expect(reducer(INIT_STATE, action)).toEqual({
      ...INIT_STATE,
      authed: true,
      user: {
        email: action.payload.email,
        password: action.payload.password,
        name: action.payload.name,
        surname: action.payload.surname,
      },
    });
  });

  test('LOG_OUT', () => {
    const action = {
      type: 'LOG_OUT',
    };

    expect(reducer(INIT_STATE, action)).toEqual({
      ...INIT_STATE,
      authed: false,
      user: {
        email: '',
        password: '',
      },
    });
  });

  test('FAILURE', () => {
    const action = {
      type: 'FAILURE',
      payload: {
        errorMessage: 'error message',
      },
    };

    expect(reducer(INIT_STATE, action)).toEqual({
      ...INIT_STATE,
      error: true,
      errorMessage: action.payload,
    });
  });
});