import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { 
  LayoutDashboard, 
  BookOpen, 
  ClipboardList, 
  TrendingUp, 
  Trophy,
  Flame,
  Target,
  Clock,
  Award,
  ChevronRight,
  Star,
  Zap,
  Bell,
  Settings
} from "lucide-react";

interface StudentDashboardProps {
  onNavigate: (page: string) => void;
  studentName?: string;
  onShowNotifications?: () => void;
}

export function StudentDashboard({ onNavigate, studentName = "Alex", onShowNotifications }: StudentDashboardProps) {
  const courses = [
    { 
      id: 1, 
      name: "Advanced Mathematics", 
      progress: 68, 
      color: "purple",
      nextTopic: "Calculus II",
      timeSpent: "12h 30m"
    },
    { 
      id: 2, 
      name: "Physics Fundamentals", 
      progress: 45, 
      color: "blue",
      nextTopic: "Thermodynamics",
      timeSpent: "8h 15m"
    },
    { 
      id: 3, 
      name: "Computer Science", 
      progress: 82, 
      color: "green",
      nextTopic: "Data Structures",
      timeSpent: "15h 45m"
    },
    { 
      id: 4, 
      name: "Chemistry", 
      progress: 34, 
      color: "pink",
      nextTopic: "Organic Chemistry",
      timeSpent: "6h 20m"
    },
  ];

  const upcomingQuizzes = [
    { subject: "Mathematics", topic: "Linear Algebra", date: "Tomorrow", difficulty: "Medium" },
    { subject: "Physics", topic: "Newton's Laws", date: "Dec 28", difficulty: "Easy" },
    { subject: "Chemistry", topic: "Chemical Bonding", date: "Dec 30", difficulty: "Hard" },
  ];

  const badges = [
    { name: "Quick Learner", icon: Zap, color: "text-yellow-500" },
    { name: "Week Streak", icon: Flame, color: "text-orange-500" },
    { name: "Perfect Score", icon: Star, color: "text-purple-500" },
  ];

  const masteryLevel = "Intermediate";
  const currentStreak = 7;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6 space-y-2 hidden md:block">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <div>
              <div className="font-semibold">{studentName}</div>
              <div className="text-xs text-gray-500">{masteryLevel}</div>
            </div>
          </div>
        </div>

        <button 
          onClick={() => onNavigate('student-dashboard')}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-purple-50 text-purple-700 font-medium"
        >
          <LayoutDashboard className="w-5 h-5" />
          Dashboard
        </button>
        
        <button 
          onClick={() => onNavigate('courses')}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700 transition"
        >
          <BookOpen className="w-5 h-5" />
          Courses
        </button>
        
        <button 
          onClick={() => onNavigate('quiz')}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700 transition"
        >
          <ClipboardList className="w-5 h-5" />
          Quizzes
        </button>
        
        <button 
          onClick={() => onNavigate('progress')}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700 transition"
        >
          <TrendingUp className="w-5 h-5" />
          Progress
        </button>
        
        <button 
          onClick={() => onNavigate('rewards')}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700 transition"
        >
          <Trophy className="w-5 h-5" />
          Rewards
        </button>

        <div className="pt-6 mt-6 border-t">
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => onNavigate('landing')}
          >
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="md:hidden">
            <h2 className="text-xl font-bold">Dashboard</h2>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={onShowNotifications}
              className="relative"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => onNavigate('settings')}
            >
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Welcome Banner */}
        <div className="mb-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {studentName}! 👋</h1>
              <p className="text-purple-100 mb-4">You're making great progress. Keep up the momentum!</p>
              <Button className="bg-white text-purple-600 hover:bg-purple-50">
                Continue Learning
              </Button>
            </div>
            <div className="hidden lg:block">
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">{currentStreak}</div>
                  <div className="text-sm text-purple-200">Day Streak</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">4</div>
                  <div className="text-sm text-purple-200">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">12</div>
                  <div className="text-sm text-purple-200">Badges</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 border-l-4 border-l-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mb-1">Mastery Level</p>
                <p className="text-2xl font-bold text-purple-600">{masteryLevel}</p>
                <p className="text-sm text-gray-500 mt-1">68% Average</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 border-l-4 border-l-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mb-1">Current Streak</p>
                <p className="text-2xl font-bold text-orange-600">{currentStreak} Days</p>
                <p className="text-sm text-gray-500 mt-1">Personal best: 14</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Flame className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 border-l-4 border-l-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mb-1">Total Time</p>
                <p className="text-2xl font-bold text-green-600">43h 10m</p>
                <p className="text-sm text-gray-500 mt-1">This month</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* My Courses */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">My Courses</h2>
            <Button variant="ghost">View All <ChevronRight className="w-4 h-4 ml-1" /></Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {courses.map((course) => (
              <Card 
                key={course.id} 
                className="p-6 hover:shadow-lg transition cursor-pointer"
                onClick={() => onNavigate('course-detail')}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{course.name}</h3>
                    <p className="text-sm text-gray-500">Next: {course.nextTopic}</p>
                  </div>
                  <Badge variant="outline" className={`bg-${course.color}-50 text-${course.color}-700 border-${course.color}-200`}>
                    {course.progress}%
                  </Badge>
                </div>
                
                <Progress value={course.progress} className="mb-3 h-2" />
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="w-4 h-4" />
                    {course.timeSpent}
                  </div>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="text-purple-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('courses');
                    }}
                  >
                    Continue
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upcoming Quizzes */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Upcoming Quizzes</h2>
            <Card className="p-6">
              <div className="space-y-4">
                {upcomingQuizzes.map((quiz, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{quiz.subject}</h4>
                      <p className="text-sm text-gray-600">{quiz.topic}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge 
                        variant="outline"
                        className={
                          quiz.difficulty === "Easy" ? "bg-green-50 text-green-700 border-green-200" :
                          quiz.difficulty === "Medium" ? "bg-yellow-50 text-yellow-700 border-yellow-200" :
                          "bg-red-50 text-red-700 border-red-200"
                        }
                      >
                        {quiz.difficulty}
                      </Badge>
                      <div className="text-sm text-gray-500 min-w-[70px] text-right">{quiz.date}</div>
                      <Button size="sm" onClick={() => onNavigate('quiz')}>Start</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Recent Badges */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Recent Badges</h2>
            <Card className="p-6">
              <div className="space-y-4">
                {badges.map((badge, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-gradient-to-r from-gray-50 to-white rounded-lg border">
                    <div className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center ${badge.color}`}>
                      <badge.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{badge.name}</h4>
                      <p className="text-xs text-gray-500">Earned today</p>
                    </div>
                  </div>
                ))}
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={() => onNavigate('rewards')}
                >
                  View All Badges
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}