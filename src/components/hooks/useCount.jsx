import { useState } from "react";

export const useCount = (initial, stock, minimo = 1) => {
  const [count, setConter] = useState(initial);

  const decrement = () => {
    if (count > minimo) setConter(count - 1);
  };

  const increment = () => {
    if (count < stock) setConter(count + 1);
  };

  return { count, decrement, increment };
};
