
import React, { useEffect, useState } from 'react';

const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1200);
    }, 3800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-stone-950 flex items-center justify-center overflow-hidden transition-opacity duration-1000">
      <div className="relative flex flex-col items-center px-4 w-full">
        {/* Mountain Logo - Properly sized for Mobile */}
        <div className="relative w-40 md:w-72 h-28 md:h-40 mb-10 md:mb-14 flex items-center justify-center">
          <svg 
            viewBox="0 0 120 40" 
            className="w-full h-full overflow-visible"
            fill="none" 
            stroke="white" 
            strokeWidth="0.8"
            strokeLinecap="round"
          >
            <defs>
              <linearGradient id="soproGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="25%" stopColor="white" stopOpacity="1" />
                <stop offset="75%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path 
              className="mountain-line-main"
              d="M10 35 L30 35 L50 15 L70 25 L95 5 L110 35" 
              stroke="url(#soproGradient)"
              strokeDasharray="450"
              strokeDashoffset="450"
            />
            <path 
              className="mountain-line-sub"
              d="M25 35 L45 22 L65 35" 
              stroke="url(#soproGradient)"
              strokeOpacity="0.4"
              strokeDasharray="180"
              strokeDashoffset="180"
            />
          </svg>
        </div>

        <div className="flex flex-col items-center text-center">
          <h2 className="text-white text-4xl md:text-7xl font-light tracking-[0.4em] md:tracking-[0.7em] serif opacity-0 animate-[logoBreath_3.5s_ease-out_0.5s_forwards]">
            ALEHUE
          </h2>
          <div className="h-[1px] w-0 bg-gradient-to-r from-transparent via-white/30 to-transparent mt-6 md:mt-8 animate-[lineExpand_2.5s_ease-out_1.2s_forwards] mx-auto"></div>
          <span className="text-white/40 text-[7px] md:text-[8px] tracking-[0.6em] md:tracking-[1em] mt-6 md:mt-8 uppercase opacity-0 animate-[fadeUp_2s_ease-out_2s_forwards]">
            Patagonia Soul Lodge
          </span>
        </div>
      </div>

      <style>{`
        .mountain-line-main {
          animation: drawMountain 3.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .mountain-line-sub {
          animation: drawMountain 2.5s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards;
        }
        @keyframes drawMountain {
          to { stroke-dashoffset: 0; }
        }
        @keyframes logoBreath {
          0% { opacity: 0; filter: blur(20px); letter-spacing: 1em; transform: scale(1.05); }
          100% { opacity: 1; filter: blur(0); letter-spacing: 0.4em; transform: scale(1); }
        }
        @keyframes lineExpand {
          to { width: 140px; }
        }
        @media (min-width: 768px) {
          @keyframes lineExpand { to { width: 220px; } }
          @keyframes logoBreath {
            0% { opacity: 0; filter: blur(25px); letter-spacing: 1.5em; transform: scale(1.1); }
            100% { opacity: 1; filter: blur(0); letter-spacing: 0.7em; transform: scale(1); }
          }
        }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
