import React, { useState } from 'react';


const Counter = ({ text }) => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  return (
    <div>
        <h3>Counter: {counter} {text}</h3>
        <input type="button" value="Increment" onClick={increment} />
        <input type="button" value="Decrement" onClick={decrement} />
    </div>
  )
}

export default Counter;