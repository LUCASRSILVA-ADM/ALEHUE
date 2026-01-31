
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CabinsSection from './components/CabinsSection';
import ExperienceSection from './components/ExperienceSection';
import BookingBar from './components/BookingBar';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import { AMENITIES, REVIEWS, ICON_MAP, UI_STRINGS } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [lang, setLang] = useState<Language>('pt');

  const t = UI_STRINGS[lang];

  return (
    <div className="min-h-screen bg-stone-950">
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      
      <div className={`transition-all duration-[1500ms] ease-out ${showSplash ? 'opacity-0 scale-[1.05] blur-2xl pointer-events-none' : 'opacity-100 scale-100 blur-0'}`}>
        <Navbar lang={lang} setLang={setLang} />
        
        <main className="bg-stone-50 text-stone-900">
          <Hero lang={lang} />
          
          {/* Amenities Grid */}
          <div className="bg-white py-12 md:py-16 border-b border-stone-100 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-3 md:flex md:justify-between items-start gap-y-10 gap-x-6 md:gap-12">
                {AMENITIES.map((item) => {
                  const IconComp = ICON_MAP[item.icon];
                  return (
                    <div key={item.id} className="flex flex-col items-center text-center space-y-2 md:space-y-4">
                      <div className="p-3 md:p-4 bg-stone-50 rounded-xl md:rounded-2xl transition-colors hover:bg-stone-100 group">
                        {IconComp && <IconComp size={16} className="text-stone-400 group-hover:text-stone-900 transition-colors" />}
                      </div>
                      <span className="text-[7px] md:text-[9px] font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase text-stone-400 leading-tight max-w-[70px] md:max-w-[100px]">
                        {item.label[lang]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <CabinsSection lang={lang} />
          
          <ExperienceSection lang={lang} />

          {/* Testimonials */}
          <section className="py-24 px-6 bg-stone-50">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-stone-400 mb-4 font-bold">{t.testimonials}</h4>
                <h2 className="text-3xl md:text-5xl font-light serif italic">{t.voices}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {REVIEWS.map((review, i) => (
                  <div key={i} className="bg-white p-8 md:p-12 rounded-[30px] shadow-sm border border-stone-100 relative group">
                    <p className="text-stone-500 font-light italic leading-relaxed text-sm md:text-base mb-8">
                      "{review.text[lang]}"
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-stone-100 rounded-full flex items-center justify-center text-[10px] font-bold text-stone-400">
                        {review.author[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-[11px] uppercase tracking-wider">{review.author}</h4>
                        <p className="text-[8px] text-stone-400 uppercase tracking-widest">{review.date[lang]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Location Section */}
          <section className="h-[400px] md:h-[600px] w-full relative">
            <div className="absolute inset-0 bg-stone-200 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2000&auto=format&fit=crop" 
                alt="Map View Placeholder" 
                className="w-full h-full object-cover grayscale opacity-40 scale-110"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="bg-white/90 backdrop-blur-md p-8 md:p-16 rounded-[30px] md:rounded-[60px] shadow-2xl text-center max-w-lg">
                <ICON_MAP.MapPin size={32} className="text-stone-900 mx-auto mb-6 opacity-20" />
                <h3 className="text-xl md:text-3xl font-bold mb-4 serif italic">{t.locationTitle}</h3>
                <p className="text-stone-500 font-light text-xs md:text-sm mb-8 leading-relaxed">{t.locationDesc}</p>
                <button className="text-[9px] md:text-[11px] tracking-[0.3em] font-bold uppercase underline underline-offset-8 decoration-stone-200 hover:decoration-stone-900 transition-all">
                  {t.howToGet}
                </button>
              </div>
            </div>
          </section>

          <Footer lang={lang} />
        </main>

        <BookingBar lang={lang} />
      </div>
    </div>
  );
};

export default App;
