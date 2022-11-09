import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { forwardRef } from "react";
import { useImperativeHandle } from "react";
import Media from "./Media";
import { useCallback } from "react";

export default function Cursor() {
  const onMove = useCallback(({ clientX, clientY }) => {
    cursorInner.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
    // cursorRefs.current.forEach((ref) => ref.moveTo(clientX, clientY));
  }, []);
  const cursorRefs = useRef([]);

  // reset on re-renders
  // cursorRefs.current = [];
  const cursorInner = useRef(null);
  const cursorOutline = useRef(null);

  useEffect(() => {
    cursorInner.current.style.transform = `translate3d(${innerWidth / 2}px, ${
      innerHeight / 2
    }px, 0)`;
    // const onMove = ({ clientX, clientY }) => {
    //   cursorInner.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;

    // };

    window.addEventListener("pointermove", onMove);

    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <>
      <div ref={cursorInner} className="circle"></div>
    </>
  );
}
