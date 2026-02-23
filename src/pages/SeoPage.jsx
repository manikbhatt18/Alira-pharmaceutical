import { ArrowRight, Factory, FileCheck, Globe, Medal, ShieldCheck, Truck } from 'lucide-react'
import React from 'react'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useQuotePopup } from '../components/context/QuotePopupContext'

// --- Category Data for Slider ---
const categoriesData = [
  {
    id: 'surgical-instruments',
    title: "Surgical Instruments",
    desc: "Surgical instruments are essential tools used by medical professionals to perform precise cutting, grasping, clamping, and suturing during surgical procedures. Manufactured from high-quality medical-grade stainless steel, these instruments are designed for durability, corrosion resistance, and reliable performance across general, minor, and specialized surgeries.",
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 'retractors-elevators',
    title: "Retractors & Elevators",
    desc: "Retractors and elevators are surgical instruments used to hold back tissues, muscles, or organs, providing better visibility and access to the surgical site. These instruments are ergonomically designed to ensure effective retraction with minimal tissue trauma.",
    image: "https://images.unsplash.com/photo-1618932260643-2e5e8e74567e?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 'bone-neuro',
    title: "Bone & Neuro Instruments",
    desc: "Bone and neuro instruments are specialized tools designed for cutting, shaping, and removing bone during orthopedic and neurosurgical procedures. These instruments ensure precision, strength, and safety when working with hard tissues.",
    image: "https://images.unsplash.com/photo-1583912267550-d41783d28666?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 'ent-oral',
    title: "ENT & Oral Instruments",
    desc: "ENT and oral instruments are used for examination, access, and support during ear, nose, throat, and oral procedures. These instruments are designed for ease of use, patient safety, and clear visibility during diagnostic and surgical applications.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 'surgical-blades',
    title: "Surgical Blades & Accessories",
    desc: "Surgical blades and accessories are essential cutting tools used for making precise incisions during surgical procedures. They are manufactured to ensure sharpness, consistency, and safe handling.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 'trays-utility',
    title: "Trays & Utility Items",
    desc: "Trays and utility items are used for holding, organizing, and transporting surgical instruments and medical supplies. They are designed for durability, easy cleaning, and efficient workflow in clinical environments.",
    image: "https://placehold.co/400x300/e0f2f1/00897b?text=Trays+%26+Utility"
  },
  {
    id: 'gloves',
    title: "Gloves",
    desc: "Medical gloves are essential protective equipment used to maintain hygiene and prevent cross-contamination. They are designed to provide comfort, flexibility, and reliable barrier protection.",
    image: "https://placehold.co/400x300/e0f2f1/00897b?text=Medical+Gloves"
  },
  {
    id: 'ppe',
    title: "Face Masks & PPE",
    desc: "Face masks and personal protective equipment (PPE) are designed to protect healthcare professionals and patients from airborne particles and contamination. These products support infection control and workplace safety.",
    image: "https://placehold.co/400x300/e0f2f1/00897b?text=Face+Masks+%26+PPE"
  },
  {
    id: 'drapes-gowns',
    title: "Surgical Drapes & Gowns",
    desc: "Surgical drapes and gowns are used to create and maintain a sterile field during medical procedures. They help prevent infection and ensure patient and staff safety.",
    image: "https://placehold.co/400x300/e0f2f1/00897b?text=Drapes+%26+Gowns"
  },
  {
    id: 'wound-care',
    title: "Wound Care & Dressings",
    desc: "Wound care and dressing products are used to protect wounds, absorb exudate, and support healing. These products are essential in surgical, clinical, and first-aid applications.",
    image: "https://placehold.co/400x300/e0f2f1/00897b?text=Wound+Care"
  },
  {
    id: 'disposables-iv',
    title: "Disposables & IV Products",
    desc: "Disposable and IV products are essential for safe drug administration and fluid management. These products are designed for single-use to ensure hygiene and patient safety.",
    image: "https://placehold.co/400x300/e0f2f1/00897b?text=IV+Products"
  }
];

