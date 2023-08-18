import React, { useState } from "react";

const ReactCounterApp = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div>
      <button
        data-testid="decrement-button"
        onClick={() => setCounter((prevState) => prevState - 1)}
      >
        -
      </button>
      <button
        data-testid="increment-button"
        onClick={() => setCounter((prevState) => prevState + 1)}
      >
        +
      </button>
      <p>clicked: {counter}</p>
    </div>
  );
};

export default ReactCounterApp;
