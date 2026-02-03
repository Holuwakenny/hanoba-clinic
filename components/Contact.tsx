
import React from 'react';
import { Phone, MapPin, Mail, Clock, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting Hanoba Medical Centre. We will get back to you shortly.');
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-5/12 space-y-12">
            <div className="space-y-4">
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Get In Touch</h2>
              <h3 className="text-4xl font-extrabold text-blue-950">Reach Out To Us</h3>
              <p className="text-gray-600 text-lg">
                Have questions or need an appointment? Our team is available 24/7 to assist you with your healthcare needs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-5 group">
                <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 text-lg">Phone Number</h4>
                  <p className="text-gray-600 font-medium">{BUSINESS_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 text-lg">Email Address</h4>
                  <p className="text-gray-600 font-medium">{BUSINESS_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 text-lg">Our Location</h4>
                  <p className="text-gray-600 font-medium">{BUSINESS_INFO.address}</p>
                  <p className="text-blue-600 text-sm font-semibold mt-1">Plus Code: {BUSINESS_INFO.plusCode}</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 text-lg">Visiting Hours</h4>
                  <p className="text-gray-600 font-medium">Open 24 Hours, Monday - Sunday</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12">
            <div className="bg-gray-50 p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-sm relative">
               <h4 className="text-2xl font-bold text-blue-950 mb-8">Send Us A Message</h4>
               <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-blue-900 uppercase">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="e.g. John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-blue-900 uppercase">Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="+234..."
                      />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-blue-900 uppercase">Service Interested In</label>
                    <select className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                      <option>General Consultation</option>
                      <option>Pediatric Care</option>
                      <option>Emergency Services</option>
                      <option>Lab Diagnostics</option>
                      <option>Maternity Care</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-blue-900 uppercase">Message</label>
                    <textarea 
                      rows={4} 
                      className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="How can we help you?"
                    ></textarea>
                 </div>
                 <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                 >
                   Send Message <Send size={18} />
                 </button>
               </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
