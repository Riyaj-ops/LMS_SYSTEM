import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Checkbox } from "./ui/checkbox";
import { 
  Brain,
  Mail,
  Lock,
  GraduationCap,
  Users,
  ArrowLeft
} from "lucide-react";

interface LoginPageProps {
  onNavigate: (page: string, role?: string) => void;
  onLogin: (email: string, password: string, role: 'student' | 'teacher') => void;
}

export function LoginPage({ onNavigate, onLogin }: LoginPageProps) {
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [teacherEmail, setTeacherEmail] = useState("");
  const [teacherPassword, setTeacherPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleStudentLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(studentEmail, studentPassword, 'student');
  };

  const handleTeacherLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(teacherEmail, teacherPassword, 'teacher');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="hidden md:block">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">PersonalGuruji</h1>
              <p className="text-gray-600">Adaptive Learning Platform</p>
            </div>
          </div>
          
          <h2 className="text-4xl font-bold mb-4">
            Welcome Back to
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Smart Learning</span>
          </h2>
          
          <p className="text-gray-600 mb-8">
            Continue your personalized learning journey with AI-powered adaptive education.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold">10,000+ Students</h3>
                <p className="text-sm text-gray-500">Learning smarter every day</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">500+ Teachers</h3>
                <p className="text-sm text-gray-500">Empowering education</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Forms */}
        <Card className="p-8 shadow-2xl">
          <div className="mb-6">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => onNavigate('landing')}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <h2 className="text-3xl font-bold mb-2">Sign In</h2>
            <p className="text-gray-600">Choose your portal to continue</p>
          </div>

          <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="student" className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Student Portal
              </TabsTrigger>
              <TabsTrigger value="teacher" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Teacher Portal
              </TabsTrigger>
            </TabsList>

            {/* Student Login */}
            <TabsContent value="student">
              <form onSubmit={handleStudentLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="student-email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      id="student-email"
                      type="email"
                      placeholder="student@example.com"
                      className="pl-10"
                      value={studentEmail}
                      onChange={(e) => setStudentEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="student-password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      id="student-password"
                      type="password"
                      placeholder="Enter your password"
                      className="pl-10"
                      value={studentPassword}
                      onChange={(e) => setStudentPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox 
                      id="remember-student"
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    />
                    <Label htmlFor="remember-student" className="text-sm cursor-pointer">
                      Remember me
                    </Label>
                  </div>
                  <Button 
                    variant="link" 
                    className="text-sm p-0 h-auto"
                    type="button"
                    onClick={() => onNavigate('forgot-password')}
                  >
                    Forgot password?
                  </Button>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  Sign In to Student Portal
                </Button>

                <div className="text-center text-sm">
                  <span className="text-gray-600">Don't have an account? </span>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto"
                    onClick={() => onNavigate('signup')}
                  >
                    Sign up
                  </Button>
                </div>
              </form>
            </TabsContent>

            {/* Teacher Login */}
            <TabsContent value="teacher">
              <form onSubmit={handleTeacherLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="teacher-email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      id="teacher-email"
                      type="email"
                      placeholder="teacher@example.com"
                      className="pl-10"
                      value={teacherEmail}
                      onChange={(e) => setTeacherEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="teacher-password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      id="teacher-password"
                      type="password"
                      placeholder="Enter your password"
                      className="pl-10"
                      value={teacherPassword}
                      onChange={(e) => setTeacherPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox 
                      id="remember-teacher"
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    />
                    <Label htmlFor="remember-teacher" className="text-sm cursor-pointer">
                      Remember me
                    </Label>
                  </div>
                  <Button 
                    variant="link" 
                    className="text-sm p-0 h-auto"
                    type="button"
                    onClick={() => onNavigate('forgot-password')}
                  >
                    Forgot password?
                  </Button>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                >
                  Sign In to Teacher Portal
                </Button>

                <div className="text-center text-sm">
                  <span className="text-gray-600">Don't have an account? </span>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto"
                    onClick={() => onNavigate('signup')}
                  >
                    Sign up
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-6 pt-6 border-t">
            <p className="text-xs text-center text-gray-500">
              By signing in, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
