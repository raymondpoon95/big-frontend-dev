import CodeDisplay from "../CodeDisplay/CodeDisplay";

const useToggleCodeString = `
    import {useState} from 'react';

    export function useToggle(on: boolean): [boolean, () => void] {
    const [status, setStatus] = useState<boolean>(on);
    
    const toggle = () => setStatus(prevStatus => !prevStatus)

    return [status, toggle];
    }
`;

const UseToggle = () => {
  return (
    <>
      <h1>UseToggle</h1>
      <CodeDisplay code={useToggleCodeString} />
    </>
  );
};

export default UseToggle;
