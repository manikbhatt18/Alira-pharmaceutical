
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Truck, Medal, FileCheck, Globe, Scan, DollarSign, Lightbulb, Users, ChevronRight, Factory, ShieldCheck, ClipboardList, Building2, Stethoscope, FlaskConical, Heart, CheckSquare, ChevronDown, ChevronUp, Quote, Star } from 'lucide-react';


// --- Features Data ---
const featuresData = [
  {
    id: 1,
    icon: Globe,
    title: "Manufacturing Excellence",
    shortText: "We manufacture high-quality surgical instruments and medical disposables using premium-grade materials and advanced production processes to ensure durability and precision.",
    longText: " Our team's deep understanding of market trends and regulatory landscapes helps us anticipate challenges and provide proactive solutions. We don't just supply products; we offer strategic insights that help your pharmacy thrive in a competitive environment."
  },
  {
    id: 2,
    icon: Scan,
    title: "Strict Quality Control",
    shortText: "Every product undergoes rigorous inspection and testing to meet international healthcare standards and ensure consistent performance.",
    longText: " From high-volume generics to hard-to-find niche medications, our catalog is constantly updated to reflect current demands. We maintain robust stock levels to minimize backorders and ensure your patients never have to wait for critical treatments."
  },
  {
    id: 3,
    icon: Truck, // Reusing Truck icon, or could use MapPin/Globe
    title: "Global Export Network",
    shortText: "We supply hospitals, distributors, and medical institutions across international markets with reliable shipping and documentation support.",
    longText: " Our logistics partners are vetted for excellence in cold-chain management and secure transport. Whether you are a rural independent pharmacy or a large urban hospital system, our reliable supply chain reaches you with speed and precision."
  },
  {
    id: 4,
    icon: DollarSign,
    title: "Competitive Factory Pricing",
    shortText: "As direct manufacturers, we offer cost-effective pricing without compromising on quality.",
    longText: " We pass these savings directly to you, improving your pharmacy's margins without compromising on quality. Our transparent pricing models and flexible terms are designed to support your financial sustainability."
  },
  {
    id: 5,
    icon: Lightbulb,
    title: "Customization & OEM Support",
    shortText: "We provide private labelling, OEM manufacturing, and customized product solutions to meet specific client requirements.",
    longText: " Our user-friendly online portal provides real-time inventory visibility, automated order tracking, and seamless DSCSA compliance documentation. We are constantly evolving our tech stack to make your procurement process effortless."
  },
  {
    id: 6,
    icon: Users,
    title: "Trusted Industry Experience",
    shortText: "With strong expertise in surgical and medical manufacturing, we focus on innovation, compliance, and long-term partnerships.",
    longText: " We view ourselves as an extension of your team. Our dedicated support staff is always available to resolve issues, answer questions, and tailor our services to match your specific operational requirements."
  }
];


// --- Capabilities Carousel Data ---
const capabilitiesData = [
  {
    id: 1,
    title: "Precision Surgical Manufacturing",
    description: "We manufacture high-quality surgical instruments including scissors, forceps, retractors, bone instruments, and ENT tools using medical-grade stainless steel. Every product is engineered for durability, corrosion resistance, and surgical precision."
  },
  {
    id: 2,
    title: "Advanced Production Infrastructure",
    description: "Our modern manufacturing facility is equipped with advanced machinery, precision tooling, and skilled technicians to ensure consistent quality and large-scale production capacity."
  },
  {
    id: 3,
    title: "Strict Quality Control",
    description: "Each product undergoes multi-stage inspection and quality testing to ensure compliance with international healthcare standards. We focus on safety, reliability, and performance in every batch."
  },
  {
    id: 4,
    title: "Comprehensive Product Range",
    description: "From surgical instruments and retractors to PPE, surgical drapes, gloves, wound care products, and IV disposables — we offer a complete medical supply portfolio under one roof."
  },
  {
    id: 5, 
    title: "Global Export Expertise",
    description: "We export worldwide with professional packaging, documentation, and regulatory support. Our streamlined logistics system ensures timely and secure international deliveries."
  },
  {
    id: 6, 
    title: "OEM & Private Label Solutions",
    description: "We provide customized manufacturing and private label services for distributors, hospitals, and medical brands. Branding, packaging, and product specifications can be tailored to your requirements."
  },
  
];


