import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const cursorInner = useRef(null);
  const cursorOutline = useRef(null);

  useEffect(() => {
    const onMove = ({ clientX, clientY }) => {
      gsap.to(cursorInner.current, {
        x: clientX,
        y: clientY,
      });
    };

    window.addEventListener("pointermove", onMove);

    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <>
      <div ref={cursorOutline} className="cursor-outline"></div>
      <div ref={cursorInner} className="cursor-inner"></div>
    </>
  );
}
