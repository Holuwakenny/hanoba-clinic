
import React from 'react';
import Layout from './components/Layout.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Experience World-Class Medical Care</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our medical experts are standing by 24/7 to provide the care you need. 
            Don't wait, visit us or book an appointment today.
          </p>
          <a 
            href="tel:08087586598" 
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-xl hover:bg-blue-50 transition-colors shadow-xl"
          >
            Call 0808 758 6598
          </a>
        </div>
      </div>
      <Contact />
      <section className="h-[450px] w-full bg-gray-100 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6738520295147!2d3.4233553!3d6.4638489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b238ae611a3%3A0x1a450f5e10941415!2sHanoba%20Medical%20Centre!5e0!3m2!1sen!2sng!4v1714800000000!5m2!1sen!2sng" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Hanoba Medical Centre Location"
        ></iframe>
        <div className="absolute top-8 left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block border border-gray-100">
           <h4 className="font-bold text-blue-900 mb-2">Hanoba Medical Centre</h4>
           <p className="text-gray-500 text-sm leading-snug">
             Phase 1, 10 Udi St, Ikoyi, Lagos 106104, Lagos
           </p>
           <a 
            href="https://www.google.com/maps/dir//Hanoba+Medical+Centre/@6.4638489,3.425544,17z" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 text-sm font-bold mt-4 block hover:underline"
           >
             Get Directions →
           </a>
        </div>
      </section>
    </Layout>
  );
};

export default App;
