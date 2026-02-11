import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import mayoScissors from '../../assets/Images/mayoScissor.jpeg';
import operatingScissors from '../../assets/Images/operatingscissors.jpeg';
import forceps from '../../assets/Images/tissueforceps.jpeg';
import needleholders from '../../assets/Images/needleholders.jpeg';
import Babcock from '../../assets/Images/babcock.jpeg';
import backhaus from '../../assets/Images/backhaus.jpeg';
import allis from '../../assets/Images/allistissue.jpeg';
import artery from '../../assets/Images/artery.jpeg';
import metzenbaum from '../../assets/Images/metzenbaum.jpeg';
import surgicalknifes from '../../assets/Images/surgicalknifes.jpeg';



const Category1 = () => {
  const { productId } = useParams();

  // Helper to create URL slugs (Matches Navbar logic for scrolling)
  const createSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  // Effect to handle automatic scrolling based on URL parameter
  useEffect(() => {
    if (productId) {
      const element = document.getElementById(productId);
      if (element) {
        // Small timeout ensures the DOM is fully ready before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    } else {
      // Scroll to top if no specific product is requested
      window.scrollTo(0, 0);
    }
  }, [productId]);

  const categoryInfo = {
    title: "Surgical Instruments",
    description: "Surgical instruments are essential tools used by medical professionals to perform precise cutting, grasping, clamping, and suturing during surgical procedures. Manufactured from high-quality medical-grade stainless steel, these instruments are designed for durability, corrosion resistance, and reliable performance across general, minor, and specialized surgeries."
  };

  const products = [
    {
      name: "Mayo Scissors (Straight & Curved)",
      description: "Mayo scissors are heavy-duty surgical scissors used for cutting dense tissues such as muscle and fascia. Available in straight and curved variants, they provide excellent control, strength, and precision during surgical procedures.",
      image: mayoScissors
    },
    {
      name: "Metzenbaum Scissors",
      description: "Metzenbaum scissors are lightweight instruments designed for cutting delicate soft tissues. Their long handles and short blades allow precise dissection while minimizing tissue trauma.",
      image: metzenbaum
    },
    {
      name: "Operating Scissors (Sharp / Blunt)",
      description: "Operating scissors are versatile cutting instruments used for both sharp and blunt dissection. They are commonly used in general surgeries for cutting tissues, sutures, and dressings.",
      image: operatingScissors
    },
    {
      name: "Surgical Knife Handles (No. 3 & 4)",
      description: "Surgical knife handles are used to securely hold disposable scalpel blades during surgical incisions. Handle No. 3 and No. 4 are compatible with different blade sizes for precise cutting control.",
      image: surgicalknifes
    },
    {
      name: "Tissue Forceps (Toothed / Non-Toothed)",
      description: "Tissue forceps are used to grasp and hold tissues during surgical procedures. Toothed forceps provide a firm grip on tough tissues, while non-toothed forceps are suitable for delicate tissue handling.",
      image: forceps
    },
    {
      name: "Artery Forceps / Hemostats (Straight & Curved)",
      description: "Artery forceps are used to clamp blood vessels and control bleeding during surgery. Available in straight and curved designs, they ensure secure locking and effective hemostasis.",
      image: artery
    },
    {
      name: "Needle Holders (Mayo-Hegar / Olsen-Hegar)",
      description: "Needle holders are designed to securely hold suturing needles during wound closure. Mayo-Hegar and Olsen-Hegar types offer excellent grip, balance, and control for precise suturing.",
      image: needleholders
    },
    {
      name: "Allis Tissue Forceps",
      description: "Allis tissue forceps are used to grasp tough tissues during surgical procedures. Their multiple teeth provide a firm hold, making them suitable for holding fascia and connective tissue.",
      image: allis
    },
    {
      name: "Babcock Forceps",
      description: "Babcock forceps are atraumatic instruments designed to hold delicate tubular structures such as intestines and tissues without causing damage. They are commonly used in abdominal and general surgeries.",
      image: Babcock
    },
    {
      name: "Backhaus Towel Clamp",
      description: "Backhaus towel clamps are used to secure surgical drapes in place during procedures. Their sharp pointed tips ensure a firm grip on drapes without slipping.",
      image: backhaus
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      
      {/* --- Page Header --- */}
      <div className="bg-teal-900 py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{categoryInfo.title}</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-teal-50 leading-relaxed font-light">
            {categoryInfo.description}
          </p>
        </div>
      </div>

      {/* --- Products List --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-24">
        {products.map((item, index) => (
          <div 
            key={index} 
            id={createSlug(item.name)} 
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 scroll-mt-32 ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative group rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <div className="aspect-4/3 overflow-hidden">
                   {/* Placeholder Link for actual product image */}
                   <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                {/* Decorative Accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-0.5 w-12 bg-teal-500"></div>
                <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">
                  Instrument {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-teal-700 transition-colors">
                {item.name}
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8 text-justify">
                {item.description}
              </p>

              <button className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-800 transition-colors group/btn">
                Request Quote
                <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Category1;