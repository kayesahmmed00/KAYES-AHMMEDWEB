
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AppCard from './components/AppCard';
import SearchBar from './components/SearchBar';
import ConfettiButton from './components/ConfettiButton';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';
import confetti from 'canvas-confetti';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      document.documentElement.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#2CC7C3', '#1DA1F2'],
        scalar: 1
      });
    } catch (e) {
      console.error("Confetti init error:", e);
    }
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`min-h-screen relative transition-colors duration-500 bg-background text-foreground`}>
      <div className="grid-bg opacity-20" />
      
      <Header 
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isOpen={isSidebarOpen}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        isDark={isDark}
      />

      <main className="container mx-auto px-4 pt-20 md:pt-28 pb-12 flex flex-col items-center z-10 relative">
        <div className="w-full max-w-2xl mb-6 md:mb-10">
           <SearchBar isDarkMode={isDark} />
        </div>
        
        <div className="w-full max-w-2xl flex justify-center">
          <AppCard isDarkMode={isDark} />
        </div>
      </main>

      <Footer isDarkMode={isDark} />
      
      <ChatBot isDark={isDark} />
      <ConfettiButton />
    </div>
  );
};

export default App;
