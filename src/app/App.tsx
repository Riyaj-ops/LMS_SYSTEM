import { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import { StudentDashboard } from "./components/StudentDashboard";
import { QuizScreen } from "./components/QuizScreen";
import { ProgressAnalytics } from "./components/ProgressAnalytics";
import { TeacherDashboard } from "./components/TeacherDashboard";
import { GamificationRewards } from "./components/GamificationRewards";

type Page = 'landing' | 'student-dashboard' | 'quiz' | 'progress' | 'teacher-dashboard' | 'rewards';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [userRole, setUserRole] = useState<string>('student');

  const handleNavigate = (page: string, role?: string) => {
    setCurrentPage(page as Page);
    if (role) {
      setUserRole(role);
    }
  };

  return (
    <div className="min-h-screen">
      {currentPage === 'landing' && (
        <LandingPage onNavigate={handleNavigate} />
      )}
      {currentPage === 'student-dashboard' && (
        <StudentDashboard onNavigate={handleNavigate} />
      )}
      {currentPage === 'quiz' && (
        <QuizScreen onNavigate={handleNavigate} />
      )}
      {currentPage === 'progress' && (
        <ProgressAnalytics onNavigate={handleNavigate} />
      )}
      {currentPage === 'teacher-dashboard' && (
        <TeacherDashboard onNavigate={handleNavigate} />
      )}
      {currentPage === 'rewards' && (
        <GamificationRewards onNavigate={handleNavigate} />
      )}
    </div>
  );
}
