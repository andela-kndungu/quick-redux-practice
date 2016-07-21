import { connect } from 'react-redux';
import Counter from '../components/Counter.jsx';

function mapStateToProps(state) {
  return { counter: state.get('counter', 99) };
}

export const CounterContainer = connect(mapStateToProps)(Counter);

