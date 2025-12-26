import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  ArrowLeft,
  Users,
  TrendingUp,
  AlertTriangle,
  BookOpen,
  Clock,
  Award,
  Target
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
  Cell
} from "recharts";

interface TeacherDashboardProps {
  onNavigate: (page: string) => void;
}

export function TeacherDashboard({ onNavigate }: TeacherDashboardProps) {
  const classes = [
    { id: 1, name: "Math 101 - Section A", students: 28, avgProgress: 72, color: "purple" },
    { id: 2, name: "Math 101 - Section B", students: 32, avgProgress: 68, color: "blue" },
    { id: 3, name: "Advanced Calculus", students: 24, avgProgress: 65, color: "green" },
  ];

  const topicMasteryData = [
    { topic: "Algebra", mastery: 78 },
    { topic: "Calculus", mastery: 65 },
    { topic: "Geometry", mastery: 72 },
    { topic: "Trigonometry", mastery: 70 },
    { topic: "Statistics", mastery: 58 },
  ];

  const strugglingStudents = [
    { name: "Emma Johnson", class: "Math 101 - Section A", score: 45, trend: "down", issues: ["Calculus", "Algebra"] },
    { name: "Michael Chen", class: "Math 101 - Section B", score: 52, trend: "down", issues: ["Statistics"] },
    { name: "Sarah Williams", class: "Advanced Calculus", score: 48, trend: "stable", issues: ["Integration", "Derivatives"] },
  ];

  const performanceHeatmap = [
    { student: "Alex Smith", algebra: 85, calculus: 72, geometry: 88, trig: 78, stats: 65 },
    { student: "Emma Johnson", algebra: 45, calculus: 42, geometry: 48, trig: 50, stats: 44 },
    { student: "Michael Chen", algebra: 78, calculus: 65, geometry: 72, trig: 68, stats: 52 },
    { student: "Sarah Williams", algebra: 82, calculus: 48, geometry: 78, trig: 75, stats: 70 },
    { student: "David Lee", algebra: 90, calculus: 88, geometry: 92, trig: 85, stats: 87 },
  ];

  const getCellColor = (value: number) => {
    if (value >= 80) return "bg-green-500";
    if (value >= 70) return "bg-green-400";
    if (value >= 60) return "bg-yellow-400";
    if (value >= 50) return "bg-orange-400";
    return "bg-red-400";
  };

  const COLORS = ['#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('landing')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Teacher Dashboard</h1>
              <p className="text-gray-600">Monitor student progress and identify learning gaps</p>
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
              <BookOpen className="w-4 h-4 mr-2" />
              Create Assignment
            </Button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 border-l-4 border-l-purple-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Total Students</span>
              <Users className="w-5 h-5 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-purple-600">84</div>
            <div className="text-sm text-gray-500 mt-1">Across 3 classes</div>
          </Card>

          <Card className="p-6 border-l-4 border-l-blue-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Avg. Progress</span>
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-blue-600">68.3%</div>
            <div className="text-sm text-gray-500 mt-1">+5% from last month</div>
          </Card>

          <Card className="p-6 border-l-4 border-l-orange-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Needs Attention</span>
              <AlertTriangle className="w-5 h-5 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-orange-600">3</div>
            <div className="text-sm text-gray-500 mt-1">Students struggling</div>
          </Card>

          <Card className="p-6 border-l-4 border-l-green-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Top Performers</span>
              <Award className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-green-600">12</div>
            <div className="text-sm text-gray-500 mt-1">85%+ mastery</div>
          </Card>
        </div>

        {/* Class Overview Cards */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Class Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {classes.map((cls) => (
              <Card key={cls.id} className="p-6 hover:shadow-lg transition cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{cls.name}</h3>
                    <p className="text-sm text-gray-500">{cls.students} students</p>
                  </div>
                  <Badge variant="outline" className={`bg-${cls.color}-50 text-${cls.color}-700 border-${cls.color}-200`}>
                    {cls.avgProgress}%
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Average Progress</span>
                    <span className="font-semibold">{cls.avgProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`bg-${cls.color}-500 h-2 rounded-full`}
                      style={{ width: `${cls.avgProgress}%` }}
                    ></div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="outline" className="flex-1">View Details</Button>
                    <Button size="sm" className="flex-1">Grade</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Topic-wise Class Mastery */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Topic-wise Class Mastery</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topicMasteryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="topic" tick={{ fontSize: 12 }} />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="mastery" radius={[8, 8, 0, 0]}>
                  {topicMasteryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Struggling Students Alert */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Students Needing Support</h2>
              <Badge variant="destructive">{strugglingStudents.length}</Badge>
            </div>
            
            <div className="space-y-4">
              {strugglingStudents.map((student, index) => (
                <div key={index} className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold">{student.name}</h3>
                      <p className="text-sm text-gray-600">{student.class}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-600">{student.score}%</div>
                      <div className="text-xs text-red-600">Below target</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {student.issues.map((issue, idx) => (
                      <Badge key={idx} variant="outline" className="bg-red-100 text-red-700 border-red-300">
                        {issue}
                      </Badge>
                    ))}
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Provide Support
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Student Performance Heatmap */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Student Performance Heatmap</h2>
          <p className="text-sm text-gray-600 mb-4">Color intensity indicates mastery level (Red: &lt;50%, Orange: 50-60%, Yellow: 60-70%, Light Green: 70-80%, Green: 80%+)</p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-3 border-b-2 font-semibold">Student</th>
                  <th className="text-center p-3 border-b-2 font-semibold">Algebra</th>
                  <th className="text-center p-3 border-b-2 font-semibold">Calculus</th>
                  <th className="text-center p-3 border-b-2 font-semibold">Geometry</th>
                  <th className="text-center p-3 border-b-2 font-semibold">Trigonometry</th>
                  <th className="text-center p-3 border-b-2 font-semibold">Statistics</th>
                </tr>
              </thead>
              <tbody>
                {performanceHeatmap.map((student, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="p-3 border-b font-medium">{student.student}</td>
                    <td className="p-3 border-b">
                      <div className={`${getCellColor(student.algebra)} text-white font-semibold rounded px-2 py-1 text-center`}>
                        {student.algebra}%
                      </div>
                    </td>
                    <td className="p-3 border-b">
                      <div className={`${getCellColor(student.calculus)} text-white font-semibold rounded px-2 py-1 text-center`}>
                        {student.calculus}%
                      </div>
                    </td>
                    <td className="p-3 border-b">
                      <div className={`${getCellColor(student.geometry)} text-white font-semibold rounded px-2 py-1 text-center`}>
                        {student.geometry}%
                      </div>
                    </td>
                    <td className="p-3 border-b">
                      <div className={`${getCellColor(student.trig)} text-white font-semibold rounded px-2 py-1 text-center`}>
                        {student.trig}%
                      </div>
                    </td>
                    <td className="p-3 border-b">
                      <div className={`${getCellColor(student.stats)} text-white font-semibold rounded px-2 py-1 text-center`}>
                        {student.stats}%
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="p-6 hover:shadow-lg transition cursor-pointer">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-2">Create New Quiz</h3>
            <p className="text-sm text-gray-600 mb-4">Design adaptive assessments for your students</p>
            <Button variant="outline" size="sm" className="w-full">Create Quiz</Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition cursor-pointer">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">View Analytics</h3>
            <p className="text-sm text-gray-600 mb-4">Deep dive into class performance metrics</p>
            <Button variant="outline" size="sm" className="w-full">View Report</Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition cursor-pointer">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold mb-2">Manage Students</h3>
            <p className="text-sm text-gray-600 mb-4">Add, remove, or update student information</p>
            <Button variant="outline" size="sm" className="w-full">Manage</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
