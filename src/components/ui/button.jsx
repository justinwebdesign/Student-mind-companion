export function Button({ 
  variant = "default", 
  size = "md", 
  className = "", 
  disabled = false,
  ...p 
}) {
  const v =
    variant === "secondary" 
      ? disabled 
        ? "bg-slate-700 text-gray-400 border border-slate-600 cursor-not-allowed" 
        : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 focus:ring-offset-slate-900" :
    variant === "ghost"     
      ? disabled 
        ? "bg-transparent text-gray-500 cursor-not-allowed" 
        : "bg-transparent hover:bg-slate-800/40 text-white focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 focus:ring-offset-slate-900" :
    variant === "outline"
      ? disabled
        ? "bg-transparent text-gray-500 border border-slate-600 cursor-not-allowed"
        : "bg-transparent hover:bg-slate-800/40 text-white border border-slate-700 focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 focus:ring-offset-slate-900"
      : disabled 
        ? "bg-slate-600 text-gray-400 cursor-not-allowed" 
        : "bg-emerald-600 hover:bg-emerald-500 text-white focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 focus:ring-offset-slate-900";
  
  const s = size === "sm" ? "px-3 py-1.5 text-sm rounded-xl" : "px-4 py-2 rounded-2xl";
  
  return (
    <button 
      className={`${v} ${s} focus:outline-none transition-colors ${className}`} 
      disabled={disabled}
      aria-disabled={disabled}
      {...p} 
    />
  );
}