const SeoPage = () => {
    const { openQuotePopup } = useQuotePopup();
    // --- Slider State & Logic ---
    const [currentSlide, setCurrentSlide] = useState(0);
    const [visibleItems, setVisibleItems] = useState(3);

    // Update visible items based on screen width
    useEffect(() => {
      const updateVisibleItems = () => {
        if (window.innerWidth < 768) setVisibleItems(1);
        else if (window.innerWidth < 1024) setVisibleItems(2);
        else setVisibleItems(3);
      };
      updateVisibleItems();
      window.addEventListener('resize', updateVisibleItems);
      return () => window.removeEventListener('resize', updateVisibleItems);
    }, []);

    const maxIndex = categoriesData.length - visibleItems;

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };
    
  return (
    <div className="bg-gray-50 min-h-screen">
        {/* Background Banner Area */}
        <div
          className="relative bg-teal-900 pt-32 pb-48 lg:pt-40 lg:pb-64 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        >
          {/* Overlays */}
          <div className="absolute inset-0 bg-teal-900/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/40 to-transparent" />

          {/* Banner Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                Global Manufacturer & Exporter of Surgical & Medical Supplies
              </h1>
              <p className="text-lg md:text-xl text-teal-50 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Delivering high-quality surgical instruments, PPE, wound care, and medical disposables to healthcare institutions worldwide.
              </p>

              {/* Link with Arrow */}
              <div className="mb-10">
                <a href="/about" className="inline-flex items-center text-teal-300 font-semibold hover:text-white transition-colors group">
                  Explore More About Us 
                  <span className="ml-2 bg-teal-700/50 p-1 rounded-full group-hover:bg-teal-600 transition-colors">
                    <ArrowRight size={16} />
                  </span>
                </a>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-3 rounded-md border-2 border-teal-100 text-teal-50 font-semibold hover:bg-white hover:text-teal-900 transition-colors">
                  Get Product Catalog
                </button>
                <button onClick={openQuotePopup} className="px-8 py-3 rounded-md bg-white text-teal-900 font-semibold hover:bg-teal-50 transition-colors shadow-lg cursor-pointer">
                  Request a Quote
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wide Product Range</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Manufacturing surgical instruments, PPE, IV products, wound care, and hospital disposables under strict quality standards for global markets.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-cyan-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-cyan-100 text-center">
              <div className="flex justify-center mb-4">
                <Medal className="w-10 h-10 text-teal-700" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certified Manufacturing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Produced using medical-grade stainless steel and high-quality materials with stringent quality control and international compliance.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-cyan-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-cyan-100 text-center">
              <div className="flex justify-center mb-4">
                <FileCheck className="w-10 h-10 text-teal-700" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Export Network</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Supplying hospitals, distributors, and healthcare institutions across Asia, Africa, Europe, and the Middle East.
              </p>
            </div>

          </div>
        </div>

        {/* --- NEW SEO CONTENT SECTION --- */}
        <div className="bg-white py-20 lg:py-32 mt-12 lg:mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
              
              {/* Left Side: Image */}
              <div className="w-full lg:w-5/12 relative">
                {/* Offset Decorative Border */}
                <div className="absolute inset-0 border-2 border-teal-200 rounded-2xl transform translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6 -z-10"></div>
                
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-gray-100 group">
                  {/* Image Placeholder - Replace with your actual team/award image */}
                  <img 
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" 
                    alt="Alira Excellence Award" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Brand Badge Overlay (Like the "SAI FURNITURE ART" box) */}
                  <div className="absolute bottom-0 right-0 bg-teal-700 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm rounded-tl-2xl shadow-lg">
                    Alira Pharmaceuticals
                  </div>
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="w-full lg:w-7/12">
                
                {/* Main Header */}
                <h2 className="text-3xl lg:text-4xl font-bold text-teal-700 mb-4">
                  Welcome to Alira Pharmaceutical
                </h2>
                <div className="h-1 w-24 bg-teal-500 rounded-full mb-10"></div>

                <div className="space-y-10 text-gray-700 leading-relaxed text-justify">
                  
                  {/* SEO Block 1 */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Pharmaceutical Distributors in [Your Region]
                    </h3>
                    <p>
                      Alira Pharmaceutical specializes in sourcing and distributing a wide range of generic medications and medical supplies in <span className="font-semibold text-teal-700">[Your Region]</span> to suit various healthcare needs. When it comes to high-quality, compliant, and reliable distribution, look no further than our esteemed <span className="font-semibold text-teal-700">Pharmaceutical Distributors in [Your Region]</span>. Our dedicated professionals ensure that every facility is meticulously stocked with attention to safety and regulatory standards.
                    </p>
                  </div>

                  {/* SEO Block 2 */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Surgical Instruments Suppliers in [Your Region]
                    </h3>
                    <p>
                      For those seeking precision-crafted and durable medical tools, we, as one of the top <span className="font-semibold text-teal-700">Surgical Instruments Suppliers in [Your Region]</span>, offer a diverse selection to choose from. These finely manufactured pieces in <span className="font-semibold text-teal-700">[Your Region]</span> not only provide reliability during critical procedures but also add an element of uncompromising safety to your operating rooms. Our surgical instruments are designed to enhance the capabilities of your medical staff in <span className="font-semibold text-teal-700">[Your Region]</span>.
                    </p>
                  </div>

                  {/* SEO Block 3 */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Wholesale Medical Disposables in [Your Region]
                    </h3>
                    <p>
                      We offer a wide range of medical disposables in various specifications in <span className="font-semibold text-teal-700">[Your Region]</span> to complement different hospital requirements. If you prioritize infection control and patient safety, we as the leading <span className="font-semibold text-teal-700">Wholesale Medical Disposables Suppliers in [Your Region]</span> have you covered. Each product is sourced from high-quality manufacturers to ensure uncompromised hygiene in <span className="font-semibold text-teal-700">[Your Region]</span>, making it a perfect addition to any healthcare facility.
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- NEW CATEGORIES SLIDER SECTION --- */}
        <div className="bg-gray-50 py-20 lg:py-28 relative">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-12 lg:px-16">
            
            {/* Slider Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                Explore Our Range
              </h2>
              <div className="h-1 w-24 bg-teal-500 mx-auto rounded-full"></div>
            </div>

            {/* Slider Wrap */}
            <div className="relative group">
              
              {/* Left Arrow Button */}
              <button 
                onClick={prevSlide}
                className="absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-12 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-teal-700 hover:scale-110 transition-all duration-300 z-10"
                aria-label="Previous categories"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Right Arrow Button */}
              <button 
                onClick={nextSlide}
                className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-12 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-teal-700 hover:scale-110 transition-all duration-300 z-10"
                aria-label="Next categories"
              >
                <ChevronRight size={24} />
              </button>

              {/* Cards Container */}
              <div className="overflow-hidden mx-auto px-2 py-4">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * (100 / visibleItems)}%)` }}
                >
                  {categoriesData.map((category) => (
                    <div 
                      key={category.id} 
                      // Width handling matches our visibleItems calculation perfectly
                      className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                    >
                      {/* Individual Card matching the requested style */}
                      <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-[500px] overflow-hidden group/card">
                        
                        {/* Image Section */}
                        <div className="h-56 w-full p-6 bg-white shrink-0 overflow-hidden">
                          <img 
                            src={category.image} 
                            alt={category.title} 
                            className="w-full h-full object-contain transform group-hover/card:scale-105 transition-transform duration-500"
                          />
                        </div>

                        {/* Content Section */}
                        <div className="p-8 pt-4 flex flex-col items-center text-center flex-grow">
                          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-1">
                            {category.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                            {category.desc}
                          </p>
                          
                          {/* Dark View More Button */}
                          <div className="mt-auto">
                            <a 
                              href={`/products/${category.id}`} 
                              className="inline-block bg-gray-900 text-white font-bold text-xs uppercase tracking-widest px-8 py-3 rounded-full hover:bg-teal-700 hover:shadow-md transition-all duration-300"
                            >
                              View More
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- NEW SECTION: PRECISION MANUFACTURING --- */}
        <div className="bg-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              
              {/* Left Side: Image */}
              <div className="w-full lg:w-1/2 relative">
                {/* Decorative background shape */}
                <div className="absolute inset-0 bg-teal-100 rounded-[3rem] transform -translate-x-4 translate-y-4 -z-10"></div>
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3] group">
                  {/* Warehouse Image Placeholder */}
                  <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" 
                    alt="Warehouse Operations" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="w-full lg:w-1/2">
                
                {/* Headers */}
                <span className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-3 block">
                  Global Manufacturing Excellence
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Precision Manufacturing, Worldwide Supply
                </h2>
                
                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed mb-10 text-justify">
                  Alira Pharmaceutical is a leading manufacturer and global exporter of surgical instruments, medical disposables, and hospital supplies. With advanced production facilities and strict quality control systems, we deliver precision-crafted products trusted by healthcare professionals across international markets. Our commitment to quality, compliance, and timely delivery ensures dependable supply worldwide.
                </p>

                {/* Features List */}
                <div className="space-y-8">
                  
                  {/* Feature 1 */}
                  <div className="flex gap-5 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                        <Factory className="w-7 h-7" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Manufacturing Expertise</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        State-of-the-art production facilities equipped with modern machinery ensure precision, durability, and consistent quality across all product categories.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-5 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                        <Globe className="w-7 h-7" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Global Export Network</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        Serving hospitals, distributors, and healthcare institutions across multiple countries with efficient logistics and reliable international shipping.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-5 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                        <ShieldCheck className="w-7 h-7" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Quality & Compliance</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        All products are manufactured under strict quality standards using medical-grade materials, ensuring compliance with international regulations.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- MAP & STATS SECTION --- */}
        <div className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Top Text Row */}
            <div className="flex flex-col md:flex-row gap-8 mb-16 items-start">
              {/* Headings */}
              <div className="w-full md:w-5/12">
                <h2 className="text-xl md:text-2xl font-bold text-teal-600 uppercase tracking-widest mb-2">
                  MEDICAL SUPPLIES
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                  Leading Medical Supply Manufacturers in [Your Region]
                </h3>
              </div>
              {/* Paragraph */}
              <div className="w-full md:w-7/12">
                <p className="text-gray-600 text-lg leading-relaxed text-justify">
                  Alira Pharmaceutical offers a unique variety of surgical instruments, PPE, and medical disposables that are available in different specifications as per clinical requirements. We are a prominent manufacturer and supplier in the healthcare industry. The requirement for our products has grown to a large degree over the years due to their excellent precision, uncompromised safety, and competitive pricing. Following the latest regulatory standards, our supplies add reliability and operational efficiency to your medical facility.
                </p>
              </div>
            </div>

            {/* Bottom Row: Map and Stats Overlap */}
            <div className="relative flex flex-col md:block">
              
              {/* Map Placeholder Area (Right aligned on desktop) */}
              <div className="w-full md:w-3/4 md:ml-auto bg-sky-100 rounded-lg overflow-hidden aspect-square md:aspect-[21/9] relative z-0">
                {/* You can replace this src with your final map image */}
                <img 
                  src="https://placehold.co/1200x600/e0f2fe/0284c7?text=Map+Image+Placeholder" 
                  alt="Service Map" 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Dark Stats Box (Overlapping on the left) */}
              <div className="w-full md:w-5/12 bg-gray-900 text-white relative z-10 md:absolute md:top-1/2 md:-translate-y-1/2 md:left-0 shadow-2xl rounded-lg md:rounded-none overflow-hidden mt-[-4rem] md:mt-0">
                <div className="grid grid-cols-2">
                  
                  {/* Stat 1 */}
                  <div className="p-8 border-b border-r border-gray-700 flex flex-col justify-center">
                    <div className="text-4xl lg:text-5xl font-bold text-teal-400 mb-2">100+</div>
                    <div className="text-sm font-semibold tracking-wide text-gray-300">Dealers Across India Served</div>
                  </div>
                  
                  {/* Stat 2 */}
                  <div className="p-8 border-b border-gray-700 flex flex-col justify-center">
                    <div className="text-4xl lg:text-5xl font-bold text-teal-400 mb-2">5000+</div>
                    <div className="text-sm font-semibold tracking-wide text-gray-300">Wholesale Orders</div>
                  </div>
                  
                  {/* Stat 3 */}
                  <div className="p-8 border-r border-gray-700 flex flex-col justify-center">
                    <div className="text-4xl lg:text-5xl font-bold text-teal-400 mb-2">400+</div>
                    <div className="text-sm font-semibold tracking-wide text-gray-300">Exclusive Products</div>
                  </div>
                  
                  {/* Stat 4 */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="text-4xl lg:text-5xl font-bold text-teal-400 mb-2">20+</div>
                    <div className="text-sm font-semibold tracking-wide text-gray-300">Years of Experience</div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

    </div>
  )
}

export default SeoPage