import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Settings as SettingsIcon, Bell, Shield, Download, Trash2, User } from "lucide-react";

export default function Settings({
  name, setName,
  nudgesOn, setNudgesOn,
  nudgeTimes, setNudgeTimes,
  onReset,
  onBack,
  T
}) {
  const handleReset = () => {
    if (window.confirm("This will clear all your data and reset the app. Are you sure?")) {
      onReset();
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <SettingsIcon className="w-5 h-5" /> {T.settings}
        </CardTitle>
        <CardDescription>
          Customize your experience and manage your data
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="profile" className="text-xs">Profile</TabsTrigger>
            <TabsTrigger value="notifications" className="text-xs">Notifications</TabsTrigger>
            <TabsTrigger value="data" className="text-xs">Data</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-lg border border-slate-800">
                <User className="w-8 h-8 text-gray-400" />
                <div className="flex-1">
                  <Label htmlFor="settings-name">Name</Label>
                  <Input 
                    id="settings-name"
                    value={name} 
                    onChange={e => setName(e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
              
              <div className="p-4 rounded-xl border border-slate-800">
                <h3 className="font-medium text-sm mb-2 text-white">Privacy & Security</h3>
                <div className="space-y-2 text-xs text-gray-400">
                  <p>• Your data is stored locally on your device</p>
                  <p>• No data is sent to external servers</p>
                  <p>• You can export or delete your data anytime</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg border border-slate-800">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-gray-400" />
                  <div>
                    <Label className="text-white">Daily nudges</Label>
                    <p className="text-xs text-gray-400">Reminders at key times</p>
                  </div>
                </div>
                <Switch checked={nudgesOn} onCheckedChange={setNudgesOn} />
              </div>
              
              {nudgesOn && (
                <div className="space-y-3">
                  <Label>Nudge Times</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {nudgeTimes.map((time, index) => (
                      <div key={index} className="space-y-1">
                        <Label className="text-xs">Time {index + 1}</Label>
                        <Input
                          type="time"
                          value={time}
                          onChange={e => {
                            const arr = [...nudgeTimes];
                            arr[index] = e.target.value;
                            setNudgeTimes(arr);
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => setNudgeTimes(xs => [...xs, "16:00"])}
                  >
                    + Add time
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="data" className="space-y-4">
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-white">Data Management</span>
                </div>
                <p className="text-xs text-gray-400 mb-3">
                  Your wellness data is stored locally and never shared without your permission.
                </p>
              </div>
              
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Export Data
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-red-400 border-red-800 hover:bg-red-950/20"
                  onClick={handleReset}
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Reset All Data
                </Button>
              </div>
              
              <div className="p-3 rounded-lg border border-amber-800 bg-amber-950/20">
                <p className="text-xs text-amber-300">
                  <strong>Note:</strong> Resetting will permanently delete all your check-ins, 
                  journal entries, and settings. This action cannot be undone.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="ghost" onClick={onBack}>Back</Button>
        <Button className="rounded-2xl">Save Changes</Button>
      </CardFooter>
    </Card>
  );
}
