import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import {
  ArrowLeft,
  User,
  Bell,
  Lock,
  Palette,
  Globe,
  HelpCircle,
} from "lucide-react";

interface SettingsPageProps {
  onNavigate: (page: string) => void;
}

const STORAGE_KEY = "user_settings";

const defaultSettings = {
  profile: {
    firstName: "Alex",
    lastName: "Smith",
    email: "alex.smith@example.com",
    phone: "+1 (555) 123-4567",
    grade: "12th Grade",
    school: "Springfield High School",
    major: "Mathematics & Science",
    graduationYear: "2026",
  },
  notifications: {
    courseUpdates: true,
    quizReminders: true,
    progressReports: true,
    achievements: true,
    dailyReminders: true,
    leaderboardUpdates: false,
  },
  preferences: {
    aiDifficulty: true,
    showHints: true,
    autoplayVideos: false,
    shareWithTeachers: true,
    publicLeaderboard: true,
  },
};

export function SettingsPage({ onNavigate }: SettingsPageProps) {
  const [settings, setSettings] = useState(defaultSettings);
  const [saving, setSaving] = useState(false);

  // Load saved settings
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setSettings(JSON.parse(saved));
  }, []);

  const saveSettings = () => {
    setSaving(true);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    setTimeout(() => setSaving(false), 800);
  };

  const updateProfile = (field: string, value: string) => {
    setSettings((prev) => ({
      ...prev,
      profile: { ...prev.profile, [field]: value },
    }));
  };

  const updateToggle = (
    section: "notifications" | "preferences",
    field: string,
    value: boolean
  ) => {
    setSettings((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <Button variant="ghost" onClick={() => onNavigate("student-dashboard")}>
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
        </Button>

        <h1 className="text-3xl font-bold mt-4 mb-6">Settings</h1>

        <Card className="p-6">
          <Tabs defaultValue="profile">
            <TabsList className="mb-6">
              <TabsTrigger value="profile"><User className="w-4 h-4 mr-2" />Profile</TabsTrigger>
              <TabsTrigger value="notifications"><Bell className="w-4 h-4 mr-2" />Notifications</TabsTrigger>
              <TabsTrigger value="security"><Lock className="w-4 h-4 mr-2" />Security</TabsTrigger>
              <TabsTrigger value="preferences"><Palette className="w-4 h-4 mr-2" />Preferences</TabsTrigger>
            </TabsList>

            {/* PROFILE */}
            <TabsContent value="profile" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label>First Name</Label>
                  <Input value={settings.profile.firstName}
                    onChange={(e) => updateProfile("firstName", e.target.value)} />
                </div>
                <div>
                  <Label>Last Name</Label>
                  <Input value={settings.profile.lastName}
                    onChange={(e) => updateProfile("lastName", e.target.value)} />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input value={settings.profile.email}
                    onChange={(e) => updateProfile("email", e.target.value)} />
                </div>
                <div>
                  <Label>Phone</Label>
                  <Input value={settings.profile.phone}
                    onChange={(e) => updateProfile("phone", e.target.value)} />
                </div>
                <div>
                  <Label>Grade</Label>
                  <Input value={settings.profile.grade}
                    onChange={(e) => updateProfile("grade", e.target.value)} />
                </div>
                <div>
                  <Label>School</Label>
                  <Input value={settings.profile.school}
                    onChange={(e) => updateProfile("school", e.target.value)} />
                </div>
                <div>
                  <Label>Major</Label>
                  <Input value={settings.profile.major}
                    onChange={(e) => updateProfile("major", e.target.value)} />
                </div>
                <div>
                  <Label>Graduation Year</Label>
                  <Input value={settings.profile.graduationYear}
                    onChange={(e) => updateProfile("graduationYear", e.target.value)} />
                </div>
              </div>

              <Button onClick={saveSettings} disabled={saving}
                className="bg-gradient-to-r from-purple-600 to-blue-600">
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </TabsContent>

            {/* NOTIFICATIONS */}
            <TabsContent value="notifications" className="space-y-4">
              {Object.entries(settings.notifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                  <Switch
                    checked={value}
                    onCheckedChange={(v) =>
                      updateToggle("notifications", key, v)
                    }
                  />
                </div>
              ))}
            </TabsContent>

            {/* SECURITY */}
            <TabsContent value="security" className="space-y-4 max-w-md">
              <Label>New Password</Label>
              <Input type="password" />
              <Button onClick={() => alert("Password updated!")}>
                Update Password
              </Button>
            </TabsContent>

            {/* PREFERENCES */}
            <TabsContent value="preferences" className="space-y-4">
              {Object.entries(settings.preferences).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                  <Switch
                    checked={value}
                    onCheckedChange={(v) =>
                      updateToggle("preferences", key, v)
                    }
                  />
                </div>
              ))}
            </TabsContent>

          </Tabs>
        </Card>

        {/* Danger Zone */}
        <Card className="p-6 mt-6 border-red-200 bg-red-50">
          <div className="flex items-start gap-3">
            <HelpCircle className="text-red-600" />
            <div>
              <h3 className="font-semibold text-red-900">Danger Zone</h3>
              <p className="text-sm text-red-700 mb-3">
                Deleting your account is irreversible.
              </p>
              <Button
                variant="destructive"
                onClick={() => {
                  localStorage.removeItem(STORAGE_KEY);
                  alert("Account deleted");
                  onNavigate("login");
                }}
              >
                Delete Account
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
