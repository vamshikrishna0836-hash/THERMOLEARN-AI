
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import LessonView from './components/LessonView';
import LessonListView from './components/LessonListView';
import { DiagramView } from './components/DiagramView';
import QuizView from './components/QuizView';
import CaseStudiesView from './components/CaseStudiesView';
import ChallengesView from './components/ChallengesView';
import SmartNotesView from './components/SmartNotesView';
import FlashcardsView from './components/FlashcardsView';
import VideoLecturesView from './components/VideoLecturesView';
import ProfileView from './components/ProfileView';
import PYQAnalysisView from './components/PYQAnalysisView';
import FormulaSheetView from './components/FormulaSheetView';
import AuthView from './components/AuthView';
import { ViewState, Topic, User } from './types';
import { INITIAL_STATS, TOPICS } from './constants';
import { Menu } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.DASHBOARD);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [stats] = useState(INITIAL_STATS);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Authentication State
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Check for persisted session on load
  useEffect(() => {
    const storedUser = localStorage.getItem('thermo_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse user session");
      }
    }
    setAuthLoading(false);
  }, []);

  const handleLogin = (newUser: User) => {
    setUser(newUser);
    localStorage.setItem('thermo_user', JSON.stringify(newUser));
    setCurrentView(ViewState.DASHBOARD);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('thermo_user');
    setCurrentView(ViewState.DASHBOARD);
  };

  const handleNavigate = (view: ViewState, topic?: Topic) => {
    if (topic) {
        setSelectedTopic(topic);
    } else if (view === ViewState.LESSON) {
        // If navigating to Lesson view without a specific topic, clear selection to show list
        setSelectedTopic(null);
    }
    setCurrentView(view);
    setIsMobileMenuOpen(false);
  };

  // Content Renderer
  const renderContent = () => {
    switch (currentView) {
      case ViewState.DASHBOARD:
        return <Dashboard stats={stats} onNavigate={handleNavigate} />;
      case ViewState.LESSON:
        if (selectedTopic) {
             return <LessonView topic={selectedTopic} onBack={() => setSelectedTopic(null)} />;
        }
        return <LessonListView onSelectTopic={(t) => setSelectedTopic(t)} />;
      case ViewState.DIAGRAMS:
        return <DiagramView />;
      case ViewState.QUIZ:
        return <QuizView />;
      case ViewState.CASE_STUDIES:
        return <CaseStudiesView />;
      case ViewState.CHALLENGES:
        return <ChallengesView />;
      case ViewState.NOTES:
        return <SmartNotesView />;
      case ViewState.FLASHCARDS:
        return <FlashcardsView />;
      case ViewState.VIDEOS:
        return <VideoLecturesView />;
      case ViewState.PROFILE:
        return <ProfileView user={user} onLogout={handleLogout} />;
      case ViewState.PYQ_ANALYSIS:
        return <PYQAnalysisView />;
      case ViewState.FORMULA_SHEET:
        return <FormulaSheetView />;
      default:
        return <Dashboard stats={stats} onNavigate={handleNavigate} />;
    }
  };

  if (authLoading) {
    return <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="animate-spin w-10 h-10 border-4 border-primary border-t-transparent rounded-full"></div>
    </div>;
  }

  if (!user) {
    return <AuthView onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-background font-sans text-textMain selection:bg-primary selection:text-white">
      <Sidebar currentView={currentView} changeView={(v) => handleNavigate(v)} user={user} />
      
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-cardBorder bg-background sticky top-0 z-40">
        <h1 className="text-xl font-bold text-white tracking-wide">ThermoLearn</h1>
        <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white hover:bg-surfaceHover rounded-lg"
        >
            <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-sm p-4">
             <div className="flex justify-end mb-4">
                <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-white hover:bg-surfaceHover rounded-lg"
                >
                    Close
                </button>
             </div>
             <div className="mb-6 p-4 bg-surface glass-panel rounded-xl flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-white">
                    {user.name.charAt(0)}
                 </div>
                 <div>
                    <div className="font-bold text-white">{user.name}</div>
                    <div className="text-xs text-textMuted">{user.email}</div>
                 </div>
             </div>
             <nav className="space-y-4 h-[calc(100vh-200px)] overflow-y-auto">
                <button onClick={() => handleNavigate(ViewState.DASHBOARD)} className="block w-full text-left p-4 text-xl font-semibold border-b border-cardBorder">Dashboard</button>
                <button onClick={() => handleNavigate(ViewState.LESSON)} className="block w-full text-left p-4 text-xl font-semibold border-b border-cardBorder">Lessons</button>
                <button onClick={() => handleNavigate(ViewState.FORMULA_SHEET)} className="block w-full text-left p-4 text-xl font-semibold border-b border-cardBorder">Formula Sheet</button>
                <button onClick={() => handleNavigate(ViewState.CASE_STUDIES)} className="block w-full text-left p-4 text-xl font-semibold border-b border-cardBorder">Case Studies</button>
                <button onClick={() => handleNavigate(ViewState.DIAGRAMS)} className="block w-full text-left p-4 text-xl font-semibold border-b border-cardBorder">Diagrams</button>
                <button onClick={() => handleNavigate(ViewState.PYQ_ANALYSIS)} className="block w-full text-left p-4 text-xl font-semibold border-b border-cardBorder">PYQ Analysis</button>
                <button onClick={() => handleNavigate(ViewState.QUIZ)} className="block w-full text-left p-4 text-xl font-semibold border-b border-cardBorder">Quiz</button>
                <button onClick={() => handleNavigate(ViewState.CHALLENGES)} className="block w-full text-left p-4 text-xl font-semibold border-b border-cardBorder">Challenges</button>
                <button onClick={() => handleNavigate(ViewState.NOTES)} className="block w-full text-left p-4 text-xl font-semibold border-b border-cardBorder">Notes</button>
                <button onClick={() => handleNavigate(ViewState.FLASHCARDS)} className="block w-full text-left p-4 text-xl font-semibold border-b border-cardBorder">Flashcards</button>
                <button onClick={() => handleNavigate(ViewState.PROFILE)} className="block w-full text-left p-4 text-xl font-semibold border-b border-cardBorder">Profile</button>
                <button onClick={handleLogout} className="block w-full text-left p-4 text-xl font-semibold text-red-400">Sign Out</button>
             </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="md:pl-64 transition-all duration-300">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
