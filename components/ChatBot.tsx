
import React, { useState, useRef, useEffect } from 'react';
import { chatWithAI } from '../services/geminiService';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatBot: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Welcome to the Pro Tier. I am Kayes Pro AI. How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await chatWithAI(userMsg, history);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsTyping(false);
  };

  // Chat window sizing logic - Updated to respect header height and prevent overlap
  // Using calc to ensure it never goes under the title bar (header is ~80px)
  const windowSizeClass = isOpen 
    ? isExpanded 
      ? 'w-[92vw] h-[calc(100vh-220px)] sm:w-[500px] sm:h-[600px] sm:max-h-[calc(100vh-280px)]' 
      : 'w-[85vw] xs:w-[300px] sm:w-[380px] h-[50vh] sm:h-[540px] sm:max-h-[calc(100vh-280px)]'
    : 'w-0 h-0 scale-0 opacity-0';

  return (
    <div className="fixed bottom-[100px] right-6 sm:bottom-[140px] sm:right-10 z-[200]">
      {/* Chat Window */}
      <div className={`absolute bottom-16 sm:bottom-20 right-0 rounded-[1.5rem] sm:rounded-[2.5rem] shadow-2xl transition-all duration-500 origin-bottom-right flex flex-col overflow-hidden border ${windowSizeClass} ${
        isDark ? 'bg-[#0f171e] border-white/10' : 'bg-white border-black/10'
      }`}>
        
        {/* Header */}
        <div className={`p-3 sm:p-5 flex items-center justify-between border-b ${
          isDark ? 'bg-gradient-to-r from-[#111820] to-[#1e2a36] border-white/5' : 'bg-slate-50 border-black/5'
        }`}>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg bg-[#2CC7C3] flex items-center justify-center text-white">
              <i className="fa-solid fa-brain text-[10px] sm:text-lg"></i>
            </div>
            <div>
              <p className={`font-black text-[10px] sm:text-sm tracking-tight leading-none ${isDark ? 'text-white' : 'text-gray-900'}`}>AI CHAT</p>
              <span className="text-[7px] sm:text-[9px] font-black text-[#2CC7C3] tracking-widest uppercase">PRO VERSION</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsExpanded(!isExpanded)} 
              className={`w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg transition-colors ${
                isDark ? 'text-white/40 hover:text-white hover:bg-white/5' : 'text-gray-400 hover:text-gray-900 hover:bg-black/5'
              }`}
              title={isExpanded ? "Shrink" : "Expand"}
            >
              <i className={`fa-solid ${isExpanded ? 'fa-compress' : 'fa-expand'} text-xs sm:text-sm`}></i>
            </button>
            <button onClick={() => setIsOpen(false)} className={`${isDark ? 'text-white/40 hover:text-white' : 'text-gray-400 hover:text-gray-900'} transition-colors`}>
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 p-3 sm:p-5 overflow-y-auto space-y-3 sm:space-y-4 scrollbar-hide bg-gradient-to-b from-transparent to-black/5">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-zoom-in`}>
              <div className={`max-w-[85%] p-2.5 sm:p-4 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-medium leading-relaxed shadow-sm ${
                m.role === 'user' 
                  ? 'bg-gradient-to-tr from-[#2CC7C3] to-[#1DA1F2] text-white rounded-tr-none' 
                  : isDark 
                    ? 'bg-white/5 text-white/90 rounded-tl-none border border-white/10' 
                    : 'bg-white text-black rounded-tl-none border border-black/5 shadow-md'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start animate-pulse">
              <div className={`p-3 rounded-xl ${isDark ? 'bg-white/5' : 'bg-gray-100'}`}>
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-[#2CC7C3] animate-bounce"></div>
                  <div className="w-1 h-1 rounded-full bg-[#2CC7C3] animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1 h-1 rounded-full bg-[#2CC7C3] animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className={`p-3 sm:p-5 border-t ${isDark ? 'border-white/5 bg-[#111820]' : 'border-black/5 bg-gray-50'}`}>
          <div className={`flex items-center p-1.5 rounded-lg sm:rounded-2xl border transition-all ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-black/10 shadow-inner'}`}>
            <input 
              type="text" 
              placeholder="Message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-transparent outline-none px-2 text-[10px] sm:text-sm"
            />
            <button 
              onClick={handleSend}
              disabled={isTyping}
              className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center bg-[#2CC7C3] text-[#111820] shadow-lg active:scale-90 transition-all disabled:opacity-50"
            >
              <i className="fa-solid fa-paper-plane text-[10px] sm:text-sm"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-2xl flex items-center justify-center text-lg sm:text-2xl hover:scale-110 active:scale-90 transition-all duration-300 relative group border ${
          isDark 
            ? 'bg-gradient-to-br from-[#111820] to-[#1e2a36] border-[#2CC7C3]/30 text-white' 
            : 'bg-white/95 border-[#D4AF37]/30 text-[#D4AF37] shadow-lg'
        }`}
      >
        <div className={`absolute inset-0 rounded-full border-2 animate-ping opacity-20 ${isDark ? 'border-[#2CC7C3]' : 'border-[#D4AF37]'}`}></div>
        <i className={`fa-solid ${isOpen ? 'fa-minus' : 'fa-robot'} transition-transform duration-500`}></i>
      </button>
    </div>
  );
};

export default ChatBot;
