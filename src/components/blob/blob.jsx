import React, { useState, useEffect } from "react";
import "./blob.css";

export default function Blob() { // Capitalize the component name
  const [position, setPosition] = useState({ left: 0, top: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;

    setPosition({ left: clientX + scrollX, top: clientY + scrollY });
  };

  useEffect(() => {
    // Your useEffect logic, if needed
  }, [position]);

  return (
    <div
      onMouseMove={handleMouseMove}
      id="blob"
      className="blob"
      style={{
        left: `${position.left}px`,
        top: `${position.top}px`,
        zIndex: 1,
      }}
    ></div>
  );
}
