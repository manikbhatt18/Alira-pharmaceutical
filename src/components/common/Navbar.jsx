import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import LogoImg from '../../assets/Images/Logo.png';

// Custom Logo Component - Redesigned to be distinct ("Bio-Hexagon" theme)
const Logo = () => (
  <div className="flex items-center">
    {/* Placeholder for Logo Image - Replace 'logo.png' with your actual file path */}
    <img 
      src={LogoImg} 
      alt="Alira Pharmaceutical" 
      className="h-20 w-auto object-contain" 
    />
  </div>
);

const NavLink = ({ href, children, mobile = false }) => {
  const baseClasses = "font-medium transition-colors duration-200 cursor-pointer";
  const desktopClasses = "text-gray-600 hover:text-teal-600 text-sm lg:text-base";
  const mobileClasses = "block w-full py-3 text-lg text-gray-700 hover:text-teal-600 hover:bg-teal-50 px-4 rounded-lg";

  return (
    <a href={href} className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}>
      {children}
    </a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Human Health", href: "#human-health" },
    { name: "Animal Health", href: "#animal-health" },
    { name: "Careers", href: "#careers" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="shrink-0 cursor-pointer">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {links.map((link) => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-teal-600 hover:text-teal-700 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 transition-all"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-7 w-7" aria-hidden="true" />
              ) : (
                <Menu className="block h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 shadow-lg" : "max-h-0 opacity-0"
        } bg-white border-t border-gray-100`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {links.map((link) => (
            <NavLink key={link.name} href={link.href} mobile>
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};


export default Navbar;