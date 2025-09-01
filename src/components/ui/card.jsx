export function Card({ className = "", ...p }) {
  return <div className={`rounded-2xl border border-slate-800 bg-slate-900/50 shadow-lg ${className}`} {...p} />;
}

export function CardHeader({ className = "", ...p }) {
  return <div className={`p-6 pb-4 ${className}`} {...p} />;
}

export function CardTitle({ className = "", ...p }) {
  return <h3 className={`text-lg font-semibold text-white ${className}`} {...p} />;
}

export function CardDescription({ className = "", ...p }) {
  return <p className={`text-sm text-gray-300 ${className}`} {...p} />;
}

export function CardContent({ className = "", ...p }) {
  return <div className={`p-6 pt-0 ${className}`} {...p} />;
}

export function CardFooter({ className = "", ...p }) {
  return <div className={`p-6 pt-0 ${className}`} {...p} />;
}