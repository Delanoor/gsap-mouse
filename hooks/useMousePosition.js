import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const onMove = ({ clientX, clientY }) => {
      setMousePosition({ x: clientX, y: clientY });
    };

    document.addEventListener("pointermove", onMove);

    return () => document.removeEventListener("pointermove", onMove);
  }, []);
  return mousePosition;
}
