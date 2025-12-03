
import React, { useState, useEffect } from 'react';
import {Menu, X, ArrowRight, Truck, Medal, FileCheck, Globe, Scan, DollarSign, Lightbulb, Users, ChevronRight, Factory, ShieldCheck, ClipboardList, Building2, Stethoscope, FlaskConical, Heart } from 'lucide-react';


// --- Features Data ---
const featuresData = [
  {
    id: 1,
    icon: Globe,
    title: "Valuable Industry Experience",
    shortText: "Your business deserves expert guidance, and our sales representatives bring unmatched industry expertise of 30+ years to the table. They manage your account while ensuring you have access to the best pharmaceutical solutions.",
    longText: " Our team's deep understanding of market trends and regulatory landscapes helps us anticipate challenges and provide proactive solutions. We don't just supply products; we offer strategic insights that help your pharmacy thrive in a competitive environment."
  },
  {
    id: 2,
    icon: Scan,
    title: "2000+ SKUs",
    shortText: "As seasoned generic pharmaceutical distributors, our vast inventory includes over 2,000 SKUs, allowing us to supply a comprehensive range of pharmaceutical products to meet diverse patient needs.",
    longText: " From high-volume generics to hard-to-find niche medications, our catalog is constantly updated to reflect current demands. We maintain robust stock levels to minimize backorders and ensure your patients never have to wait for critical treatments."
  },
  {
    id: 3,
    icon: Truck, // Reusing Truck icon, or could use MapPin/Globe
    title: "Vast Distribution Network in 50 States",
    shortText: "With our extensive nationwide distribution network and license to operate in all 50 states, we ensure timely and compliant deliveries, reducing wait times and helping you maintain optimal inventory levels.",
    longText: " Our logistics partners are vetted for excellence in cold-chain management and secure transport. Whether you are a rural independent pharmacy or a large urban hospital system, our reliable supply chain reaches you with speed and precision."
  },
  {
    id: 4,
    icon: DollarSign,
    title: "Best Pricing in the Industry",
    shortText: "Our commitment to affordability is unwavering. We leverage long-standing manufacturer partnerships and bulk procurement strength to deliver competitive pricing at scale.",
    longText: " We pass these savings directly to you, improving your pharmacy's margins without compromising on quality. Our transparent pricing models and flexible terms are designed to support your financial sustainability."
  },
  {
    id: 5,
    icon: Lightbulb,
    title: "Commitment to Innovation",
    shortText: "By investing in advanced technology, Alira streamlines ordering, tracking, and compliance. Healthcare partners—from specialty clinics to hospital chains—benefit from our digital-first approach.",
    longText: " Our user-friendly online portal provides real-time inventory visibility, automated order tracking, and seamless DSCSA compliance documentation. We are constantly evolving our tech stack to make your procurement process effortless."
  },
  {
    id: 6,
    icon: Users,
    title: "Partner-Centric Approach",
    shortText: "Long-term relationships drive our success. Alira works closely with hospitals, LTC providers, and specialty networks—listening to their needs and delivering solutions that help them succeed.",
    longText: " We view ourselves as an extension of your team. Our dedicated support staff is always available to resolve issues, answer questions, and tailor our services to match your specific operational requirements."
  }
];


// --- Capabilities Carousel Data ---
const capabilitiesData = [
  {
    id: 1,
    title: "Provider & Pharmacy Solutions",
    description: "Tailored support for diverse healthcare partners and specialty distributors to simplify procurement and maintain an uninterrupted treatment supply."
  },
  {
    id: 2,
    title: "Compliance & Quality Assurance",
    description: "We ensure full adherence to NABP, FDA, and DSCSA 2025 guidelines. Every shipment undergoes stringent checks to ensure healthcare providers—across human and animal health—receive authentic and traceable products."
  },
  {
    id: 3,
    title: "Wholesale & Specialty Distribution",
    description: "Reliable, nationwide generic pharmaceutical supply for healthcare and specialty care providers across the U.S. Our consistent processes make us a trusted choice among wholesale pharmaceutical distributors."
  },
  {
    id: 4, // Demo Content
    title: "Strategic Global Sourcing",
    description: "Leveraging robust international partnerships to secure high-quality active ingredients and finished dosage forms, ensuring a resilient supply chain against global market fluctuations."
  }
];


