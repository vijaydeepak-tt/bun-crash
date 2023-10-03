import React from 'react';
import { createRoot } from 'react-dom';

const root = createRoot(document.getElementById('bun-root'));

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Bun Counter</h1>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

root.render(<App />);
