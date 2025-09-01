import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
} from "../ui/card";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { BarChart, Calendar, TrendingUp, Activity } from "lucide-react";

export default function Summary({
  moodHistory,
  journalEntries,
  exerciseStats,
  onBack,
  onContinue,
  T
}) {
  const averageMood = moodHistory.length > 0 
    ? Math.round(moodHistory.reduce((sum, entry) => sum + entry.mood, 0) / moodHistory.length)
    : 0;

  const completedExercises = exerciseStats?.completed || 0;
  const totalExercises = exerciseStats?.total || 0;
  const completionRate = totalExercises > 0 ? (completedExercises / totalExercises) * 100 : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <BarChart className="w-5 h-5" /> {T.summary}
        </CardTitle>
        <CardDescription>
          Your daily wellness overview and insights
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="overview" className="text-xs">Overview</TabsTrigger>
            <TabsTrigger value="mood" className="text-xs">Mood</TabsTrigger>
            <TabsTrigger value="journal" className="text-xs">Journal</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-xl border border-slate-800">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-emerald-400" />
                <div className="text-2xl font-bold text-white">{averageMood}/10</div>
                <div className="text-xs text-gray-400">Avg Mood</div>
              </div>
              <div className="text-center p-4 rounded-xl border border-slate-800">
                <Activity className="w-8 h-8 mx-auto mb-2 text-emerald-400" />
                <div className="text-2xl font-bold text-white">{completedExercises}</div>
                <div className="text-xs text-gray-400">Exercises</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white">Exercise completion</span>
                <span className="text-white">{Math.round(completionRate)}%</span>
              </div>
              <Progress value={completionRate} className="h-2" />
            </div>
          </TabsContent>

          <TabsContent value="mood" className="space-y-4">
            <div className="space-y-3">
              <h3 className="font-medium text-white">Recent Mood Scores</h3>
              {moodHistory.slice(-7).map((entry, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-white">{entry.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-emerald-400 h-2 rounded-full" 
                        style={{ width: `${entry.mood * 10}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-white">{entry.mood}/10</span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="journal" className="space-y-4">
            <div className="space-y-3">
              <h3 className="font-medium text-white">Recent Journal Entries</h3>
              {journalEntries.slice(-5).map((entry, index) => (
                <div key={index} className="p-3 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-400">{entry.date}</span>
                  </div>
                  <p className="text-sm text-white">{entry.text}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="ghost" onClick={onBack}>Back</Button>
        <Button className="rounded-2xl" onClick={onContinue}>Continue</Button>
      </CardFooter>
    </Card>
  );
}
