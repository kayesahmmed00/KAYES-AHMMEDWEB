
import React, { useState, useEffect, useRef } from 'react';

interface SearchBarProps {
  isDarkMode: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ isDarkMode }) => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ text: string } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearch = () => {
    const query = value.trim().toLowerCase();
    if (!query) return;
    
    setLoading(true);
    setResult(null);

    const keywords = [
      "kayes ahmmed cheats", 
      "kayes", 
      "ahmmed", 
      "kayes ahmmed", 
      "kayes ahmmed ch", 
      "kayes ahmmed che", 
      "kayes ahmmed cheat", 
      "c", 
      "che", 
      "cheat"
    ];
    
    setTimeout(() => {
      const isMatch = keywords.some(k => query === k) || 
                      query.includes("kayes ahmmed ch") || 
                      query.startsWith("kayes ahmmed cheat");

      if (isMatch) {
        setResult({
          text: "Kayes Ahmmed Cheats is specifically developed for Free Fire and Free Fire Max. It significantly increases drag headshot sensitivity and provides various colored holograms for better enemy visibility."
        });
      } else {
        setResult({
          text: "System could not find specific data for this entry. Ensure you are typing correctly (e.g., Kayes Ahmmed Cheat)."
        });
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="w-full flex flex-col items-center px-4 relative">
      {/* Search Input Container - Rectangular Design */}
      <div className={`w-full max-w-xl animated-border-box group shadow-2xl transition-all duration-500 hover:scale-[1.01] ${
        isDarkMode ? 'hover:shadow-[#2CC7C3]/10' : 'hover:shadow-[#D4AF37]/10'
      }`}>
        <div className={`animated-border-content flex items-center px-3 py-1.5 sm:px-6 sm:py-4 transition-all duration-500 overflow-hidden ${
          isDarkMode 
            ? 'bg-[#0f171e]/95 text-white backdrop-blur-3xl' 
            : 'bg-white/95 text-gray-900 backdrop-blur-3xl border border-black/5'
        }`}>
          {/* Status Indicator Icon */}
          <div className={`flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl mr-3 transition-all duration-700 transform group-focus-within:rotate-12 ${
            isDarkMode ? 'bg-[#2CC7C3]/10' : 'bg-[#D4AF37]/10'
          }`}>
             <i className={`fa-solid fa-microchip text-[10px] sm:text-lg animate-pulse ${
               isDarkMode ? 'text-[#2CC7C3]' : 'text-[#D4AF37]'
             }`}></i>
          </div>
          
          <div className="flex-1 flex items-center min-w-0">
            <input 
              ref={inputRef}
              className="flex-1 bg-transparent outline-none text-[13px] sm:text-[17px] font-black tracking-tight placeholder:opacity-20 placeholder:text-current min-w-0"
              placeholder="Search Kayes Ahmmed..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            {/* Shortcut Hint */}
            <div className={`hidden sm:flex items-center gap-1 ml-2 px-1.5 py-0.5 rounded border text-[10px] font-bold opacity-30 group-focus-within:opacity-0 transition-opacity ${
              isDarkMode ? 'border-white/20' : 'border-black/20'
            }`}>
              <span>⌘</span>
              <span>K</span>
            </div>
          </div>
          
          <button 
            onClick={handleSearch}
            disabled={loading}
            className={`ml-2 px-3 py-1.5 sm:px-7 sm:py-3 rounded-lg sm:rounded-xl font-black text-[8px] sm:text-[11px] tracking-[1px] sm:tracking-[2px] uppercase transition-all active:scale-95 shadow-lg flex items-center gap-1.5 sm:gap-2 border-2 whitespace-nowrap overflow-hidden relative group/btn ${
              isDarkMode 
                ? 'bg-[#2CC7C3] border-[#2CC7C3]/50 text-[#111820] shadow-[#2CC7C3]/20' 
                : 'bg-[#D4AF37] border-[#D4AF37]/50 text-white shadow-[#D4AF37]/20'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000 skew-x-[-20deg]"></div>
            
            {loading ? (
              <i className="fa-solid fa-spinner animate-spin"></i>
            ) : (
              <>
                <i className="fa-solid fa-magnifying-glass text-[9px] sm:text-sm"></i>
                <span className="hidden xs:inline">Search</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Results Display */}
      {result && (
        <div className={`mt-6 sm:mt-10 w-full max-w-xl p-5 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] animate-zoom-in border transition-all duration-700 shadow-2xl relative overflow-hidden ${
          isDarkMode 
            ? 'bg-[#0f171e]/90 border-white/10 text-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]' 
            : 'bg-white border-black/5 text-gray-900'
        }`}>
          <div className={`absolute -top-12 -right-12 w-24 h-24 rounded-full blur-[50px] opacity-20 ${
            isDarkMode ? 'bg-[#2CC7C3]' : 'bg-[#D4AF37]'
          }`}></div>

          <div className="flex items-center justify-between mb-5 sm:mb-8">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-lg transition-transform hover:rotate-6 duration-500 ${
                isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/5'
              }`}>
                <i className={`fa-solid fa-brain text-xs sm:text-lg ${isDarkMode ? 'text-[#2CC7C3]' : 'text-[#D4AF37]'}`}></i>
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[3px] opacity-40">System Response</span>
                <span className={`text-[7px] sm:text-[9px] font-bold tracking-widest ${isDarkMode ? 'text-[#2CC7C3]' : 'text-[#D4AF37]'}`}>AI-VERIFIED DATA</span>
              </div>
            </div>
          </div>
          
          <div className="relative z-10">
            <p className={`text-[12px] sm:text-[16px] leading-[1.7] font-bold tracking-tight italic border-l-[3px] sm:border-l-[4px] pl-4 sm:pl-8 ${
              isDarkMode ? 'text-white/90 border-[#2CC7C3]' : 'text-gray-800 border-[#D4AF37]'
            }`}>
              "{result.text}"
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-current opacity-10 flex flex-wrap gap-4">
             <div className="flex items-center gap-2">
               <div className={`w-1.5 h-1.5 rounded-full ${isDarkMode ? 'bg-[#2CC7C3]' : 'bg-[#D4AF37]'}`}></div>
               <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[1px]">Secured Access</span>
             </div>
             <div className="flex items-center gap-2">
               <div className={`w-1.5 h-1.5 rounded-full ${isDarkMode ? 'bg-[#2CC7C3]' : 'bg-[#D4AF37]'}`}></div>
               <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[1px]">Real-Time Data</span>
             </div>
          </div>
        </div>
      )}

      <style>{`
        .animated-border-box {
          position: relative;
          overflow: hidden;
          padding: 3px;
          border-radius: 0.75rem; /* Rectangular corners */
          z-index: 1;
        }
        
        .animated-border-box::before {
          content: '';
          position: absolute;
          width: 300%;
          height: 300%;
          background: conic-gradient(from 0deg, #2CC7C3, #1DA1F2, #ff00c8, #7000ff, #ffd700, #2CC7C3);
          animation: rotate-bg 5s linear infinite;
          top: -100%;
          left: -100%;
          z-index: -1;
        }

        .animated-border-content {
          border-radius: calc(0.75rem - 3px);
          width: 100%;
        }

        @keyframes rotate-bg {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 640px) {
          .animated-border-box { border-radius: 0.6rem; padding: 2.5px; }
          .animated-border-content { border-radius: calc(0.6rem - 2.5px); }
        }

        input::placeholder {
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 800;
          font-size: 10px;
          opacity: 0.25;
        }
      `}</style>
    </div>
  );
};

export default SearchBar;
