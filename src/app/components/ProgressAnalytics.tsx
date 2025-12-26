import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  ArrowLeft,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Target,
  Clock,
  Lightbulb
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  LineChart,
  Line,
  Area,
  AreaChart
} from "recharts";

interface ProgressAnalyticsProps {
  onNavigate: (page: string) => void;
}

export function ProgressAnalytics({ onNavigate }: ProgressAnalyticsProps) {
  const topicMasteryData = [
    { topic: "Algebra", mastery: 85, target: 90 },
    { topic: "Calculus", mastery: 72, target: 80 },
    { topic: "Geometry", mastery: 68, target: 75 },
    { topic: "Trigonometry", mastery: 78, target: 85 },
    { topic: "Statistics", mastery: 65, target: 80 },
  ];

  const strengthsWeaknessData = [
    { subject: "Problem Solving", score: 85 },
    { subject: "Conceptual Understanding", score: 78 },
    { subject: "Speed", score: 65 },
    { subject: "Accuracy", score: 88 },
    { subject: "Application", score: 72 },
    { subject: "Theory", score: 80 },
  ];

  const timeSpentData = [
    { day: "Mon", hours: 2.5 },
    { day: "Tue", hours: 3.2 },
    { day: "Wed", hours: 1.8 },
    { day: "Thu", hours: 4.1 },
    { day: "Fri", hours: 2.9 },
    { day: "Sat", hours: 5.5 },
    { day: "Sun", hours: 3.8 },
  ];

  const recommendations = [
    {
      topic: "Statistics - Probability",
      reason: "65% mastery - Below your average",
      action: "Practice recommended",
      priority: "high"
    },
    {
      topic: "Calculus - Integration",
      reason: "Showing improvement trend",
      action: "Continue current pace",
      priority: "medium"
    },
    {
      topic: "Speed Training",
      reason: "Response time 20% slower than peers",
      action: "Try timed drills",
      priority: "medium"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('student-dashboard')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Progress & Analytics</h1>
              <p className="text-gray-600">Detailed insights into your learning journey</p>
            </div>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-purple-100">Overall Mastery</span>
              <Target className="w-5 h-5 text-purple-200" />
            </div>
            <div className="text-3xl font-bold mb-1">73.6%</div>
            <div className="text-sm text-purple-100 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              +8% from last month
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-blue-100">Topics Completed</span>
              <CheckCircle className="w-5 h-5 text-blue-200" />
            </div>
            <div className="text-3xl font-bold mb-1">18/24</div>
            <div className="text-sm text-blue-100">75% complete</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-green-100">Study Time</span>
              <Clock className="w-5 h-5 text-green-200" />
            </div>
            <div className="text-3xl font-bold mb-1">23.8h</div>
            <div className="text-sm text-green-100">This week</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-orange-100">Avg. Accuracy</span>
              <Target className="w-5 h-5 text-orange-200" />
            </div>
            <div className="text-3xl font-bold mb-1">88%</div>
            <div className="text-sm text-orange-100 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              +5% improvement
            </div>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Topic-wise Mastery */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Topic-wise Mastery</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topicMasteryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="topic" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="mastery" fill="#8b5cf6" name="Current Mastery" radius={[8, 8, 0, 0]} />
                <Bar dataKey="target" fill="#e0e7ff" name="Target" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Strengths vs Weaknesses Radar */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Strengths vs Weaknesses</h2>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={strengthsWeaknessData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11 }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar 
                  name="Your Score" 
                  dataKey="score" 
                  stroke="#8b5cf6" 
                  fill="#8b5cf6" 
                  fillOpacity={0.6} 
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Time Spent Learning */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Time Spent Learning (This Week)</h2>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={timeSpentData}>
              <defs>
                <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" />
              <YAxis label={{ value: 'Hours', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="hours" 
                stroke="#3b82f6" 
                fillOpacity={1} 
                fill="url(#colorHours)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* AI Recommendations Panel */}
        <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold">AI-Powered Recommendations</h2>
              <p className="text-gray-600">Focus on these topics next</p>
            </div>
          </div>

          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-4 bg-white rounded-lg border-2 border-transparent hover:border-purple-300 transition"
              >
                <div className="flex-shrink-0">
                  {rec.priority === "high" ? (
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">{rec.topic}</h3>
                    <Badge 
                      variant="outline" 
                      className={
                        rec.priority === "high" 
                          ? "bg-red-50 text-red-700 border-red-200" 
                          : "bg-blue-50 text-blue-700 border-blue-200"
                      }
                    >
                      {rec.priority === "high" ? "High Priority" : "Medium Priority"}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-2">{rec.reason}</p>
                  <p className="text-sm text-purple-700 font-medium">
                    → {rec.action}
                  </p>
                </div>

                <Button variant="outline" size="sm">
                  Start Practice
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Progress Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Top Strength
            </h3>
            <p className="text-2xl font-bold text-green-600 mb-2">Accuracy</p>
            <p className="text-sm text-gray-600">You consistently score high on correctness. Keep it up!</p>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-orange-600" />
              Needs Improvement
            </h3>
            <p className="text-2xl font-bold text-orange-600 mb-2">Speed</p>
            <p className="text-sm text-gray-600">Try timed practice sessions to improve response time.</p>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              Best Progress
            </h3>
            <p className="text-2xl font-bold text-blue-600 mb-2">Algebra</p>
            <p className="text-sm text-gray-600">15% improvement this month - excellent progress!</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
