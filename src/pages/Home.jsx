
import React, { useState } from 'react';
import { Menu, X, ArrowRight, Truck, Medal, FileCheck } from 'lucide-react';


const Home = () => {
  return (
    <div>
        {/* section 1 */}
        {/* Hero Section Inlined Here */}
      <div className="relative bg-gray-50 pb-20 lg:pb-28">
        {/* Background Banner Area */}
        <div 
          className="relative bg-teal-900 pt-32 pb-48 lg:pt-40 lg:pb-64 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        >
          {/* Overlays */}
          <div className="absolute inset-0 bg-teal-900/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-linear-to-t from-teal-900/90 via-teal-900/40 to-transparent" />

          {/* Banner Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                Trusted Pharmaceutical Distribution Across the U.S.
              </h1>
              <p className="text-lg md:text-xl text-teal-50 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Serving hospitals, long term care facilities, specialty pharmacies, chain pharmacies and other pharmaceutical institutions with compliant and high-quality healthcare products.
              </p>
              
              {/* Link with Arrow */}
              <div className="mb-10">
                <a href="#" className="inline-flex items-center text-teal-300 font-semibold hover:text-white transition-colors group">
                  Explore Human Health Solutions 
                  <span className="ml-2 bg-teal-700/50 p-1 rounded-full group-hover:bg-teal-600 transition-colors">
                    <ArrowRight size={16} />
                  </span>
                </a>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-3 rounded-md border-2 border-teal-100 text-teal-50 font-semibold hover:bg-white hover:text-teal-900 transition-colors">
                  New Customer Application
                </button>
                <button className="px-8 py-3 rounded-md bg-white text-teal-900 font-semibold hover:bg-teal-50 transition-colors shadow-lg">
                  Existing Customer Login
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Info Cards */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 lg:-mt-32 z-10">
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-cyan-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-cyan-100 text-center">
              <div className="flex justify-center mb-4">
                <Truck className="w-10 h-10 text-teal-700" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vast Inventory</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Equip your pharmacy with our wide-scale generic pharmaceutical SKUs, ensuring access to a comprehensive portfolio across key therapeutic and specialty categories.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-cyan-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-cyan-100 text-center">
              <div className="flex justify-center mb-4">
                <Medal className="w-10 h-10 text-teal-700" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Uncompromised Quality</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We ensure authenticity, safety, and traceability through verified sourcing from licensed manufacturers and authorized distributors, maintaining strict adherence to NABP and FDA standards.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-cyan-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-cyan-100 text-center">
              <div className="flex justify-center mb-4">
                <FileCheck className="w-10 h-10 text-teal-700" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Compliant</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                NABP-accredited, FDA-registered, and DSCSA 2025-compliant—Alira upholds the highest regulatory and quality benchmarks in pharmaceutical distribution nationwide.
              </p>
            </div>

          </div>
        </div>

        {/* --- About Section (New) --- */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left: Image Placeholder */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-4/3 group">
                <div className="absolute inset-0 bg-teal-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                {/* Warehouse Image Placeholder */}
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Pharmaceutical Warehouse" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              {/* Decorative Dot Grid (Optional visual flair) */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-teal-50 rounded-full -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-50 rounded-full -z-10 opacity-50"></div>
            </div>

            {/* Right: Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 border-l-4 border-teal-500 pl-4">
                  About Alira
                </h2>
                <p className="text-lg font-semibold text-gray-700 pl-5">
                  Your trusted partner in generic distribution across the U.S.
                </p>
              </div>
              
              <div className="text-gray-600 leading-relaxed space-y-4 text-justify pl-1">
                <p>
                  Alira Pharmaceutical Inc. is a nationally licensed, NABP-accredited generic pharmaceutical distributor authorized in all 50 states and headquartered in Nanuet, New York.
                </p>
                <p>
                  Founded by a team of licensed pharmacists, Alira combines clinical expertise with business strategy to ensure patient safety, authenticity, and ethical distribution across the healthcare system. Backed by more than 80 years of combined leadership experience in distribution, compliance, and healthcare, our leadership team drives integrity and operational excellence nationwide.
                </p>
              </div>

              <div className="pt-4 pl-1">
                <a href="#read-more" className="text-teal-600 font-bold hover:text-teal-700 inline-flex items-center border-b-2 border-teal-600 pb-1 hover:border-teal-700 transition-colors">
                  Read More
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home