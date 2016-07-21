import React from 'react';

const Counter = (props) => {
  return (
    <div>
      <p>Counter: {props.counter}</p>
      <p onClick={() => { props.onIncrement(1); }}>+</p>
      <p onClick={() => { props.onDecrement(1); }}>-</p>
    </div>
  );
};

Counter.propTypes = {
  counter: React.PropTypes.number,
  onIncrement: React.PropTypes.func,
  onDecrement: React.PropTypes.func,
};

export default Counter;

