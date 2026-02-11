import React from 'react';
import { useState } from 'react';
import { MapPin, Phone, Mail, Printer, Send } from 'lucide-react';

import api from "../services/api";

export const sendContactMessage = (data) => {
  return api.post("/contact", data);
};


const ContactUs = () => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendContactMessage(formData);
      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      
      {/* --- Page Header --- */}
      <div className="bg-teal-900 py-16 lg:py-20 relative overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-teal-50 leading-relaxed font-light">
            Have questions or need assistance? Our dedicated team is here to help. Reach out to us for product inquiries, partnership opportunities, or support.
          </p>
        </div>
      </div>

      {/* --- Main Content --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column: Contact Information */}
          <div className="space-y-10">
            <div>
              <div className="h-1 w-16 bg-teal-500 rounded-full mb-6"></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you're a hospital, pharmacy, or veterinarian, we are ready to supply your needs. Contact us via phone, email, or visit our headquarters.
              </p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-teal-50 p-3 rounded-full text-teal-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Our Headquarters</h3>
                  <p className="text-gray-600">
                    A-116, URBTECH TRADE, CENTRE SECTOR-132, Baraula, Dadri,<br />
                    Gautam Buddha Nagar, Uttar Pradesh, GAUTAM BUDDHA NAGAR,
                    UTTAR PRADESH, 201304
                  </p>
                </div>
              </div>

              {/* Phone & Fax */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-teal-50 p-3 rounded-full text-teal-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600 flex flex-col gap-1">
                    <a href="tel:800-210-0845" className="hover:text-teal-600 transition-colors">
                      +91 7895850793
                    </a>
                    
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-teal-50 p-3 rounded-full text-teal-600 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-600">
                    <a href="mailto:anmolchauhan@alirapharmaceuticals.com" className="hover:text-teal-600 transition-colors">
                      anmolchauhan@alirapharmaceuticals.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10 relative overflow-hidden">
            {/* Decorative Top Accent */}
            <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-teal-400 to-teal-600"></div>

            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>

            <form className="space-y-6"  onSubmit={handleSubmit}>
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email & Phone Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-teal-600 text-white font-bold py-4 rounded-lg hover:bg-teal-700 focus:ring-4 focus:ring-teal-300 transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ContactUs;