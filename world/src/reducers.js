import { combineReducers } from 'redux';
import axios from 'axios';

const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
const INCREMENT_COUNTER_BY = 'INCREMENT_COUNTER_BY';
const DECREMENT_COUNTER_BY = 'DECREMENT_COUNTER_BY';
const REQUEST_REACT_STARS_COUNT = 'REQUEST_REACT_STARS_COUNT';
const RECEIVE_REACT_STARS_COUNT = 'RECEIVE_REACT_STARS_COUNT';
const FAIL_REACT_STARS_COUNT = 'FAIL_REACT_STARS_COUNT';

export const incrementCounter = () => ({
  type: INCREMENT_COUNTER
});

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER
});

export const incrementCounterBy = value => ({
  type: INCREMENT_COUNTER_BY,
  value
});

export const decrementCounterBy = value => ({
  type: DECREMENT_COUNTER_BY,
  value
});

const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1
    case INCREMENT_COUNTER_BY:
      return state + action.value
    case DECREMENT_COUNTER_BY:
      return state - action.value
    default:
      return state
  }
}

export const requestReactStarsCount = () => ({
  type: REQUEST_REACT_STARS_COUNT
});

export const receiveReactStarsCount = count => ({
  type: RECEIVE_REACT_STARS_COUNT,
  count
});

export const failReactStarsCount = error => ({
  type: REQUEST_REACT_STARS_COUNT,
  error
});

export const incrementCounterByReactStarsCount = () => dispatch => {
  dispatch(requestReactStarsCount());
  return axios.get("https://api.github.com/repos/facebook/react")
    .then(({ data: { stargazers_count } }) => {
      dispatch(receiveReactStarsCount(stargazers_count));
      dispatch(incrementCounterBy(stargazers_count));
    })
    .catch(error => dispatch(failReactStarsCount(error)));
}

export const decrementCounterByReactStarsCount = () => dispatch => {
  dispatch(requestReactStarsCount());
  return axios.get("https://api.github.com/repos/facebook/react")
    .then(({ data: { stargazers_count } }) => {
      dispatch(receiveReactStarsCount(stargazers_count));
      dispatch(decrementCounterBy(stargazers_count));
    })
    .catch(error => dispatch(failReactStarsCount(error)));
}

const reactStarsCounter = (state = {
  reactStarsCountLoadInProgress: false,
  count: 0,
  error: null,
}, action) => {
  switch (action.type) {
    case REQUEST_REACT_STARS_COUNT:
      return Object.assign({}, state, {
        reactStarsCountLoadInProgress: true
      });
    case RECEIVE_REACT_STARS_COUNT:
      return Object.assign({}, state, {
        reactStarsCountLoadInProgress: false,
        count: action.count,
      });
    case FAIL_REACT_STARS_COUNT:
      return Object.assign({}, state, {
        reactStarsCountLoadInProgress: false,
        error: action.error,
      });
    default:
      return state;
  }
}

export default combineReducers({ counter, reactStarsCounter });