import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Category7 = () => {
  const { productId } = useParams();

  const createSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  useEffect(() => {
    if (productId) {
      const element = document.getElementById(productId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [productId]);

  const categoryInfo = {
    title: "Gloves",
    description: "Medical gloves are essential protective equipment used to maintain hygiene and prevent cross-contamination. They are designed to provide comfort, flexibility, and reliable barrier protection."
  };

  const products = [
    {
      name: "Latex Examination Gloves",
      description: "Latex examination gloves offer excellent elasticity, comfort, and tactile sensitivity. They are widely used in medical examinations and routine clinical procedures.",
      image: "https://placehold.co/600x400/e0f2f1/00897b?text=Latex+Gloves"
    },
    {
      name: "Nitrile Examination Gloves",
      description: "Nitrile examination gloves provide strong chemical resistance and are latex-free, making them suitable for users with latex allergies. They offer durability and reliable protection.",
      image: "https://placehold.co/600x400/e0f2f1/00897b?text=Nitrile+Gloves"
    },
    {
      name: "Surgical Gloves (Sterile)",
      description: "Sterile surgical gloves are used during surgical procedures to maintain a sterile environment. They provide a precise fit, high sensitivity, and maximum protection.",
      image: "https://placehold.co/600x400/e0f2f1/00897b?text=Surgical+Gloves"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="bg-teal-900 py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gray-900 bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{categoryInfo.title}</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-teal-50 leading-relaxed font-light">
            {categoryInfo.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-24">
        {products.map((item, index) => (
          <div 
            key={index} 
            id={createSlug(item.name)} 
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 scroll-mt-32 ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className="w-full lg:w-1/2">
              <div className="relative group rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                   <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-0.5 w-12 bg-teal-500"></div>
                <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">
                  Product {index + 1 < 10 ? `0${index + 1}` : index + 1}
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

export default Category7;