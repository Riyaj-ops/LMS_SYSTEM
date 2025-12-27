import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Brain,
  Menu,
  X,
  Bell,
  Settings,
  LogOut,
  User
} from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  isLoggedIn?: boolean;
  userRole?: 'student' | 'teacher' | 'admin' | null;
  userName?: string;
  onNavigate: (page: string) => void;
  onShowNotifications?: () => void;
  onLogout?: () => void;
}

export function Navbar({ 
  isLoggedIn = false, 
  userRole = null, 
  userName = "User",
  onNavigate,
  onShowNotifications,
  onLogout 
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => onNavigate(isLoggedIn ? (userRole === 'teacher' ? 'teacher-dashboard' : 'student-dashboard') : 'landing')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-bold text-xl">PersonalGuruji</span>
              <p className="text-xs text-gray-500 hidden sm:block">Adaptive Learning Platform</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          {!isLoggedIn ? (
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-gray-600 hover:text-purple-600 transition">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition">How It Works</a>
              <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition">Pricing</a>
              <Button variant="ghost" onClick={() => onNavigate('login')}>Sign In</Button>
              <Button 
                className="bg-gradient-to-r from-purple-600 to-blue-600"
                onClick={() => onNavigate('signup')}
              >
                Get Started
              </Button>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-4">
              {/* Logged In Navigation */}
              {userRole === 'student' && (
                <>
                  <Button variant="ghost" onClick={() => onNavigate('student-dashboard')}>Dashboard</Button>
                  <Button variant="ghost" onClick={() => onNavigate('courses')}>My Courses</Button>
                  <Button variant="ghost" onClick={() => onNavigate('progress')}>Progress</Button>
                  <Button variant="ghost" onClick={() => onNavigate('rewards')}>Rewards</Button>
                </>
              )}
              {userRole === 'teacher' && (
                <>
                  <Button variant="ghost" onClick={() => onNavigate('teacher-dashboard')}>Dashboard</Button>
                  <Button variant="ghost">My Classes</Button>
                  <Button variant="ghost">Analytics</Button>
                  <Button variant="ghost">Resources</Button>
                </>
              )}

              {/* Action Buttons */}
              <Button 
                variant="ghost" 
                size="sm"
                className="relative"
                onClick={onShowNotifications}
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">{userName[0]}</span>
                  </div>
                  <span className="font-medium">{userName}</span>
                </button>

                {profileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    <div className="px-4 py-3 border-b">
                      <p className="font-semibold">{userName}</p>
                      <p className="text-sm text-gray-500 capitalize">{userRole} Account</p>
                    </div>
                    <button 
                      onClick={() => {
                        setProfileMenuOpen(false);
                        onNavigate(userRole === 'teacher' ? 'teacher-dashboard' : 'student-dashboard');
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition"
                    >
                      <User className="w-4 h-4" />
                      Profile
                    </button>
                    <button 
                      onClick={() => {
                        setProfileMenuOpen(false);
                        onNavigate('settings');
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition"
                    >
                      <Settings className="w-4 h-4" />
                      Settings
                    </button>
                    <div className="border-t my-2"></div>
                    <button 
                      onClick={() => {
                        setProfileMenuOpen(false);
                        onLogout?.();
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-red-50 text-red-600 transition"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4 space-y-2">
            {!isLoggedIn ? (
              <>
                <a href="#features" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded">Features</a>
                <a href="#how-it-works" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded">How It Works</a>
                <a href="#pricing" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded">Pricing</a>
                <div className="px-4 pt-4 space-y-2">
                  <Button variant="outline" className="w-full" onClick={() => onNavigate('login')}>Sign In</Button>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600" onClick={() => onNavigate('signup')}>Get Started</Button>
                </div>
              </>
            ) : (
              <>
                {userRole === 'student' && (
                  <>
                    <button onClick={() => onNavigate('student-dashboard')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 rounded">Dashboard</button>
                    <button onClick={() => onNavigate('courses')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 rounded">My Courses</button>
                    <button onClick={() => onNavigate('progress')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 rounded">Progress</button>
                    <button onClick={() => onNavigate('rewards')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 rounded">Rewards</button>
                  </>
                )}
                {userRole === 'teacher' && (
                  <>
                    <button onClick={() => onNavigate('teacher-dashboard')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 rounded">Dashboard</button>
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-50 rounded">My Classes</button>
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-50 rounded">Analytics</button>
                  </>
                )}
                <div className="border-t my-2"></div>
                <button onClick={() => onNavigate('settings')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 rounded">Settings</button>
                <button onClick={onLogout} className="block w-full text-left px-4 py-2 hover:bg-red-50 text-red-600 rounded">Sign Out</button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
