
import React from 'react';
import { PARTNERS } from '../constants';

const Partners: React.FC = () => {
  return (
    <section id="about" className="bg-slate-50 py-12 border-b border-gray-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
          Partners Tecnológicos de Clase Mundial
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70">
          {PARTNERS.map((partner) => (
            <div key={partner.name} className="group grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
                {/* 
                  Using text as placeholder since logos can be flaky. 
                  In production, use <img> tags with the partner.url 
                */}
                <span className="text-2xl font-bold text-slate-400 group-hover:text-brand-dark transition-colors">
                  {partner.name}
                </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
