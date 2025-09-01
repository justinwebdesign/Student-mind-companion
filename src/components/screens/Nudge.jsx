import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
} from "../ui/card";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Timer, Heart, Brain, Coffee } from "lucide-react";
import { useCountdown } from "../../hooks/useCountdown";

export default function Nudge({
  selectedExercise,
  setSelectedExercise,
  T
}) {
  // Exercise configurations
  const exerciseConfigs = {
    breathing: { time: 60, title: "Box Breathing", description: "Inhale 4s, hold 4s, exhale 4s, hold 4s", icon: Heart },
    meditation: { time: 300, title: "Mindful Sitting", description: "Focus on your breath and body sensations", icon: Brain },
    pomodoro: { time: 1500, title: "Pomodoro Focus", description: "25 minutes of focused work", icon: Coffee }
  };

  const currentConfig = exerciseConfigs[selectedExercise];
  
  const handleComplete = () => {
    // Handle exercise completion
    console.log(`${currentConfig.title} completed!`);
  };

  const {
    timeLeft,
    isActive,
    progress,
    start,
    stop,
    reset,
    totalTime
  } = useCountdown(currentConfig.time, handleComplete);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleExerciseChange = (exercise) => {
    setSelectedExercise(exercise);
    reset(); // Reset timer when changing exercises
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Brain className="w-5 h-5" /> {T.nudge}
        </CardTitle>
        <CardDescription>
          Take a moment to pause and reset. Choose an exercise that feels right for you.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs value={selectedExercise} onValueChange={handleExerciseChange}>
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="breathing" className="text-xs">Breathing</TabsTrigger>
            <TabsTrigger value="meditation" className="text-xs">Meditation</TabsTrigger>
            <TabsTrigger value="pomodoro" className="text-xs">Pomodoro</TabsTrigger>
          </TabsList>
          
          <TabsContent value="breathing" className="space-y-4">
            <div className="text-center space-y-2">
              <Heart className="w-12 h-12 mx-auto text-emerald-400" />
              <h3 className="text-lg font-medium text-white">{currentConfig.title}</h3>
              <p className="text-sm text-gray-400">{currentConfig.description}</p>
            </div>
            <div className="space-y-2">
              <Label>Duration: {formatTime(currentConfig.time)}</Label>
              <Progress value={progress} className="h-2" />
              <div className="text-center text-2xl font-mono text-white">{formatTime(timeLeft)}</div>
            </div>
          </TabsContent>

          <TabsContent value="meditation" className="space-y-4">
            <div className="text-center space-y-2">
              <Brain className="w-12 h-12 mx-auto text-emerald-400" />
              <h3 className="text-lg font-medium text-white">{currentConfig.title}</h3>
              <p className="text-sm text-gray-400">{currentConfig.description}</p>
            </div>
            <div className="space-y-2">
              <Label>Duration: {formatTime(currentConfig.time)}</Label>
              <Progress value={progress} className="h-2" />
              <div className="text-center text-2xl font-mono text-white">{formatTime(timeLeft)}</div>
            </div>
          </TabsContent>

          <TabsContent value="pomodoro" className="space-y-4">
            <div className="text-center space-y-2">
              <Coffee className="w-12 h-12 mx-auto text-emerald-400" />
              <h3 className="text-lg font-medium text-white">{currentConfig.title}</h3>
              <p className="text-sm text-gray-400">{currentConfig.description}</p>
            </div>
            <div className="space-y-2">
              <Label>Duration: {formatTime(currentConfig.time)}</Label>
              <Progress value={progress} className="h-2" />
              <div className="text-center text-2xl font-mono text-white">{formatTime(timeLeft)}</div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex gap-2">
          {!isActive ? (
            <Button onClick={start} className="flex-1">
              <Timer className="w-4 h-4 mr-2" />
              Start
            </Button>
          ) : (
            <Button onClick={stop} variant="secondary" className="flex-1">
              Pause
            </Button>
          )}
          <Button onClick={reset} variant="ghost">
            Reset
          </Button>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <p className="text-xs text-gray-400 text-center">
          {isActive ? "Take deep breaths and stay present" : "Ready when you are"}
        </p>
      </CardFooter>
    </Card>
  );
}