const faqData = [
  {
    question: "What makes Alira a trusted generic pharmaceutical wholesaler in the U.S.?",
    answer: "Alira is an NABP-accredited and FDA-compliant generic pharmaceutical wholesaler licensed in all 50 states. With decades of experience in generic pharmaceuticals, it ensures reliable and compliant supply to hospitals, LTC facilities, specialty clinics, compounding pharmacies, and animal health providers."
  },
  {
    question: "Does Alira supply products for both human and animal health?",
    answer: "Yes, Alira is dedicated to serving both sectors. We provide a comprehensive range of FDA-approved generic medications for human health as well as specialized veterinary formulations, ensuring high standards of care across the board."
  },
  {
    question: "Which healthcare sectors does Alira specialize in?",
    answer: "We specialize in supplying Hospitals, Long-Term Care (LTC) facilities, Specialty Pharmacies, Independent Pharmacies, and Veterinary Clinics with cost-effective and compliant pharmaceutical solutions."
  },
  {
    question: "How does Alira ensure compliance and product authenticity?",
    answer: "We strictly adhere to DSCSA 2025 guidelines and maintain rigorous verification processes. By sourcing directly from approved manufacturers and employing advanced track-and-trace technology, we guarantee the authenticity of every product we distribute."
  },
  {
    question: "Does Alira offer nationwide pharmaceutical distribution?",
    answer: "Absolutely. Our robust logistics network covers all 50 states, ensuring timely and secure delivery of pharmaceuticals regardless of your facility's location."
  },
  {
    question: "What types of products does Alira distribute?",
    answer: "Our catalog includes a vast array of generic pharmaceuticals, over-the-counter (OTC) medications, injectables, vaccines, and specialty products tailored for both acute and chronic care needs."
  },
  {
    question: "How does Alira support long-term care (LTC) facilities?",
    answer: "We offer tailored packaging, automated dispensing support, and consistent inventory management services designed specifically to meet the unique high-volume and compliance needs of LTC providers."
  },
  {
    question: "What sets Alira apart from other pharmaceutical distribution companies?",
    answer: "Our unique combination of deep industry expertise, a dual focus on human and animal health, uncompromised regulatory compliance, and a partner-centric approach makes us more than just a distributor—we are a strategic ally in your growth."
  },
  {
    question: "Can specialty and compounding pharmacies order directly through Alira?",
    answer: "Yes, we offer a dedicated portal for specialty and compounding pharmacies, providing access to hard-to-find active pharmaceutical ingredients (APIs) and specialized dosage forms."
  },
  {
    question: "How can new customers partner with Alira?",
    answer: "Partnering is simple. Visit our 'New Customer Application' page, fill out the necessary business and license details, and our compliance team will review and approve your account for immediate ordering."
  }
];

