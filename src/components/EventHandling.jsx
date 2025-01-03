import { useState } from 'react';

const EventHandling = () => {
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    if (e.target.innerText === 'Increase') {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  }

  const handleReset = () => {
    setCount(0);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <div>
        <button onClick={handleClick}>Increase</button>
        <button onClick={handleClick}>Decrease</button>
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default EventHandling;
