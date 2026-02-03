
import React from 'react';
import { IMAGES, BUSINESS_INFO } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    "State-of-the-art diagnostic equipment",
    "Highly qualified medical personnel",
    "Clean, comfortable and safe environment",
    "Transparent and patient-focused billing",
    "Strategic location in the heart of Ikoyi",
    "Quick response emergency team"
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={IMAGES.reception}
                alt="Reception Area"
                className="w-full h-64 object-cover rounded-2xl shadow-lg mt-8"
              />
              <img
                src={IMAGES.equipment}
                alt="Medical Equipment"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img
                src={IMAGES.ward}
                alt="Patient Ward"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img
                src={IMAGES.signage}
                alt="Hospital Signage"
                className="w-full h-64 object-cover rounded-2xl shadow-lg -mt-8"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white p-8 rounded-full h-32 w-32 flex flex-col items-center justify-center text-center shadow-2xl border-4 border-white">
              <span className="text-2xl font-bold">24</span>
              <span className="text-xs font-medium uppercase leading-none">Hours</span>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Dedicated To Excellence</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-blue-950 leading-tight">
                Quality Healthcare You Can Trust.
              </h3>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Hanoba Medical Centre is a premier healthcare facility located in Ikoyi, Lagos. 
              We are committed to delivering exceptional patient care through our state-of-the-art infrastructure 
              and a dedicated team of medical professionals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6">
                <div className="bg-blue-100 p-4 rounded-xl text-blue-600 font-bold text-2xl">
                  10+
                </div>
                <div>
                  <h4 className="font-bold text-blue-900">Years of Experience</h4>
                  <p className="text-gray-500 text-sm">Delivering quality healthcare to the Lagos community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
