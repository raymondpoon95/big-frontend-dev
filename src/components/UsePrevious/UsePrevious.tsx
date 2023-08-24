import CodeDisplay from "../CodeDisplay/CodeDisplay";

const usePreviousCodeString = `
    import {useEffect, useRef} from 'react'; 

    export function usePrevious<T>(value: T): T | undefined {
    const previousValueRef = useRef<T | undefined>(undefined);

    useEffect(() => {
        previousValueRef.current = value;
    },[value]);

    return previousValueRef.current;
    }
`;

const UsePrevious = () => {
  return (
    <>
      <h1>UsePrevious</h1>
      <CodeDisplay code={usePreviousCodeString} />
    </>
  );
};

export default UsePrevious;
