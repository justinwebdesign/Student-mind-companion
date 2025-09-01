import React from "react";

export const Label = React.forwardRef(({ className = "", ...p }, ref) => (
  <label
    ref={ref}
    className={`text-sm font-medium text-white ${className}`}
    {...p}
  />
));