import React from "react";
import { Button } from "./ui/button";
import { Brain, Heart, Sparkles } from "lucide-react";

export default function NavBar({ onNavigate }) {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-slate-900/80 backdrop-blur-sm rounded-2xl shadow-lg mb-6 border border-slate-800">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-emerald-600 rounded-lg blur opacity-75 animate-pulse"></div>
          <div className="relative bg-slate-900 rounded-lg p-2">
            <Brain className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="relative">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
            Mind Companion
          </h1>
          <div className="absolute -top-1 -right-1">
            <Sparkles className="w-4 h-4 text-yellow-400 animate-bounce" />
          </div>
          <div className="absolute -bottom-1 -left-1">
            <Heart className="w-3 h-3 text-pink-400 animate-pulse" />
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button onClick={() => onNavigate("checkin")} className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400">
          Check-In
        </Button>
        <Button variant="secondary" onClick={() => onNavigate("nudge")} className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400">
          Nudge
        </Button>
        <Button variant="ghost" onClick={() => onNavigate("summary")} className="hover:bg-gradient-to-r hover:from-pink-600/20 hover:to-purple-600/20">
          Summary
        </Button>
        <Button variant="ghost" onClick={() => onNavigate("settings")} className="hover:bg-gradient-to-r hover:from-emerald-600/20 hover:to-blue-600/20">
          Settings
        </Button>
      </div>
    </nav>
  );
}