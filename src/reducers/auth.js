import {LOG_IN, LOG_OUT} from '../actions/actions'

const initialState = {
  isLoggedIn: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      return {isLoggedIn: true}
    }
    case LOG_OUT: {
      return {isLoggedIn: false}
    }
    default:
      return state
  }
}

/*
import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchCardRequest,
  fetchCardSuccess,
  fetchCardFailure,
} from './actions';
import { createSelector } from 'reselect';


const card = handleActions(
  {
    [fetchCardRequest]: () => [],
    [fetchCardSuccess]: (_state, action) => action.payload,
  },
  [],
);
 
const isLoading = handleActions(
  {
    [fetchCardRequest]: () => true,
    [fetchCardSuccess]: () => false,
    [fetchCardFailure]: () => false,
  },
  false,
);
 
const error = handleActions(
  {
    [fetchCardRequest]: () => null,
    [fetchCardFailure]: (_state, action) => action.payload,
  },
  null,
);
 
export default combineReducers({
  card,
  isLoading,
  error,
});

export const getCard = createSelector(
  state => state.card,
  card =>
    card.map(({ id, cardNumber, expiryDate, cardName, cvc }) => ({
      id,
      cardNumber,
      expiryDate,
      cardName,
      cvc
    })),
);
export const getIsLoading = state => state.isLoading;
export const getError = state => state.error; 
 
const initialState = {
  cards: []
  isLoading: false,
  error: null,
};
 
export default (state = initialState, action) => {
  switch (action.type) {
    case getCardRequest.toString():
      return {
        cards: [],
        ...state,
        isLoading: true,
      };
 
    case getCardSuccess.toString():
      return {
        ...state,
        cards: action.payload,
        isLoading: false,
      };
 
    case getCardFailure.toString():
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
 
    default:
      return state;
  }
}; */