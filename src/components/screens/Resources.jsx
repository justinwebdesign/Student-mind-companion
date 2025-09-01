import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
} from "../ui/card";
import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { ExternalLink, Phone, MessageCircle, Heart, Shield } from "lucide-react";

export default function Resources({
  onBack,
  onContinue,
  T
}) {
  const crisisResources = [
    { name: "National Suicide Prevention Lifeline", phone: "988", url: "https://988lifeline.org" },
    { name: "Crisis Text Line", phone: "Text HOME to 741741", url: "https://www.crisistextline.org" },
    { name: "Emergency Services", phone: "911", url: null }
  ];

  const campusResources = [
    { name: "Counseling Center", phone: "(555) 123-4567", url: "https://counseling.example.edu" },
    { name: "Health Services", phone: "(555) 123-4568", url: "https://health.example.edu" },
    { name: "Resident Advisor", phone: "On-call system", url: null }
  ];

  const wellnessResources = [
    { name: "Headspace", description: "Meditation and mindfulness", url: "https://headspace.com" },
    { name: "Calm", description: "Sleep and relaxation", url: "https://calm.com" },
    { name: "BetterHelp", description: "Online therapy", url: "https://betterhelp.com" }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Heart className="w-5 h-5" /> {T.resources}
        </CardTitle>
        <CardDescription>
          Support and resources when you need them most
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="crisis" className="w-full">
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="crisis" className="text-xs">Crisis</TabsTrigger>
            <TabsTrigger value="campus" className="text-xs">Campus</TabsTrigger>
            <TabsTrigger value="wellness" className="text-xs">Wellness</TabsTrigger>
          </TabsList>
          
          <TabsContent value="crisis" className="space-y-4">
            <div className="p-4 rounded-xl border border-amber-800 bg-amber-950/20">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium text-amber-200">24/7 Crisis Support</span>
              </div>
              <p className="text-xs text-amber-300 mb-3">
                If you're in immediate danger, call emergency services (911) or go to the nearest emergency room.
              </p>
            </div>
            <div className="space-y-3">
              {crisisResources.map((resource, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <div>
                      <div className="font-medium text-sm text-white">{resource.name}</div>
                      <div className="text-xs text-gray-400">{resource.phone}</div>
                    </div>
                  </div>
                  {resource.url && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={resource.url} target="_blank" rel="noreferrer">
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="campus" className="space-y-4">
            <div className="p-4 rounded-xl border border-emerald-800 bg-emerald-950/20">
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-200">Campus Support</span>
              </div>
              <p className="text-xs text-emerald-300">
                Your campus has dedicated professionals ready to help with mental health, academic stress, and more.
              </p>
            </div>
            <div className="space-y-3">
              {campusResources.map((resource, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <div>
                      <div className="font-medium text-sm text-white">{resource.name}</div>
                      <div className="text-xs text-gray-400">{resource.phone}</div>
                    </div>
                  </div>
                  {resource.url && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={resource.url} target="_blank" rel="noreferrer">
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="wellness" className="space-y-4">
            <div className="p-4 rounded-xl border border-blue-800 bg-blue-950/20">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-200">Wellness Tools</span>
              </div>
              <p className="text-xs text-blue-300">
                Apps and resources to support your mental health and wellness journey.
              </p>
            </div>
            <div className="space-y-3">
              {wellnessResources.map((resource, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-slate-800">
                  <div>
                    <div className="font-medium text-sm text-white">{resource.name}</div>
                    <div className="text-xs text-gray-400">{resource.description}</div>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={resource.url} target="_blank" rel="noreferrer">
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
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
