import { useState } from "react";
import AppShell from "./components/AppShell";
import Router from "./components/Router";
import { useLocalState, clearAppData } from "./hooks/useLocalState";
import "./styles/index.css";

export default function App() {
  const [route, setRoute] = useLocalState("route", "onboarding");
  
  // Persistent state using useLocalState
  const [name, setName] = useLocalState("name", "");
  const [school, setSchool] = useLocalState("school", "");
  const [year, setYear] = useLocalState("year", "First-Year");
  const [consent, setConsent] = useLocalState("consent", false);
  const [nudgesOn, setNudgesOn] = useLocalState("nudgesOn", true);
  const [nudgeTimes, setNudgeTimes] = useLocalState("nudgeTimes", ["09:00", "16:00"]);
  const [showPanas, setShowPanas] = useLocalState("showPanas", false);
  const [panas, setPanas] = useLocalState("panas", {
    "Excited": 3,
    "Enthusiastic": 2,
    "Determined": 4,
    "Alert": 3,
    "Inspired": 2
  });
  
  const [mood, setMood] = useLocalState("mood", 5);
  const [moodNote, setMoodNote] = useLocalState("moodNote", "");
  const [crisisDetected, setCrisisDetected] = useLocalState("crisisDetected", false);
  
  const [selectedExercise, setSelectedExercise] = useLocalState("selectedExercise", "breathing");
  
  // Non-persistent state
  const [moodHistory, setMoodHistory] = useLocalState("moodHistory", [
    { date: "Today", mood: 5 },
    { date: "Yesterday", mood: 7 },
    { date: "2 days ago", mood: 4 }
  ]);
  
  const [journalEntries, setJournalEntries] = useLocalState("journalEntries", [
    { date: "Today", text: "Feeling a bit overwhelmed with assignments." },
    { date: "Yesterday", text: "Had a good conversation with my roommate." }
  ]);
  
  const [exerciseStats, setExerciseStats] = useLocalState("exerciseStats", { completed: 3, total: 5 });
  const [achievements, setAchievements] = useLocalState("achievements", { totalCheckIns: 15, completedExercises: 12 });
  const [streaks, setStreaks] = useLocalState("streaks", { current: 5, longest: 12 });
  
  const T = {
    app: "Mind Companion",
    dailyCheck: "Daily Check-In",
    nudge: "Mindfulness Nudge",
    summary: "Daily Summary",
    resources: "Resources",
    achievements: "Achievements",
    settings: "Settings"
  };
  
  const resources = [
    { name: "National Suicide Prevention Lifeline", url: "https://988lifeline.org" },
    { name: "Crisis Text Line", url: "https://www.crisistextline.org" },
    { name: "Campus Counseling Center", url: "https://counseling.example.edu" }
  ];
  
  const continueNext = () => {
    if (!showPanas) {
      setShowPanas(true);
    } else {
      setRoute("checkin");
    }
  };
  
  const onResetData = () => {
    clearAppData();
    window.location.reload();
  };

  return (
    <AppShell route={route} onNavigate={setRoute}>
      <Router
        route={route}
        setRoute={setRoute}
        name={name}
        setName={setName}
        school={school}
        setSchool={setSchool}
        year={year}
        setYear={setYear}
        consent={consent}
        setConsent={setConsent}
        nudgesOn={nudgesOn}
        setNudgesOn={setNudgesOn}
        nudgeTimes={nudgeTimes}
        setNudgeTimes={setNudgeTimes}
        showPanas={showPanas}
        setShowPanas={setShowPanas}
        panas={panas}
        setPanas={setPanas}
        continueNext={continueNext}
        mood={mood}
        setMood={setMood}
        moodNote={moodNote}
        setMoodNote={setMoodNote}
        crisisDetected={crisisDetected}
        selectedExercise={selectedExercise}
        setSelectedExercise={setSelectedExercise}
        moodHistory={moodHistory}
        journalEntries={journalEntries}
        exerciseStats={exerciseStats}
        achievements={achievements}
        streaks={streaks}
        onReset={onResetData}
        T={T}
        resources={resources}
      />
    </AppShell>
  );
}