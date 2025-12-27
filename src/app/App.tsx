import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { LandingPage } from "./components/LandingPage";
import { LoginPage } from "./components/LoginPage";
import { SignupPage } from "./components/SignupPage";
import { ForgotPasswordPage } from "./components/ForgotPasswordPage";
import { StudentDashboard } from "./components/StudentDashboard";
import { QuizScreen } from "./components/QuizScreen";
import { ProgressAnalytics } from "./components/ProgressAnalytics";
import { TeacherDashboard } from "./components/TeacherDashboard";
import { GamificationRewards } from "./components/GamificationRewards";
import { Courses } from "./components/Courses";
import { VideoPage } from "./components/VideoPage";
import { SettingsPage } from "./components/SettingsPage";
import { NotificationCenter } from "./components/NotificationCenter";

type Page = 
  | 'landing' 
  | 'login' 
  | 'signup' 
  | 'forgot-password'
  | 'student-dashboard' 
  | 'quiz' 
  | 'progress' 
  | 'teacher-dashboard' 
  | 'rewards' 
  | 'courses' 
  | 'videolesson'
  | 'settings';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [userRole, setUserRole] = useState<'student' | 'teacher' | null>(null);
  const [userName, setUserName] = useState<string>("User");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleNavigate = (page: string, role?: string) => {
    setCurrentPage(page as Page);
    if (role) {
      setUserRole(role as 'student' | 'teacher');
    }
  };

  const handleLogin = (email: string, password: string, role: 'student' | 'teacher') => {
    // Simulate login
    setIsLoggedIn(true);
    setUserRole(role);
    setUserName(email.split('@')[0]); // Use email username as name
    
    if (role === 'student') {
      setCurrentPage('student-dashboard');
    } else {
      setCurrentPage('teacher-dashboard');
    }
  };

  const handleSignup = (email: string, password: string, role: 'student' | 'teacher', name: string) => {
    // Simulate signup
    setIsLoggedIn(true);
    setUserRole(role);
    setUserName(name);
    
    if (role === 'student') {
      setCurrentPage('student-dashboard');
    } else {
      setCurrentPage('teacher-dashboard');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    setUserName("User");
    setCurrentPage('landing');
  };

  // Pages that should show navbar
  const showNavbar = isLoggedIn && ![
    'landing', 
    'login', 
    'signup', 
    'forgot-password'
  ].includes(currentPage);

  return (
    <div className="min-h-screen">
      {showNavbar && (
        <Navbar
          isLoggedIn={isLoggedIn}
          userRole={userRole}
          userName={userName}
          onNavigate={handleNavigate}
          onShowNotifications={() => setShowNotifications(true)}
          onLogout={handleLogout}
        />
      )}

      {/* Authentication Pages */}
      {currentPage === 'landing' && (
        <LandingPage onNavigate={handleNavigate} />
      )}
      {currentPage === 'login' && (
        <LoginPage onNavigate={handleNavigate} onLogin={handleLogin} />
      )}
      {currentPage === 'signup' && (
        <SignupPage onNavigate={handleNavigate} onSignup={handleSignup} />
      )}
      {currentPage === 'forgot-password' && (
        <ForgotPasswordPage onNavigate={handleNavigate} />
      )}

      {/* Student Pages */}
      {currentPage === 'student-dashboard' && (
        <StudentDashboard 
          onNavigate={handleNavigate}
          studentName={userName}
          onShowNotifications={() => setShowNotifications(true)}
        />
      )}
      {currentPage === 'quiz' && (
        <QuizScreen onNavigate={handleNavigate} />
      )}
      {currentPage === 'progress' && (
        <ProgressAnalytics onNavigate={handleNavigate} />
      )}
      {currentPage === 'rewards' && (
        <GamificationRewards onNavigate={handleNavigate} />
      )}
      {currentPage === 'courses' && (
        <Courses onNavigate={handleNavigate} />
      )}
      {currentPage === 'videolesson' && (
        <VideoPage onNavigate={handleNavigate} />
      )}
      {currentPage === 'settings' && (
        <SettingsPage onNavigate={handleNavigate} />
      )}

      {/* Teacher Pages */}
      {currentPage === 'teacher-dashboard' && (
        <TeacherDashboard 
          onNavigate={handleNavigate}
          teacherName={userName}
          onShowNotifications={() => setShowNotifications(true)}
        />
      )}
      
      {/* Notification Panel Overlay */}
      {showNotifications && (
        <NotificationCenter onClose={() => setShowNotifications(false)} />
      )}
    </div>
  );
}