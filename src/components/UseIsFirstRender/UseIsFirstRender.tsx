import CodeDisplay from "../CodeDisplay/CodeDisplay";

const useIsFirstRenderCodeString = `
    import {useEffect, useRef} from 'react';

    export function useIsFirstRender(): boolean {
    const isFirstRenderRef = useRef<boolean>(true);

    useEffect(() => {
        isFirstRenderRef.current = false;
    },[])

    return isFirstRenderRef?.current;
    }
`;

const UseIsFirstRender = () => {
  return (
    <>
      <h1>UseIsFirstRender</h1>
      <CodeDisplay code={useIsFirstRenderCodeString} />
    </>
  );
};

export default UseIsFirstRender;
