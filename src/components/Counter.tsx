import { useState, useEffect } from 'react';

export interface CounterProps {
  startingCount: number;
  countInterval: number;
}

const Counter = (props: CounterProps): JSX.Element => {
  const [count, setCount] = useState(props.startingCount);
  console.log("Counter component rendered")

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    return () => {
      document.title = `Counter is dead`
    }
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + (props.countInterval || 3))}>
        Click me
      </button>
    </div>
  );
}

export default Counter
