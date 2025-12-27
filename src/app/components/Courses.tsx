import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { 
  ArrowLeft,
  PlayCircle,
  CheckCircle,
  Lock,
  BookOpen,
  FileText,
  Video,
  Trophy,
  Target
} from "lucide-react";

interface CoursesProps {
  onNavigate: (page: string) => void;
}

export function Courses({ onNavigate }: CoursesProps) {
  const courseModules = [
    {
      id: 1,
      title: "Introduction to Calculus",
      lessons: [
        { id: 1, title: "What is Calculus?", duration: "8 min", type: "video", completed: true, locked: true},
        { id: 2, title: "Limits and Continuity", duration: "12 min", type: "video", completed: true },
        { id: 3, title: "Practice Quiz 1", duration: "15 min", type: "quiz", completed: true },
      ],
      completed: true
    },
    {
      id: 2,
      title: "Derivatives",
      lessons: [
        { id: 4, title: "Understanding Derivatives", duration: "10 min", type: "video", completed: true },
        { id: 5, title: "Power Rule", duration: "8 min", type: "video", completed: true },
        { id: 6, title: "Product and Quotient Rules", duration: "14 min", type: "video", completed: false },
        { id: 7, title: "Chain Rule", duration: "12 min", type: "video", completed: false },
        { id: 8, title: "Practice Quiz 2", duration: "20 min", type: "quiz", completed: false },
      ],
      completed: false
    },
    {
      id: 3,
      title: "Integration",
      lessons: [
        { id: 9, title: "Introduction to Integration", duration: "10 min", type: "video", completed: false, locked: true },
        { id: 10, title: "Basic Integration Rules", duration: "12 min", type: "video", completed: false, locked: true },
        { id: 11, title: "Definite Integrals", duration: "15 min", type: "video", completed: false, locked: true },
        { id: 12, title: "Practice Quiz 3", duration: "20 min", type: "quiz", completed: false, locked: true },
      ],
      completed: false
    },
  ];

  const courseStats = {
    totalLessons: 12,
    completedLessons: 5,
    totalTime: "2h 30m",
    estimatedRemaining: "3h 45m",
    currentStreak: 5,
    averageScore: 85
  };

  const upcomingMilestones = [
    { title: "Complete Derivatives Module", progress: 40, reward: "+50 points" },
    { title: "Score 90% on Quiz 2", progress: 0, reward: "Perfect Score Badge" },
    { title: "Finish all videos this week", progress: 60, reward: "+100 points" },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video": return <Video className="w-4 h-4" />;
      case "quiz": return <FileText className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const progressPercent = (courseStats.completedLessons / courseStats.totalLessons) * 100;

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
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Header */}
            <Card className="p-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge className="bg-white/20 text-white border-white/30 mb-3">
                    Mathematics
                  </Badge>
                  <h1 className="text-3xl font-bold mb-2">Advanced Mathematics</h1>
                  <p className="text-purple-100">Master calculus concepts with AI-guided learning</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">{Math.round(progressPercent)}%</div>
                  <div className="text-sm text-purple-100">Complete</div>
                </div>
              </div>
              <Progress value={progressPercent} className="h-3 bg-white/20" />
            </Card>

            {/* Course Content */}
            <Card className="p-6">
              <Tabs defaultValue="curriculum">
                <TabsList className="mb-6">
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="notes">Notes</TabsTrigger>
                  <TabsTrigger value="resources">Resources</TabsTrigger>
                  <TabsTrigger value="Youtube Video lessons">Youtube video lessons</TabsTrigger>
                </TabsList>

                <TabsContent value="curriculum">
                  <Accordion type="single" collapsible className="space-y-4">
                    {courseModules.map((module) => (
                      <AccordionItem key={module.id} value={`module-${module.id}`}>
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center gap-3 text-left">
                            {module.completed ? (
                              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                            ) : (
                              <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex-shrink-0" />
                            )}
                            <div>
                              <div className="font-semibold">{module.title}</div>
                              <div className="text-sm text-gray-500">
                                {module.lessons.length} lessons
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="ml-8 space-y-2 mt-2">
                            {module.lessons.map((lesson) => (
                              <div
                                key={lesson.id}
                                className={`flex items-center justify-between p-4 rounded-lg transition ${
                                  lesson.locked
                                    ? 'bg-gray-100 opacity-60 cursor-not-allowed'
                                    : 'bg-gray-50 hover:bg-gray-100 cursor-pointer'
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  {lesson.completed ? (
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                  ) : lesson.locked ? (
                                    <Lock className="w-5 h-5 text-gray-400" />
                                  ) : (
                                    <PlayCircle className="w-5 h-5 text-purple-600" />
                                  )}
                                  <div>
                                    <div className="font-medium">{lesson.title}</div>
                                    <div className="text-sm text-gray-500 flex items-center gap-2">
                                      {getTypeIcon(lesson.type)}
                                      <span>{lesson.duration}</span>
                                    </div>
                                  </div>
                                </div>
                                {!lesson.locked && (
                                  <Button size="sm" variant="ghost" onClick={() => onNavigate('quiz')}>
                                    {lesson.completed ? 'Review' : 'Start'}
                                  </Button>
                                )}
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>

                <TabsContent value="notes">
                  <div className="space-y-4">
                    <Card className="p-4 border-l-4 border-l-purple-500">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold">Derivatives - Power Rule</h4>
                        <span className="text-xs text-gray-500">Lesson 5</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Key formula: d/dx(xⁿ) = n·xⁿ⁻¹
                      </p>
                      <p className="text-xs text-gray-500">Added 2 days ago</p>
                    </Card>
                    <Card className="p-4 border-l-4 border-l-blue-500">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold">Limits and Continuity</h4>
                        <span className="text-xs text-gray-500">Lesson 2</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        A function is continuous if lim(x→a) f(x) = f(a)
                      </p>
                      <p className="text-xs text-gray-500">Added 5 days ago</p>
                    </Card>
                    <Button variant="outline" className="w-full">
                      Add New Note
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="resources">
                  <div className="space-y-4">
                    <Card className="p-4 hover:shadow-md transition cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-red-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">Calculus Formula Sheet</h4>
                          <p className="text-sm text-gray-500">PDF • 2.4 MB</p>
                        </div>
                        <Button size="sm" variant="outline">Download</Button>
                      </div>
                    </Card>
                    <Card className="p-4 hover:shadow-md transition cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">Practice Problems Set</h4>
                          <p className="text-sm text-gray-500">PDF • 1.8 MB</p>
                        </div>
                        <Button size="sm" variant="outline">Download</Button>
                      </div>
                    </Card>
                  </div>
                </TabsContent>

                  <button 
                   onClick={() => onNavigate('videolesson')}
                   className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700 transition"
                  >
                  <BookOpen className="w-5 h-5" />
                  videolessons
                  </button>
              
              </Tabs>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats Card */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Your Progress</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Lessons Completed</span>
                  <span className="font-semibold">{courseStats.completedLessons}/{courseStats.totalLessons}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time Spent</span>
                  <span className="font-semibold">{courseStats.totalTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Avg. Score</span>
                  <span className="font-semibold">{courseStats.averageScore}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Study Streak</span>
                  <span className="font-semibold flex items-center gap-1">
                    <Trophy className="w-4 h-4 text-orange-500" />
                    {courseStats.currentStreak} days
                  </span>
                </div>
              </div>
            </Card>

            {/* Milestones */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-600" />
                Upcoming Milestones
              </h3>
              <div className="space-y-4">
                {upcomingMilestones.map((milestone, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{milestone.title}</span>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {milestone.reward}
                      </Badge>
                    </div>
                    <Progress value={milestone.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50">
              <h3 className="font-semibold mb-4">Need Help?</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Study Guide
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Ask AI Tutor
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Trophy className="w-4 h-4 mr-2" />
                  View Leaderboard
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