const reviews = [
  {
    id: 1,
    text: "What distinguishes these wholesale pharmaceutical distributors is their attention to detail and understanding of the unique needs of hospitals. They have streamlined our procurement process and have made it supremely easier for us to serve our patients.",
    author: "Dr. Grace Kim",
    role: "Director of Hospital Procurement",
    rating: 4.2
  },
  {
    id: 2,
    text: "Reliability is critical in our field, and Alira has never let us down. Their commitment to compliance and the speed of their delivery network have significantly improved our operational efficiency across multiple clinic locations.",
    author: "James Wilson",
    role: "Regional Pharmacy Manager",
    rating: 4.8
  },
  {
    id: 3,
    text: "Finding a distributor that understands both human and animal health needs is rare. Alira's specialized veterinary support and consistent stock of hard-to-find formulations have been invaluable to our practice.",
    author: "Dr. Sarah Jenkins",
    role: "Veterinary Medical Director",
    rating: 4.5
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


  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };



  const [currentReview, setCurrentReview] = useState(0);

  // Auto-slide functionality (Optional)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [reviews.length]);
  return (
    <div>
      {/* section 1 */}
      {/* Hero Section Inlined Here */}
      <div className="relative bg-gray-50">
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
                <button className="px-8 py-3 rounded-md bg-white text-teal-900 font-semibold hover:bg-teal-50 transition-colors shadow-lg">
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
                  About Alira Pharmaceuticals
                </h2>
                <p className="text-lg font-semibold text-gray-700 pl-5">
                  Global Manufacturer & Exporter of Surgical and Medical Supplies
                </p>
              </div>

              <div className="text-gray-600 leading-relaxed space-y-4 text-justify pl-1">
                <p>
                  Alira Pharmaceuticals is a leading manufacturer and exporter of high-quality surgical instruments, hospital disposables, PPE, wound care products, and IV supplies. We combine advanced manufacturing processes with strict quality control to deliver reliable medical products to healthcare institutions worldwide.
                </p>
                <p>
                  Our products are manufactured using medical-grade materials and are designed to meet international healthcare standards. With a strong global distribution network, we proudly supply hospitals, distributors, and healthcare partners across multiple countries.
                </p>
              </div>

              
            </div>

          </div>
        </div>


        {/* --- Compliance Section (Updated) --- */}
        <div className="bg-gray-50 py-16 lg:py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            {/* Header */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-wider">
              Certified Quality & Global Standards
            </h2>
            <div className="h-1 w-16 bg-teal-500 mx-auto mb-6 rounded-full"></div>

            <p className="text-xl font-bold text-gray-800 mb-2">
              Manufactured to International Medical Standards
            </p>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              All our products are manufactured under strict quality control systems using medical-grade raw materials. We adhere to international manufacturing and export standards to ensure safety, reliability, and consistent performance across global markets.
            </p>

            {/* Logo Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

              {/* Box 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex items-center justify-center h-48 hover:shadow-md transition-shadow">
                <p className="text-xl md:text-2xl font-semibold text-gray-800 text-center">
                  ISO Certified Manufacturing
                </p>
              </div>

              {/* Box 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex items-center justify-center h-48 hover:shadow-md transition-shadow">
                <p className="text-xl md:text-2xl font-semibold text-gray-800 text-center">
                  Global Export Standards
                </p>
              </div>

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
                Delivering precision-engineered surgical instruments and medical supplies with global quality standards and reliable export capabilities.
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
              Comprehensive Manufacturing & Global Export Capabilities
            </h2>
            <p className="max-w-4xl mx-auto text-lg md:text-xl text-teal-50 font-medium">
              Alira Pharmaceutical is a leading manufacturer and global exporter of surgical instruments, medical disposables, PPE, and wound care products. We combine precision engineering, strict quality control, and international logistics expertise to deliver trusted healthcare solutions worldwide.
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
                  className={`h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-white' : 'w-3 bg-teal-300/50 hover:bg-white/75'
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
                 GLOBAL MANUFACTURING EXCELLENCE
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Precision Manufacturing, Worldwide Supply
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  Alira Pharmaceutical is a leading manufacturer and global exporter of surgical instruments, medical disposables, and hospital supplies. With advanced production facilities and strict quality control systems, we deliver precision-crafted products trusted by healthcare professionals across international markets. Our commitment to quality, compliance, and timely delivery ensures dependable supply worldwide.
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
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Manufacturing Expertise</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        State-of-the-art production facilities equipped with modern machinery ensure precision, durability, and consistent quality across all product categories.
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
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Global Export Network</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        Serving hospitals, distributors, and healthcare institutions across multiple countries with efficient logistics and reliable international shipping.
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
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Quality & Compliance</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        All products are manufactured under strict quality standards using medical-grade materials, ensuring safety, performance, and regulatory compliance.
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

        {/* --- How We Work Section --- */}
        <div className="bg-teal-500 py-20 lg:py-28 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Signing Up with Us, Effortlessly.
              </h2>
              <p className="text-xl md:text-2xl text-teal-100 font-medium">
                How We Work With Global Buyers
              </p>
            </div>

            {/* Steps Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 text-left">

              {/* Step 1 */}
              <div className="space-y-4">
                <div className="text-6xl font-bold opacity-80">1.</div>
                <h3 className="text-2xl font-bold">Product Selection</h3>
                <p className="text-teal-50 text-lg leading-relaxed">
                  Browse our surgical, medical disposables, and PPE product categories. 
                  Share your required specifications or bulk inquiry.
                </p>
              </div>

              {/* Step 2 */}
              <div className="space-y-4">
                <div className="text-6xl font-bold opacity-80">2.</div>
                <h3 className="text-2xl font-bold">Quotation & Customization</h3>
                <p className="text-teal-50 text-lg leading-relaxed">
                  We provide competitive export pricing, OEM/private labeling options, 
                  and packaging customization based on your market needs.
                </p>
              </div>

              {/* Step 3 */}
              <div className="space-y-4">
                <div className="text-6xl font-bold opacity-80">3.</div>
                <h3 className="text-2xl font-bold">Manufacturing & Quality Inspection</h3>
                <p className="text-teal-50 text-lg leading-relaxed">
                  All products undergo strict quality control and certification checks 
                  before dispatch.
                </p>
              </div>

              {/* Step 4 */}
              <div className="space-y-4">
                <div className="text-6xl font-bold opacity-80">4.</div>
                <h3 className="text-2xl font-bold">Global Shipping & Documentation</h3>
                <p className="text-teal-50 text-lg leading-relaxed">
                  We handle export documentation, customs clearance, and international 
                  logistics for smooth delivery worldwide.
                </p>
              </div>

            </div>
          </div>
        </div>




        <div className="bg-white py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide">
                Frequently Asked Questions
              </h2>
              <div className="h-1 w-16 bg-teal-500 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 last:border-0"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center py-5 text-left focus:outline-none group"
                  >
                    <span className={`text-lg font-bold transition-colors duration-300 ${openIndex === index ? 'text-teal-600' : 'text-gray-900 group-hover:text-teal-600'}`}>
                      Q{index + 1}. {item.question}
                    </span>
                    <span className={`ml-6 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-teal-600' : 'text-gray-400 group-hover:text-teal-600'}`}>
                      <ChevronDown className="w-6 h-6" />
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <p className="text-gray-600 leading-relaxed pr-12 text-justify">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>



        <div className="bg-white py-16 lg:py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            {/* Header */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Client Review
            </h2>

            {/* Review Card Slider */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-teal-500 rounded-2xl p-8 md:p-12 shadow-xl text-white relative transition-all duration-500 ease-in-out transform">

                {/* Quote Icon */}
                <div className="absolute top-8 left-8 text-teal-300 opacity-50">
                  <Quote size={40} className="transform -scale-x-100" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center min-h-[300px]">
                  <p className="text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-2xl">
                    "{reviews[currentReview].text}"
                  </p>

                  {/* Bottom Row: Author & Rating */}
                  <div className="w-full flex flex-col md:flex-row justify-between items-end md:items-center mt-auto border-t border-teal-400/30 pt-6">

                    {/* Author Info */}
                    <div className="text-left mb-4 md:mb-0">
                      <h4 className="text-xl font-bold">{reviews[currentReview].author}</h4>
                      <p className="text-teal-100 text-sm">{reviews[currentReview].role}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex flex-col items-end">
                      <div className="flex gap-1 text-yellow-300 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            fill={i < Math.floor(reviews[currentReview].rating) ? "currentColor" : "none"}
                            className={i < Math.floor(reviews[currentReview].rating) ? "" : "opacity-50"}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-bold">{reviews[currentReview].rating}/5</span>
                    </div>
                  </div>

                  {/* End Quote Icon (Bottom Right) */}
                  <div className="absolute bottom-24 right-8 text-teal-300 opacity-50">
                    <Quote size={24} />
                  </div>

                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-3 mt-8">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${currentReview === index ? 'w-8 bg-teal-500' : 'w-3 bg-gray-300 hover:bg-teal-300'
                      }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Home