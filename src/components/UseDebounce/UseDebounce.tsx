import CodeDisplay from "../CodeDisplay/CodeDisplay";

const useDebounceCodeString = `
  import {useEffect, useState} from 'react';

  export function useDebounce<T>(value: T, delay: number): T {
    const[debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedValue(value)
      },  delay);

      return(() => clearTimeout(timer));
    },[value, delay]);

    return debouncedValue;
  }
`;

const UseDebounce = () => {
  return (
    <>
      <h1>UseHover</h1>
      <CodeDisplay code={useDebounceCodeString} />
    </>
  );
};

export default UseDebounce;
