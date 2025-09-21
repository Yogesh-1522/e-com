
import React from "react";

export default function Badge({ children, className = "" }) {
  return (
    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${className}`}>
      {children}
    </span>
  );
}
