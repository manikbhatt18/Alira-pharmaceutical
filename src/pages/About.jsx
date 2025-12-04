import React from 'react'
import { ClipboardList, User, Hand, Award } from 'lucide-react';

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
                        Ever since its inception, <span className="font-semibold text-gray-900">Alira</span> has been at the forefront of pharmaceutical distribution, specializing in providing a comprehensive line of generic medications for vet clinics, veterinarians, hospitals, veterinary surgeons, long-term care, hospitals, and independent retail pharmacies dotted across the United States. As an independently owned <span className="font-bold text-teal-700">wholesale pharmaceutical distributor</span> based out of New York, our NABP-accredited business has set the standard for safety, reliability, and customer satisfaction.
                    </p>

                    <p>
                        We focus on distributing a comprehensive range of pharmaceutical products, particularly in the areas of animal health and human health. Our diverse clientele includes vet clinics, veterinarians, hospitals, veterinary surgeons, retail pharmacies, specialty healthcare centers, long-term care facilities, hospitals, and government institutions.
                    </p>

                    <p>
                        With a team that boasts decades of industry expertise, Alira has solidified its reputation as a trusted partner in the realm of wholesale pharmaceutical distribution in the USA.
                    </p>
                    </div>

                </div>

                </div>
            </div>
        </section>

        {/* --- Section 2: Why Choose Us --- */}
      <section className="bg-white pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
              Why Choose Us?
            </h2>
            <div className="h-1 w-20 bg-teal-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Alira understands the nitty-gritty of your challenges and amplifies your strengths. Here’s why we are the standout choice for both animal health and human health needs.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Card 1 */}
            <div className="group bg-gray-50 p-10 hover:bg-teal-500 transition-all duration-300 ease-in-out cursor-default">
              <div className="mb-6">
                <ClipboardList className="w-12 h-12 text-teal-500 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">
                Extensive Inventory
              </h3>
              <p className="text-gray-600 group-hover:text-teal-50 leading-relaxed transition-colors duration-300">
                Choose from over 2,000 SKUs to find exactly what your patients need when they need it. Whether it's everyday essentials or specialized treatments, our inventory indicates our dedication to meet the evolving needs pertaining to both animal health and human health.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-gray-50 p-10 hover:bg-teal-500 transition-all duration-300 ease-in-out cursor-default">
              <div className="mb-6">
                <User className="w-12 h-12 text-teal-500 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">
                Dedicated Representatives
              </h3>
              <p className="text-gray-600 group-hover:text-teal-50 leading-relaxed transition-colors duration-300">
                With an impressive 30+ years of combined industry experience, our representatives equip your pharmacy with tailored support, valuable insights, and the latest trends all designed to align with your specific market objectives.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-gray-50 p-10 hover:bg-teal-500 transition-all duration-300 ease-in-out cursor-default">
              <div className="mb-6">
                <Hand className="w-12 h-12 text-teal-500 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">
                Ease of Doing Business
              </h3>
              <p className="text-gray-600 group-hover:text-teal-50 leading-relaxed transition-colors duration-300">
                From order placement to delivery to support, every touchpoint with us is designed for simplicity and efficiency. As your dedicated <span className="font-semibold">drug distribution company</span>, we want your experience to be hassle-free, empowering you to focus on your business needs.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group bg-gray-50 p-10 hover:bg-teal-500 transition-all duration-300 ease-in-out cursor-default">
              <div className="mb-6">
                <Award className="w-12 h-12 text-teal-500 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">
                Compliance at the Core
              </h3>
              <p className="text-gray-600 group-hover:text-teal-50 leading-relaxed transition-colors duration-300">
                As your <span className="font-semibold">NABP-accredited</span> partner, we adhere to the highest standards of compliance. We are not only <span className="font-semibold">FDA/ DSCSA-compliant</span> but are also licensed to distribute across the US. Our scalable network ensures prompt delivery, so your shelves are always stocked.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* --- Section 3: Hassle-free Registration --- */}
      <section className="bg-teal-500 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="text-3xl font-bold mb-12">
            Hassle-free Registration
          </h2>

          <div className="grid md:grid-cols-4 gap-8 items-center">
            
            {/* Step 1 */}
            <div className="flex flex-col">
              <span className="text-5xl font-bold opacity-90 mb-2">1.</span>
              <span className="text-xl font-medium">Fill the Form</span>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col">
              <span className="text-5xl font-bold opacity-90 mb-2">2.</span>
              <span className="text-xl font-medium">We'll Review Application</span>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col">
              <span className="text-5xl font-bold opacity-90 mb-2">3.</span>
              <span className="text-xl font-medium">Start Ordering!</span>
            </div>

            {/* CTA Button */}
            <div className="md:text-right mt-8 md:mt-0">
              <button className="bg-white text-teal-600 font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors shadow-lg">
                Register Now!
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default About