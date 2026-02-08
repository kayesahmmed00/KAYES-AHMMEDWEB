
import React from 'react';
import confetti from 'canvas-confetti';

const ConfettiButton: React.FC = () => {
  const fireConfetti = () => {
    try {
      confetti({
        particleCount: 200,
        angle: 60,
        spread: 100,
        origin: { x: 0, y: 1.2 },
        startVelocity: 100,
        gravity: 1.1,
        colors: ['#2ECFCC', '#1DA1F2', '#ffffff', '#ffd700'],
        zIndex: 10000,
        scalar: 1.2,
        disableForReducedMotion: true
      });

      setTimeout(() => {
        try {
          confetti({
            particleCount: 140,
            angle: 240, 
            spread: 110,
            origin: { x: 1, y: 0 }, 
            startVelocity: 60,
            gravity: 0.8,
            colors: ['#ff0000', '#ffffff', '#2ECFCC', '#00ff00'],
            zIndex: 10000,
            scalar: 1.1
          });
        } catch (e) {
          console.error("Confetti error:", e);
        }
      }, 350);
    } catch (e) {
      console.error("Confetti error:", e);
    }
  };

  const handleCombinedAction = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    requestAnimationFrame(() => {
      setTimeout(fireConfetti, 50);
    });
  };

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-[200] pointer-events-none">
      <button
        onClick={handleCombinedAction}
        className="pointer-events-auto relative group flex items-center justify-center outline-none focus:outline-none touch-manipulation"
        aria-label="Celebrate and Scroll to Top"
        style={{ animation: 'float 3.5s ease-in-out infinite' }}
      >
        {/* Animated Multi-Color Glow Background - Teal Primary */}
        <div className="absolute inset-0 w-[140%] h-[140%] left-[-20%] top-[-20%] rounded-full blur-[25px] opacity-40 dark:opacity-50 transition-opacity duration-700
          bg-gradient-to-r from-[#2ECFCC] via-[#1DA1F2] to-teal-500 bg-[length:200%_200%] animate-gradient-slow group-hover:opacity-80"></div>
        
        {/* Main Circular Button */}
        <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-foreground/5 dark:bg-[#0C1919] backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden border border-foreground/10 dark:border-[#2ECFCC]/30 group-hover:border-[#2ECFCC] transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]">
          
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-40"></div>
          
          <div className="absolute inset-0 p-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             <div className="w-full h-full rounded-full border border-dashed border-[#2ECFCC]/50 animate-spin-slow"></div>
          </div>

          <div className="flex flex-col items-center justify-center -space-y-1 z-10 group-hover:scale-110 transition-transform duration-500">
            <i className="fa-solid fa-chevron-up text-[#2ECFCC] text-[8px] md:text-[10px] group-hover:translate-y-[-2px] transition-transform"></i>
            <span className="text-2xl md:text-3xl transition-transform duration-700 ease-in-out group-hover:rotate-[360deg] select-none drop-shadow-xl">
              🎉
            </span>
          </div>

          <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#2ECFCC]/30 rounded-full transition-all duration-700 animate-ping opacity-20 group-hover:opacity-0"></div>
        </div>

        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#2ECFCC] text-[#111820] text-[9px] px-2 py-0.5 rounded-full font-black tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap border border-white/20 shadow-xl">
          TOP
        </span>
      </button>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
      `}</style>
    </div>
  );
};

export default ConfettiButton;
