import { useState } from "react";

export default function Tooltip({ children, text, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-2 text-sm rounded shadow-lg ${className}`}
        >
          {text}
        </div>
      )}
    </div>
  );
}