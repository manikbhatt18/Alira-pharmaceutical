import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Category5 = () => {
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
    title: "Surgical Blades & Accessories",
    description: "Surgical blades and accessories are essential cutting tools used for making precise incisions during surgical procedures. They are manufactured to ensure sharpness, consistency, and safe handling."
  };

  const products = [
    {
      name: "Scalpel Blades (Disposable)",
      description: "Disposable scalpel blades are designed for single-use surgical applications, ensuring sharp, clean incisions while maintaining high standards of hygiene and infection control.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      
      {/* --- Page Header --- */}
      <div className="bg-teal-900 py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
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
                <div className="aspect-[4/3] overflow-hidden">
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

export default Category5;