import React from "react";
import CodeDisplay from "../CodeDisplay/CodeDisplay";

const useTimeOutCodeString = `
  import {useEffect, useRef} from 'react';

  export function useTimeout(callback: () => void, delay: number) {
    const callBackRef = useRef(callback);
    callBackRef.current = callback;

    useEffect(() => {
      const timer = setTimeout(() => callBackRef.current(), delay); 

      return () => clearTimeout(timer);
    },[delay])
  }`;

const UseTimeOut = () => {
  return (
    <>
      <h1>UseTimeOut</h1>
      <CodeDisplay code={useTimeOutCodeString} />
    </>
  );
};

export default UseTimeOut;
