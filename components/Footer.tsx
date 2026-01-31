
import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = UI_STRINGS[lang];
  return (
    <footer id="contato" className="bg-stone-50 pt-24 pb-48 px-6 border-t border-stone-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex flex-col">
            <span className="text-3xl font-bold tracking-widest serif uppercase">Alehue</span>
            <span className="text-xs tracking-[0.3em] uppercase opacity-60">Bariloche Experience</span>
          </div>
          <p className="text-stone-500 font-light max-w-sm leading-relaxed">
            {lang === 'pt' 
              ? 'Transformando estadias em experiências sensoriais desde a fundação. Onde a tradição encontra o luxo da simplicidade.' 
              : 'Transformando estadías en experiencias sensoriales desde nuestra fundación. Donde la tradición encuentra el lujo de la simplicidad.'}
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-3 bg-white rounded-full shadow-sm hover:scale-110 transition-transform"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="p-3 bg-white rounded-full shadow-sm hover:scale-110 transition-transform"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold uppercase tracking-widest text-xs">Menu</h4>
          <ul className="space-y-3 text-stone-500 text-sm font-light">
            <li><a href="#" className="hover:text-stone-900">{lang === 'pt' ? 'Sobre nós' : 'Sobre nosotros'}</a></li>
            <li><a href="#" className="hover:text-stone-900">{lang === 'pt' ? 'Nossas Cabañas' : 'Nuestras Cabañas'}</a></li>
            <li><a href="#" className="hover:text-stone-900">{lang === 'pt' ? 'Guia Bariloche' : 'Guía Bariloche'}</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold uppercase tracking-widest text-xs">{lang === 'pt' ? 'Contato' : 'Contacto'}</h4>
          <ul className="space-y-4 text-stone-500 text-sm font-light">
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-stone-300 shrink-0" />
              <span>Av. Bustillo Km 11.5, San Carlos de Bariloche, RN, Argentina</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-stone-300 shrink-0" />
              <span>info@alehue.com.ar</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center text-[10px] text-stone-400 font-bold uppercase tracking-widest">
        <span>{t.copyright}</span>
        <span className="mt-4 md:mt-0 italic">{t.slogan}</span>
      </div>
    </footer>
  );
};

export default Footer;
