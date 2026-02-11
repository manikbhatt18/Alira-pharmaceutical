import React from 'react';
import { MapPin, Mail, Phone, Printer, Linkedin, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#E0F7FA] text-gray-800 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Contact Information */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide mb-6 text-gray-900">
              Contact Information
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-700 mt-1 shrink-0" />
                <span className="text-sm leading-relaxed">
                  A-116, URBTECH TRADE, CENTRE SECTOR-132, Baraula, Dadri,<br />
                    Gautam Buddha Nagar, Uttar Pradesh, GAUTAM BUDDHA NAGAR,
                    UTTAR PRADESH, 201304
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-700 shrink-0" />
                <a href="mailto:anmolchauhan@alirapharmaceuticals.com" className="text-sm hover:text-teal-700 transition-colors">
                  Email: anmolchauhan@alirapharmaceuticals.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-700 shrink-0" />
                <a href="tel:+91-7895850793" className="text-sm hover:text-teal-700 transition-colors">
                  Phone: +91 7895850793
                </a>
              </li>
              
            </ul>
          </div>

          {/* Column 2: My Account */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide mb-6 text-gray-900">
              My Account
            </h3>
            <ul className="space-y-3">
              {['Shop', 'Promotions', 'Become a Customer'].map((item) => (
                <li key={item}>
                  <a href="#" className="group flex items-center text-sm hover:text-teal-700 transition-colors">
                    <span className="mr-2 text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">»</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide mb-6 text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                'Pharmaceutical Distribution', 
                'Pharmacy Wholesale Suppliers', 
                'Wholesale & Speciality Distribution', 
                'Login', 
                'Privacy Policy', 
                'Customer Service',
                'FAQ'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="group flex items-center text-sm hover:text-teal-700 transition-colors">
                    <span className="mr-2 text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">»</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide mb-6 text-gray-900">
              Follow Us
            </h3>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-700 text-white hover:bg-teal-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-teal-200/50">
          <p className="text-sm text-gray-600">
            @ All rights reserved 2025
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;