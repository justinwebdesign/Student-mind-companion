import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
} from "../ui/card";
import { Button } from "../ui/button";
import { AlertTriangle } from "lucide-react";

export default function Crisis({
  resources,
  onBack,
  onSafe
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl text-amber-300">
          <AlertTriangle className="w-5 h-5" /> You're not alone
        </CardTitle>
        <CardDescription>
          Confidential resources available now. If you're in immediate danger, call local emergency services.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <ul className="space-y-2">
          {resources.map(r => (
            <li key={r.name}>
              <a href={r.url} className="underline hover:no-underline" target="_blank" rel="noreferrer">{r.name}</a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-slate-300">
          It can help to text a trusted friend or sit with an RA. You deserve support.
        </p>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="ghost" onClick={onBack}>Back</Button>
        <Button className="rounded-2xl" onClick={onSafe}>I'm safe — continue</Button>
      </CardFooter>
    </Card>
  );
}
