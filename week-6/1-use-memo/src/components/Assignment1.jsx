import { useState } from "react";
import { useMemo } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(0);
  const [btn, setBtn] = useState(false);
  // Your solution starts here
  let expensiveValue = 0;

  console.log('rendered again');

  function factorial(n) {
    if (n === 0) {
      return 1;
    }

    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    console.log('calculating...')
    return result;
  }
  
  // withUseMemo
  expensiveValue = useMemo(()=> {
   return factorial(input);
  }, [input]);

  // without useMemo - gets called everytime a rerender happend
  // expensiveValue = factorial(input);

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <button onClick={()=>setBtn(!btn)}>render page</button>
      {/* used button component to render the page so we could see the useMemo in action */}
      <p>Calculated Value: {expensiveValue}</p>
    </div>
  );
}
