import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Sumar</button>
      <button onClick={() => setCounter(counter - 1)}>Restar</button>
    </div>
  );
};

export default Counter;
