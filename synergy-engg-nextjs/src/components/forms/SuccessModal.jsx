'use client';

import React from 'react';

export default function SuccessModal({ isOpen, onClose, title, message, buttonText = 'AWESOME, THANKS!' }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl text-center max-w-lg mx-4 transform transition-all border-t-4 border-green-500 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
          <span 
            className="material-symbols-outlined text-5xl text-green-600" 
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
        </div>
        <h3 className="text-3xl font-black text-gray-900 mb-4 uppercase tracking-tight font-headline">
          {title}
        </h3>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed font-body">
          {message}
        </p>
        <button
          onClick={onClose}
          type="button"
          className="bg-secondary text-white px-8 py-4 rounded-md font-bold tracking-widest hover:brightness-110 active:scale-95 transition-all w-full shadow-lg font-headline uppercase"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
