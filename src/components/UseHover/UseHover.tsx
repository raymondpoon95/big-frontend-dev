import { useEffect, useState, useRef } from "react";
import CodeDisplay from "../CodeDisplay/CodeDisplay";

const useHoverCodeString = `
  import { Ref, useState, useRef, useEffect } from 'react'

  export function useHover<T extends HTMLElement>(): [Ref<T>, boolean] {
    const ref = useRef<T | null>(null);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    useEffect(() => {
      setIsHovered(false);
      const element = ref.current;

      if(!element) return;
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);

      return () => {
          element.removeEventListener('mouseenter', handleMouseEnter);
          element.removeEventListener('mouseleave', handleMouseLeave);
      }
    },[ref, isHovered])
    
    return [ref, isHovered];
  }
`;

// implementation here is a little different because the above solution has a test case that is required to pass on bigfrontend.dev
// only difference below solution has is that it does not require dependancies in the useEffect
const useHover = <T extends HTMLElement>(): [React.RefObject<T>, boolean] => {
  const ref = useRef<T>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return [ref, isHovered];
};

const UseHover = () => {
  const [ref, isHovered] = useHover<HTMLDivElement>();
  return (
    <>
      <CodeDisplay code={useHoverCodeString} />
      <h1>Example</h1>
      <div ref={ref} style={{ border: "1px solid black", padding: "1rem" }}>
        {isHovered ? "hovered" : "not hovered"}
      </div>
    </>
  );
};

export default UseHover;
