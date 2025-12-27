import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  ArrowLeft,
  PlayCircle,
  CheckCircle,
  Lock,
  Clock,
  BookOpen,
  FileText,
  MessageSquare,
  ThumbsUp,
  Share2,
  Download,
  Youtube
} from "lucide-react";

interface VideoPageProps {
  onNavigate: (page: string) => void;
}

export function VideoPage({ onNavigate }: VideoPageProps) {
  const [lessonCompleted, setLessonCompleted] = useState(false);

  // YouTube video ID - you can change this to any educational video
  const youtubeVideoId = "WUvTyaaNkzM"; // Example: Khan Academy Calculus video
  
  const relatedVideos = [
    {
      id: 1,
      title: "Introduction to Derivatives",
      thumbnail: `https://img.youtube.com/vi/WUvTyaaNkzM/mqdefault.jpg`,
      duration: "12:30",
      completed: true,
      youtubeId: "WUvTyaaNkzM"
    },
    {
      id: 2,
      title: "Understanding Limits",
      thumbnail: `https://img.youtube.com/vi/riXcZT2ICjA/mqdefault.jpg`,
      duration: "15:45",
      completed: true,
      youtubeId: "riXcZT2ICjA"
    },
    {
      id: 3,
      title: "Chain Rule Explained",
      thumbnail: `https://img.youtube.com/vi/H-ybCx8gt-8/mqdefault.jpg`,
      duration: "10:20",
      completed: false,
      youtubeId: "H-ybCx8gt-8"
    },
    {
      id: 4,
      title: "Product Rule Tutorial",
      thumbnail: `https://img.youtube.com/vi/exf8JdJXhVY/mqdefault.jpg`,
      duration: "8:15",
      completed: false,
      youtubeId: "exf8JdJXhVY"
    },
  ];

  const comments = [
    {
      id: 1,
      user: "Sarah Williams",
      avatar: "S",
      time: "2 hours ago",
      text: "This explanation really helped me understand derivatives better! The examples were clear and easy to follow.",
      likes: 12
    },
    {
      id: 2,
      user: "Michael Chen",
      avatar: "M",
      time: "5 hours ago",
      text: "Could you make a video on implicit differentiation next? Thanks!",
      likes: 8
    },
    {
      id: 3,
      user: "Emma Johnson",
      avatar: "E",
      time: "1 day ago",
      text: "The practice problems at the end were very helpful. More of these please!",
      likes: 15
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('course-detail')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Course
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Video Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <Card className="overflow-hidden">
              <div className="relative aspect-video bg-black">
                {/* YouTube Embed */}
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0&modestbranding=1`}
                  title="Lesson Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                        Lesson 4
                      </Badge>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        Mathematics
                      </Badge>
                    </div>
                    <h1 className="text-2xl font-bold mb-2">Understanding Derivatives - The Power Rule</h1>
                    <p className="text-gray-600 mb-4">
                      Learn how to calculate derivatives using the power rule with step-by-step examples and practice problems.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        10:30
                      </span>
                      <span>•</span>
                      <span>2,450 views</span>
                      <span>•</span>
                      <span>Updated 2 days ago</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4 border-t">
                  <Button 
                    variant="outline" 
                    className={lessonCompleted ? "bg-green-50 text-green-700 border-green-200" : ""}
                    onClick={() => setLessonCompleted(!lessonCompleted)}
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {lessonCompleted ? "Completed" : "Mark as Complete"}
                  </Button>
                  <Button variant="outline">
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    Like
                  </Button>
                  <Button variant="outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Notes
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${youtubeVideoId}`, '_blank')}
                  >
                    <Youtube className="w-4 h-4 mr-2 text-red-600" />
                    Watch on YouTube
                  </Button>
                </div>
              </div>
            </Card>

            {/* Tabs for additional content */}
            <Card className="p-6">
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="notes">Notes</TabsTrigger>
                  <TabsTrigger value="discussion">Discussion ({comments.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">What You'll Learn</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Understanding the concept of derivatives</li>
                        <li>Applying the power rule to polynomial functions</li>
                        <li>Working through practice examples</li>
                        <li>Common mistakes to avoid</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Key Concepts</h3>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <p className="font-mono text-purple-900">
                          d/dx(x<sup>n</sup>) = n·x<sup>n-1</sup>
                        </p>
                        <p className="text-sm text-purple-700 mt-2">
                          The power rule: bring down the exponent and reduce the power by one.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Prerequisites</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Basic Algebra</Badge>
                        <Badge variant="outline">Function Notation</Badge>
                        <Badge variant="outline">Introduction to Limits</Badge>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="notes" className="mt-4">
                  <div className="space-y-4">
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                      <h4 className="font-semibold mb-2">📝 Important Formula</h4>
                      <p className="font-mono">f(x) = x<sup>n</sup> → f'(x) = n·x<sup>n-1</sup></p>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                      <h4 className="font-semibold mb-2">💡 Example</h4>
                      <p>If f(x) = x³, then f'(x) = 3x²</p>
                      <p className="text-sm text-gray-600 mt-1">The exponent 3 comes down, and the power reduces to 2</p>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4">
                      <h4 className="font-semibold mb-2">✅ Quick Check</h4>
                      <p>What is the derivative of f(x) = x⁵?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-green-700 font-medium">Show Answer</summary>
                        <p className="mt-2">f'(x) = 5x⁴</p>
                      </details>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="discussion" className="mt-4">
                  <div className="space-y-4">
                    {comments.map((comment) => (
                      <div key={comment.id} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                            {comment.avatar}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-semibold">{comment.user}</h4>
                              <span className="text-sm text-gray-500">{comment.time}</span>
                            </div>
                            <p className="text-gray-700 mb-2">{comment.text}</p>
                            <div className="flex items-center gap-3">
                              <Button variant="ghost" size="sm" className="h-8">
                                <ThumbsUp className="w-3 h-3 mr-1" />
                                {comment.likes}
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8">
                                Reply
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="pt-4">
                      <textarea
                        className="w-full p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                        rows={3}
                        placeholder="Add a comment..."
                      ></textarea>
                      <div className="flex justify-end mt-2">
                        <Button>Post Comment</Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Sidebar - Related Videos */}
          <div className="space-y-6">
            {/* Course Progress */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Course Progress</h3>
              <Progress value={40} className="mb-2" />
              <p className="text-sm text-gray-600">4 of 10 lessons completed</p>
            </Card>

            {/* Up Next */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Up Next</h3>
              <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border-2 border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <PlayCircle className="w-5 h-5 text-purple-600" />
                  <Badge className="bg-purple-600">Next Lesson</Badge>
                </div>
                <h4 className="font-semibold mb-1">Product and Quotient Rules</h4>
                <p className="text-sm text-gray-600 mb-3">Learn advanced derivative techniques</p>
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600"
                  onClick={() => onNavigate('quiz')}
                >
                  Start Next Lesson
                </Button>
              </div>
            </Card>

            {/* Related Videos */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Related Videos</h3>
                <Youtube className="w-5 h-5 text-red-600" />
              </div>
              <div className="space-y-3">
                {relatedVideos.map((video) => (
                  <div 
                    key={video.id} 
                    className="group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition"
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, '_blank')}
                  >
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-2">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                          <PlayCircle className="w-6 h-6 text-purple-600" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                      {video.completed && (
                        <div className="absolute top-2 right-2">
                          <CheckCircle className="w-5 h-5 text-green-500 fill-white" />
                        </div>
                      )}
                    </div>
                    <h4 className="font-medium text-sm line-clamp-2 group-hover:text-purple-600 transition">
                      {video.title}
                    </h4>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}