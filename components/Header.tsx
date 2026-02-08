
import React from 'react';

interface HeaderProps {
  onToggleSidebar: () => void;
  isOpen: boolean;
  isDark: boolean;
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, isOpen, isDark, onToggleTheme }) => {
  // Styles to match the sidebar exactly when open
  const headerBgClass = isOpen 
    ? (isDark ? 'bg-[#0f171e]/90' : 'bg-white/70') 
    : (isDark ? 'bg-[#121921]/95' : 'bg-white/95');
    
  // Removed shadow-sm to satisfy the request "title bar এর নিচ দিয়ে কোনো shadow থাকবে না"
  const headerBorderClass = isOpen
    ? (isDark ? 'border-white/5' : 'border-black/10')
    : (isDark ? 'border-white/5' : 'border-black/5');

  return (
    <header className={`fixed top-0 left-0 w-full h-16 md:h-20 flex items-center justify-between px-6 md:px-10 z-[150] transition-all duration-700 ${headerBgClass} backdrop-blur-3xl border-b ${headerBorderClass}`}>
      
      {/* Brand Logo Area */}
      <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-transform duration-700 group-hover:rotate-[360deg] ${
          isDark ? 'bg-[#2ECFCC]/20 shadow-[0_0_20px_rgba(46,207,204,0.4)]' : 'bg-[#2ECFCC] shadow-lg shadow-[#2ECFCC]/20'
        }`}>
          <i className={`fa-solid fa-bolt ${isDark ? 'text-[#2ECFCC]' : 'text-white'}`}></i>
        </div>
        <div className="flex flex-col">
          <span className={`text-sm md:text-lg font-black tracking-tighter leading-none transition-colors ${isDark ? 'text-white' : 'text-[#D4AF37]'}`}>
            KAYES AHMMED
          </span>
          <span className="text-[#2ECFCC] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase opacity-80">CHEATS</span>
        </div>
      </div>

      {/* Action Icons (Right Side) */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Theme Toggle Button - On the left of Menu Icon */}
        <button 
          onClick={onToggleTheme}
          className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-lg md:text-xl rounded-xl transition-all duration-300 active:scale-90 ${
            isDark ? 'hover:bg-white/5 text-[#2ECFCC]' : 'hover:bg-black/5 text-[#D4AF37]'
          }`}
          aria-label="Toggle Theme"
        >
          <div className={`transition-all duration-700 transform ${isDark ? 'rotate-[360deg] scale-100' : 'rotate-0 scale-100'}`}>
            {isDark ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
          </div>
        </button>

        {/* Menu Icon (Three Lines) - On the far right */}
        <button 
          onClick={onToggleSidebar}
          className={`relative w-10 h-10 md:w-12 md:h-12 flex flex-col items-center justify-center rounded-xl transition-all duration-300 active:scale-90 ${
            isDark ? 'hover:bg-white/5 text-white' : 'hover:bg-black/5 text-[#D4AF37]'
          }`}
          aria-label="Toggle Menu"
        >
          <div className="relative w-6 h-5 flex flex-col justify-between items-end overflow-visible">
            <span className={`h-[2.5px] bg-current rounded-full transition-all duration-500 transform origin-right ${isOpen ? 'w-full -rotate-45 -translate-y-[1px] translate-x-[1px]' : 'w-full'}`} />
            <span className={`h-[2.5px] bg-current rounded-full transition-all duration-300 ${isOpen ? 'w-0 opacity-0' : 'w-2/3'}`} />
            <span className={`h-[2.5px] bg-current rounded-full transition-all duration-500 transform origin-right ${isOpen ? 'w-full rotate-45 translate-y-[1px] translate-x-[1px]' : 'w-full'}`} />
          </div>
          {isOpen && <div className="absolute inset-0 rounded-xl bg-[#2ECFCC]/10 animate-ping"></div>}
        </button>
      </div>
    </header>
  );
};

export default Header;
