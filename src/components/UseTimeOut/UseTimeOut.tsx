import React from "react";

const UseTimeOut = () => {
  return <div>UseTimeOut</div>;
};

const useTimeOutCodeString = `import {useEffect, useRef} from 'react';

export function useTimeout(callback: () => void, delay: number) {
  const callBackRef = useRef(callback);
  callBackRef.current = callback;

  useEffect(() => {
    const timer = setTimeout(() => callBackRef.current(), delay);

    return () => clearTimeout(timer);
  },[delay])
}`;

export default UseTimeOut;
