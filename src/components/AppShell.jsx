import NavBar from "./NavBar";

export default function AppShell({ children, route, onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-slate-100">
      <div className="max-w-md mx-auto px-4 py-6 min-h-screen flex flex-col">
        <NavBar onNavigate={onNavigate} />
        <main className="flex-1 mt-6 flex items-start justify-center">
          <div className="w-full max-w-sm">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
