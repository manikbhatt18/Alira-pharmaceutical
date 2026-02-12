import React from 'react'
import { ClipboardList, User, Hand, Award, CheckSquare, Globe, Scan, DollarSign, Lightbulb, Users,Truck, ChevronRight, Factory, } from 'lucide-react';


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

const About = () => {
  return (
    <div>

        {/* --- Banner Section (New) --- */}
      <div className="relative bg-teal-900 py-24 lg:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Placeholder Background - Replace with your specific banner image later */}
          <img 
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=2000" 
            alt="About Us Banner" 
            className="w-full h-full object-cover opacity-20"
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-linear-to-r from-teal-900/90 to-teal-800/80 mix-blend-multiply"></div>
        </div>

        {/* Banner Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            About Us
          </h1>
          <div className="flex items-center justify-center gap-2 text-teal-100 text-sm md:text-base font-medium">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>|</span>
            <span className="text-white">About Us</span>
          </div>
        </div>
      </div>
        <section className="bg-white py-16 lg:py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                
                {/* Left Side: Image */}
                <div className="w-full lg:w-1/2 relative">
                    {/* Optional: Decorative background shape/blob can be added here if needed */}
                    <div className="relative rounded-lg overflow-hidden shadow-xl aspect-4/3 lg:aspect-auto lg:h-[600px]">
                    {/* Placeholder for the "People Walking/Talking" image */}
                    <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600" 
                        alt="Alira Team Collaboration" 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full lg:w-1/2">
                    
                    {/* Title with Teal Accent Bar */}
                    <div className="flex items-center gap-4 mb-8">
                    <div className="h-10 w-1.5 bg-teal-500 rounded-full"></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Who We Are
                    </h2>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-justify">
                    <p>
                        Alira Pharmaceuticals is a leading manufacturer and global exporter of high-quality surgical instruments, medical disposables, and healthcare supplies. We specialize in producing precision-engineered surgical tools and certified medical products that meet international quality standards.
                    </p>

                    <p>
                        With a strong focus on quality control, innovation, and reliability, our products are manufactured using medical-grade materials and strict production protocols to ensure durability, safety, and performance.
                    </p>

                    <p>
                        Serving hospitals, distributors, healthcare institutions, and importers worldwide, we are committed to delivering consistent quality, competitive pricing, and dependable export services.
                    </p>

                    <p>
                      Our expertise spans surgical instruments, retractors, bone & neuro instruments, ENT tools, surgical blades, wound care products, PPE, and IV disposables—making us a trusted partner for global medical supply solutions.
                    </p>
                    </div>

                </div>

                </div>
            </div>
        </section>

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

      {/* --- Mission & Vision Section (New) --- */}
        <div className="bg-gray-50 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Main Header */}
            <div className="text-center mb-20">
              <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 uppercase tracking-wider">
                Mission & Vision
              </h2>
              <div className="h-1 w-24 bg-teal-500 mx-auto rounded-full"></div>
            </div>

            {/* Content Container */}
            <div className="space-y-24 lg:space-y-32">

              {/* Mission Section (Image Left / Text Right) */}
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                {/* Image Placeholder */}
                <div className="w-full lg:w-1/2">
                  {/* Using anchor tag as placeholder container */}
                  <a href="#" className="block relative rounded-4xl overflow-hidden shadow-xl aspect-4/3 group bg-white border border-gray-100 hover:border-teal-200 transition-colors">
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 group-hover:text-teal-600 transition-colors">
                      <span className="text-lg font-bold">Mission Image Placeholder</span>
                      <span className="text-sm">(Click to Upload Image)</span>
                    </div>
                    {/* Optional: Add actual image src when available */}
                    <img
                      src="https://via.placeholder.com/800x600/f0fdfa/14b8a6?text=Mission+Image"
                      alt="Mission Placeholder"
                      className="w-full h-full object-cover opacity-0 hover:opacity-10 transition-opacity"
                    />
                  </a>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 border-l-8 border-teal-500 pl-6">
                    Mission
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    To manufacture and supply high-quality surgical instruments and medical disposables that meet international standards of safety, precision, and reliability.
<br /> Alira Pharmaceuticals is committed to delivering world-class surgical and healthcare products through advanced manufacturing, strict quality control, and continuous innovation. We serve hospitals, distributors, and healthcare institutions globally with dependable supply and competitive pricing.

                  </p>

                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Our mission focuses on:</h4>
                    <ul className="space-y-4">
                      {[
                        "Manufacturing precision-engineered surgical instruments using medical-grade stainless steel",
                        "Maintaining strict quality assurance and international compliance standards",
                        "Ensuring reliable global export and timely delivery",
                        "Building long-term partnerships based on trust and performance",
                        "Continuous product innovation and improvement"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckSquare className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                          <span className="text-lg text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Vision Section (Text Left / Image Right) */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
                {/* Image Placeholder */}
                <div className="w-full lg:w-1/2">
                  {/* Using anchor tag as placeholder container */}
                  <a href="#" className="block relative rounded-4xl overflow-hidden shadow-xl aspect-4/3 group bg-white border border-gray-100 hover:border-teal-200 transition-colors">
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 group-hover:text-teal-600 transition-colors">
                      <span className="text-lg font-bold">Vision Image Placeholder</span>
                      <span className="text-sm">(Click to Upload Image)</span>
                    </div>
                    {/* Optional: Add actual image src when available */}
                    <img
                      src="https://via.placeholder.com/800x600/f0fdfa/14b8a6?text=Vision+Image"
                      alt="Vision Placeholder"
                      className="w-full h-full object-cover opacity-0 hover:opacity-10 transition-opacity"
                    />
                  </a>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 border-l-8 border-teal-500 pl-6">
                    Vision
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    To become a globally recognized manufacturer and exporter of surgical instruments and medical disposables, known for quality, integrity, and excellence.
<br /> We envision expanding our global footprint while setting benchmarks in manufacturing standards, product durability, and customer satisfaction across healthcare markets worldwide.

                  </p>

                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Our vision aspires to:</h4>
                    <ul className="space-y-4">
                      {[
                        "Lead in surgical instrument manufacturing excellence",
                        "Expand exports across international healthcare markets",
                        "Achieve globally recognized certifications and compliance standards",
                        "Invest in modern production technology and skilled workforce",
                        "Create sustainable and ethical manufacturing practices"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckSquare className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                          <span className="text-lg text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>


      {/* --- Section 4: Hassle-free Registration --- */}
<section className="bg-teal-500 py-16 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <h2 className="text-3xl md:text-4xl font-bold mb-12">
      Get a Custom Quote in 3 Simple Steps
    </h2>

    <div className="grid md:grid-cols-4 gap-8 items-start">
      
      {/* Step 1 */}
      <div className="flex flex-col space-y-3">
        <span className="text-5xl font-bold opacity-90">1.</span>
        <h3 className="text-xl font-semibold">Share Your Requirements</h3>
        <p className="text-teal-50 leading-relaxed">
          Send us your product list, quantities, and specifications. 
          Our team will review your request carefully.
        </p>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col space-y-3">
        <span className="text-5xl font-bold opacity-90">2.</span>
        <h3 className="text-xl font-semibold">Receive Competitive Quotation</h3>
        <p className="text-teal-50 leading-relaxed">
          We provide detailed pricing, MOQs, production timelines, 
          and shipping terms tailored to your needs.
        </p>
      </div>

      {/* Step 3 */}
      <div className="flex flex-col space-y-3">
        <span className="text-5xl font-bold opacity-90">3.</span>
        <h3 className="text-xl font-semibold">Confirm & Start Production</h3>
        <p className="text-teal-50 leading-relaxed">
          Once approved, we initiate manufacturing, quality checks, 
          and arrange secure global delivery.
        </p>
      </div>

      {/* CTA Button */}
      <div className="md:text-right mt-8 md:mt-0 flex items-center md:justify-end">
        <button className="bg-white text-teal-600 font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors shadow-lg">
          Request a Quote
        </button>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

export default About