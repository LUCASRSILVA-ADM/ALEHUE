
import React, { useState, useEffect } from 'react';
import { ArrowRight, Maximize2, Users } from 'lucide-react';
import { CABINS, UI_STRINGS } from '../constants';
import { Language } from '../types';

interface CabinsSectionProps {
  lang: Language;
}

const CabinsSection: React.FC<CabinsSectionProps> = ({ lang }) => {
  const [displayCabins, setDisplayCabins] = useState(CABINS);
  const t = UI_STRINGS[lang];

  useEffect(() => {
    const loadCustomImages = () => {
      const saved = localStorage.getItem('alehue_custom_images');
      if (saved) {
        const customUrls = JSON.parse(saved);
        const updated = CABINS.map(c => ({
          ...c,
          image: customUrls[c.id] || c.image
        }));
        setDisplayCabins(updated);
      } else {
        setDisplayCabins(CABINS);
      }
    };
    loadCustomImages();
  }, []);

  return (
    <section id="cabanas" className="py-24 md:py-40 px-6 bg-[#fbfbf9]">
      <div className="max-w-[1000px] mx-auto text-center mb-24 md:mb-32">
        <h4 className="text-stone-400 font-bold tracking-[0.4em] uppercase text-[9px] mb-6">{t.collection}</h4>
        <h2 className="text-4xl md:text-7xl font-bold leading-tight tracking-tighter mb-8 serif italic">
          {t.archTitle.split(" ").map((w,i) => i === t.archTitle.split(" ").length -1 ? <span key={i} className="not-italic text-stone-900">{w}</span> : w + " ")}
        </h2>
        <p className="text-stone-400 text-xs md:text-sm tracking-widest uppercase font-medium">{t.cabinDesc}</p>
        <div className="w-12 h-[1px] bg-stone-200 mx-auto mt-10"></div>
      </div>

      <div className="max-w-[1200px] mx-auto space-y-32 md:space-y-64">
        {displayCabins.map((cabin, idx) => (
          <div key={cabin.id} className="flex flex-col items-center group">
            <div className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-[24px] md:rounded-[48px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] transition-all duration-1000 group-hover:shadow-[0_80px_120px_-20px_rgba(0,0,0,0.2)]">
              <img src={cabin.image} className="w-full h-full object-cover transition-transform duration-[4s] ease-out group-hover:scale-110" alt={cabin.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-transparent opacity-80" />
              <div className="absolute top-6 right-6 md:top-10 md:right-10">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-2.5 rounded-full text-[9px] md:text-[11px] text-white font-bold tracking-[0.2em] uppercase">
                  U$ {cabin.price} <span className="opacity-50">{t.night}</span>
                </div>
              </div>
              <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 text-white text-left max-w-xl">
                <h3 className="text-4xl md:text-7xl font-bold mb-6 serif italic tracking-tight">{cabin.name}</h3>
                <div className="flex items-center space-x-8 text-[9px] md:text-[11px] tracking-[0.3em] uppercase opacity-70 font-bold">
                  <span className="flex items-center gap-3"><Users size={14} className="opacity-50"/> {cabin.capacity} {t.guests}</span>
                  <span className="flex items-center gap-3"><Maximize2 size={14} className="opacity-50"/> {idx === 0 ? '240m²' : '120m²'}</span>
                </div>
              </div>
            </div>
            <div className="mt-16 text-center max-w-2xl px-4">
              <p className="text-stone-500 font-light leading-relaxed text-base md:text-xl italic mb-10">
                "{cabin.description[lang]}"
              </p>
              <button className="inline-flex items-center space-x-5 text-stone-900 font-bold text-[10px] md:text-[12px] tracking-[0.4em] uppercase group-hover:translate-y-[-5px] transition-all border-b border-stone-200 pb-3 hover:border-stone-900">
                <span>{t.liveRefuge}</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CabinsSection;
