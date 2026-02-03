
import React from 'react';
import { IMAGES, BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center pt-10 pb-20">
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.entrance}
          alt="Hanoba Medical Centre Entrance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <div className="inline-block bg-blue-600/30 backdrop-blur-sm px-4 py-1.5 rounded-full border border-blue-400/30 mb-6 animate-pulse">
            <span className="text-sm font-semibold tracking-wider uppercase">Open 24 Hours • Ikoyi, Lagos</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Your Health Is Our <span className="text-blue-400">Mission</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-50 mb-10 leading-relaxed font-light">
            Welcome to Hanoba Medical Centre, where expert clinical care meets compassion. 
            Providing comprehensive medical services in Lagos with a commitment to patient-centered excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all text-center shadow-xl shadow-blue-900/20"
            >
              Book an Appointment
            </a>
            <a
              href="#services"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all text-center"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-blue-300 text-sm">Emergency Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold">10+</div>
              <div className="text-blue-300 text-sm">Medical Experts</div>
            </div>
            <div>
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-blue-300 text-sm">Happy Patients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
