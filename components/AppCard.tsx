import React, { useState } from 'react';

interface AppCardProps {
  isDarkMode: boolean;
}

const AppCard: React.FC<AppCardProps> = ({ isDarkMode }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const details = {
    name: "Kayes Ahmmed Cheats",
    version: "V1.2.0-PRO",
    size: "30.5 MB",
    updatedOn: "Feb 06, 2026",
    icon: "https://i.postimg.cc/65FtJZKy/DTR.jpg"
  };

  const screenshots = [
    { 
      url: "https://i.postimg.cc/26tXb424/Screenshot-20260206-174351.jpg", 
      alt: "Dashboard View"
    },
    { 
      url: "https://i.postimg.cc/htrnJ5xv/Screenshot-20260206-174534.png", 
      alt: "Features List"
    }
  ];

  const cardContainerStyle = isDarkMode 
    ? { 
        background: 'linear-gradient(135deg, #0C1818 0%, #0C1818 40%, #0C2929 60%, #0C2929 100%)',
        border: '1px solid rgba(255, 255, 255, 0.05)'
      }
    : { 
        background: '#ffffff',
        border: '1px solid rgba(0, 0, 0, 0.05)'
      };

  const textColorClass = isDarkMode ? 'text-white' : 'text-[#D4AF37]';
  const subTextColorClass = isDarkMode ? 'text-white/70' : 'text-[#D4AF37]/80';

  return (
    <div 
      className={`w-full max-w-xl rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden transition-all duration-500 animate-zoom-in ${
        isDarkMode ? 'shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)]' : 'shadow-xl'
      }`}
      style={cardContainerStyle}
    >
      
      {/* Header Section */}
      <div className={`p-4 sm:p-6 md:p-10 flex items-center gap-3 sm:gap-6 border-b transition-colors ${
        isDarkMode ? 'border-white/5 bg-black/10' : 'bg-slate-50 border-black/5'
      }`}>
        <div className="relative flex-shrink-0">
          <img 
            src={details.icon} 
            alt="App Icon" 
            className="w-12 h-12 xs:w-16 xs:h-16 md:w-24 md:h-24 rounded-lg sm:rounded-2xl shadow-xl ring-1 sm:ring-2 ring-[#2CC7C3]/30 bg-gray-900 object-cover"
          />
          {isDarkMode && <div className="absolute inset-0 bg-[#2CC7C3]/10 blur-xl rounded-full animate-pulse-slow -z-10"></div>}
        </div>
        <div className="flex flex-col min-w-0">
           <h1 className={`text-base xs:text-xl sm:text-3xl font-black tracking-tighter leading-tight truncate ${textColorClass}`}>
            {details.name}
          </h1>
          <div className="flex items-center gap-1.5 mt-0.5 sm:mt-1">
            <span className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-[#2CC7C3] animate-pulse flex-shrink-0"></span>
            <span className={`text-[7px] xs:text-[8px] md:text-[10px] font-bold tracking-widest uppercase opacity-60 truncate ${textColorClass}`}>
              Kayes Ahmmed Exclusive
            </span>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 md:p-10 space-y-3 sm:space-y-6">
        {/* Info Rows */}
        <div className="grid grid-cols-1 gap-2 sm:gap-4">
          {[
            { label: "App Version", value: details.version, icon: "fa-code-branch" },
            { label: "Package Size", value: details.size, icon: "fa-database" },
            { label: "Update Date", value: details.updatedOn, icon: "fa-clock" }
          ].map((item, i) => (
            <div key={i} className={`flex items-center justify-between p-2.5 sm:p-4 rounded-lg sm:rounded-2xl border transition-all ${
              isDarkMode ? 'bg-white/5 border-white/5 hover:bg-white/10' : 'bg-[#D4AF37]/5 border-[#D4AF37]/10'
            }`}>
              <div className="flex items-center gap-2 sm:gap-3">
                <i className={`fa-solid ${item.icon} text-[#2CC7C3] opacity-70 text-[9px] sm:text-sm`}></i>
                <span className={`text-[9px] xs:text-[10px] sm:text-sm font-medium whitespace-nowrap ${subTextColorClass}`}>{item.label}</span>
              </div>
              <span className={`text-[9px] xs:text-[10px] sm:text-base font-bold whitespace-nowrap ${textColorClass}`}>{item.value}</span>
            </div>
          ))}
        </div>

        {/* Screenshots Section */}
        <div className="mt-4 md:mt-8">
          <h2 className={`text-xs sm:text-lg font-black mb-2 sm:mb-4 flex items-center gap-2 ${textColorClass}`}>
             <i className="fa-solid fa-laptop-code text-[#2CC7C3]"></i>
             Interface Preview
          </h2>
          <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 sm:pb-6 scrollbar-hide snap-x justify-start">
            {screenshots.map((screen, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedImage(screen.url)}
                className={`relative flex-none w-[90px] h-[160px] xs:w-[120px] xs:h-[213px] sm:w-[190px] sm:h-[338px] rounded-lg sm:rounded-2xl overflow-hidden group cursor-pointer border transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] snap-center
                  hover:scale-[1.06] hover:-translate-y-2 z-0 hover:z-20
                  ${isDarkMode 
                    ? 'border-white/10 bg-black/20 hover:border-[#2CC7C3]/50 shadow-lg' 
                    : 'border-black/5 bg-gray-50 hover:border-[#D4AF37]/50 shadow-md'}`}
              >
                <img 
                  src={screen.url} 
                  alt={screen.alt} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[0.5px]">
                  <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-full bg-[#2CC7C3]/90 flex items-center justify-center text-white text-xs sm:text-2xl shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <i className="fa-solid fa-expand"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Button */}
        <button className="w-full mt-2 sm:mt-4 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-[#2CC7C3] border-[1.5px] sm:border-[3px] border-[#2CC7C3] text-[#111820] font-black text-[10px] xs:text-xs sm:text-lg shadow-xl shadow-[#2CC7C3]/20 hover:scale-[1.02] hover:shadow-[#2CC7C3]/40 active:scale-95 transition-all flex items-center justify-center gap-2">
          <i className="fa-solid fa-download text-[9px] sm:text-sm"></i>
          <span>DOWNLOAD NOW</span>
        </button>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[500] bg-[#0C1919]/95 flex items-center justify-center p-4 backdrop-blur-xl"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-4 right-4 text-white/50 hover:text-white text-2xl transition-colors">
            <i className="fa-solid fa-times"></i>
          </button>
          <img 
            src={selectedImage} 
            alt="Preview" 
            className="max-w-full max-h-[80vh] sm:max-h-[85vh] object-contain rounded-lg sm:rounded-2xl shadow-2xl border border-white/10 animate-zoom-in"
          />
        </div>
      )}
    </div>
  );
};

export default AppCard;

