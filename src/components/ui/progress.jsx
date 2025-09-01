export function Progress({ value, className = "", ...p }) {
  return (
    <div 
      className={`w-full bg-slate-800 rounded-full overflow-hidden ${className}`} 
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      {...p}
    >
      <div 
        className="h-full bg-emerald-600 transition-all duration-300 ease-out"
        style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
      />
    </div>
  );
}