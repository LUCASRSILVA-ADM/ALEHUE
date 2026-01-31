
import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Sparkles, Wind, Image as ImageIcon, MessageCircle, RefreshCw, Link as LinkIcon } from 'lucide-react';
import { concierge } from '../services/geminiService';
import { CABINS } from '../constants';

type Mode = 'chat' | 'vision' | 'sync';

const Concierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<Mode>('chat');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string, image?: string }[]>([
    { role: 'bot', text: 'A paz do Nahuel Huapi esteja com você. Sou a Alma da Alehue. Como posso iluminar sua jornada?' }
  ]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [syncUrls, setSyncUrls] = useState<Record<string, string>>({});
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Carregar imagens customizadas do localStorage
    const saved = localStorage.getItem('alehue_custom_images');
    if (saved) {
      setSyncUrls(JSON.parse(saved));
      window.dispatchEvent(new CustomEvent('alehue_images_updated'));
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isProcessing]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsProcessing(true);

    if (mode === 'chat') {
      const response = await concierge.getChatResponse(userMsg);
      setMessages(prev => [...prev, { role: 'bot', text: response || '...' }]);
    } else if (mode === 'vision') {
      try {
        const imageUrl = await concierge.generateMarketingImage(userMsg);
        if (imageUrl) {
          setMessages(prev => [...prev, { 
            role: 'bot', 
            text: 'Visualize o seu futuro em Alehue...', 
            image: imageUrl 
          }]);
        }
      } catch (e) {
        setMessages(prev => [...prev, { role: 'bot', text: 'As nuvens cobriram os picos...' }]);
      }
    }
    setIsProcessing(false);
  };

  const updateCabinImage = (id: string, url: string) => {
    const newSync = { ...syncUrls, [id]: url };
    setSyncUrls(newSync);
    localStorage.setItem('alehue_custom_images', JSON.stringify(newSync));
    // Notificar outros componentes da mudança
    window.dispatchEvent(new CustomEvent('alehue_images_updated'));
  };

  const resetImages = () => {
    localStorage.removeItem('alehue_custom_images');
    setSyncUrls({});
    window.dispatchEvent(new CustomEvent('alehue_images_updated'));
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-10 right-10 z-[150] bg-stone-950 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center group hover:bg-amber-500 transition-all active:scale-90"
      >
        {isOpen ? <X /> : <Wind className="group-hover:animate-pulse" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-32 right-10 z-[150] w-[95vw] md:w-[450px] h-[700px] glass-dark rounded-[40px] flex flex-col overflow-hidden animate-in zoom-in-95 duration-500 border border-white/10 shadow-3xl">
          <div className="p-8 border-b border-white/10">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-amber-400/20 rounded-xl flex items-center justify-center">
                  <Sparkles className="text-amber-400 w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold tracking-widest text-xs uppercase">Alehue Studio</h3>
                  <p className="text-[9px] text-stone-500 uppercase tracking-widest">IA Consciência & Visão</p>
                </div>
              </div>
            </div>

            <div className="flex bg-white/5 p-1 rounded-2xl">
              <button onClick={() => setMode('chat')} className={`flex-1 py-3 rounded-xl text-[9px] font-bold tracking-widest uppercase transition-all ${mode === 'chat' ? 'bg-amber-400 text-stone-900' : 'text-stone-400 hover:text-white'}`}>
                Conversa
              </button>
              <button onClick={() => setMode('vision')} className={`flex-1 py-3 rounded-xl text-[9px] font-bold tracking-widest uppercase transition-all ${mode === 'vision' ? 'bg-amber-400 text-stone-900' : 'text-stone-400 hover:text-white'}`}>
                Vision Lab
              </button>
              <button onClick={() => setMode('sync')} className={`flex-1 py-3 rounded-xl text-[9px] font-bold tracking-widest uppercase transition-all ${mode === 'sync' ? 'bg-amber-400 text-stone-900' : 'text-stone-400 hover:text-white'}`}>
                Sincronizar
              </button>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide">
            {mode === 'sync' ? (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="text-center">
                  <h4 className="text-white font-bold text-sm mb-2">Ponte de Realidade</h4>
                  <p className="text-stone-500 text-[10px] uppercase tracking-widest leading-relaxed">
                    Cole os links das fotos do site atual para apresentar ao dono.
                  </p>
                </div>
                
                {CABINS.map(cabin => (
                  <div key={cabin.id} className="space-y-3 p-4 bg-white/5 rounded-3xl border border-white/5">
                    <label className="text-amber-400 text-[9px] font-bold uppercase tracking-widest">{cabin.name}</label>
                    <div className="relative">
                      <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 text-stone-600" />
                      <input 
                        type="text" 
                        placeholder="Link da imagem atual..."
                        className="w-full bg-stone-950 text-white text-[10px] pl-10 pr-4 py-3 rounded-xl focus:outline-none border border-white/5"
                        value={syncUrls[cabin.id] || ''}
                        onChange={(e) => updateCabinImage(cabin.id, e.target.value)}
                      />
                    </div>
                  </div>
                ))}

                <button 
                  onClick={resetImages}
                  className="w-full py-4 border border-white/10 rounded-2xl text-[9px] font-bold text-stone-500 hover:text-white transition-colors"
                >
                  Resetar para Estilo Rebranding
                </button>
              </div>
            ) : (
              <>
                {messages.map((m, i) => (
                  <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className={`max-w-[85%] p-5 rounded-[24px] text-sm leading-relaxed mb-2 ${
                      m.role === 'user' 
                      ? 'bg-amber-400 text-stone-900 font-bold rounded-tr-none' 
                      : 'bg-white/5 text-stone-200 border border-white/5 rounded-tl-none'
                    }`}>
                      {m.text}
                    </div>
                    {m.image && (
                      <div className="w-full mt-2 rounded-[30px] overflow-hidden border border-white/10 shadow-2xl animate-in fade-in zoom-in-95 duration-700">
                        <img src={m.image} alt="Generated" className="w-full h-auto" />
                      </div>
                    )}
                  </div>
                ))}
                {isProcessing && <div className="text-stone-500 text-[9px] uppercase tracking-[0.4em] animate-pulse">Processando...</div>}
              </>
            )}
          </div>

          {mode !== 'sync' && (
            <div className="p-6 bg-stone-950 border-t border-white/10">
              <div className="relative flex items-center">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Sua alma deseja algo?"
                  className="w-full bg-white/5 text-white text-xs px-6 py-5 rounded-3xl focus:outline-none placeholder:text-stone-700 pr-16"
                />
                <button onClick={handleSend} className="absolute right-3 bg-amber-400 text-stone-950 p-3 rounded-2xl hover:bg-amber-300">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Concierge;
