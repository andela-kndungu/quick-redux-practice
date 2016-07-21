import { connect } from 'react-redux';
import Counter from '../components/Counter.jsx';
import { increment, decrement } from '../actions';

function mapStateToProps(state) {
  return { counter: state.get('counter', 99) };
}

function mapDispatchToProps(dispatch) {
  return ({
    onIncrement: (number) => {
      dispatch(increment(number));
    },
    onDecrement: (number) => {
      dispatch(decrement(number));
    },
  });
}

export const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

