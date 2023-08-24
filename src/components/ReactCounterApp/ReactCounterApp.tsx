import { useState } from "react";

import CodeDisplay from "../CodeDisplay/CodeDisplay";

const reactCounterAppCodeString = `
  import { useState } from "react";
  
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
`;

const ReactCounterApp = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <>
      <h1>ReactCounterApp</h1>
      <CodeDisplay code={reactCounterAppCodeString} />
      <h1>Example</h1>
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
    </>
  );
};

export default ReactCounterApp;
