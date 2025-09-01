import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
} from "../ui/card";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Trophy, Flame, Target, Star, Calendar, Award } from "lucide-react";

export default function Achievements({
  achievements,
  streaks,
  onBack,
  onContinue,
  T
}) {
  const currentStreak = streaks?.current || 0;
  const longestStreak = streaks?.longest || 0;
  const totalCheckIns = achievements?.totalCheckIns || 0;
  const completedExercises = achievements?.completedExercises || 0;

  const milestoneAchievements = [
    { id: "first_checkin", title: "First Step", description: "Complete your first check-in", icon: Star, unlocked: totalCheckIns >= 1 },
    { id: "week_streak", title: "Week Warrior", description: "7-day check-in streak", icon: Flame, unlocked: currentStreak >= 7 },
    { id: "month_streak", title: "Monthly Master", description: "30-day check-in streak", icon: Trophy, unlocked: currentStreak >= 30 },
    { id: "exercise_10", title: "Mindful Beginner", description: "Complete 10 exercises", icon: Target, unlocked: completedExercises >= 10 },
    { id: "exercise_50", title: "Wellness Warrior", description: "Complete 50 exercises", icon: Award, unlocked: completedExercises >= 50 }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Trophy className="w-5 h-5" /> {T.achievements}
        </CardTitle>
        <CardDescription>
          Celebrate your progress and milestones
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="overview" className="text-xs">Overview</TabsTrigger>
            <TabsTrigger value="streaks" className="text-xs">Streaks</TabsTrigger>
            <TabsTrigger value="achievements" className="text-xs">Achievements</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-xl border border-slate-800">
                <Flame className="w-8 h-8 mx-auto mb-2 text-orange-400" />
                <div className="text-2xl font-bold text-white">{currentStreak}</div>
                <div className="text-xs text-gray-400">Current Streak</div>
              </div>
              <div className="text-center p-4 rounded-xl border border-slate-800">
                <Trophy className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                <div className="text-2xl font-bold text-white">{longestStreak}</div>
                <div className="text-xs text-gray-400">Longest Streak</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-white">Total Check-ins</span>
                <span className="text-white">{totalCheckIns}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white">Exercises Completed</span>
                <span className="text-white">{completedExercises}</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="streaks" className="space-y-4">
            <div className="space-y-3">
              <div className="p-4 rounded-xl border border-orange-800 bg-orange-950/20">
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="w-4 h-4 text-orange-400" />
                  <span className="text-sm font-medium text-orange-200">Current Streak</span>
                </div>
                <div className="text-2xl font-bold text-orange-300">{currentStreak} days</div>
                <p className="text-xs text-orange-300 mt-1">
                  Keep it going! Check in tomorrow to maintain your streak.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium text-sm text-white">Streak Milestones</h3>
                {[1, 3, 7, 14, 30, 60, 100].map(days => (
                  <div key={days} className="flex items-center justify-between p-2 rounded-lg border border-slate-800">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      <span className="text-sm text-white">{days} days</span>
                    </div>
                    <div className={`w-4 h-4 rounded-full ${currentStreak >= days ? 'bg-orange-400' : 'bg-slate-700'}`} />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-4">
            <div className="space-y-3">
              {milestoneAchievements.map((achievement) => {
                const IconComponent = achievement.icon;
                return (
                  <div 
                    key={achievement.id} 
                    className={`p-4 rounded-lg border ${
                      achievement.unlocked 
                        ? 'border-emerald-800 bg-emerald-950/20' 
                        : 'border-slate-800 bg-slate-900/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        achievement.unlocked 
                          ? 'bg-emerald-400/20 text-emerald-400' 
                          : 'bg-slate-700 text-gray-500'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className={`font-medium text-sm ${
                          achievement.unlocked ? 'text-emerald-200' : 'text-gray-400'
                        }`}>
                          {achievement.title}
                        </div>
                        <div className="text-xs text-gray-400">
                          {achievement.description}
                        </div>
                      </div>
                      {achievement.unlocked && (
                        <div className="text-emerald-400">
                          <Star className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
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