const Home = () => {

    const [expandedCardId, setExpandedCardId] = useState(null);
  
  // Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleReadMore = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  // Auto-slide effect for Capabilities Carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % capabilitiesData.length);
    }, 4000); // Slides every 4 seconds
    return () => clearInterval(timer);
  }, []);

  // Helper to get the 3 visible slides based on current index (Circular)
  const getVisibleSlides = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % capabilitiesData.length;
      visible.push(capabilitiesData[index]);
    }
    return visible;
  };
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


        {/* --- Compliance Section (Updated) --- */}
        <div className="bg-gray-50 py-16 lg:py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            {/* Header */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-wider">
              In Compliance With
            </h2>
            <div className="h-1 w-16 bg-teal-500 mx-auto mb-6 rounded-full"></div>
            
            <p className="text-xl font-bold text-gray-800 mb-2">
              Compliant. Traceable. Trusted.
            </p>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              Exceeding NABP, FDA, and DSCSA 2025 standards nationwide.
            </p>

            {/* Logo Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* Logo Card 1 (NABP) */}
              {/* Note: 'href' can be updated to the actual verification link */}
              <a href="#" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex items-center justify-center h-48 hover:shadow-md transition-shadow ">
                {/* IMPORT NOTE: Replace 'nabp_placeholder.png' with your imported image variable or path */}
                <img 
                  src="https://via.placeholder.com/300x100?text=NABP+Logo" 
                  alt="NABP Accredited" 
                  className="max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>

              {/* Logo Card 2 (DSCSA) */}
              {/* Note: 'href' can be updated to the actual verification link */}
              <a href="#" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex items-center justify-center h-48 hover:shadow-md transition-shadow ">
                {/* IMPORT NOTE: Replace 'dscsa_placeholder.png' with your imported image variable or path */}
                <img 
                  src="https://via.placeholder.com/300x100?text=DSCSA+Logo" 
                  alt="DSCSA Compliant" 
                  className="max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>

            </div>
          </div>
        </div>


        {/* --- Why Choose Us Section --- */}
        <div className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
                Why Choose Us
              </h2>
              <div className="h-1 w-20 bg-teal-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                At the nexus of trust and tradition, we are not just your generic pharmaceutical distributors, but your partners in achieving pharmaceutical excellence.
              </p>
            </div>

            {/* Grid Layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuresData.map((feature) => (
                <div 
                  key={feature.id} 
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full"
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <feature.icon className="w-10 h-10 text-teal-600" strokeWidth={1.5} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  {/* Text Content */}
                  <div className="text-gray-600 text-sm leading-relaxed mb-4 grow">
                    <p>{feature.shortText}</p>
                    
                    {/* Expandable Text */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedCardId === feature.id ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                      <p className="pt-2 text-teal-800">{feature.longText}</p>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div className="mt-auto pt-2">
                    <button 
                      onClick={() => toggleReadMore(feature.id)}
                      className="text-teal-500 font-semibold text-sm hover:text-teal-700 border-b border-transparent hover:border-teal-700 transition-colors focus:outline-none"
                    >
                      {expandedCardId === feature.id ? 'Read Less' : 'Read More'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>


        {/* --- Capabilities Carousel Section (New) --- */}
        <div className="bg-teal-500 py-20 lg:py-28 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Comprehensive Distribution Capabilities
            </h2>
            <p className="max-w-4xl mx-auto text-lg md:text-xl text-teal-50 font-medium">
              Alira Pharmaceutical combines industry expertise with strong logistics to provide comprehensive generic distribution services. Each capability is designed to help healthcare and specialty partners maintain a safe, seamless, and cost-effective supply chain.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
              {/* Display 3 items based on currentSlide (1 on mobile, 3 on desktop logic) */}
              {/* Note: In a real responsive layout with varying items, a library like Swiper is best. Here we simulate the '3 visible' window for desktop manually. */}
              {getVisibleSlides().map((item, index) => (
                <div 
                  key={`${item.id}-${index}`} 
                  className="bg-white/10 backdrop-blur-sm border border-teal-400/30 p-8 rounded-lg hover:bg-white/20 transition-colors duration-300 flex flex-col h-full animate-fadeIn"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center justify-between">
                    {item.title}
                    <ChevronRight className="w-5 h-5 opacity-75" />
                  </h3>
                  <p className="text-teal-50 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-10 gap-3">
              {capabilitiesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'w-8 bg-white' : 'w-3 bg-teal-300/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>


        {/* --- Strategic Partnerships Section (New) --- */}
        <div className="bg-gray-50 py-16 lg:py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              
              {/* Left Content */}
              <div className="w-full lg:w-1/2">
                <span className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-2 block">
                  Strategic Manufacturer Partnerships
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Trusted Partnerships, Reliable Supply
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  Alira strengthens its nationwide supply reliability through long-standing partnerships with leading generic manufacturers. These strategic alliances ensure verified authenticity, stable pricing, and consistent access to essential medications across multiple therapeutic areas.
                </p>

                <div className="space-y-8">
                  {/* Feature 1 */}
                  <div className="flex gap-4 group">
                    <div className="shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                        <Factory className="w-7 h-7" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Direct Sourcing</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        Direct Sourcing From Trusted And Approved Manufacturers Ensures Product Integrity And Verified Traceability.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-4 group">
                    <div className="shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                        <Users className="w-7 h-7" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">75+ Manufacturer Network</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        Partnered With 75+ Leading Generic Manufacturers Across The U.S. And Global Markets.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-4 group">
                    <div className="shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                        <ShieldCheck className="w-7 h-7" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Verified Authenticity</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        Every Product Undergoes Multi-Step Verification And Documentation To Confirm Authenticity Before Distribution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="w-full lg:w-1/2 relative">
                {/* Decorative Background Shape */}
                <div className="absolute top-0 right-0 w-[110%] h-[105%] bg-teal-500 rounded-tr-[5rem] rounded-bl-[5rem] -translate-y-4 translate-x-4 -z-10 hidden md:block"></div>
                
                <div className="relative rounded-tr-[4rem] rounded-bl-[4rem] overflow-hidden shadow-2xl border-4 border-white">
                  {/* IMPORT NOTE: Replace with your imported image variable or path */}
                  <img
                    src="https://via.placeholder.com/600x500" 
                    alt="Warehouse Operations"
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- Human & Animal Health Section (New) --- */}
        <div className="py-20 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Human & Animal Health
              </h2>
              <div className="h-1 w-24 bg-teal-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                At Alira, equal commitment is given to human and animal health, ensuring safe, compliant, and reliable access to quality pharmaceuticals across the U.S. under NABP, FDA, and DSCSA 2025 standards.
              </p>
            </div>

            {/* Human Health Section (Image Left / Content Right) */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24 lg:mb-32">
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
                {/* Decorative Blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-lime-100 rounded-full blur-3xl -z-10 opacity-60"></div>
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                   {/* Placeholder for Human Health Image */}
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-217358c7e618?auto=format&fit=crop&q=80&w=600" 
                    alt="Human Health Pharmacist"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Human Health</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  Alira Supports Healthcare Facilities Nationwide With Access To Safe, Cost-Effective Generic Formulations. Each Product Is Stored And Distributed Following The Strictest Compliance Standards.
                </p>

                <div className="space-y-6">
                  {/* Item 1 */}
                  <div className="flex gap-4">
                     <div className="shrink-0 w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                        <ClipboardList className="w-6 h-6" />
                     </div>
                     <div>
                       <h4 className="font-bold text-gray-900">Comprehensive Product Range</h4>
                       <p className="text-sm text-gray-600 mt-1">A Broad Portfolio Of Quality-Assured Generic Pharmaceuticals Designed To Support Hospitals, LTC Networks, And Specialty Care Facilities.</p>
                     </div>
                  </div>
                  {/* Item 2 */}
                   <div className="flex gap-4">
                     <div className="shrink-0 w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                        <Building2 className="w-6 h-6" />
                     </div>
                     <div>
                       <h4 className="font-bold text-gray-900">Hospital & Specialty Pharmacy Support</h4>
                       <p className="text-sm text-gray-600 mt-1">Reliable Distribution Designed To Help Hospitals And Specialty Networks Maintain Consistent Treatment Availability.</p>
                     </div>
                  </div>
                  {/* Item 3 */}
                   <div className="flex gap-4">
                     <div className="shrink-0 w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                        <ShieldCheck className="w-6 h-6" />
                     </div>
                     <div>
                       <h4 className="font-bold text-gray-900">Regulatory Compliance</h4>
                       <p className="text-sm text-gray-600 mt-1">Strict Adherence To NABP And FDA Guidelines, Ensuring Secure, Compliant, And Traceable Delivery Of Human Health Products.</p>
                     </div>
                  </div>
                </div>
                 
                <div className="mt-8">
                  <button className="bg-teal-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-teal-600 transition-colors shadow-lg shadow-teal-500/30">
                    Know More
                  </button>
                </div>
              </div>
            </div>

            {/* Animal Health Section (Content Left / Image Right) */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
               
               {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Animal Health</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  Alira extends its trusted distribution network to veterinary hospitals, clinics, and animal care providers, ensuring consistent access to essential products.
                </p>

                <div className="space-y-6">
                  {/* Item 1 */}
                  <div className="flex gap-4">
                     <div className="shrink-0 w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                        <Heart className="w-6 h-6" />
                     </div>
                     <div>
                       <h4 className="font-bold text-gray-900">Veterinary Product Lines</h4>
                       <p className="text-sm text-gray-600 mt-1">Dedicated Pharmaceutical Solutions Designed For Veterinarians, Clinics, And Animal Healthcare Facilities.</p>
                     </div>
                  </div>
                  {/* Item 2 */}
                   <div className="flex gap-4">
                     <div className="shrink-0 w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                        <FlaskConical className="w-6 h-6" />
                     </div>
                     <div>
                       <h4 className="font-bold text-gray-900">Specialty Formulations</h4>
                       <p className="text-sm text-gray-600 mt-1">Sutures, Oncology Formulations, And Generic Alternatives Tailored For Animal Health Practices.</p>
                     </div>
                  </div>
                  {/* Item 3 */}
                   <div className="flex gap-4">
                     <div className="shrink-0 w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                        <Truck className="w-6 h-6" />
                     </div>
                     <div>
                       <h4 className="font-bold text-gray-900">Trusted Distribution</h4>
                       <p className="text-sm text-gray-600 mt-1">Compliant With All State And Federal Regulations To Guarantee Authentic, Traceable Supply For Animal Care Providers.</p>
                     </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button className="bg-teal-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-teal-600 transition-colors shadow-lg shadow-teal-500/30">
                    Know More
                  </button>
                </div>
              </div>

               {/* Image Side */}
              <div className="w-full lg:w-1/2 relative">
                {/* Decorative Blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sky-100 rounded-full blur-3xl -z-10 opacity-60"></div>
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                  {/* Placeholder for Animal Health Image */}
                  <img 
                    src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?auto=format&fit=crop&q=80&w=600" 
                    alt="Veterinary Care"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home