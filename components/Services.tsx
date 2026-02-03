
import React from 'react';
import { SERVICES } from '../constants.tsx';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">What We Offer</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-blue-950">Comprehensive Medical Solutions</h3>
          <p className="text-gray-600 text-lg">
            We provide a wide range of specialized healthcare services designed to meet the unique needs of our patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 opacity-50"></div>
              
              <div className="mb-6 bg-gray-50 p-4 rounded-2xl inline-block group-hover:bg-blue-600 transition-colors duration-300">
                <div className="group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>

              <h4 className="text-2xl font-bold text-blue-950 mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-8">
                {service.description}
              </p>

              <button className="flex items-center gap-2 text-blue-600 font-bold group-hover:gap-4 transition-all">
                Learn More <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
