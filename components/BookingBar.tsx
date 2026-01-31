
import React, { useState } from 'react';
import { Calendar, Users, Home, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';

interface BookingBarProps {
  lang: Language;
}

const BookingBar: React.FC<BookingBarProps> = ({ lang }) => {
  const [isBooked, setIsBooked] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const t = UI_STRINGS[lang];

  const handleBooking = () => {
    setIsBooked(true);
    setTimeout(() => {
      setIsBooked(false);
      setActiveTab(null);
    }, 4000);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[120] p-4 md:p-12 pointer-events-none flex justify-center">
      <div className="w-full max-w-5xl bg-white/95 backdrop-blur-[40px] border border-stone-200/50 shadow-[0_20px_60px_rgba(0,0,0,0.15)] rounded-[30px] md:rounded-[50px] p-1.5 md:p-2.5 flex items-center pointer-events-auto transition-all duration-700 hover:shadow-[0_40px_100px_rgba(0,0,0,0.2)]">
        
        <div 
          onClick={() => setActiveTab(activeTab === 'date' ? null : 'date')}
          className={`flex-[1.2] flex flex-col items-center md:items-start justify-center py-3 md:py-5 px-3 md:px-10 cursor-pointer border-r border-stone-100 hover:bg-stone-50 rounded-l-[25px] md:rounded-l-[40px] transition-all ${activeTab === 'date' ? 'bg-stone-100' : ''}`}
        >
          <div className="flex items-center space-x-2 md:space-x-3 mb-0.5 md:mb-1.5">
            <Calendar className="w-3 md:w-3.5 h-3 md:h-3.5 text-stone-500" />
            <span className="hidden md:inline text-[8px] font-extrabold text-stone-400 uppercase tracking-[0.2em]">{t.period}</span>
          </div>
          <span className="text-[10px] md:text-[12px] font-bold text-stone-900 tracking-tight">{t.dates}</span>
        </div>

        <div 
          onClick={() => setActiveTab(activeTab === 'guests' ? null : 'guests')}
          className={`flex-1 flex flex-col items-center md:items-start justify-center py-3 md:py-5 px-3 md:px-10 cursor-pointer border-r border-stone-100 hover:bg-stone-50 transition-all ${activeTab === 'guests' ? 'bg-stone-100' : ''}`}
        >
          <div className="flex items-center space-x-2 md:space-x-3 mb-0.5 md:mb-1.5">
            <Users className="w-3 md:w-3.5 h-3 md:h-3.5 text-stone-500" />
            <span className="hidden md:inline text-[8px] font-extrabold text-stone-400 uppercase tracking-[0.2em]">{t.guests}</span>
          </div>
          <span className="text-[10px] md:text-[12px] font-bold text-stone-900 tracking-tight">{t.guestLabel}</span>
        </div>

        <div 
          onClick={() => setActiveTab(activeTab === 'home' ? null : 'home')}
          className={`hidden md:flex flex-[1.2] flex-col items-start justify-center py-5 px-10 cursor-pointer hover:bg-stone-50 transition-all ${activeTab === 'home' ? 'bg-stone-100' : ''}`}
        >
          <div className="flex items-center space-x-3 mb-1.5">
            <Home className="w-3.5 h-3.5 text-stone-500" />
            <span className="text-[8px] font-extrabold text-stone-400 uppercase tracking-[0.2em]">{t.refuge}</span>
          </div>
          <span className="text-[12px] font-bold text-stone-900 tracking-tight">Casa Alehue</span>
        </div>

        <button 
          onClick={handleBooking}
          disabled={isBooked}
          className={`ml-2 md:ml-6 flex-1 md:flex-none px-4 md:px-12 py-4 md:py-6 rounded-full flex items-center justify-center transition-all duration-700 overflow-hidden relative shadow-lg ${
            isBooked ? 'bg-stone-800 text-white' : 'bg-stone-950 text-white hover:bg-amber-700 active:scale-95'
          }`}
        >
          {isBooked ? (
            <div className="flex items-center space-x-2 md:space-x-4 animate-in fade-in zoom-in duration-500">
              <CheckCircle2 className="w-3 md:w-4 h-3 md:h-4 text-amber-400" />
              <span className="font-black tracking-[0.1em] md:tracking-[0.2em] text-[8px] md:text-[9px] uppercase">OK</span>
            </div>
          ) : (
            <span className="font-black tracking-[0.2em] md:tracking-[0.4em] text-[8px] md:text-[9px] uppercase">{t.book}</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default BookingBar;
