import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { forwardRef } from "react";
import { useImperativeHandle } from "react";
import Media from "./Media";

export default function Cursor() {
  const cursorRefs = useRef([]);

  // reset on re-renders
  cursorRefs.current = [];
  const cursorInner = useRef(null);
  const cursorOutline = useRef(null);

  useEffect(() => {
    // cursorRefs.current.forEach((ref) =>
    //   ref.moveTo(innerWidth / 2, innerHeight / 2)
    // );
    // cursorInner.current.style.transform = `translate3d(${innerWidth / 2}px, ${
    //   innerHeight / 2
    // }px, 0)`;
    const onMove = ({ clientX, clientY }) => {
      cursorInner.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      // cursorRefs.current.forEach((ref) => ref.moveTo(clientX, clientY));
    };

    window.addEventListener("pointermove", onMove);

    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const addCursorRefs = (ref) => {
    if (ref) {
      cursorRefs.current.push(ref);
    }
  };

  return (
    <>
      <div ref={cursorInner} className="circle cursor-inner"></div>
      {/* <Circle ref={addCursorRefs} delay={0} className="cursor-outline"></Circle> */}
    </>
  );
}
