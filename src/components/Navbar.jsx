import React from 'react';

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 text-white p-2.5 rounded-xl shadow-md shadow-indigo-200 font-bold text-xl tracking-wider">
            PG
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">Photo Gallery</h1>
            <p className="text-xs text-slate-500 font-medium">Picsum Explorer </p>
          </div>
        </div>
      </div>
    </header>
  );
};