import { useEffect, useState, useRef } from "react";
import CodeDisplay from "../CodeDisplay/CodeDisplay";

const useHoverCodeString = `
    import { useEffect, useState, useRef } from "react";

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
`;

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
