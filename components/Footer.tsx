
import React, { useState } from 'react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const socials = [
    { name: 'Discord', icon: 'fa-discord', url: 'https://discord.com', color: '#5865F2' },
    { name: 'Facebook', icon: 'fa-facebook-f', url: 'https://www.facebook.com/kayesahmmed00', color: '#1877F2' },
    { name: 'Messenger', icon: 'fa-facebook-messenger', url: 'https://m.me/kayesahmmed00', color: '#006AFF' },
    { name: 'WhatsApp', icon: 'fa-whatsapp', url: 'https://wa.me/yournumber', color: '#25D366' },
  ];

  return (
    <footer className="mt-32 pb-20 flex flex-col items-center gap-16">
      
      {/* Centered Action Section */}
      <div className="flex items-center justify-center w-full min-h-[100px]">
        <div className="flex items-center justify-center relative">
          
          {/* Social Icons - Expands to the left of the button, pushing the button right */}
          <div 
            className={`flex items-center gap-4 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
              isRevealed ? 'max-w-[600px] opacity-100 mr-6' : 'max-w-0 opacity-0 mr-0'
            }`}
          >
            {socials.map((social, index) => (
              <button
                key={social.name}
                onClick={() => window.open(social.url, '_blank')}
                style={{ backgroundColor: social.color }}
                className="group relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center rounded-2xl text-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[#2CC7C3]/20 active:scale-90"
                aria-label={social.name}
              >
                <i className={`fa-brands ${social.icon} text-xl sm:text-2xl`}></i>
                {/* Tooltip */}
                <span className="absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-xl bg-gray-900 text-white text-[10px] font-black tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap shadow-2xl border border-white/10">
                  {social.name}
                </span>
              </button>
            ))}
          </div>

          {/* Main Action Button - Slides to the right because its container is centered */}
          <button 
            onClick={() => setIsRevealed(!isRevealed)}
            className={`relative px-10 py-5 rounded-2xl font-black text-xs sm:text-sm tracking-[3px] uppercase transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] shadow-2xl z-20 whitespace-nowrap overflow-hidden group ${
              isRevealed 
                ? 'bg-transparent border-2 border-[#2CC7C3] text-[#2CC7C3]' 
                : 'bg-[#2CC7C3] text-[#111820] hover:scale-105 active:scale-95'
            }`}
          >
            {/* Inner text shift animation */}
            <span className="relative z-10">{isRevealed ? 'CLOSE' : 'Contact to me'}</span>
            {!isRevealed && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 skew-x-[-20deg]"></div>
            )}
          </button>
        </div>
      </div>

      {/* Brand Footer Info */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-5 opacity-40">
           <div className="h-[1px] w-12 bg-current"></div>
           <p className={`text-center text-[10px] font-black tracking-[5px] uppercase ${isDarkMode ? 'text-white' : 'text-[#D4AF37]'}`}>
             © 2026 KAYES AHMMED
           </p>
           <div className="h-[1px] w-12 bg-current"></div>
        </div>
        <p className={`text-[9px] font-bold tracking-[3px] opacity-20 uppercase ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          PREMIUM SERVICE PROVIDER
        </p>
      </div>
    </footer>
  );
};

export default Footer;
