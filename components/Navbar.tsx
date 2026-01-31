
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language } from '../types';

const Logo: React.FC<{ light?: boolean }> = ({ light }) => (
  <div className="flex items-center space-x-4 group cursor-pointer">
    <svg 
      viewBox="0 0 100 30" 
      className={`w-12 h-auto transition-all duration-500 ${light ? 'text-white' : 'text-stone-900'} group-hover:scale-110`}
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.2"
    >
      <path d="M5 25 L25 25 L40 10 L55 20 L75 5 L95 25" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 25 L35 18 L50 25" strokeOpacity="0.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <div className="flex flex-col">
      <span className={`text-lg font-bold tracking-[0.2em] serif transition-colors duration-500 ${light ? 'text-white' : 'text-stone-900'}`}>
        ALEHUE
      </span>
      <span className={`text-[6px] tracking-[0.4em] uppercase transition-opacity duration-500 ${light ? 'text-white/50' : 'text-stone-400'}`}>
        Patagonia
      </span>
    </div>
  </div>
);

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-1000 ${
      isScrolled ? 'bg-white/90 backdrop-blur-xl py-3 border-b border-stone-100 shadow-sm' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
        
        <Logo light={!isScrolled} />

        <div className="hidden lg:flex items-center space-x-12">
          {/* Nav Links */}
          <div className={`flex items-center space-x-10 text-[9px] font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${isScrolled ? 'text-stone-500' : 'text-white/60'}`}>
            <a href="#cabanas" className="hover:text-amber-600 transition-colors">{lang === 'pt' ? 'Refúgios' : 'Refugios'}</a>
            <a href="#experiencias" className="hover:text-amber-600 transition-colors">{lang === 'pt' ? 'Essência' : 'Esencia'}</a>
            <a href="#contato" className="hover:text-amber-600 transition-colors">{lang === 'pt' ? 'Local' : 'Local'}</a>
          </div>

          {/* Lang Toggle */}
          <div className="flex items-center bg-stone-900/5 rounded-full p-1 border border-stone-200/20">
            <button 
              onClick={() => setLang('pt')}
              className={`px-3 py-1.5 rounded-full text-[8px] font-black transition-all ${lang === 'pt' ? (isScrolled ? 'bg-stone-900 text-white' : 'bg-white text-stone-900') : 'text-stone-400 opacity-50'}`}
            >
              PT
            </button>
            <button 
              onClick={() => setLang('es')}
              className={`px-3 py-1.5 rounded-full text-[8px] font-black transition-all ${lang === 'es' ? (isScrolled ? 'bg-stone-900 text-white' : 'bg-white text-stone-900') : 'text-stone-400 opacity-50'}`}
            >
              ES
            </button>
          </div>

          <button className={`px-8 py-3 rounded-full text-[8px] font-bold tracking-[0.2em] transition-all duration-700 border ${
            isScrolled ? 'bg-stone-950 border-stone-950 text-white hover:bg-stone-800' : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
          }`}>
            {lang === 'pt' ? 'RESERVAR' : 'RESERVAR'}
          </button>
        </div>

        <button 
          className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-stone-900' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-stone-950 z-[110] flex flex-col items-center justify-center p-12 animate-in fade-in zoom-in-95 duration-700">
           <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"><X size={32}/></button>
           <Logo light />
           
           <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10 mt-12">
             <button onClick={() => setLang('pt')} className={`px-5 py-2 rounded-full text-[10px] font-bold transition-all ${lang === 'pt' ? 'bg-white text-stone-950' : 'text-white/40'}`}>PORTUGUÊS</button>
             <button onClick={() => setLang('es')} className={`px-5 py-2 rounded-full text-[10px] font-bold transition-all ${lang === 'es' ? 'bg-white text-stone-950' : 'text-white/40'}`}>ESPAÑOL</button>
           </div>

           <div className="flex flex-col items-center space-y-10 pt-16">
             <a href="#cabanas" className="text-2xl text-white font-light tracking-widest serif italic" onClick={() => setIsMenuOpen(false)}>{lang === 'pt' ? 'Refúgios' : 'Refugios'}</a>
             <a href="#experiencias" className="text-2xl text-white font-light tracking-widest serif italic" onClick={() => setIsMenuOpen(false)}>{lang === 'pt' ? 'Experiência' : 'Experiencia'}</a>
             <button className="mt-8 px-12 py-4 bg-white text-stone-950 rounded-full text-[10px] font-bold tracking-widest uppercase">RESERVAR</button>
           </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
