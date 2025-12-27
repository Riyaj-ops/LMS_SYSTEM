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
  User,
  GraduationCap,
  Users,
  ArrowLeft,
  School,
  BookOpen
} from "lucide-react";

interface SignupPageProps {
  onNavigate: (page: string, role?: string) => void;
  onSignup: (email: string, password: string, role: 'student' | 'teacher', name: string) => void;
}

export function SignupPage({ onNavigate, onSignup }: SignupPageProps) {
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [studentConfirmPassword, setStudentConfirmPassword] = useState("");
  
  const [teacherName, setTeacherName] = useState("");
  const [teacherEmail, setTeacherEmail] = useState("");
  const [teacherPassword, setTeacherPassword] = useState("");
  const [teacherConfirmPassword, setTeacherConfirmPassword] = useState("");
  const [teacherSchool, setTeacherSchool] = useState("");
  
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleStudentSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentPassword !== studentConfirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    if (!agreeTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }
    onSignup(studentEmail, studentPassword, 'student', studentName);
  };

  const handleTeacherSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (teacherPassword !== teacherConfirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    if (!agreeTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }
    onSignup(teacherEmail, teacherPassword, 'teacher', teacherName);
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
            Start Your
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Learning Journey</span>
          </h2>
          
          <p className="text-gray-600 mb-8">
            Join thousands of learners and educators using AI-powered adaptive learning.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <GraduationCap className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Personalized Learning</h3>
                <p className="text-sm text-gray-500">AI adapts to your learning style and pace</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <BookOpen className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Expert Curriculum</h3>
                <p className="text-sm text-gray-500">Curated content from top educators</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Users className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Community Support</h3>
                <p className="text-sm text-gray-500">Connect with peers and mentors</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Signup Forms */}
        <Card className="p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
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
            <h2 className="text-3xl font-bold mb-2">Create Account</h2>
            <p className="text-gray-600">Choose your portal to get started</p>
          </div>

          <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="student" className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Student
              </TabsTrigger>
              <TabsTrigger value="teacher" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Teacher
              </TabsTrigger>
            </TabsList>

            {/* Student Signup */}
            <TabsContent value="student">
              <form onSubmit={handleStudentSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="student-name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      id="student-name"
                      type="text"
                      placeholder="John Doe"
                      className="pl-10"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="student-signup-email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      id="student-signup-email"
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
                  <Label htmlFor="student-signup-password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      id="student-signup-password"
                      type="password"
                      placeholder="Create a strong password"
                      className="pl-10"
                      value={studentPassword}
                      onChange={(e) => setStudentPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="student-confirm-password">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      id="student-confirm-password"
                      type="password"
                      placeholder="Confirm your password"
                      className="pl-10"
                      value={studentConfirmPassword}
                      onChange={(e) => setStudentConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-2">
                  <Checkbox 
                    id="terms-student"
                    checked={agreeTerms}
                    onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                  />
                  <Label htmlFor="terms-student" className="text-sm cursor-pointer leading-relaxed">
                    I agree to the <span className="text-purple-600 hover:underline">Terms of Service</span> and <span className="text-purple-600 hover:underline">Privacy Policy</span>
                  </Label>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  disabled={!agreeTerms}
                >
                  Create Student Account
                </Button>

                <div className="text-center text-sm">
                  <span className="text-gray-600">Already have an account? </span>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto"
                    onClick={() => onNavigate('login')}
                  >
                    Sign in
                  </Button>
                </div>
              </form>
            </TabsContent>

            {/* Teacher Signup */}
            <TabsContent value="teacher">
              <form onSubmit={handleTeacherSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="teacher-name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      id="teacher-name"
                      type="text"
                      placeholder="Dr. Jane Smith"
                      className="pl-10"
                      value={teacherName}
                      onChange={(e) => setTeacherName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="teacher-signup-email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      id="teacher-signup-email"
                      type="email"
                      placeholder="teacher@school.edu"
                      className="pl-10"
                      value={teacherEmail}
                      onChange={(e) => setTeacherEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="teacher-school">School/Institution</Label>
                  <div className="relative">
                    <School className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      id="teacher-school"
                      type="text"
                      placeholder="Springfield High School"
                      className="pl-10"
                      value={teacherSchool}
                      onChange={(e) => setTeacherSchool(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="teacher-signup-password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      id="teacher-signup-password"
                      type="password"
                      placeholder="Create a strong password"
                      className="pl-10"
                      value={teacherPassword}
                      onChange={(e) => setTeacherPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="teacher-confirm-password">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      id="teacher-confirm-password"
                      type="password"
                      placeholder="Confirm your password"
                      className="pl-10"
                      value={teacherConfirmPassword}
                      onChange={(e) => setTeacherConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-2">
                  <Checkbox 
                    id="terms-teacher"
                    checked={agreeTerms}
                    onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                  />
                  <Label htmlFor="terms-teacher" className="text-sm cursor-pointer leading-relaxed">
                    I agree to the <span className="text-blue-600 hover:underline">Terms of Service</span> and <span className="text-blue-600 hover:underline">Privacy Policy</span>
                  </Label>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                  disabled={!agreeTerms}
                >
                  Create Teacher Account
                </Button>

                <div className="text-center text-sm">
                  <span className="text-gray-600">Already have an account? </span>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto"
                    onClick={() => onNavigate('login')}
                  >
                    Sign in
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
