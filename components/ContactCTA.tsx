
import React, { useState } from 'react';

const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-primary relative overflow-hidden scroll-mt-24">
      {/* Abstract patterns */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-dark/10 blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          ¿Listo para modernizar tu espacio?
        </h2>
        <p className="text-xl text-white/90 mb-10 leading-relaxed">
          Agenda una demostración técnica o solicita una auditoría gratuita de tus instalaciones actuales. Nuestro equipo de ingenieros está listo para ayudarte.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
             href="mailto:ventasse@wetechar.com"
             className="px-8 py-4 bg-white text-brand-primary font-bold rounded-lg shadow-xl hover:bg-gray-50 transition-colors transform hover:-translate-y-1"
          >
            Contactar Especialista
          </a>
          <button className="px-8 py-4 bg-brand-dark/20 text-white border border-white/30 font-semibold rounded-lg hover:bg-brand-dark/30 transition-colors">
            Descargar Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
