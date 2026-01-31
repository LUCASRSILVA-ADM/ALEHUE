
import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { HERO_WORDS, UI_STRINGS } from '../constants';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const [index, setIndex] = useState(0);
  const words = HERO_WORDS[lang];
  const t = UI_STRINGS[lang];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-stone-950">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://alehue.com.ar/wp-content/uploads/2018/12/ALEHUE019.jpg" 
          alt="Vista Alehue" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-[organic-zoom_60s_linear_infinite]"
        />
        <div className="absolute inset-0 opacity-20 mix-blend-screen animate-[fog-drift_30s_linear_infinite]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-stone-400/20 to-transparent blur-3xl transform rotate-12 scale-150"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-transparent to-stone-950" />
      </div>

      <div className="relative z-10 text-center px-4 w-full max-w-[1400px]">
        <div className="mb-6 md:mb-12 opacity-30">
          <span className="text-stone-300 text-[7px] md:text-[8px] font-bold tracking-[1em] md:tracking-[1.5em] uppercase">
            {t.essence}
          </span>
        </div>
        
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl md:text-[6rem] font-light text-white leading-none tracking-tight serif italic flex flex-col md:flex-row items-center justify-center md:gap-x-10">
            <span className="font-bold not-italic tracking-tighter text-stone-100 shrink-0 mb-2 md:mb-0">
              {t.find}
            </span>
            
            <div className="relative h-[1.2em] flex items-center justify-center md:justify-start min-w-[200px] md:min-w-[600px] overflow-visible">
              <div 
                key={`${lang}-${index}`} 
                className="absolute inset-0 md:inset-y-0 md:left-0 flex items-center justify-center md:justify-start text-amber-50/90 italic font-light whitespace-nowrap animate-[soproCinematografico_6s_ease-in-out_forwards]"
              >
                {words[index]}
              </div>
            </div>
          </h1>
        </div>
        
        <div className="flex flex-col items-center justify-center mt-16 md:mt-24 space-y-12 md:space-y-16">
          <p className="text-stone-400 text-xs md:text-lg max-w-[280px] md:max-w-[550px] leading-relaxed font-light italic opacity-60 tracking-wide mx-auto">
            {t.heroDesc}
          </p>
          
          <button 
            onClick={() => document.getElementById('cabanas')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex flex-col items-center space-y-6 cursor-pointer"
          >
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 text-white px-8 md:px-12 py-4 md:py-5 rounded-full text-[8px] md:text-[9px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase hover:bg-white hover:text-stone-950 transition-all duration-1000 shadow-2xl">
              {t.explore}
            </div>
            <div className="w-[1px] h-10 md:h-12 bg-gradient-to-b from-white/40 to-transparent group-hover:h-20 transition-all duration-1000"></div>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes soproCinematografico {
          0% { opacity: 0; filter: blur(30px); transform: translateY(20px) scale(1.1); }
          15% { opacity: 1; filter: blur(0); transform: translateY(0) scale(1); }
          85% { opacity: 1; filter: blur(0); transform: translateY(0) scale(1); }
          100% { opacity: 0; filter: blur(30px); transform: translateX(20px) translateY(-20px) scale(0.85); }
        }
        @keyframes organic-zoom {
          0% { transform: scale(1.02); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1.02); }
        }
        @keyframes fog-drift {
          0% { transform: translateX(-1%) translateY(0); opacity: 0.1; }
          50% { transform: translateX(1%) translateY(-0.5%); opacity: 0.15; }
          100% { transform: translateX(-1%) translateY(0); opacity: 0.1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
