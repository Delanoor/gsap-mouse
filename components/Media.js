import { useRef, forwardRef, useImperativeHandle } from "react";
import { gsap } from "gsap";

const Media = forwardRef(({ className, index }, ref) => {
  const el = useRef();

  useImperativeHandle(ref, () => {
    // return our API

    return {
      moveTo(x, y) {
        gsap.to(el.current, { x, y, delay });
      },
    };
  });

  return <div ref={el} className={`circle ${className}`}></div>;
});

Media.displayName = "Media";

export default Media;
