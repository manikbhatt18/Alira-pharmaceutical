import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const PopUp = ({ isOpen, onClose, autoShow = true }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle Auto-Show Logic (Default behavior)
  useEffect(() => {
    if (autoShow && isOpen === undefined) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500); // 0.5 second delay
      return () => clearTimeout(timer);
    }
  }, [autoShow, isOpen]);

  // Handle Controlled Logic (When passed via props)
  useEffect(() => {
    if (isOpen !== undefined) {
      setIsVisible(isOpen);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop with Blur */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose} // Close when clicking outside
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 md:p-10 z-10 animate-fadeIn scale-100">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors bg-gray-100 hover:bg-gray-200 p-1 rounded-full"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Drop in your details below
          </h2>
          <p className="text-gray-500 text-lg">
            Let our experts take over from here!
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); handleClose(); }}>
          
          <div className="grid md:grid-cols-2 gap-5">
            {/* Name */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all bg-gray-50 text-gray-700 placeholder-gray-400"
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all bg-gray-50 text-gray-700 placeholder-gray-400"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Phone */}
            <div className="relative">
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all bg-gray-50 text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Company */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="Company" 
                className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all bg-gray-50 text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea 
              placeholder="Message" 
              rows="4" 
              className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all bg-gray-50 text-gray-700 placeholder-gray-400 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 rounded-lg transition-all transform active:scale-[0.98] shadow-lg shadow-teal-500/30 uppercase tracking-wider text-sm md:text-base"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
};

export default PopUp;