import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Brain, Target, TrendingUp, Trophy, Zap, Users } from "lucide-react";

export function LandingPage({ onNavigate }: { onNavigate: (page: string, role?: string) => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-purple-600" />
            <span className="font-semibold text-xl">AMEP</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-gray-600 hover:text-purple-600 transition">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition">How It Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition">Pricing</a>
          </nav>
          <Button variant="outline" onClick={() => onNavigate('student-dashboard', 'student')}>Sign In</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full">
              AI-Powered Learning Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Personalized Learning That{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Adapts to You
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Experience intelligent, adaptive learning powered by AI. Master any subject at your own pace with personalized pathways and real-time feedback.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700" onClick={() => onNavigate('student-dashboard', 'student')}>
                Get Started
              </Button>
              <Button size="lg" variant="outline" onClick={() => onNavigate('teacher-dashboard', 'teacher')}>
                Join as Teacher
              </Button>
            </div>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-purple-600">10K+</div>
                <div className="text-gray-600">Active Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Teachers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-3xl blur-3xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGxlYXJuaW5nJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2NjczODAwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="AI-driven learning illustration"
              className="relative rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section id="features" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features for Modern Learning</h2>
            <p className="text-xl text-gray-600">Everything you need to master any subject efficiently</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition border-t-4 border-t-purple-500">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Adaptive Learning</h3>
              <p className="text-gray-600">
                AI-powered algorithms adjust content difficulty in real-time based on your performance, ensuring optimal learning pace.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition border-t-4 border-t-blue-500">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Smart Analytics</h3>
              <p className="text-gray-600">
                Detailed insights into your learning patterns, strengths, and areas for improvement with actionable recommendations.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition border-t-4 border-t-green-500">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                <Trophy className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Gamification</h3>
              <p className="text-gray-600">
                Earn badges, maintain streaks, and compete on leaderboards. Learning becomes engaging and rewarding.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition border-t-4 border-t-indigo-500">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Real-time Feedback</h3>
              <p className="text-gray-600">
                Instant feedback on quizzes and assignments helps you learn from mistakes immediately and improve faster.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition border-t-4 border-t-pink-500">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-pink-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Teacher Tools</h3>
              <p className="text-gray-600">
                Comprehensive dashboards for educators to monitor student progress and identify those who need extra support.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition border-t-4 border-t-cyan-500">
              <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center mb-4">
                <Brain className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Personalized Pathways</h3>
              <p className="text-gray-600">
                Custom learning paths tailored to your goals, prior knowledge, and learning style for maximum efficiency.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How AMEP Works</h2>
            <p className="text-xl text-gray-600">Simple, effective, and adaptive learning in three steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Learning</h3>
              <p className="text-gray-600">Choose your course and take an initial assessment to determine your starting level</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Adapts</h3>
              <p className="text-gray-600">Our AI adjusts content difficulty and pacing based on your real-time performance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Master & Achieve</h3>
              <p className="text-gray-600">Track progress, earn rewards, and achieve mastery with personalized recommendations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Learning?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of students already mastering their subjects with AMEP</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => onNavigate('student-dashboard', 'student')}>
              Start Learning Free
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600" onClick={() => onNavigate('teacher-dashboard', 'teacher')}>
              Explore for Teachers
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-6 h-6 text-purple-400" />
                <span className="font-semibold text-white">AMEP</span>
              </div>
              <p className="text-sm">Adaptive Mastery & Engagement Platform - Making learning personal and effective.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">For Teachers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            © 2025 AMEP. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
