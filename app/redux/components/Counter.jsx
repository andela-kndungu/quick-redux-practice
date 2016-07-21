import React from 'react';

const Counter = (props) => {
  return (
    <div>
      <p>Counter: {props.counter}</p><p>+</p><p>-</p>
    </div>
  );
};

Counter.propTypes = {
  counter: React.PropTypes.number,
};

export default Counter;

