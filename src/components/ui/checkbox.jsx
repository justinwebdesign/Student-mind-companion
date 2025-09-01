export function Checkbox({ id, checked, onCheckedChange, disabled = false }) {
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
      id={id}
      onClick={() => !disabled && onCheckedChange?.(!checked)}
      onKeyDown={handleKeyDown}
      aria-checked={checked}
      aria-disabled={disabled}
      disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      className={`h-5 w-5 rounded-md border transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 focus:ring-offset-slate-900 ${
        disabled
          ? "bg-slate-700 border-slate-600 cursor-not-allowed"
          : checked 
            ? "bg-emerald-600 border-emerald-600 hover:bg-emerald-700" 
            : "bg-slate-900 border-slate-600 hover:bg-slate-800"
      }`}
    >
      {checked && (
        <svg 
          className="w-3 h-3 text-white mx-auto" 
          fill="currentColor" 
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path 
            fillRule="evenodd" 
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
            clipRule="evenodd" 
          />
        </svg>
      )}
    </button>
  );
}