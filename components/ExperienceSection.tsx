
import React from 'react';
import { Language } from '../types';
import { EXPERIENCE_FEATURES, UI_STRINGS } from '../constants';

interface ExperienceSectionProps {
  lang: Language;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ lang }) => {
  const t = UI_STRINGS[lang];
  const features = EXPERIENCE_FEATURES[lang];

  return (
    <section id="experiencias" className="py-24 px-6 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h4 className="text-amber-400 font-bold tracking-[0.3em] uppercase text-xs mb-4">{t.discover}</h4>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            {t.memoryTitle.split(",").map((p,i) => i === 0 ? <React.Fragment key={i}>{p}, <br /></React.Fragment> : <span key={i} className="italic font-normal serif">{p}</span>)}
          </h2>
          <p className="text-stone-400 font-light text-lg mb-12 leading-relaxed">
            {t.experienceDesc}
          </p>

          <div className="grid grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div key={i} className="space-y-3">
                <f.icon className="w-8 h-8 text-amber-400" />
                <h3 className="font-bold text-lg">{f.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://alehue.com.ar/wp-content/uploads/2018/12/DSC_5917-1.jpg" className="rounded-3xl w-full aspect-[3/4] object-cover" alt="1" />
              <img src="https://alehue.com.ar/wp-content/uploads/2018/12/toallas.jpg" className="rounded-3xl w-full aspect-square object-cover" alt="2" />
            </div>
            <div className="space-y-4 pt-12">
              <img src="https://alehue.com.ar/wp-content/uploads/2018/12/DSC4967-3.jpg" className="rounded-3xl w-full aspect-square object-cover" alt="3" />
              <img src="https://alehue.com.ar/wp-content/uploads/2018/12/ALEHUE019.jpg" className="rounded-3xl w-full aspect-[3/4] object-cover" alt="4" />
            </div>
          </div>
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400/10 rounded-full blur-[100px]" />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
