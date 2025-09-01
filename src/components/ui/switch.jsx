export function Switch({ checked, onCheckedChange, disabled = false }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!disabled) {
        onCheckedChange?.(!checked);
      }
    }
  };

  return (
    <button
      onClick={() => !disabled && onCheckedChange?.(!checked)}
      onKeyDown={handleKeyDown}
      aria-pressed={checked}
      aria-disabled={disabled}
      disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      className={`w-11 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 focus:ring-offset-slate-900 ${
        disabled 
          ? "bg-slate-600 cursor-not-allowed" 
          : checked 
            ? "bg-emerald-600 hover:bg-emerald-700" 
            : "bg-slate-700 hover:bg-slate-600"
      } relative`}
    >
      <span 
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all ${
          checked ? "left-5" : "left-0.5"
        } ${disabled ? "opacity-50" : ""}`} 
      />
    </button>
  );
}