import React, { useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from "react-router-dom";
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

// --- Data Structure for Products ---
const productCategories = [
  {
    id: 'surgical-instruments',
    category: "Surgical Instruments",
    products: [
      "Mayo Scissors (Straight & Curved)",
      "Metzenbaum Scissors",
      "Operating Scissors (Sharp / Blunt)",
      "Surgical Knife Handles (No. 3 & 4)",
      "Tissue Forceps (Toothed / Non-Toothed)",
      "Artery Forceps / Hemostats (Straight & Curved)",
      "Needle Holders (Mayo-Hegar / Olsen-Hegar)",
      "Allis Tissue Forceps",
      "Babcock Forceps",
      "Backhaus Towel Clamp"
    ]
  },
  {
    id: 'retractors-elevators',
    category: "Retractors & Elevators",
    products: [
      "Langenbeck Retractor",
      "Volkmann Retractor",
      "Skin Hook Retractor",
      "Self-Retaining Retractors (Weitlaner / Gelpi)",
      "Periosteal Elevator"
    ]
  },
  {
    id: 'bone-neuro',
    category: "Bone & Neuro Instruments",
    products: [
      "Bone Cutter / Rongeur",
      "Bone Nibbler",
      "Laminectomy Punch / Kerrison Rongeur"
    ]
  },
  {
    id: 'ent-oral',
    category: "ENT & Oral Instruments",
    products: [
      "Tongue Depressor",
      "Mouth Gag (Boyle Davis)"
    ]
  },
  {
    id: 'surgical-blades',
    category: "Surgical Blades & Accessories",
    products: [
      "Scalpel Blades (Disposable)"
    ]
  },
  {
    id: 'trays-utility',
    category: "Trays & Utility Items",
    products: [
      "Instrument Tray",
      "Kidney Tray",
      "Gallipot"
    ]
  },
  {
    id: 'gloves',
    category: "Gloves",
    products: [
      "Latex Examination Gloves",
      "Nitrile Examination Gloves",
      "Surgical Gloves (Sterile)"
    ]
  },
  {
    id: 'ppe',
    category: "Face Masks & PPE",
    products: [
      "3-Ply Disposable Face Masks",
      "N95 Face Masks",
      "Disposable Shoe Covers (Plastic & Non-Woven)",
      "Disposable Caps (Bouffant / Surgeon)",
      "Disposable Aprons",
      "Isolation Gowns"
    ]
  },
  {
    id: 'drapes-gowns',
    category: "Surgical Drapes & Gowns",
    products: [
      "Surgical Drapes (Sterile & Non-Sterile)",
      "Surgical Gowns (Sterile & Non-Sterile)"
    ]
  },
  {
    id: 'wound-care',
    category: "Wound Care & Dressings",
    products: [
      "Absorbent Gauze Rolls",
      "Gauze Swabs (Sterile & Non-Sterile)",
      "Crepe Bandages",
      "Adhesive Bandages (Plasters)",
      "Absorbent Cotton Rolls"
    ]
  },
  {
    id: 'disposables-iv',
    category: "Disposables & IV Products",
    products: [
      "Disposable Syringes with Needles",
      "IV Sets",
      "IV Cannula"
    ]
  }
];

// Helper to create URL slugs
const createSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // State for Desktop Mega Menu
  const [activeCategory, setActiveCategory] = useState(productCategories[0].id);
  const [isProductsHovered, setIsProductsHovered] = useState(false);

  // State for Mobile Menu Accordions
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState(null);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "#products", isDropdown: true }, // Marked as dropdown
    { name: "Careers", href: "#careers" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-100 font-sans">
      {/* Added 'relative' here to serve as the anchor for the absolute full-width dropdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Changed justify-between to justify-start and added gap-12 to shift links left */}
        <div className="flex justify-start items-center h-20 gap-12">
          
          {/* Logo Section */}
          <div className="shrink-0 cursor-pointer z-50">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-30 h-full">
            {links.map((link) => {
              if (link.isDropdown) {
                return (
                  <div 
                    key={link.name} 
                    // Removed 'relative' from here so the dropdown positions relative to the main container
                    className="h-full flex items-center group"
                    onMouseEnter={() => setIsProductsHovered(true)}
                    onMouseLeave={() => setIsProductsHovered(false)}
                  >
                    <button className="flex items-center gap-1 font-medium text-gray-600 hover:text-teal-600 text-sm lg:text-base transition-colors duration-200 cursor-pointer h-full border-b-2 border-transparent hover:border-teal-500">
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsHovered ? 'rotate-180' : ''}`} />
                    </button>

                    {/* MEGA MENU DROPDOWN */}
                    {/* Changed positioning to absolute w-full left-0 to span the container width */}
                    <div 
                      className={`absolute top-full left-0 w-full bg-white shadow-xl border-t border-teal-500 rounded-b-xl overflow-hidden transition-all duration-300 origin-top z-50 ${
                        isProductsHovered ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      <div className="flex h-[550px]"> {/* Increased height for "enlarged" look */}
                        
                        {/* LEFT SIDE: Categories */}
                        <div className="w-1/3 bg-gray-50 overflow-y-auto border-r border-gray-100 py-6">
                          {productCategories.map((cat) => (
                            <div 
                              key={cat.id}
                              onMouseEnter={() => setActiveCategory(cat.id)}
                              className={`px-8 py-3.5 cursor-pointer flex items-center justify-between text-base font-medium transition-colors duration-200 ${
                                activeCategory === cat.id 
                                  ? 'bg-white text-teal-600 border-l-4 border-teal-500 shadow-sm' 
                                  : 'text-gray-600 hover:bg-gray-100 hover:text-teal-600 border-l-4 border-transparent'
                              }`}
                            >
                              {cat.category}
                              {activeCategory === cat.id && <ChevronRight className="w-5 h-5" />}
                            </div>
                          ))}
                        </div>

                        {/* RIGHT SIDE: Products List */}
                        <div className="w-2/3 p-10 overflow-y-auto bg-white">
                          <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-100">
                            {productCategories.find(c => c.id === activeCategory)?.category}
                          </h3>
                          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                            {productCategories.find(c => c.id === activeCategory)?.products.map((product, idx) => (
                              <Link 
                                key={idx} 
                                to={`/products/${activeCategory}/${createSlug(product)}`}
                                className="text-base text-gray-600 hover:text-teal-600 hover:translate-x-1 transition-all duration-200 flex items-start gap-3 group/item"
                              >
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-200 shrink-0 group-hover/item:bg-teal-500 transition-colors"></span>
                                {product}
                              </Link>
                            ))}
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                );
              }
              
              return (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="font-medium text-gray-600 hover:text-teal-600 text-sm lg:text-base transition-colors duration-200 cursor-pointer h-full flex items-center border-b-2 border-transparent hover:border-teal-500"
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button - Pushed to right with ml-auto */}
          <div className="flex items-center md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-teal-600 hover:text-teal-700 hover:bg-teal-50 focus:outline-none transition-all"
            >
              {isOpen ? <X className="block h-7 w-7" /> : <Menu className="block h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden overflow-y-auto transition-all duration-300 ease-in-out bg-white border-t border-gray-100 ${
          isOpen ? "max-h-[85vh] opacity-100 shadow-lg" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {links.map((link) => {
            if (link.isDropdown) {
              return (
                <div key={link.name} className="border-b border-gray-50 last:border-0">
                  <button 
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    className="w-full flex items-center justify-between py-3 text-lg font-medium text-gray-700 hover:text-teal-600 px-4 rounded-lg"
                  >
                    {link.name}
                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Mobile Nested Menu */}
                  <div className={`overflow-hidden transition-all duration-300 ${mobileProductsOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
                    {productCategories.map((cat) => (
                      <div key={cat.id} className="bg-gray-50">
                        <button 
                          onClick={() => setMobileActiveCategory(mobileActiveCategory === cat.id ? null : cat.id)}
                          className="w-full flex items-center justify-between py-2 px-8 text-base font-medium text-gray-600 hover:text-teal-600 border-l-4 border-transparent hover:border-teal-500"
                        >
                          {cat.category}
                          <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveCategory === cat.id ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {/* Mobile Products List */}
                        <div className={`overflow-hidden transition-all duration-300 bg-white ${mobileActiveCategory === cat.id ? 'max-h-[500px]' : 'max-h-0'}`}>
                           {cat.products.map((product, idx) => (
                             <Link 
                               key={idx}
                               to={`/products/${cat.id}/${createSlug(product)}`}
                               className="block py-2 pl-12 pr-4 text-sm text-gray-500 hover:text-teal-600 hover:bg-teal-50"
                               onClick={() => setIsOpen(false)} // Close menu on click
                             >
                               • {product}
                             </Link>
                           ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            
            return (
              <a 
                key={link.name} 
                href={link.href} 
                className="block w-full py-3 text-lg font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 px-4 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;