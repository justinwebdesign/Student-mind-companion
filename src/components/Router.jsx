import Onboarding from "./screens/Onboarding";
import CheckIn from "./screens/CheckIn";
import Crisis from "./screens/Crisis";
import Nudge from "./screens/Nudge";
import Summary from "./screens/Summary";
import Resources from "./screens/Resources";
import Achievements from "./screens/Achievements";
import Settings from "./screens/Settings";

export default function Router({ 
  route, 
  setRoute,
  // Onboarding props
  name, setName,
  school, setSchool,
  year, setYear,
  consent, setConsent,
  nudgesOn, setNudgesOn,
  nudgeTimes, setNudgeTimes,
  showPanas, setShowPanas,
  panas, setPanas,
  continueNext,
  // CheckIn props
  mood, setMood,
  moodNote, setMoodNote,
  crisisDetected,
  // Nudge props
  selectedExercise, setSelectedExercise,
  // Summary props
  moodHistory, journalEntries, exerciseStats,
  // Achievements props
  achievements, streaks,
  // Settings props
  onReset: onResetData,
  // Common props
  T,
  resources
}) {
  const handleBack = () => {
    const routeOrder = ["onboarding", "checkin", "crisis", "nudge", "summary", "resources", "achievements", "settings"];
    const currentIndex = routeOrder.indexOf(route);
    if (currentIndex > 0) {
      setRoute(routeOrder[currentIndex - 1]);
    }
  };

  const handleContinue = () => {
    const routeOrder = ["onboarding", "checkin", "crisis", "nudge", "summary", "resources", "achievements", "settings"];
    const currentIndex = routeOrder.indexOf(route);
    if (currentIndex < routeOrder.length - 1) {
      setRoute(routeOrder[currentIndex + 1]);
    }
  };

  const handleSafe = () => {
    setRoute("nudge");
  };

  switch (route) {
    case "onboarding":
      return (
        <Onboarding
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
          continueNext={continueNext}
          showPanas={showPanas}
          setShowPanas={setShowPanas}
          panas={panas}
          setPanas={setPanas}
          T={T}
        />
      );

    case "checkin":
      return (
        <CheckIn
          mood={mood}
          setMood={setMood}
          moodNote={moodNote}
          setMoodNote={setMoodNote}
          crisisDetected={crisisDetected}
          T={T}
          onBack={handleBack}
          onContinue={handleContinue}
        />
      );

    case "crisis":
      return (
        <Crisis
          resources={resources}
          onBack={handleBack}
          onSafe={handleSafe}
        />
      );

    case "nudge":
      return (
        <Nudge
          selectedExercise={selectedExercise}
          setSelectedExercise={setSelectedExercise}
          T={T}
        />
      );

    case "summary":
      return (
        <Summary
          moodHistory={moodHistory}
          journalEntries={journalEntries}
          exerciseStats={exerciseStats}
          onBack={handleBack}
          onContinue={handleContinue}
          T={T}
        />
      );

    case "resources":
      return (
        <Resources
          onBack={handleBack}
          onContinue={handleContinue}
          T={T}
        />
      );

    case "achievements":
      return (
        <Achievements
          achievements={achievements}
          streaks={streaks}
          onBack={handleBack}
          onContinue={handleContinue}
          T={T}
        />
      );

    case "settings":
      return (
        <Settings
          name={name}
          setName={setName}
          nudgesOn={nudgesOn}
          setNudgesOn={setNudgesOn}
          nudgeTimes={nudgeTimes}
          setNudgeTimes={setNudgeTimes}
          onReset={onResetData}
          onBack={handleBack}
          T={T}
        />
      );

    default:
      return (
        <CheckIn
          mood={mood}
          setMood={setMood}
          moodNote={moodNote}
          setMoodNote={setMoodNote}
          crisisDetected={crisisDetected}
          T={T}
          onBack={handleBack}
          onContinue={handleContinue}
        />
      );
  }
}
