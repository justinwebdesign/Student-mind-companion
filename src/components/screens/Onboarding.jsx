import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Shield, Heart, Calendar } from "lucide-react";

export default function Onboarding({
  name, setName,
  school, setSchool,
  year, setYear,
  consent, setConsent,
  nudgesOn, setNudgesOn,
  nudgeTimes, setNudgeTimes,
  continueNext,
  showPanas, setShowPanas,
  panas, setPanas,
  T
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Heart className="w-5 h-5" /> {T.app}
        </CardTitle>
        <CardDescription>
          A gentle companion for daily check-ins, mindfulness nudges, and evidence-based micro-exercises.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Alex" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="school">School</Label>
          <Input id="school" placeholder="Whitman College" value={school} onChange={e => setSchool(e.target.value)} />
        </div>
        <div className="grid gap-2">
          <Label>Year</Label>
          <Tabs value={year} onValueChange={setYear} className="w-full">
            <TabsList className="grid grid-cols-4">
              {["First-Year", "Sophomore", "Junior", "Senior"].map(y => (
                <TabsTrigger key={y} value={y} className="text-xs">{y}</TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <div className="flex items-start gap-3 rounded-xl border border-slate-800 p-3">
          <Shield className="w-4 h-4 mt-0.5" />
          <div className="text-sm text-gray-300">
            <p className="mb-1">Consent & Privacy (demo):</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Your entries are private on your device unless you export/share.</li>
              <li>This is not a crisis service; in emergencies call local services.</li>
              <li>By proceeding, you consent to processing data to personalize nudges.</li>
            </ul>
            <div className="flex items-center gap-2 mt-2">
              <Checkbox id="consent" checked={consent} onCheckedChange={v => setConsent(!!v)} />
              <Label htmlFor="consent">I consent</Label>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-xl border border-slate-800 p-3">
          <div>
            <Label className="text-white">Daily nudges</Label>
            <p className="text-xs text-gray-400">Reminders at key times</p>
          </div>
          <Switch checked={nudgesOn} onCheckedChange={setNudgesOn} />
        </div>
        {nudgesOn && (
          <div className="grid grid-cols-2 gap-3">
            {nudgeTimes.map((t, i) => (
              <div className="grid gap-2" key={i}>
                <Label>Time {i + 1}</Label>
                <Input
                  type="time"
                  value={t}
                  onChange={e => {
                    const arr = [...nudgeTimes];
                    arr[i] = e.target.value;
                    setNudgeTimes(arr);
                  }}
                />
              </div>
            ))}
            <Button variant="secondary" onClick={() => setNudgeTimes(xs => [...xs, "16:00"])}>+ Add time</Button>
          </div>
        )}
        {showPanas && (
          <div className="space-y-3">
            <Label>Baseline feelings (PANAS-lite)</Label>
            <div className="grid grid-cols-1 gap-2">
              {panas && Object.keys(panas).map(k => (
                <div key={k} className="flex items-center justify-between">
                  <span className="text-sm text-white">{k}</span>
                  <input type="range" min={1} max={5} value={panas[k]} onChange={e => setPanas(p => ({ ...p, [k]: Number(e.target.value) }))} />
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="justify-between">
        <div className="text-xs text-gray-400 flex items-center gap-1">
          <Calendar className="w-3 h-3" /> Nudges: {nudgeTimes.join(", ")}
        </div>
        <Button className="rounded-2xl" onClick={continueNext}>{showPanas ? "Finish" : "Continue"}</Button>
      </CardFooter>
    </Card>
  );
}
