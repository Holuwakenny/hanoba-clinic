
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO, NAV_ITEMS } from '../constants.tsx';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-blue-900 text-white py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={14} /> {BUSINESS_INFO.phone}</span>
            <span className="flex items-center gap-2"><Clock size={14} /> {BUSINESS_INFO.hours}</span>
          </div>
          <span className="flex items-center gap-2"><MapPin size={14} /> {BUSINESS_INFO.address}</span>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a 
            href="#home" 
            onClick={(e) => handleNavLinkClick(e, '#home')}
            className="flex items-center gap-2"
          >
            <div className="bg-blue-600 p-2 rounded-lg">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-blue-900 text-lg leading-tight text-nowrap">Hanoba</span>
              <span className="text-blue-600 text-[10px] font-medium tracking-widest uppercase text-nowrap">Medical Centre</span>
            </div>
          </a>

          <nav className="hidden md:flex gap-8 items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavLinkClick(e, item.href)}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavLinkClick(e, '#contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
            >
              Book Appointment
            </a>
          </nav>

          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[60px] bg-white z-[100] py-6 px-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top duration-300">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 text-xl font-bold border-b border-gray-50 pb-2"
                onClick={(e) => handleNavLinkClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-4 rounded-xl font-bold text-center mt-4 shadow-lg"
              onClick={(e) => handleNavLinkClick(e, '#contact')}
            >
              Book Appointment
            </a>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="bg-blue-950 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-blue-900 pb-12 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-white p-1.5 rounded-md">
                <span className="text-blue-900 font-bold text-lg">H</span>
              </div>
              <span className="font-bold text-xl tracking-tight">Hanoba Medical</span>
            </div>
            <p className="text-blue-200 leading-relaxed text-sm">
              Providing world-class healthcare in the heart of Ikoyi. Our 24-hour facility ensures you and your family are always in safe hands.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    onClick={(e) => handleNavLinkClick(e, item.href)}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" onClick={(e) => handleNavLinkClick(e, '#services')} className="text-blue-200 hover:text-white transition-colors">General Practice</a></li>
              <li><a href="#services" onClick={(e) => handleNavLinkClick(e, '#services')} className="text-blue-200 hover:text-white transition-colors">Pediatrics</a></li>
              <li><a href="#services" onClick={(e) => handleNavLinkClick(e, '#services')} className="text-blue-200 hover:text-white transition-colors">Maternity Care</a></li>
              <li><a href="#services" onClick={(e) => handleNavLinkClick(e, '#services')} className="text-blue-200 hover:text-white transition-colors">Emergency Response</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-blue-200">
                <MapPin className="shrink-0 text-blue-400 mt-1" size={18} />
                <span className="text-sm">{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 text-blue-200">
                <Phone className="shrink-0 text-blue-400" size={18} />
                <span className="text-sm">{BUSINESS_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-blue-200">
                <Clock className="shrink-0 text-blue-400" size={18} />
                <span className="text-sm">{BUSINESS_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 text-center text-blue-300 text-xs">
          <p>© {new Date().getFullYear()} Hanoba Medical Centre. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
