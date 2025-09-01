import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
} from "../ui/card";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Activity, AlertTriangle } from "lucide-react";

export default function CheckIn({
  mood, setMood,
  moodNote, setMoodNote,
  crisisDetected,
  T,
  onBack,
  onContinue
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Activity className="w-5 h-5" /> {T.dailyCheck}
        </CardTitle>
        <CardDescription>How are you feeling right now?</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">Low</span>
            <span className="text-sm text-gray-300">High</span>
          </div>
          <input
            type="range"
            min={1}
            max={10}
            value={mood}
            onChange={e => setMood(Number(e.target.value))}
            className="w-full"
            aria-label="Mood rating from 1 to 10"
            aria-valuemin={1}
            aria-valuemax={10}
            aria-valuenow={mood}
            aria-valuetext={`Mood rating: ${mood} out of 10`}
          />
          <Progress value={mood * 10} className="h-2" />
          <div className="text-xs text-gray-400" aria-live="polite">
            Mood score: {mood}/10
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="note">Add a sentence (optional)</Label>
          <Textarea
            id="note"
            placeholder="e.g., Wired before my presentation; slept late."
            value={moodNote}
            onChange={e => setMoodNote(e.target.value)}
            className="min-h-[90px]"
            aria-describedby={crisisDetected ? "crisis-alert" : undefined}
          />
          {crisisDetected && (
            <div 
              id="crisis-alert"
              className="text-amber-300 text-xs flex items-center gap-2" 
              role="alert"
              aria-live="assertive"
            >
              <AlertTriangle className="w-4 h-4" aria-hidden="true" /> 
              We detected language that might mean you're in distress. You'll see support options next.
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="ghost" onClick={onBack}>Back</Button>
        <Button className="rounded-2xl" onClick={onContinue}>Continue</Button>
      </CardFooter>
    </Card>
  );
}
