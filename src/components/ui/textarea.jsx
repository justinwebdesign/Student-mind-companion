import React from "react";

export const Textarea = React.forwardRef(({ className = "", ...p }, ref) => (
  <textarea
    ref={ref}
    className={`w-full rounded-xl bg-slate-900 border border-slate-700 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors resize-none ${className}`}
    {...p}
  />
));