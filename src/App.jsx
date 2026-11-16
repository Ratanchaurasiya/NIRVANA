import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Interactive3DBackground from './components/3d/Interactive3DBackground';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileBottomBar from './components/MobileBottomBar';
import BackToTop from './components/BackToTop';
import ToastNotification from './components/ToastNotification';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');
  const [toast, setToast] = useState(null);

  // Sync state with browser URL navigation (Back/Forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Client-side router navigation wrapper
  const handleNavigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  // Determine active view component based on route
  const renderCurrentPage = () => {
    if (currentPath === '/about') {
      return <AboutPage onNavigate={handleNavigate} />;
    }
    if (currentPath === '/projects') {
      return <ProjectsPage onNavigate={handleNavigate} />;
    }
    if (currentPath.startsWith('/projects/')) {
      const projectId = currentPath.replace('/projects/', '');
      return <ProjectDetailPage projectId={projectId} onNavigate={handleNavigate} onShowToast={showToast} />;
    }
    if (currentPath === '/contact') {
      return <ContactPage onShowToast={showToast} />;
    }
    if (currentPath === '/privacy-policy') {
      return <PrivacyPolicyPage onNavigate={handleNavigate} />;
    }
    if (currentPath === '/terms-and-conditions') {
      return <TermsPage onNavigate={handleNavigate} />;
    }
    // Default to Home Page
    return <HomePage onShowToast={showToast} onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen relative font-sans selection:bg-[#B69B65] selection:text-[#171717] bg-[#171717] text-[#F5F1E8]">
      
      {/* Subtle Architectural Perspective Ambience */}
      <Interactive3DBackground />

      {/* Fixed Top Luxury Architectural Navbar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="relative z-10">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Utilities */}
      <FloatingWhatsApp />
      <MobileBottomBar />
      <BackToTop />

      {/* Toast Notification Container */}
      {toast && (
        <ToastNotification
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

    </div>
  );
}

export default App;
