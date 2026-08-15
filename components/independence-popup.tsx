'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function IndependencePopup() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs animate-in fade-in duration-300">
      {/* Overlay Backdrop - Click to Close */}
      <div 
        className="absolute inset-0"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Modal Popup Container */}
      <div className="relative z-10 flex max-h-[90vh] max-w-xl flex-col items-center overflow-hidden rounded-2xl bg-transparent shadow-2xl">
        {/* Cross / Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white shadow-lg transition-transform hover:scale-110 hover:bg-black focus:outline-none"
          aria-label="Close Pop-up"
        >
          <svg 
            aria-hidden="true" 
            viewBox="0 0 24 24" 
            className="h-5 w-5 stroke-current stroke-[2.5]"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Pure Image Content */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src="/80thindependence day.webp"
            alt="80th Independence Day Celebration"
            width={600}
            height={600}
            className="max-h-[80vh] w-auto max-w-full object-contain rounded-2xl"
            priority
          />
        </div>
      </div>
    </div>
  );
}
