import { useState, createContext, useContext } from "react";
const Ctx = createContext();

export function Tabs({ value, onValueChange, defaultValue, children, className = "" }) {
  const [internal, setInternal] = useState(defaultValue);
  const v = value ?? internal;
  const setV = onValueChange ?? setInternal;
  return <Ctx.Provider value={{ v, setV }}><div className={className} role="tablist">{children}</div></Ctx.Provider>;
}

export function TabsList({ className = "", ...p }) { 
  return <div className={`inline-grid rounded-xl bg-slate-800 p-1 ${className}`} role="tablist" {...p} />; 
}

export function TabsTrigger({ value, className = "", children }) {
  const { v, setV } = useContext(Ctx);
  const active = v === value;
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setV(value);
    }
  };
  
  return (
    <button
      onClick={() => setV(value)}
      onKeyDown={handleKeyDown}
      role="tab"
      aria-selected={active}
      tabIndex={active ? 0 : -1}
      className={`px-3 py-1.5 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 focus:ring-offset-slate-900 ${
        active ? "bg-slate-900 text-white" : "text-gray-300 hover:text-white"
      } ${className}`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, className = "", children }) {
  const { v } = useContext(Ctx);
  if (v !== value) return null;
  return (
    <div 
      className={className} 
      role="tabpanel" 
      aria-labelledby={`tab-${value}`}
    >
      {children}
    </div>
  );
}