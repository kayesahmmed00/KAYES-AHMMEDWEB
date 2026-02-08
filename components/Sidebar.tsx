
import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, isDark }) => {
  const menuItems = [
    { name: 'Home', icon: 'fa-house' },
    { name: 'Contact', icon: 'fa-envelope' },
    { name: 'Help', icon: 'fa-circle-question' },
    { name: 'About', icon: 'fa-circle-info' }
  ];
  
  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 z-[130] transition-all duration-1000 backdrop-blur-[3px] ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Sidebar - Reduced Width, Square Top Corners */}
      <aside 
        className={`fixed top-16 md:top-20 left-0 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] w-[210px] sm:w-[260px] z-[140] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] backdrop-blur-3xl border-r ${
          isOpen 
            ? 'translate-x-0 opacity-100' 
            : '-translate-x-full opacity-0'
        } ${
          isDark 
            ? 'bg-[#0f171e]/90 border-white/5 text-white shadow-[40px_0_80px_-20px_rgba(0,0,0,0.8)]' 
            : 'bg-white/70 border-black/10 text-gray-900 shadow-xl'
        } rounded-none overflow-hidden`}
      >
        {/* Animated edge glow */}
        <div className={`absolute right-0 top-0 w-[3px] h-full bg-gradient-to-b from-transparent via-[#2ECFCC] to-transparent transition-opacity duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />

        <div className="flex flex-col h-full px-4 py-8 relative scrollbar-hide overflow-y-auto">
          
          {/* Nav Items - Synchronized Smooth Entrance (KAYES CHEATS text removed) */}
          <nav className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <a 
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                }}
                className={`flex items-center gap-4 text-xs font-black py-3 px-4 rounded-xl transition-all group ${
                  isOpen ? 'animate-smooth-slide-in' : 'opacity-0'
                } ${
                  isDark 
                    ? 'hover:bg-white/5 text-gray-400 hover:text-[#2ECFCC]' 
                    : 'hover:bg-[#2ECFCC]/10 text-gray-700 hover:text-[#2ECFCC]'
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
                  isDark ? 'bg-white/5' : 'bg-black/5'
                }`}>
                  <i className={`fa-solid ${item.icon} text-sm transition-all ${isDark ? 'opacity-30' : 'opacity-70'} group-hover:opacity-100 group-hover:text-[#2ECFCC]`}></i>
                </div>
                <span className="tracking-tight transition-transform group-hover:translate-x-1">{item.name}</span>
              </a>
            ))}
          </nav>
          
          {/* Bottom Card Area - Compact and Mobile Friendly */}
          <div className={`mt-auto pt-8 flex flex-col gap-4 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
          }`}>
            <div className={`relative p-5 rounded-[1.5rem] border overflow-hidden ${
              isDark ? 'bg-black/30 border-white/5' : 'bg-white/40 border-black/5 shadow-sm'
            }`}>
               <div className="flex items-center justify-between mb-3">
                  <div className="flex flex-col">
                    <p className={`text-[7px] font-black tracking-[1px] uppercase mb-0.5 ${isDark ? 'opacity-30' : 'opacity-50 text-gray-500'}`}>Security</p>
                    <span className={`text-[9px] font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>V3.2 PRO</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#2ECFCC] animate-ping"></div>
               </div>
               <div className={`w-full h-1 rounded-full overflow-hidden ${isDark ? 'bg-black/20' : 'bg-gray-200'}`}>
                 <div className="h-full bg-[#2ECFCC] w-full animate-shimmer"></div>
               </div>
            </div>
          </div>
        </div>
      </aside>

      <style>{`
        @keyframes smoothSlideIn {
          0% { 
            transform: translateX(40px); 
            opacity: 0; 
            filter: blur(5px);
          }
          100% { 
            transform: translateX(0); 
            opacity: 1; 
            filter: blur(0px);
          }
        }
        .animate-smooth-slide-in {
          animation: smoothSlideIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-shimmer {
          background: linear-gradient(90deg, #2ECFCC 0%, #1DA1F2 50%, #2ECFCC 100%);
          background-size: 200% 100%;
          animation: shimmer 2.5s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </>
  );
};

export default Sidebar;
