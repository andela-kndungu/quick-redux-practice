import { Map } from 'immutable';

const initialState = Map({});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state.update('counter', 0, (value) => { return value + 1; });
    case 'DECREMENT':
      return state.update('counter', 0, (value) => { return value - 1; });
    default:
      return state;
  }
}

